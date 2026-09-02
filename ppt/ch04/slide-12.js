// slide-13.js — 4.4 分隔页：Delta 深度
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "Delta 深度" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.4", "Delta 深度：技术执行工程师（FDSE）", [
      "主责施工：把施工图实现为能跑的 Demo 并回注",
      "5 条核心职责",
      "时间分配 70/20/10 + 能力画像",
      "Delta ≠ 只会写码的程序员",
    ]);
  }
};
