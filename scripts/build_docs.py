# -*- coding: utf-8 -*-
"""构建 GitHub Pages 文档站点：把 textbook/ 教材同步到 docs/（含首页与资源）
用法: python scripts/build_docs.py   （本地与 CI 通用）
"""
import glob
import os
import re
import shutil

# 仓库根 = 本文件(scripts/build_docs.py)的上两级目录
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")

# 清空重建 docs/
if os.path.isdir(DOCS):
    shutil.rmtree(DOCS)
os.makedirs(DOCS)
os.makedirs(os.path.join(DOCS, "textbook"))
os.makedirs(os.path.join(DOCS, "assets"))
os.makedirs(os.path.join(DOCS, "javascripts"))


def copy_md(src, dst_dir):
    os.makedirs(dst_dir, exist_ok=True)
    shutil.copy2(src, os.path.join(dst_dir, os.path.basename(src)))


def natural_key(name):
    m = re.search(r"(\d+)", name)
    return int(m.group(1)) if m else 999  # 无数字的文件排最后


# 1. 教材正文（00 导读 + 第01–16章）
for f in sorted(glob.glob(os.path.join(ROOT, "textbook", "*.md")), key=natural_key):
    copy_md(f, os.path.join(DOCS, "textbook"))

# 1.1 教材内嵌资源（textbook/assets/ 子目录，如图片）→ docs/textbook/assets/
tb_assets = os.path.join(ROOT, "textbook", "assets")
if os.path.isdir(tb_assets):
    shutil.copytree(tb_assets, os.path.join(DOCS, "textbook", "assets"))

# 2. 首页
shutil.copy2(os.path.join(ROOT, "index.md"), os.path.join(DOCS, "index.md"))

# 3. 静态资源（自定义样式 / KaTeX 初始化 / 本地 vendor 库）
for src, rel in [
    (os.path.join(ROOT, "assets", "extra.css"), "assets/extra.css"),
    (os.path.join(ROOT, "javascripts", "katex.js"), "javascripts/katex.js"),
]:
    dst = os.path.join(DOCS, rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)

# 3.1 本地 vendor（katex / mermaid，避免 CDN 不可达）
vendor = os.path.join(ROOT, "assets", "vendor")
if os.path.isdir(vendor):
    shutil.copytree(vendor, os.path.join(DOCS, "assets", "vendor"))

print(f"build_docs.py: 已同步 {len(os.listdir(os.path.join(DOCS,'textbook')))} 个教材文件到 docs/")
