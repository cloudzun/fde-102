// slide-04.js — 5.1 核心原则：为什么不是先动手
const { C, sectionTitle, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 4, title: "为什么不是先动手" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Echo 进驻客户后的第一原则", C.bgWhite);
    bigCallout(s, "Discovery 初期不以功能开发为目标——先听客户说话，成为内行人。", 1.5, 0.75);
    s.addText("为什么不是先动手？", { x: 0.6, y: 2.6, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const items = [
      { t: "People 是根", d: "客户到底要解决什么、谁在用" },
      { t: "Process 是脉", d: "业务怎么运转、怎么被重塑" },
      { t: "Technology 是器", d: "数据行不行、技术怎么做——放最后" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 3.1;
      s.addShape("rect", { x, y, w: 2.85, h: 1.1, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.15, y: y + 0.1, w: 2.55, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.52, w: 2.55, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "顺序不可颠倒：一上来就做功能，会在没搞清“客户要解决什么、谁在用、数据行不行”之前，把方案做在错误的地基上。", 4.6, C.bgAmber, C.accentWarm);
  }
};
