// slide-11.js — 块分隔页：5.3–5.4 干系人地图与痛点诊断
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 11, title: "干系人地图与痛点诊断" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.3–5.4", "干系人地图与痛点诊断", [
      "SOP1 干系人地图：权力 × 兴趣四象限",
      "痛点诊断：访谈 + 跟班观察 + 四类痛点",
      "顺带收集候选业务语义",
    ]);
  }
};
