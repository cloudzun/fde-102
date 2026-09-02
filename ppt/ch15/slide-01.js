// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Echo 价值化 · 业务 Scale" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "15", "Echo 价值化 · 业务 Scale：价值落地、组织采纳与能力回注",
      "三个不等于 · 价值证据链 · 门槛动机信任 · 试点推广 Gate · 本体回注", 16);
  }
};
