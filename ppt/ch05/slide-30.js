// slide-33.js — 5.9 AI 辅助表 + 铁律
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 33, title: "AI 辅助 Discovery" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "AI 辅助：它做什么 · 你验证什么", C.bgLight);
    const rows = [
      ["AI 辅助", "它为你做什么", "你（人）要验证什么"],
      ["访谈 / 纪要结构化", "自动转写 · 去噪 · 抽关键实体与痛点", "结论与真实现场是否一致"],
      ["痛点聚类与初筛", "聚类高频痛点 · 量化出现频率", "高频 ≠ 重要，用业务判断筛"],
      ["尽调资料速读", "RAG 秒答制度文档里的卡点", "找业务骨干核对“黑话”"],
    ];
    table(s, rows, { y: 1.5, colW: [1.9, 3.5, 3.4], rowH: 0.55});
    redBar(s, "铁律：“AI 洞察只是子弹，不是结论”——AI 归纳的结论必须回到现场做人工确认，否则会把 LLM 的“看似合理”误当成客户真话。", 4.55);
    s.addText("实践边界：Ch6 实操一（求判断力）与 Ch16 实操五（求表达力）关键判断不用 AI——训练 FDE 最不可替代的判断力。", {
      x: 0.6, y: 5.2, w: 8.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.2
    });
  }
};

