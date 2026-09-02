// slide-09.js — DoD + 红线小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 9, title: "DoD 与小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "8", "实操二 · DoD 与小结", [
      "方案框架 → 启动提示词（7 项信息块）",
      "Agent 跑 gstack 八环节，checkpoint 把关拍板",
      "一次 LLM 调用做分类：从最简单开始",
      "🔺 转人工不算错 = 人能判断、AI 能执行第一落点",
      "可运行系统 + 完整交付件 + 演示级验收",
    ]);
  }
};
