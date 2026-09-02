// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "FDE 是什么" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "1", "FDE 是什么",
      "角色 · 三层含义 · 三重角色 · 卖人力→卖能力 · 五大鸿沟", 16);
  }
};
