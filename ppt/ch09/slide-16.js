// slide-16.js — 块分隔页：9.6–9.7 向量库与检索增强
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 16, title: "向量库与检索增强" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.6–9.7", "向量库与检索增强", [
      "向量库存三样：向量 · 原文 · 来源元数据",
      "检索增强三段递进：混合 → 重排 → HyDE",
      "中文硬细节：必须显式配置 jieba",
    ]);
  }
};
