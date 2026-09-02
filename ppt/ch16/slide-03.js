// slide-03.js — 演练背景与流程
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 3, title: "流程总览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "演练背景与流程", C.bgWhite);
    s.addText("前几轮走完完整 FDE 交付闭环：Ch6 Echo 拆场景定方案 → Ch8/10/12 Delta 三个单点 MVP → 实操四B（可选）受控 Agent → 第 14 章客户环境与接管证据 → 第 15 章价值与回注判断。本实操不做新功能。", {
      x: 0.6, y: 1.25, w: 8.8, h: 0.75, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    const steps = [
      { t: "1 第一层验收", d: "三个单点 MVP：Echo 需求满足 + Delta 生产可用", fill: C.bgAmber, strip: C.accentWarm },
      { t: "2 第二层验收", d: "实操四B：动态选工具 · 观察 · 追问 · 真暂停", fill: C.bgAmber, strip: C.accentWarm },
      { t: "3 能力回注评审", d: "碎石路 → 铺装公路 · 三块拼图 + Agent + 本体", fill: C.bgGreen, strip: C.green },
      { t: "4 下一阶段决策", d: "Go / Conditional Go / Continue Pilot / No-Go", fill: C.bgCard, strip: C.primary },
      { t: "5 决策层汇报", d: "十页骨架 · 双线话术 · 三句话收尾", fill: C.bgBlue, strip: C.primary },
    ];
    steps.forEach((g, i) => {
      const y = 2.2 + i * 0.62;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.52, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.52, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.85, y, w: 2.6, h: 0.52, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 3.6, y, w: 5.6, h: 0.52, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("line", { x: 5.0, y: y + 0.52, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "AI 使用边界：关键判断由 Echo + Delta 自己完成；AI 只作辅助（整理证据 / 润色 / 红队追问）——“AI 能写一份看起来对的总结，写不出你真正相信的、有判断的总结”。", 5.1, C.bgRed, C.red);
  }
};
