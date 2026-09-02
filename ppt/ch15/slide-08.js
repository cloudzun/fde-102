// slide-08.js — 15.2.1 价值证据链
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 8, title: "价值证据链" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "价值证据链：每一环都要有证据", C.bgLight);
    const steps = [
      { t: "业务痛点", d: "具体 · 有痛感 · 有代价", fill: C.bgAmber, strip: C.accentWarm },
      { t: "当前基线", d: "数字从哪来、口径是什么", fill: C.bgBlue, strip: C.primary },
      { t: "系统能力", d: "覆盖什么 · 兜底什么", fill: C.bgBlue, strip: C.primary },
      { t: "技术指标", d: "盲测 + 运行指标（第 14 章）", fill: C.bgGreen, strip: C.green },
      { t: "业务变化", d: "返工减少 · 时间下降 · 体验改善", fill: C.bgGreen, strip: C.green },
      { t: "可量化价值", d: "五类口径", fill: C.bgCard, strip: C.primary },
    ];
    steps.forEach((g, i) => {
      const y = 1.35 + i * 0.66;
      s.addShape("rect", { x: 1.0, y, w: 8.0, h: 0.56, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.0, y, w: 0.06, h: 0.56, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.25, y, w: 2.4, h: 0.56, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 3.9, y, w: 4.9, h: 0.56, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 5) s.addShape("line", { x: 5.0, y: y + 0.56, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "禁止从“准确率达到某个数字”直接跳到“每年节省多少成本”——缺基线 / 覆盖比例 / 每单节省 / 人工兜底成本任一环，数字就是编的。", 5.15, C.bgRed, C.red);
  }
};
