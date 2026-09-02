// slide-09.js — 块分隔页：1.3–1.4 FDE 是谁
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "FDE 是谁" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.3–1.4", "FDE 是谁：三层含义与三重角色", [
      "三层含义：岗位 / 团队 / 方法论",
      "三重角色：全栈工程师 × 业务顾问 × 产品经理",
      "方法论是形、工程师是神",
    ]);
  }
};
