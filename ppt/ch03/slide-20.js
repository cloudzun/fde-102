// slide-20.js — 块分隔页：3.5–3.6 能力回注与实验设计
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 20, title: "能力回注与实验设计" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.5–3.6", "能力回注与实验设计", [
      "四步法：识别 → 抽象 → 集成 → 验证",
      "碎石路 → 铺装公路 · 两条作战纪律",
      "五实操总分总：Echo 定方向 → Delta 逐级施工 → 全团队收口",
    ]);
  }
};
