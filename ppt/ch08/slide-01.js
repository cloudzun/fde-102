// slide-01.js — 实操课封面
const { labCover } = require("../common");
module.exports = {
  slideConfig: { type: "labCover", index: 1, title: "诉求智能分类器" },
  createSlide(pres) {
    const s = pres.addSlide();
    labCover(s, "8", "实操二", "诉求智能分类器（场景 A）",
      "角色 Delta · Prototype 阶段 · AI 施工（opencode + gstack）",
      ["写提示词", "跑八环节", "验收演示", "复盘交接"]);
  }
};
