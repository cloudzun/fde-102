// slide-18.js — 1.5 卖人力 vs 卖能力（判断标准 + 双读者落点）
const { C, sectionTitle, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 18, title: "卖人力 vs 卖能力" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "卖人力 vs 卖能力", C.bgLight);
    const items = [
      { t: "卖人力", d: "按人天计价，做完就散\n能力不沉淀\n边际成本不下降", fill: C.bgAmber, strip: C.accentWarm },
      { t: "卖能力", d: "经验、通用模块回注平台\n一次投入、长期复用\n越做越省", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 1.85, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.85, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.15, w: 3.9, h: 0.5, fontSize: 17, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.7, w: 3.9, h: 1.0, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    s.addText("两类读者的落点", { x: 0.6, y: 3.55, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    calloutBar(s, "乙方：能力沉淀卖出更高价值、驱动跨客户复用——“卖能力”即平台资产化。", 4.0);
    calloutBar(s, "甲方内部团队：沉淀内部可复用能力中台，一次交付复用到多个分行 / 业务线。", 4.62, C.bgBlue, C.primary);
    s.addText("后续章节中的“客户”＝外部客户或内部被服务的业务部门。", { x: 0.6, y: 5.22, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
