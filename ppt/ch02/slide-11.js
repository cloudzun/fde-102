// slide-11.js — 2.3 分隔页：能力回注飞轮
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 11, title: "能力回注飞轮" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.3", "能力回注飞轮与经验曲线：FDE 为什么“越做越省”", [
      "把死亡螺旋反转为正向飞轮",
      "飞轮真正转的是“价值 + 杠杆”双维度",
      "经验曲线：Cₙ = C₁ × n⁻ᵅ，越做越省的经济学规律",
    ]);
  }
};
