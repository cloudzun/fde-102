// slide-09.js — 3.3 分隔页：Process 维度
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 9, title: "Process 维度" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.3", "Process 维度：四阶段交付与 Stage Gate", [
      "四阶段：发现 → 原型 → 构建 → 扩展",
      "每阶段由 Stage Gate（门禁检查）把关",
      "以西岭市民服务平台为例走一遍",
    ]);
  }
};
