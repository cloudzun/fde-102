// slide-09.js — 红线落地 + 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 9, title: "红线与小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "6", "实操一 · 红线落地与小结", [
      "Echo 角色：把一句模糊需求拆成可落地子场景",
      "三脚手架：挖风险 / 理干系人 / 选型",
      "挖出四类风险：数据 / 业务 / 合规 / ROI",
      "产出《解决方案框架》= 后续施工任务书",
      "≤150 字业务汇报；关键判断不用 AI",
    ]);
  }
};
