// slide-28.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 28, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "7", "Delta 工作法 · 本章小结", [
      "FDE 为什么需要 AI：三个产能瓶颈 → 赋能 + 驾驭",
      "金字塔：Echo 选层（定方向）· Delta 建层（定落地）",
      "AI Coding 两半：Vibe Coding 驱动 × harness 约束",
      "gstack 八环节 + SPEC 驱动 + 四条工程纪律",
      "15 分钟最小演练：证据独立、可追溯、可复现",
    ]);
  }
};
