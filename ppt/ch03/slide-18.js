// slide-19.js — 3.4.1 金字塔选型表
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 19, title: "金字塔怎么选" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "各层何时用 · 为什么在上一层之下", C.bgWhite);
    const rows = [
      ["层级", "何时用", "为什么在上一层之下"],
      ["提示词 / 分类", "一次调用能解决", "最简单"],
      ["RAG", "精确回答 + 可溯源", "轻量，比微调简单"],
      ["微调", "学领域知识、数据够", "重 · 难更新 · 不可溯源"],
      ["Agent", "自主决策 + 工具 + 多步", "最复杂"],
    ];
    table(s, rows, { y: 1.5, colW: [1.6, 3.6, 3.6], rowH: 0.55});
    calloutBar(s, "可组合使用：RAG + 固定工作流、分类 + RAG 兜底——不是必须逐级攀登（选型矩阵见第 5 章 5.7.2）。", 4.75);
  }
};

