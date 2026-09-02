// slide-08.js — 4.2.1 战位职责 vs 个人能力
const { C, sectionTitle, table, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "战位 ≠ 人格" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "战位职责 vs 个人能力", C.bgLight);
    const rows = [
      ["概念", "回答什么问题", "会变化吗", "例子（西岭）"],
      ["战位职责", "本轮谁对什么负责", "随阶段迁移", "Discovery 战位 = Echo；Prototype = Delta"],
      ["个人能力", "我有什么、缺什么", "长期培养（T 型）", "偏 Echo 的人补工程技术短板"],
    ];
    table(s, rows, { y: 1.45, colW: [1.4, 2.5, 1.7, 3.2], rowH: 0.55});
    bigCallout(s, "角色是“战位”不是“标签”：战位跟着项目阶段走，个人按 T 型培养（横线够宽、竖线够深）——“测出偏 Echo”只说明你更愿意先想清楚，不代表你“不是做事的料”。", 4.0, 0.85);
  }
};

