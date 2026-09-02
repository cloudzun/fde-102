// slide-14.js — 7.3.1 coding agent vs harness
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 14, title: "coding agent 分类" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "coding agent：定义、分类与共性", C.bgWhite);
    const rows = [
      ["概念", "是什么", "例子"],
      ["coding agent（工具类）", "AI 编码工具：厂商绑定或独立开源", "Claude Code / Codex / opencode / Trae / Qoder / WorkBuddy"],
      ["harness（方法/产品类）", "把产出约束进受控工程流程", "gstack（本书演示）/ OpenSpec / LangGraph"],
    ];
    table(s, rows, { y: 1.35, colW: [2.0, 3.0, 3.8], rowH: 0.55});
    s.addText("怎么分类：按归属（厂商绑定 vs 独立开源如 opencode）· 按能力侧重（纯 coding vs 全能型）· 按形态（CLI / IDE 助手 / 平台智能体）。", {
      x: 0.6, y: 3.3, w: 8.8, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "共性：无论哪家，coding agent 都通过“技能 / 插件（Skills / Plugins）”获得增强能力（Anthropic 2025-10 发布 Agent Skills 开放标准）。", 4.35, C.bgBlue, C.primary);
    s.addText("本书默认 opencode：独立开源、模型无关，可接国产 / 本地模型——呼应“数据不出域”红线。", { x: 0.6, y: 5.0, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

