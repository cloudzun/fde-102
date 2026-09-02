// slide-04.js — 为什么这一步不用 AI
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 4, title: "为什么不用 AI" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "为什么这一步不用 AI？", C.bgLight);
    const rows = [
      ["阶段", "角色", "工具", "训练什么"],
      ["实操一", "Echo", "脑子 + 白板 + 便签", "判断力（前脑）"],
      ["实操二三四", "Delta", "opencode + AI", "施工力（后手）"],
    ];
    table(s, rows, { y: 1.45, colW: [1.4, 1.2, 3.0, 3.2], rowH: 0.55});
    s.addText("Echo 的核心工具从来不是键盘，是脑子和嘴。一上来就靠 AI 追问、拆场景、选型，你训练的是“会用 AI”，掩盖的是 FDE 最不可替代的能力。", {
      x: 0.6, y: 3.4, w: 8.8, h: 0.8, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35
    });
    calloutBar(s, "从脏材料里挖真需求 · 在争论中暴露盲区 · 凭判断力做取舍——这些，AI 替不了你。", 4.5, C.bgAmber, C.accentWarm);
  }
};

