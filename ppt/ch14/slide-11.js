// slide-11.js — 块分隔页：14.5–14.7 生产准入 · 现场变化 · 保障
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 11, title: "生产准入 · 现场变化 · 保障" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "14.5–14.7", "生产准入 · 现场变化 · 保障", [
      "八项生产准入 Gate：判断能否上线交给客户",
      "现场变化分级处理，变更不绕过 Echo",
      "FDE 必须会判断，但不必包办实现",
    ]);
  }
};
