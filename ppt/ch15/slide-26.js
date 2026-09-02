// slide-26.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 26, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "15", "Echo 价值化 · 本章小结", [
      "三个不等于：验收 ≠ 价值 ≠ 采用 ≠ 回注",
      "价值证据链：痛点→基线→能力→指标→价值",
      "五口径分开：年价值 / 净收益 / TCO / ROI / 回收期",
      "组织采用：门槛 / 动机 / 信任 + 分听众表达",
      "业务 Scale：试点 → 采用复核 → 扩大 Gate → 停止",
      "回注联合决策：Echo 判通用 + Delta 证复用",
    ]);
  }
};
