// slide-15.js — 7.3.2 Vibe Coding 五原则
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "Vibe Coding 五原则" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Vibe Coding 五原则", C.bgLight);
    const items = [
      { t: "描述意图", d: "说结果，不说怎么实现" },
      { t: "给足上下文", d: "背景 · 技术栈 · 约束显式给" },
      { t: "分步迭代", d: "框架→核心→辅助，每步验证" },
      { t: "逐行审查", d: "读懂每一行，找逻辑/安全/边界" },
      { t: "用 AI 解释", d: "看不懂就让 AI 解释——最快学习路径" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 0.72;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.0, h: 0.6, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.5, y, w: 5.8, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "最关键的是“逐行审查”与“描述意图”——它们保证：是人在驾驭 AI，不是 AI 替人做主。", 4.95, C.bgAmber, C.accentWarm);
  }
};
