// slide-07.js — 11.2 选型表
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "该用哪一层" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "对照“从最简单开始”选层", C.bgWhite);
    const rows = [
      ["方案", "关键判断", "何时用"],
      ["分类器", "输入 → 类别，贴完标签结束", "只需归类，无需后续动作"],
      ["RAG", "先检索再生成，答案可溯源", "需基于文档精确回答，无需多步动作"],
      ["工作流 / Agentic Workflow", "固定可枚举步骤（部分节点 LLM 决策）", "步骤确定、路径可枚举"],
      ["智能体", "输出之后还要继续“做事”", "需自主决策 + 调工具 + 多步流转且路径不可预写"],
    ];
    table(s, rows, { y: 1.4, colW: [2.4, 3.2, 3.2], rowH: 0.55});
    calloutBar(s, "核心纪律：这可能意味着根本不要构建智能体系统——从最简单的方案开始，仅在必要时增加复杂度。", 4.9, C.bgAmber, C.accentWarm);
  }
};

