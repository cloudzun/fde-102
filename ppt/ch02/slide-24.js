// slide-24.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 24, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "2", "为什么需要 FDE · 本章小结", [
      "死亡螺旋：结构性、自我强化——只能从结构上切断",
      "四模式对比：SaaS / 咨询 / 外包 / FDE（既要适配又要复用）",
      "越做越省：能力回注飞轮 + 经验曲线（Cₙ = C₁ × n⁻ᵅ）",
      "Palantir 佐证：毛利率升、净利率转正、NRR>100%",
      "8 条诊断量表鉴别真伪 FDE",
    ]);
  }
};
