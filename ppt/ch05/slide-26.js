// slide-26.js — 块分隔页：5.8–5.9 解决方案框架与 AI 辅助
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 26, title: "解决方案框架与 AI 辅助" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.8–5.9", "解决方案框架与 AI 辅助", [
      "Discovery Gate 六要素核验",
      "《解决方案框架》= Delta 的施工图（八字段定验收）",
      "AI 辅助：子弹不是结论",
    ]);
  }
};
