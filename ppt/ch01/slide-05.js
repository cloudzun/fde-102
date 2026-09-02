// slide-05.js — 1.1 FDE 是三重矛盾的同时解法（结论页）
const { C, sectionTitle, bigCallout, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 5, title: "FDE 是同时解法" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "FDE 是三重矛盾的“同时解法”，不是三选一");
    bigCallout(s, "既保盈利（平台复用）· 又保效果（现场适配）· 还保合规（就地处理）——三者同时拿。", 1.35, 0.7);
    const items = [
      { t: "保盈利", d: "标准平台复用\n一次投入、长期复用" },
      { t: "保效果", d: "现场定制适配\n贴住复杂痛点" },
      { t: "保合规", d: "就地处理数据\n核心数据不出域" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 2.45;
      s.addShape("rect", { x, y, w: 2.85, h: 1.5, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.15, y: y + 0.15, w: 2.55, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.62, w: 2.55, h: 0.8, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "与驻场外包 / 实施 / 售后的本质区别：解决的是结构性难题，不是“产品没装好”的交付问题。", 4.55, C.bgAmber, C.accentWarm);
  }
};
