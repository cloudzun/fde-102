# PPT 课件编写规范（FDE 认证培训课程）

本目录存放《人工智能工程师（高级）FDE 认证培训》教科书（`textbook/`）的配套授课 PPT。
工程模式参照 `D:\vibecoding\dsh\WorkBuddy-Course\ppt\ch01`（pptxgenjs 一页一文件），配色采用 **FDECore 风格**（靛蓝主色 `#3949ab`，见 `AGENTS.md` §3.4）。

## 目录结构

```
ppt/
├── README.md          # 本规范
├── common.js          # FDE 主题公共库（配色 + 版式助手）——各章共享，勿复制到章内
├── package.json       # 根依赖（仅 pptxgenjs）
├── compile-all.js     # 一键编译全部章节
├── ch01/ … ch16/      # 每章一个目录
│   ├── compile.js     # 编译脚本（声明 TOTAL 页数，循环 require slide-NN）
│   ├── slide-01.js … slide-NN.js
│   └── output/        # 生成的 .pptx（不入库，可随时重编）
└── (00_导读可按需作为 ch00)
```

## 分隔页规则（块级）

- **分隔页只出现在"块"级，且每块正文 ≥3 页**：≤2 页正文的瘦节合并进邻近节（分隔页标题改为覆盖多节的块标题，如 "1.1–1.2 为什么会有 FDE"），孤儿分隔页直接删除（开篇的封面 + 导学不计入块内页数）。
- 实操章（6/8/10/12/16）无 x.y 分隔页，不适用本规则。

## 配色体系（FDECore 风格，改动需全局一致）

| 用途 | 色值 |
|---|---|
| 主色（标题/表头/卡片左色条） | `3949AB` 靛蓝 |
| 深底（封面/分隔页/小结页背景） | `283593` 深靛蓝 |
| 强调（下划线/装饰/次级） | `5C6BC0` 亮靛蓝 |
| 警示（反模式/提醒条） | `A8895F` 琥珀 |
| 正向（结论/绿） | `5B7A5B` 深绿 |
| 红线（纪律/红线） | `D94F4F` 红 |
| 语义浅底 | `F5ECE0` 琥珀 / `E4EFE4` 绿 / `FDECEA` 红 / `DBE4F0` 浅蓝 |

## 每页文件约定

- 文件名：`slide-01.js`（两位补零）；导出 `{ slideConfig, createSlide(pres) }`。
- `slideConfig`：`{ type, index, title }`（供索引/导航用，不影响渲染）。
- 第一行注释写「slide-NN.js — 用途」（与 WorkBuddy 风格一致）。
- 页面背景交替使用 `C.bgLight` / `C.bgWhite`（内容页）；分隔页用 `divider()`；封面用 `cover()`；小结页用 `summarySlide()`。

## 常用助手（common.js）

- `sectionTitle(s, title, bg?)` 内容页标题 + 下划线
- `divider(s, "1.1", "节标题", [要点...])` 分隔页
- `cover(s, "01", "章标题", "副题", { 进度点总数 })` 普通章封面
- `labCover(s, "6", "实操一", "标题", "副题", ["读材料", "挖风险", ...])` **实操章封面**（LAB 水印 + 菱形点阵 + 实验流程条；配色与普通封面一致，仅花纹不同）
- `summarySlide(s, "1", "副题", [小结点...])` 章末小结页
- `card(s, x, y, w, h, stripColor)` 白色阴影卡片
- `table(s, rows, opts)` 靛蓝表头表格（rows 第一行为表头）
- `calloutBar / warnBar / redBar` 底部提示条（信息/警示/红线）
- `bigCallout(s, text, y)` 金句/大结论条
- `numBadge(s, x, y, n)` 数字圆标

## 编译与验证

```bash
npm install            # 在 ppt/ 根目录装一次即可（各章共享 node_modules）
node ch01/compile.js   # 单章编译 → ch01/output/ch01-xxx.pptx
node compile-all.js    # 全部章节编译
```

编译后打开 `output/*.pptx` 人工核对：无溢出（文字裁切）、图形无重叠、配色与排版符合本规范。

## 内容纪律（与 AGENTS.md 一致）

- **PPT 只呈现最核心要点**；教科书下方这类内容**不进入 PPT**（学员读课文即可）：
  - 反模式与红线 / 本章自检清单 / 练习与思考 / 延伸阅读 → 一律不做成 PPT 页；
  - 章节内部的"一句话记住 / 引导语 / 承接解释"等**喊口号式 calloutBar 从简或砍掉**；只保留真正**高亮知识点**的结论条（bigCallout）与事实性标注（来源 / 引用）。
- **实操章节（第 6/8/10/12/16 章）更精简**：封面用 `labCover`（专属花纹）；只展示实操要点——目标与产出 / 任务场景 / 流程总览 / 产出物 / DoD / 红线小结；**逐环节步骤一律不展开**，细节指向《实验手册》`labs/<文件名>`。
- **正文标题不出现章节序号**：一律不带 `x.x` / `x.x.x`（如 `1.2.1 一个激进的决定`）。分隔页左侧的"1.1 / 1.2"节号装饰不受限。
- 内容忠实于 `textbook/` 正文：章节结构、图表、表格、小结。
- 不复制 **FDE-101**（FDECore）原文，只给链接（链接统一为 `见 FDE-101 https://www.cloudzun.com/fde-course/（第 X 章 …）`）。
- 术语统一（FDE / 三重角色 / 四条红线 / 四阶段 / Echo–Delta / 卖人力→卖能力 等，见 AGENTS.md §6）。
- **页面文字从简（硬性要求）**：学员人手一册教科书，PPT 只记**要点与思路**，不承载解释性长句。卡片 / 表格单元格只写关键词或短语（一般 ≤ 10 字）；结论条一行内；详细解释、背景、案例细节一律留给 `textbook/`。宁可多留白，不要把页面写满。
