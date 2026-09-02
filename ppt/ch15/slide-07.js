// slide-07.js — 15.2 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "对决策层证明价值" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "15.2", "对决策层证明价值", [
      "价值证据链：从业务痛点走到可量化价值",
      "五类口径分开：年度价值 / 净收益 / TCO / ROI / 回收期",
      "只算 AI 真覆盖 · 给区间 · 标来源 · 锁口径",
    ]);
  }
};
