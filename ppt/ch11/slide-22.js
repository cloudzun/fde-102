// slide-22.js — 块分隔页：11.8–11.10 安全 · 边界 · 企业案例
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 22, title: "安全 · 边界 · 企业案例" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "11.8–11.10", "安全 · 边界 · 企业案例", [
      "三层护栏 + 人机回环（HITL）",
      "自动化边界三问——业务决策",
      "银行反洗钱：工作流 + 智能体 + 人机回环",
    ]);
  }
};
