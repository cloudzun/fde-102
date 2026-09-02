// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "FDE 为什么需要 AI：三个产能瓶颈；主动采用 + 驾驭",
      "Delta 视角金字塔：选定后每层要建什么、代价多大",
      "AI Coding 两半：Vibe Coding 驱动 × harness 约束",
      "gstack 八环节 + SPEC 驱动 + 四条工程纪律",
      "15 分钟最小 gstack 演练；动态速查去哪查",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "本章是第 8 / 10 / 12 章三个施工实操共享的方法论底座（图 7-1）。主线：Delta 用 AI Coding 把 Echo 选定的技术层落地。", 5.05, C.bgBlue, C.primary);
  }
};
