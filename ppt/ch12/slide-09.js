// slide-09.js — DoD + 红线小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 9, title: "DoD 与小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "12", "实操四 · DoD 与小结", [
      "LangGraph：State / Node / Conditional Edge 构建固定路由",
      "分清：分类器 / 路由工作流 / 受控 Agent（动态在 Lab4B）",
      "🔺 敏感件零漏判：验证集召回率 100%",
      "工具设计决定准确率：check_department",
      "为什么不需要动态 Agent：从最简单开始",
    ]);
  }
};
