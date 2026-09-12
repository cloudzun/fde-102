# -*- coding: utf-8 -*-
"""生成《西岭项目复盘汇报-范例.pptx》(自主版式) —— 修正版：P1 副标题间距、P4 面板高度"""
import os
from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn

OUT = r"D:\vibecoding\dsh\FDE实战课程20260830\西岭项目复盘汇报-范例.pptx"
NAVY = RGBColor(0x1B, 0x3A, 0x5C); BLUE = RGBColor(0x2E, 0x5C, 0x8A); GOLD = RGBColor(0xB8, 0x86, 0x0B)
RED = RGBColor(0xA6, 0x2B, 0x1F); INK = RGBColor(0x21, 0x2B, 0x36); GREY = RGBColor(0x6B, 0x7C, 0x8F)
LINE = RGBColor(0xC8, 0xD4, 0xE0); BG = RGBColor(0xF2, 0xF5, 0xF8); WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GREEN = RGBColor(0x2E, 0x6B, 0x3A); GOLDL = RGBColor(0xE8, 0xC3, 0x68)
FONT = "微软雅黑"

prs = Presentation(); prs.slide_width = Cm(33.867); prs.slide_height = Cm(19.05)
BLANK = prs.slide_layouts[6]


def set_font(run, size=16, bold=False, color=INK, font=FONT):
    f = run.font; f.name = font; f.size = Pt(size); f.bold = bold; f.color.rgb = color
    rPr = run._r.get_or_add_rPr()
    for tag in ("a:ea", "a:cs"):
        el = rPr.find(qn(tag))
        if el is None:
            el = rPr.makeelement(qn(tag), {}); rPr.append(el)
        el.set("typeface", font)


def tb(slide, x, y, w, h, lines, align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP, wrap=True):
    box = slide.shapes.add_textbox(Cm(x), Cm(y), Cm(w), Cm(h)); tf = box.text_frame
    tf.word_wrap = wrap; tf.vertical_anchor = anchor
    tf.margin_left = tf.margin_right = Cm(0.1); tf.margin_top = tf.margin_bottom = 0
    for i, item in enumerate(lines):
        text, size, bold, color = item[0], item[1], item[2], item[3]
        sa = item[4] if len(item) > 4 else 4
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = align; p.space_after = Pt(sa)
        r = p.add_run(); r.text = text; set_font(r, size, bold, color)
    return box


def rect(slide, x, y, w, h, fill=None, line=None, line_w=0.75, shape=MSO_SHAPE.RECTANGLE):
    s = slide.shapes.add_shape(shape, Cm(x), Cm(y), Cm(w), Cm(h))
    if fill is None:
        s.fill.background()
    else:
        s.fill.solid(); s.fill.fore_color.rgb = fill
    if line is None:
        s.line.fill.background()
    else:
        s.line.color.rgb = line; s.line.width = Pt(line_w)
    s.shadow.inherit = False
    if s.has_text_frame:
        s.text_frame.text = ""
    return s


def page(no, title):
    slide = prs.slides.add_slide(BLANK)
    rect(slide, 0, 0, 33.867, 1.75, fill=NAVY); rect(slide, 0, 1.75, 33.867, 0.08, fill=GOLD)
    tb(slide, 1.1, 0.30, 22, 1.2, [(f"{no}. {title}", 20, True, WHITE)], anchor=MSO_ANCHOR.MIDDLE)
    tb(slide, 23.0, 0.42, 9.8, 1.0, [("西岭市民服务平台 · 复盘汇报", 11, False, RGBColor(0xC5, 0xD3, 0xE2))],
       align=PP_ALIGN.RIGHT, anchor=MSO_ANCHOR.MIDDLE)
    rect(slide, 1.1, 18.15, 31.6, 0.02, fill=LINE)
    tb(slide, 1.1, 18.3, 22, 0.6, [("FDE 政企 AI 落地实战训练营 · 第 3 组", 10, False, GREY)])
    tb(slide, 28, 18.3, 4.6, 0.6, [(f"— {no} —", 10, False, GREY)], align=PP_ALIGN.RIGHT)
    return slide


# ---------------- P1 封面 ----------------
s = prs.slides.add_slide(BLANK)
rect(s, 0, 0, 33.867, 19.05, fill=WHITE)
rect(s, 0, 0, 33.867, 7.2, fill=NAVY); rect(s, 0, 7.2, 33.867, 0.12, fill=GOLD)
tb(s, 2.4, 1.9, 29, 1.6, [("西岭市民服务平台 AI 智能化项目", 32, True, WHITE)])
tb(s, 2.4, 3.9, 29, 1.2, [("复 盘 汇 报", 40, True, GOLDL)])
tb(s, 2.4, 6.05, 29, 1.2, [("——用 FDE 方法回看一次交付（范例）", 16, False, RGBColor(0xC5, 0xD3, 0xE2))])
rect(s, 2.4, 9.6, 14.5, 5.6, fill=BG); rect(s, 2.4, 9.6, 0.09, 5.6, fill=GOLD)
tb(s, 3.0, 10.1, 13.5, 4.8, [
    ("汇报单位：FDE 训练营 · 第 3 组", 15, False, INK, 10),
    ("汇 报 人：Echo / Delta 各一名", 15, False, INK, 10),
    ("汇报时间：2026 年 8 月", 15, False, INK, 10),
    ("说明：本页为格式范例，项目信息均为虚构教学案例", 11, False, GREY, 4)])
tb(s, 18.4, 10.6, 13, 4, [("汇报三句话", 15, True, NAVY, 8), ("① 做了什么　② 解决了什么　③ 结论是什么", 14, False, INK)])
s.notes_slide.notes_text_frame.text = ("【范例提示】封面只保留项目名（匿名化）、副标题、汇报单位/人/时间。"
                                       "不要目录页、不要项目背景介绍——7 分钟没这个时间。")

# ---------------- P2 结论先行 ----------------
s = page(2, "结论先行：做了什么、解决什么、结论是什么")
rows = [("做了什么", "为市民服务平台交付三项 AI 能力：诉求分类、政策问答、工单分流"),
        ("解决了什么", "坐席错分返工下降、政策答复可溯源（不再“答错背锅”）、简单件不再占用人工"),
        ("我们的结论", "Conditional Go（有条件推进）——方向成立，但须先完成本地化部署与人工接管责任落实")]
y = 2.9
for i, (k, v) in enumerate(rows):
    rect(s, 1.6, y, 30.6, 2.5, fill=(BG if i % 2 == 0 else WHITE))
    rect(s, 1.6, y, 5.2, 2.5, fill=(NAVY if i < 2 else GOLD))
    tb(s, 1.9, y + 0.7, 4.8, 1.2, [(k, 16, True, WHITE if i < 2 else RGBColor(0x3A, 0x2C, 0x05))],
       anchor=MSO_ANCHOR.MIDDLE)
    tb(s, 7.2, y + 0.45, 24.6, 1.7, [(v, 15, i == 2, INK)], anchor=MSO_ANCHOR.MIDDLE)
    y += 2.65
rect(s, 1.6, 11.9, 30.6, 4.9, fill=BG); rect(s, 1.6, 11.9, 0.09, 4.9, fill=RED)
tb(s, 2.2, 12.25, 29.6, 4.3, [
    ("为什么是“有条件推进”，而不是“直接上”", 15, True, NAVY, 8),
    ("① 现有证据只到演示级：真实诉求分布下的准确率、政策覆盖范围均未验证", 14, False, INK, 6),
    ("② 生产条件未落实：本地化部署未做、客户侧人工接管岗位未明确", 14, False, INK, 6),
    ("③ 达成以下先行条件后，建议转为 Go（见第 7 页）", 14, False, INK, 0)])
s.notes_slide.notes_text_frame.text = ("【范例提示】结论必须放第 2 页，用全业务语言（禁用 RAG/Agent/准确率等技术词）。"
                                       "决策四选一：Go / Conditional Go / Continue Pilot / No-Go。")

# ---------------- P3 真实问题 ----------------
s = page(3, "真实问题：客户要的 ≠ 真正的业务问题")
rect(s, 1.6, 2.9, 14.6, 7.4, fill=BG); rect(s, 1.6, 2.9, 14.6, 0.75, fill=BLUE)
tb(s, 2.0, 3.0, 13.8, 0.6, [("客户的表面需求（原话）", 14, True, WHITE)], anchor=MSO_ANCHOR.MIDDLE)
tb(s, 2.1, 3.95, 13.6, 6.1, [
    ("“我们这个平台每天上万个诉求，坐席分派不过来还老分错；", 14, False, INK, 4),
    ("市民问政策坐席也答不准；简单问题和复杂问题混着办效率低。", 14, False, INK, 4),
    ("你们能不能用 AI 把这一整套都智能化了？”", 14, False, INK, 10),
    ("—— 平台中心 · 陈主任", 12, False, GREY, 0)])
rect(s, 17.3, 2.9, 14.9, 7.4, fill=BG); rect(s, 17.3, 2.9, 14.9, 0.75, fill=GOLD)
tb(s, 17.7, 3.0, 14.1, 0.6, [("我们重新识别的真实问题", 14, True, WHITE)], anchor=MSO_ANCHOR.MIDDLE)
tb(s, 17.8, 3.95, 13.9, 6.1, [
    ("不是“上 AI”，而是三个可量化的业务问题：", 14, True, INK, 8),
    ("① 分派不准 → 工单空转、市民重复投诉", 13.5, False, INK, 5),
    ("② 政策答错 → 坐席与平台承担追责风险", 13.5, False, INK, 5),
    ("③ 简单件占人力 → 复杂件得不到足够处理", 13.5, False, INK, 0)])
rect(s, 1.6, 10.9, 30.6, 5.6, fill=WHITE, line=LINE); rect(s, 1.6, 10.9, 0.09, 5.6, fill=NAVY)
tb(s, 2.2, 11.25, 29.6, 5.0, [
    ("复盘发现（当时做得不够的地方）", 15, True, NAVY, 8),
    ("方向找对了：把“整套智能化”拆成三个可施工的子场景，是正确的一步。", 14, False, INK, 6),
    ("但当时把三者当成三个并列 demo 交付，忽略了它们的业务闭环关系——", 14, False, INK, 6),
    ("分类的结果本应驱动分流，政策证据本应支撑答复；三者分头做，客户拿到的仍是三件工具，而不是一条流水线。",
     14, False, RED, 0)])
s.notes_slide.notes_text_frame.text = "【范例提示】左栏客户原话（匿名化），右栏你重新识别的问题。当时找错方向也大方写——这是加分项。"

# ---------------- P4 八环节复盘 ----------------
s = page(4, "FDE 尺子复盘：八个环节，我们缺在哪一环")
stages = [("office-hours", "确认该做", 0), ("spec", "死磕边界", 1), ("autoplan", "决策拍板", 0),
          ("build", "做出来", 0), ("review", "找隐患", 1), ("qa", "测体验", 0),
          ("ship", "收尾", 1), ("retro", "复盘", 0)]
x0, bw, gap = 1.35, 3.62, 0.30
for i, (en, cn, st) in enumerate(stages):
    x = x0 + i * (bw + gap); color = GREEN if st == 0 else GOLD
    rect(s, x, 3.0, bw, 2.25, fill=color)
    tb(s, x + 0.12, 3.15, bw - 0.24, 0.75, [(en, 12.5, True, WHITE)], align=PP_ALIGN.CENTER)
    tb(s, x + 0.12, 3.95, bw - 0.24, 0.6, [(cn, 12.5, False, WHITE)], align=PP_ALIGN.CENTER)
    tb(s, x + 0.12, 4.55, bw - 0.24, 0.6, [(("● 做了" if st == 0 else "● 没做透"), 11, True, WHITE)],
       align=PP_ALIGN.CENTER)
    if i < 7:
        tb(s, x + bw, 3.65, gap, 0.8, [("→", 16, True, GREY)], align=PP_ALIGN.CENTER,
           anchor=MSO_ANCHOR.MIDDLE, wrap=False)
rect(s, 1.35, 5.5, 0.42, 0.42, fill=GREEN); tb(s, 1.85, 5.52, 4, 0.5, [("做了", 11.5, False, INK)], wrap=False)
rect(s, 4.6, 5.5, 0.42, 0.42, fill=GOLD); tb(s, 5.1, 5.52, 6, 0.5, [("做了没做透", 11.5, False, INK)], wrap=False)
rect(s, 1.6, 6.50, 30.6, 3.50, fill=BG); rect(s, 1.6, 6.50, 0.09, 3.50, fill=GOLD)
tb(s, 2.2, 6.80, 29.6, 3.10, [
    ("三个“没做透”的环节", 14.5, True, NAVY, 5),
    ("spec：写了验收口径，但“数据不出域”只作为约束记录，没有上升为硬 Gate", 13.5, False, INK, 4),
    ("review：查了代码隐患，没有审“生产接管责任”——谁在客户侧接、怎么接", 13.5, False, INK, 4),
    ("ship：交付材料齐全，但没有客户侧运维交接物，客户无法独立运营", 13.5, False, INK, 0)])
rect(s, 1.6, 10.20, 30.6, 6.05, fill=WHITE, line=RED); rect(s, 1.6, 10.20, 0.09, 6.05, fill=RED)
tb(s, 2.2, 10.50, 29.6, 5.60, [
    ("最致命的缺口", 15, True, RED, 10),
    ("spec 阶段没有把“生产化条件”写成硬 Gate。", 15, True, INK, 10),
    ("后果：三个 demo 都停在演示级。验收达标 = 演示可行，但客户无法接管、无法独立运营——", 14, False, INK, 10),
    ("这正是 FDE 与“外包交付”的分水岭：交付物不是“能演示的系统”，而是“客户能接住的能力”。", 14, True, NAVY, 12),
    ("如果重来一次：在 spec 就写死——本地化部署完成、人工接管岗位到人、真实脱敏数据复测通过，三项齐备才允许进入 build。",
     14, False, INK, 0)])
s.notes_slide.notes_text_frame.text = "【范例提示】本页是主角，给足时间。八环节横条 + 三色标注，底下写清“最致命缺口 + 后果 + 如果重来一次怎么做”。"

# ---------------- P5 证据与假设 ----------------
s = page(5, "证据与假设：哪些已证实，哪些仍是假设")
rect(s, 1.6, 2.9, 14.6, 12.6, fill=BG); rect(s, 1.6, 2.9, 14.6, 0.8, fill=GREEN)
tb(s, 2.0, 3.0, 13.8, 0.65, [("已有证据（可对外）", 15, True, WHITE)], anchor=MSO_ANCHOR.MIDDLE)
for i, (tag, txt) in enumerate([("已实测", "25 条测试样本上分类准确率达标（演示级）"),
        ("已实测", "政策问答双指标：答案准确率 + 来源可追溯率达标（演示级）"),
        ("已实测", "工单分流三路走通，敏感件零漏判（6 份样本）"),
        ("客户确认", "五类诉求类别清单由客户方确认"), ("客户确认", "部门职责库由信息中心提供")]):
    y = 4.0 + i * 1.95; c = GREEN if tag == "已实测" else BLUE
    tb(s, 2.0, y, 2.3, 0.7, [(tag, 11.5, True, c)]); tb(s, 4.3, y - 0.06, 11.5, 1.5, [(txt, 13, False, INK)])
rect(s, 17.3, 2.9, 14.9, 12.6, fill=BG); rect(s, 17.3, 2.9, 14.9, 0.8, fill=RED)
tb(s, 17.7, 3.0, 14.1, 0.65, [("仍是假设（不得说成已验证）", 15, True, WHITE)], anchor=MSO_ANCHOR.MIDDLE)
for i, (tag, txt) in enumerate([("当前假设", "1.2 万件/日真实诉求分布下，准确率仍达标"),
        ("当前假设", "政策库扩至全量后，来源可追溯率不下降"),
        ("待获取", "本地化部署的模型选型、成本与工期"),
        ("待获取", "坐席实际接受度与使用行为数据"), ("待获取", "客户侧人工接管的岗位与流程")]):
    y = 4.0 + i * 1.95
    tb(s, 17.7, y, 2.9, 0.7, [(tag, 11.5, True, RED)]); tb(s, 20.6, y - 0.06, 11.3, 1.5, [(txt, 13, False, INK)])
rect(s, 1.6, 15.9, 30.6, 1.95, fill=WHITE, line=NAVY)
tb(s, 2.2, 16.1, 29.6, 1.6,
   [("一句话结论：现有证据支持“方向成立”，但不支持“生产可用”；把假设当结论，是复盘最容易翻车的地方。",
     14, True, NAVY)], anchor=MSO_ANCHOR.MIDDLE)
s.notes_slide.notes_text_frame.text = "【范例提示】左=已有证据（标状态），右=仍是假设。主动标注假设是加分；把假设说成实测，质询必被打穿。"

# ---------------- P6 能力回注 ----------------
s = page(6, "能力回注：这个项目里，什么能沉淀成平台能力")
data = [("客户特定实现（不回注）", "抽象后的通用能力", "层次", "可复用场景"),
        ("市民诉求五分类", "类别可配置的文本分类器", "工具", "银行工单 / 医院投诉"),
        ("西岭 5 份政策问答", "带来源的检索问答契约", "工具", "合规问答 / 制度查询"),
        ("工单三档分流规则", "可配置固定路由工作流", "机制", "各类审批分流"),
        ("敏感件转人工规则", "高风险人工兜底机制", "机制", "风控审批 / 安全事件"),
        ("诉求—政策—部门", "政务业务语义模型", "语义", "其他城市政务热线")]
tx, ty, th = 1.6, 3.1, 1.18; col_w = [7.4, 8.6, 2.6, 12.0]
tbl = s.shapes.add_table(len(data), 4, Cm(tx), Cm(ty), Cm(30.6), Cm(th * len(data))).table
for i, w in enumerate(col_w):
    tbl.columns[i].width = Cm(w)
for r in range(len(data)):
    tbl.rows[r].height = Cm(th)
    for c in range(4):
        cell = tbl.cell(r, c); cell.text = data[r][c]
        cell.margin_left = cell.margin_right = Cm(0.25); cell.margin_top = cell.margin_bottom = Cm(0.06)
        cell.vertical_anchor = MSO_ANCHOR.MIDDLE; cell.fill.solid()
        cell.fill.fore_color.rgb = NAVY if r == 0 else (WHITE if r % 2 == 1 else BG)
        p = cell.text_frame.paragraphs[0]; p.alignment = PP_ALIGN.LEFT if c != 2 else PP_ALIGN.CENTER
        run = p.runs[0] if p.runs else p.add_run()
        set_font(run, 13.5, r == 0, WHITE if r == 0 else INK)
rect(s, 1.6, 10.9, 30.6, 5.4, fill=WHITE, line=GOLD); rect(s, 1.6, 10.9, 0.09, 5.4, fill=GOLD)
tb(s, 2.2, 11.25, 29.6, 4.8, [
    ("回注优先级建议", 14.5, True, NAVY, 8),
    ("优先铺“人工兜底机制”与“可配置分类器”——前者三个场景共用、换个客户零改动；后者复用面最广、成本最低。", 14, False, INK, 8),
    ("业务语义模型价值最高但周期最长，建议作为下一阶段平台专项。", 14, False, INK, 8),
    ("判断标准：换个客户，这东西要不要全改？要改=内容（不回注），不用改=机制（回注）。", 13.5, False, GREY, 0)])
s.notes_slide.notes_text_frame.text = "【范例提示】每个候选答清：从哪识别 → 抽象成什么 → 哪一层（工具/机制/语义）→ 第二场景 → 谁维护。至少 1 个。"

# ---------------- P7 下一步决策 ----------------
s = page(7, "下一步决策：有条件推进（Conditional Go）")
rect(s, 1.6, 2.9, 30.6, 2.5, fill=GOLD)
tb(s, 2.2, 3.05, 29.6, 2.2,
   [("决　策：Conditional Go —— 三个场景方向成立，可推进；但须先满足下列三项条件，方可转为 Go", 16, True,
     RGBColor(0x3A, 0x2C, 0x05))], anchor=MSO_ANCHOR.MIDDLE)
data2 = [("要素", "内容"),
         ("依据证据", "演示级验收达标（分类 / RAG 双指标 / 路由零漏判）；业务价值方向经客户确认"),
         ("先行条件", "① 完成本地化部署验证　② 明确人工接管岗位到人　③ 用真实脱敏数据复测"),
         ("剩余风险", "真实分布下准确率未知；客户侧运维能力未确认；数据出域方案待信息中心确认"),
         ("补齐责任人", "信息中心 李工（技术接管）/ 平台中心 陈主任（业务验收）/ 承建方（部署实施）"),
         ("下一 Gate", "本地化部署 + 真实数据复测通过后，组织一次评审，转 Go 或调整范围")]
ty2, th2 = 5.7, 1.42
tbl2 = s.shapes.add_table(len(data2), 2, Cm(1.6), Cm(ty2), Cm(30.6), Cm(th2 * len(data2))).table
tbl2.columns[0].width = Cm(5.0); tbl2.columns[1].width = Cm(25.6)
for r in range(len(data2)):
    tbl2.rows[r].height = Cm(th2)
    for c in range(2):
        cell = tbl2.cell(r, c); cell.text = data2[r][c]
        cell.margin_left = cell.margin_right = Cm(0.28); cell.margin_top = cell.margin_bottom = Cm(0.06)
        cell.vertical_anchor = MSO_ANCHOR.MIDDLE; cell.fill.solid()
        cell.fill.fore_color.rgb = NAVY if r == 0 else (BG if c == 0 else WHITE)
        p = cell.text_frame.paragraphs[0]; run = p.runs[0] if p.runs else p.add_run()
        set_font(run, 13.5, r == 0 or c == 0, WHITE if r == 0 else (NAVY if c == 0 else INK))
rect(s, 1.6, 14.7, 30.6, 2.8, fill=BG); rect(s, 1.6, 14.7, 0.09, 2.8, fill=RED)
tb(s, 2.2, 15.0, 29.6, 2.3, [
    ("什么证据出现会让我们改判？", 14, True, RED, 6),
    ("→ 真实数据复测准确率显著低于演示水平，或本地化部署成本超出预算，则改判为 Continue Pilot 或 No-Go。",
     13.5, False, INK, 0)])
s.notes_slide.notes_text_frame.text = "【范例提示】决策页必须有四要素：依据证据 / 剩余风险 / 补齐责任人 / 下一 Gate。并补一句“什么证据会改判”。"

# ---------------- P8 请求支持 ----------------
s = page(8, "需要决策层支持的事项")
rect(s, 1.6, 3.2, 30.6, 1.5, fill=NAVY)
tb(s, 2.2, 3.35, 29.6, 1.2, [("请求决策层批准以下三项，作为转入下一阶段的前置条件", 15, True, WHITE)],
   anchor=MSO_ANCHOR.MIDDLE)
for i, (num, title, desc) in enumerate([
        ("一", "本地化部署资源", "服务器与部署实施人力，用于验证数据不出域的硬约束"),
        ("二", "真实脱敏数据使用授权", "经信息中心与市数据局批准，用于生产分布下的复测"),
        ("三", "人工接管岗位落实", "明确客户侧接管岗位与流程，确保敏感件有人接")]):
    y = 5.3 + i * 2.85
    rect(s, 1.6, y, 30.6, 2.6, fill=BG); rect(s, 1.6, y, 1.5, 2.6, fill=GOLD)
    tb(s, 1.6, y + 0.75, 1.5, 1.1, [(num, 16, True, RGBColor(0x3A, 0x2C, 0x05))],
       align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE)
    tb(s, 3.5, y + 0.35, 28.2, 1.9, [(title, 15, True, NAVY, 4), (desc, 13, False, INK, 0)])
rect(s, 1.6, 14.3, 30.6, 3.2, fill=WHITE, line=NAVY)
tb(s, 2.2, 14.6, 29.6, 2.7, [
    ("我们的承诺", 14.5, True, NAVY, 6),
    ("在获得上述支持后 N 周内，提交本地化部署验证报告与真实数据复测结果；", 14, False, INK, 4),
    ("所有结论仅覆盖取得的证据范围，不夸大交付成果。", 14, False, INK, 0)])
s.notes_slide.notes_text_frame.text = "【范例提示】收尾只讲“要什么支持”，20 秒讲完。不要在此补内容、不要加致谢页。"

prs.save(OUT)
print("已重新生成:", OUT, "| 页数:", len(prs.slides._sldIdLst))
