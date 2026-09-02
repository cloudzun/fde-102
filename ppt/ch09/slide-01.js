// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "RAG 方法 · 答案可追溯" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "9", "RAG 方法 · 答案可追溯",
      "检索增强 · 核心链路 · 选型边界 · 双指标验收 · 最小预实验", 16);
  }
};
