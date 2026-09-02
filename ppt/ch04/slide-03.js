// slide-03.js — 块分隔页：4.1–4.2 为什么双角色与三角色
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "为什么双角色与三角色" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.1–4.2", "为什么双角色与三角色", [
      "翻译损耗：交接越多，损耗越大",
      "FDE 解法：分工解耦 × 战斗力整合",
      "三角色：Delta 尖刀 · Echo 政委 · Engineering 保阵地",
    ]);
  }
};
