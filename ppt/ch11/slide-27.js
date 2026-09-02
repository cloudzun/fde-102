// slide-32.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 32, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "11", "Agent 方法 · 本章小结", [
      "智能体 = 自主性 + 决策循环（与 Workflow 三分）",
      "编排工具：Dify / Coze / LangGraph 怎么选",
      "六种模式二维判断：预定义/动态 × 单轮/闭环",
      "Router 三路分流；敏感件宁多升级不可漏",
      "工程底座：LangGraph + MCP + 工具五件套 + 三层护栏",
      "自动化边界三问：模式固定？出错代价？能否兜底？",
    ]);
  }
};
