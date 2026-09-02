// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "从公网到本地" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "13", "从公网到本地：私有化部署与模型微调",
      "选型三问 · 部署形态 · 算力路线 · 微调最后一公里 · 切换适配", 16);
  }
};
