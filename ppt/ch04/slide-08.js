// slide-09.js — 4.3 分隔页：Echo 深度
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "Echo 深度" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.3", "Echo 深度：业务策略师（Deployment Strategist）", [
      "主责判断，不直接负责工程实现",
      "5 条核心职责",
      "时间分配 70/20/10 + 能力画像",
      "Echo ≠ 客户经理 / 售前",
    ]);
  }
};
