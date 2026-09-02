// slide-18.js — 块分隔页：1.6–1.7 AI 时代的 FDE
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 18, title: "AI 时代的 FDE" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.6–1.7", "AI 时代的 FDE：五大鸿沟与经典案例", [
      "五大鸿沟：模型≠产品 · 合规 · 微调工程 · 集成 · 搁板",
      "案例：零件被卡住 · Airbus→Skywise",
      "AI 没有让 FDE 过时，反而放大判断力的稀缺价值",
    ]);
  }
};
