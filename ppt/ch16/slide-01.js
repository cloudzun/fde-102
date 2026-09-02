// slide-01.js — 实操课封面
const { labCover } = require("../common");
module.exports = {
  slideConfig: { type: "labCover", index: 1, title: "综合证据评审与决策层汇报" },
  createSlide(pres) {
    const s = pres.addSlide();
    labCover(s, "16", "实操五", "综合证据评审与决策层汇报",
      "角色全团队（Echo + Delta）· Scale 收口 · 评审 + 汇报",
      ["双层验收", "能力回注", "阶段决策", "客户汇报", "讲演收尾"]);
  }
};
