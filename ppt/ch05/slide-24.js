// slide-26.js — 5.7.2 技术决策矩阵
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 26, title: "技术决策矩阵" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "技术决策矩阵（与金字塔互补）", C.bgWhite);
    const rows = [
      ["判断问题（按顺序逐条问）", "是 →", "否 →"],
      ["需要外部领域知识（文档 / 知识库）？", "RAG", "下一问"],
      ["答案需要来源引用、可溯源？", "RAG（必需）", "下一问"],
      ["需稳定改变模型行为（风格/格式/协议）？", "微调（数据够时）", "下一问"],
      ["需要调用工具、多步决策？", "Agent / Workflow", "下一问"],
      ["流程路径可枚举（预编排）？", "固定工作流", "动态 Agent"],
      ["需人工审批 / 兜底？", "加 HITL 节点", "全自动"],
    ];
    table(s, rows, { y: 1.3, colW: [4.2, 2.3, 2.3], rowH: 0.48 });
    calloutBar(s, "读法：六问逐条判断，多个“是”可叠加组合（典型：RAG + 固定工作流 + HITL 人工兜底）。口诀：从最简单开始，该上复杂时也要果断。", 4.85, C.bgBlue, C.primary);
  }
};
