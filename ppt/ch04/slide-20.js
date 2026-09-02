// slide-21.js — 4.5 LLM 能力金字塔 = 双方共用坐标系
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 21, title: "金字塔 = 共用坐标系" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "LLM 能力金字塔：双方共用的坐标系", C.bgLight);
    const items = [
      { t: "Echo · 选层", d: "用业务判据决定\n用提示词 / RAG / Agent（方向）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Delta · 建层", d: "用 AI Coding 把选定的层\n实现出来（落地）", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 1.8, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.8, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 1.0, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    bigCallout(s, "选层与建层，是同一张图的两半——金字塔既是分工的分界线，又是协作的契合点（Echo 说“第 2 层 RAG”，Delta 就知道要建“检索 + 引用”管线）。", 3.75, 0.85);
  }
};
