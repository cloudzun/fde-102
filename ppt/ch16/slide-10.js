// slide-10.js — DoD + 四条红线收官
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 10, title: "DoD 与收官" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "16", "实操五 · DoD 与收官", [
      "🔺 四条红线全部闭环：不出域 / 可追溯 / 零漏判 / 人能判断",
      "双层验收：MVP 双视角 + 实操四B 受控 Agent",
      "能力回注四步法：碎石路 → 铺装公路",
      "每场景决策：Go / Conditional Go / Continue Pilot / No-Go",
      "双线汇报：ROI 框架 + 合规交代（十页）",
      "会做 ≠ 会说 ≠ 会决策：交付 = 基于证据的判断",
    ]);
  }
};
