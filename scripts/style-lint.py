#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""style-lint.py —— 《FDE 实战》教材格式与体例一致性检查（零依赖，只用标准库）

为什么要它：本书的体例纪律（AGENTS.md 第 3 节）有十几条，靠人眼逐条核对既慢又漏
——历史上"章首重复字段""裸引用块该用 Alert""并列分隔符两种写法""深色节点漏形状"
都是这样漏掉的。本脚本把可判定的部分全部机器化。

用法：
    python scripts/style-lint.py            # 只报 ERROR / WARN 摘要，有 ERROR 时退出码 1
    python scripts/style-lint.py -v         # 逐条列出明细

说明：本脚本只做**可判定**的体例检查，不评判文风（如"口水句"需人工判断）。
mermaid 渲染层面的检查另见 scripts/mermaid-dark-node-check.js。
"""
from __future__ import print_function

import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEXTBOOK = os.path.join(ROOT, 'textbook')
VERBOSE = '-v' in sys.argv or '--verbose' in sys.argv

TAIL_SECTIONS = ['反模式与红线', '本章小结', '练习与思考', '延伸阅读']
ALERT_LABELS = r'(注意|提示|警告|风险|红线|纪律|反模式|前提|重要|口径)'
UNIT_RIGHT = ('月', '日', '年', '小时', '分钟', '次', '人', '台', '卡', '天',
              '周', '季', '千字', '百万', '万', '亿', '元', 's', 'kWh', 'tokens')

ERRORS = []
WARNS = []


def err(f, line, msg):
    ERRORS.append((f, line, msg))


def warn(f, line, msg):
    WARNS.append((f, line, msg))


def strip_noise(t):
    """去围栏代码块 / 行内代码 / URL，得到"散文层"用于标点检查"""
    t = re.sub(r'(?ms)^```.*?^```', '\n', t)
    t = re.sub(r'`[^`\n]*`', ' ', t)
    t = re.sub(r'https?://\S+', ' ', t)
    return t


def main():
    if not os.path.isdir(TEXTBOOK):
        print('[FATAL] 找不到 %s' % TEXTBOOK)
        return 2
    files = sorted(f for f in os.listdir(TEXTBOOK) if f.startswith('第') and f.endswith('.md'))
    if not files:
        print('[FATAL] textbook/ 下没有章节文件')
        return 2

    for f in files:
        path = os.path.join(TEXTBOOK, f)
        raw = io.open(path, encoding='utf-8').read()
        lines = raw.split('\n')
        prose = strip_noise(raw)
        chm = re.search(r'第(\d+)章', f)
        ch = int(chm.group(1)) if chm else 0

        # 1. 固定尾部四节
        heads = re.findall(r'(?m)^##\s+(.+?)\s*$', raw)
        for s in TAIL_SECTIONS:
            if not any(h.startswith(s) for h in heads):
                err(f, 0, '缺固定尾部节「## %s」' % s)
        # 尾部节顺序
        order = [next((i for i, h in enumerate(heads) if h.startswith(s)), -1) for s in TAIL_SECTIONS]
        if all(o >= 0 for o in order) and order != sorted(order):
            err(f, 0, '固定尾部节顺序不对：%s' % order)

        # 2. ## N.x 编号连续
        nums = [int(m) for m in re.findall(r'(?m)^##\s+%d\.(\d+)\s' % ch, raw)]
        if nums and nums != list(range(1, len(nums) + 1)):
            err(f, 0, '小节编号不连续：%s' % nums)

        # 3. 裸代码块
        for i, l in enumerate(lines, 1):
            if re.match(r'^```\s*$', l):
                # 判断是开栏还是闭栏
                before = sum(1 for x in lines[:i - 1] if re.match(r'^```', x))
                if before % 2 == 0:
                    err(f, i, '裸代码块（未标语言）')

        # 4. 连续 Alert 标记
        for i in range(len(lines) - 1):
            if re.match(r'^> \[!\w+\]\s*$', lines[i]) and re.match(r'^> \[!\w+\]', lines[i + 1]):
                err(f, i + 1, '连续 Alert 标记（渲染为空框）')

        # 5. 语义标签式裸引用块（应升格为 Alert 标题）
        for i, l in enumerate(lines, 1):
            if re.match(r'^> \*\*' + ALERT_LABELS + r'[^*]{0,10}：\*\*', l):
                prev = lines[i - 2] if i >= 2 else ''
                if not re.match(r'^> \[!\w+\]', prev):
                    warn(f, i, '语义标签式裸引用块，宜改为 `> [!NOTE] 标签`：%s' % l[:34])

        # 6. 混合链（含带空格 / 又有紧凑 /）
        TOKEN = r'[\u4e00-\u9fffA-Za-z0-9][\u4e00-\u9fffA-Za-z0-9.+#%\-]*'
        for m in re.finditer(r'(?<![\w/])(' + TOKEN + r'(?:\s*/\s*' + TOKEN + r')+)(?![\w/])', prose):
            c = m.group(1)
            if ' / ' in c and re.search(r'\S/\S', c):
                items = re.split(r'\s*/\s*', c)
                # 单位型的"档位分隔"属正常（如 699元/月 / 速通）
                if any(it in UNIT_RIGHT for it in items):
                    continue
                # 复合词白名单（AGENTS.md 3.6 允许紧凑）
                if c.startswith('本地/微调'):
                    continue
                warn(f, 0, '混合链（同一串里 / 与 " / " 并存）：%s' % c)

        # 7. 单位被空格拆坏（如 699元 / 月）——只有真的带了空格才算错
        for m in re.finditer(r'\d+\s*元\s*/\s*月', prose):
            if ' / ' in m.group(0):
                err(f, 0, '价格单位被拆开：%s' % m.group(0))
        for m in re.finditer(r'tokens?\s*/\s*(日|次|s)\b', prose):
            if ' / ' in m.group(0):
                err(f, 0, '单位被拆开：%s' % m.group(0))

        # 8. 图号连续 + 图题
        caps = re.findall(r'(?m)^\*图\s*%d-(\d+)' % ch, raw)
        capn = [int(x) for x in caps]
        if capn and capn != list(range(1, len(capn) + 1)):
            err(f, 0, '图号不连续：%s' % capn)
        for m in re.finditer(r'(?m)^```mermaid', raw):
            pass  # 图题检查交给渲染层回归脚本

        # 9. 「下一章」覆盖（末章豁免）
        if ch != 16 and '下一章' not in raw:
            warn(f, 0, '缺「下一章」导航（应写在「延伸阅读」最后一条）')

        # 10. 章首：定位字段 + 学习目标
        head_zone = raw[:raw.find('\n## ') if '\n## ' in raw else len(raw)]
        if '**本章定位：**' not in head_zone and not f.startswith('00'):
            err(f, 0, '章首缺「**本章定位：**」')
        if '**本章学习目标：**' not in head_zone:
            err(f, 0, '章首缺「**本章学习目标：**」')
        if '## 本章导学' in raw:
            err(f, 0, '仍存在已废弃的「## 本章导学」容器')
        for bad in ('**本章产出：**', '**前置知识：**', '**章节地图：**'):
            if bad in raw:
                err(f, 0, '仍存在已废弃字段 %s' % bad)

        # 11. 文件尾
        if not raw.endswith('\n'):
            err(f, len(lines), '文件末尾缺换行')
        elif raw.endswith('\n\n'):
            err(f, len(lines), '文件末尾多余空行')

        # 12. 过程性标注（§8）
        for i, l in enumerate(lines, 1):
            if re.search(r'信息截至|截至 20\d\d|教材提炼|待核验|教学假设', l):
                warn(f, i, '过程性标注（§8 禁）：%s' % l.strip()[:40])

        # 13. 标题中英无空格
        for i, l in enumerate(lines, 1):
            m = re.match(r'^#{2,4}\s+(.*)$', l)
            if m and re.search(r'[\u4e00-\u9fff][A-Za-z]|[A-Za-z][\u4e00-\u9fff]', m.group(1)):
                if not re.search(r'实操[一二三四五]B', m.group(1)):
                    warn(f, i, '标题中英文之间缺空格：%s' % m.group(1)[:40])

        # 14. `- [ ]` 列表前必须有空行
        for i, l in enumerate(lines, 1):
            if re.match(r'^- \[ \]', l):
                prev = lines[i - 2] if i >= 2 else ''
                if prev.strip() and not re.match(r'^[-*]|\d+\.|^\s', prev):
                    err(f, i, '复选框列表前缺空行（会渲染成纯文本）')

        # 15. 嵌套子列表缩进 2 空格（应 4）
        for i, l in enumerate(lines, 1):
            if re.match(r'^  \d+\.\s', l) and not re.match(r'^    ', l):
                warn(f, i, '疑似嵌套子列表只缩进 2 空格（应 4 空格）')

    # ---- 报告 ----
    def show(title, items):
        print('=' * 72)
        print('%s：%d' % (title, len(items)))
        print('=' * 72)
        if not items:
            return
        shown = items if VERBOSE else items[:25]
        for f, line, msg in shown:
            print('  %-42s L%-5s %s' % (f[:42], line or '-', msg))
        if len(items) > len(shown):
            print('  … 另有 %d 条（用 -v 看全部）' % (len(items) - len(shown)))

    show('ERROR（必须修）', ERRORS)
    print()
    show('WARN（建议修）', WARNS)
    print()
    if ERRORS:
        print('✗ 体例检查未通过：%d 个 ERROR' % len(ERRORS))
        return 1
    print('✓ 体例检查通过（0 ERROR，%d WARN）' % len(WARNS))
    return 0


if __name__ == '__main__':
    sys.exit(main())
