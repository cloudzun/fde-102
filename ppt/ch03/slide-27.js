// slide-29.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 29, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "3", "FDE 交付方法论 · 本章小结", [
      "PPT 三维度：People 是根、Process 是脉、Technology 是器",
      "People 两侧：客户侧干系人 + 己方侧 Echo / Delta / Engineering",
      "四阶段：Discovery → Prototype → Build → Scale",
      "Stage Gate 六要素 + 止损规则把关",
      "LLM 金字塔从最简单开始；能力回注四步法",
      "五实操总分总：Echo 定方向 → Delta 施工 → 全团队收口",
    ]);
  }
};
