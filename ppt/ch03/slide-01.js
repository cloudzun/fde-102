// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "FDE 交付方法论" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "3", "FDE 交付方法论：四阶段与能力回注",
      "PPT 三要素 · Echo/Delta · 四阶段 · Stage Gate · 能力回注 · 总分总", 16);
  }
};
