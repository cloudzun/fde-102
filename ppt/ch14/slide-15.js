// slide-15.js — 块分隔页：14.8–14.10 自运营接管 · 回注 · 贯穿实操
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 15, title: "自运营接管 · 回注 · 贯穿实操" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "14.8–14.10", "自运营接管 · 回注 · 贯穿实操", [
      "六类 owner · 接管演练 · 撤出九条件",
      "工程能力 + 业务语义两类回注",
      "七环节贯穿实操：Demo 接入模拟客户环境",
    ]);
  }
};
