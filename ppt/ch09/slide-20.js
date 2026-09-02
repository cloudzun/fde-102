// slide-20.js — 块分隔页：9.8–9.10 生成 · 评估 · 预实验
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 20, title: "生成 · 评估 · 预实验" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.8–9.10", "生成 · 评估 · 最小预实验", [
      "生成 + 引用：检索不到不能编",
      "双指标验收 + 评估落地三件事",
      "20–30 分钟最小 RAG 预实验",
    ]);
  }
};
