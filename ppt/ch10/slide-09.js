// slide-09.js — DoD + 红线小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 9, title: "DoD 与小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "10", "实操三 · DoD 与小结", [
      "复用施工工作流：启动提示词 → gstack → checkpoint",
      "施工 RAG：解析 → 分块 → 向量化 → 检索 → 生成+引用",
      "🔺 答案可追溯落地为双指标验收",
      "RAG 决策点：按条切块 / top-K / 拒答兜底 / 抽查",
      "检索封装 search_policy，供后续复用",
    ]);
  }
};
