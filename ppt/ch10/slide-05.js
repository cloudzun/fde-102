// slide-05.js — 环节 1 写启动提示词
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "环节 1 启动提示词" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 1 · 写启动提示词（场景 B 的 7 项信息）", C.bgWhite);
    const rows = [
      ["#", "信息块", "本场景内容"],
      ["1", "背景与角色", "FDE 团队 Delta，施工场景 B：政务政策问答"],
      ["2", "要做什么", "基于政策文件回答市民咨询"],
      ["3", "输入输出", "问题 → 回答 + 来源引用（哪份文件、哪一条）"],
      ["4", "技术选型（含理由）", "已选 RAG，不用微调 / 纯关键词"],
      ["5", "数据现状", "Lab3-policy-docs/（5 份混合格式）+ Q&A 验证集；政策会更新需重建索引"],
      ["6", "验收口径", "答案准确率 ≥80% + 来源可追溯率 ≥90%"],
      ["7", "约束与边界", "答案必须带来源，不能凭模型记忆瞎答"],
    ];
    table(s, rows, { y: 1.3, colW: [0.5, 1.9, 6.4], rowH: 0.46 });
    calloutBar(s, "最易漏两处：①数据现状写“政策会更新，需重建索引”；②验收口径写“来源可追溯率”。验证集问题要拆细（稳定就业→第15条、灵活就业→第16条），单条款锚定才稳。", 5.0, C.bgAmber, C.accentWarm);
  }
};
