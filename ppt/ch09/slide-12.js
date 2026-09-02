// slide-12.js — 块分隔页：9.4–9.5 分块与向量化
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 12, title: "分块与向量化" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.4–9.5", "分块与向量化", [
      "分块：自包含 · 不过大不过小",
      "参数起点：256–1024 token + 10–20% 重叠",
      "Embedding：语义相近的文字距离更近",
    ]);
  }
};
