// slide-01.js — 实操课封面
const { labCover } = require("../common");
module.exports = {
  slideConfig: { type: "labCover", index: 1, title: "工单智能分级路由工作流" },
  createSlide(pres) {
    const s = pres.addSlide();
    labCover(s, "12", "实操四", "工单智能分级路由工作流（场景 C）",
      "角色 Delta · Prototype · AI 施工（opencode + gstack + LangGraph）",
      ["写提示词", "跑八环节", "三路验证", "双指标验收", "复盘交接"]);
  }
};
