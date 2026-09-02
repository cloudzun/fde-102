// slide-08.js — 11.3 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 8, title: "工作流与六种模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "11.3", "工作流、编排工具与六种设计模式", [
      "工作流：下一步写死；智能体：下一步自主决定",
      "六种模式 + 二维判断（预定义/动态 × 单轮/闭环）",
      "三分口径：Workflow / Agentic Workflow / Agent",
    ]);
  }
};
