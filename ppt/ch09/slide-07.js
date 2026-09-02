// slide-07.js — 9.1.4 选型边界
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "选型边界" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "知识问答场景：这层工具该用哪一种", C.bgLight);
    const rows = [
      ["方案", "核心机制", "政策问答为何这样选"],
      ["RAG", "检索片段 → 基于片段生成 + 引用", "✅ 政策常更新，只需重建索引；答案天生带引用"],
      ["超长上下文", "一次塞入全文，靠模型阅读", "❌ 成本高、溯源弱、长文易失焦"],
      ["微调", "让模型“学会”固定领域知识", "❌ 政策一更新就要重训；答案无法溯源"],
      ["纯关键词", "问句字面词匹配文档", "❌ “外地户口能交社保吗”与政策条文有语义鸿沟"],
      ["提示词/一次调用", "直接用模型现有能力", "❌ 政策问答要输出“一段话 + 来源”"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 3.4, 3.7], rowH: 0.55});
    calloutBar(s, "判读口诀：常更新 + 要溯源 → RAG；固定领域 + 有数据算力 → 才微调；精确词 → 关键词；单纯分类 → 一次调用。", 5.0, C.bgBlue, C.primary);
  }
};

