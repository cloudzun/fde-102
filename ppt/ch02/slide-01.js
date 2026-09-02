// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "为什么需要 FDE" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "2", "为什么需要 FDE",
      "死亡螺旋 · 四种交付模式 · 能力回注飞轮 · 经验曲线 · 财务证据 · 诊断量表", 16);
  }
};
