// slide-19.js — 1.5 CAUTION：最危险的是退化成外包
const { C, sectionTitle, bigCallout, warnBar, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 19, title: "FDE 退化风险" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "FDE 最危险的地方：极易“退化”回外包", C.bgWhite);
    s.addText("二者现场几乎肉眼难辨——差异不在“当下做什么”，而在“做完之后往哪走”：", {
      x: 0.6, y: 1.3, w: 8.8, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    const items = [
      { t: "FDE", d: "把通用经验抽象、沉淀回平台", strip: C.green, fill: C.bgGreen },
      { t: "外包", d: "写完就留在客户那里", strip: C.red, fill: C.bgRed },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 2.3;
      s.addShape("rect", { x, y, w: 4.3, h: 1.2, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.2, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.55, w: 3.9, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    warnBar(s, "销售与交付压力最容易让 FDE 退化成外包：连续几个项目平台毫无增长、仍在重复造轮子——那它已不是 FDE，而是昂贵的驻场外包队。", 3.85);
  }
};
