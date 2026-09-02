// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Delta 工作法 · AI Coding 与工程纪律" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "7", "Delta 工作法 · AI Coding 与工程纪律",
      "产能瓶颈 · 建层金字塔 · AI Coding 两半 · gstack 八环节 · 四条纪律", 16);
  }
};
