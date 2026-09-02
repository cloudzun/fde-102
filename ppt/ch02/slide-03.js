// slide-03.js — 2.1 分隔页：死亡螺旋
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "死亡螺旋" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.1", "死亡螺旋：传统项目制的结构性困境", [
      "一个自我强化的恶性循环——局部理性、全局自杀",
      "问题不在执行层，而在结构层",
      "一个痛感场景：用规模换收入，却换不来资产",
    ]);
  }
};
