// slide-22.js — 7.4.5 15 分钟最小演练
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 22, title: "15 分钟最小演练" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "最小 gstack 演练：15 分钟可选动手", C.bgWhite);
    const steps = [
      { t: "office-hours", d: "1 分钟\n只问 2 个边界问题" },
      { t: "spec", d: "5 分钟\nNo-Go + 验收口径，3 行以内" },
      { t: "build", d: "7 分钟\n最简实现，逐行读一遍代码" },
      { t: "retro", d: "2 分钟\n一句话复盘" },
    ];
    steps.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.1, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.6, w: 2.1, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.6, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    calloutBar(s, "演练要求：刻意练习“走完一环停下汇报、获许可再流转”；15 分钟到点即停，没走完的写进 retro。环境未就绪可用“纸上推演版”。", 3.75, C.bgAmber, C.accentWarm);
    s.addText("目的：把八环节的节奏“跑一遍手感”——尤其体会“一环一停、拍板点列选项”为什么能防失控。", { x: 0.6, y: 4.5, w: 8.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
