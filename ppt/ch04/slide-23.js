// slide-25.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 25, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "4", "Echo 与 Delta · 本章小结", [
      "双角色源于翻译损耗：业务 ↔ 技术交接丢信息",
      "作战单元三角色：Echo / Delta / Engineering",
      "战位 ≠ 人格：战位随阶段迁移，能力按 T 型培养",
      "Echo 出施工图 · Delta 做 Demo 并回注",
      "人能判断、AI 能执行：判断归人、执行归 AI",
      "四阶段主导：Echo → 双角色 → Delta → 全团队",
    ]);
  }
};
