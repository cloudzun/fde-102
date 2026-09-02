// slide-07.js — 2.2 分隔页：四种交付模式
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "四种交付模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.2", "四种交付模式全景对比", [
      "标准 SaaS / 传统咨询 / 项目外包 / FDE + 平台",
      "最反直觉的一行：适配度 vs 复用率",
      "一句话抓住四种模式的本质",
    ]);
  }
};
