// slide-07.js — 7.1.5 角色演变
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "角色演变" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "角色演变：写代码 → 编排 AI + 把关 AI", C.bgLight);
    const rows = [
      ["能力", "谁负责", "内容"],
      ["判断（前脑）", "人", "挖真需求 · 做取舍 · 定验收口径 · 审查 AI 产出 · 拍板"],
      ["执行（后手）", "AI + 人在 checkpoint 把关", "AI 跑流程 · 写样板代码 · 做重复任务"],
    ];
    table(s, rows, { y: 1.45, colW: [1.6, 2.5, 4.7], rowH: 0.55});
    s.addText("对 Delta：既能“获得 AI 赋能”（会用 coding agent），也能“驾驭 AI”（懂选型、防翻车、守质量闭环）。对 Echo：同样要会用 AI 提效、审 AI 洞察。", {
      x: 0.6, y: 3.4, w: 8.8, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "接力叙事：Echo 定方向（选层，第 5/6 章）→ Delta 定落地（建层，本章起）——金字塔是分界线也是契合点。", 4.6, C.bgBlue, C.primary);
  }
};

