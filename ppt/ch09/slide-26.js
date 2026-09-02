// slide-31.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 31, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "9", "RAG 方法 · 本章小结", [
      "RAG 思想：检索外部资料补足模型语料",
      "链路：解析→分块→向量化→检索→生成+引用",
      "选型：RAG / 超长上下文 / 微调 / 关键词 / 提示词",
      "参数判读：分块 512–1024 / top-K / 增强逐段加",
      "双指标：答案准确率 + 来源可追溯率",
      "评估：分开评估 + 固定配置 + 库外问题拒答",
    ]);
  }
};
