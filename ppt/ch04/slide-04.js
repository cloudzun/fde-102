// slide-04.js — 4.1 两段翻译（图 4-1）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "两段翻译" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一次交付经历两段翻译", C.bgWhite);
    const items = [
      { t: "客户业务", d: "脏 · 模糊\n藏风险", fill: C.bgAmber, strip: C.accentWarm },
      { t: "翻译 1", d: "业务 → 技术\n挖真需求 · 定义边界", fill: C.bgBlue, strip: C.primary },
      { t: "翻译 2", d: "技术 → 业务\n做出来 · 讲价值", fill: C.bgGreen, strip: C.green },
      { t: "落地成果", d: "能跑 · 在用\n有价值", fill: "EDEAF6", strip: "907BB5" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.1, h: 1.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.16, w: 2.1, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.62, w: 2.1, h: 0.9, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.62, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addText("每一次在“懂业务的人”和“懂技术的人”之间交接，都是一次损耗——需求必然在流转中失真。", {
      x: 0.6, y: 3.55, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    const extremes = [
      { t: "一人全能", d: "又懂业务又懂技术又能写\n翻译损耗最小——但“超人”太少、不可复制", fill: C.bgGreen, strip: C.green },
      { t: "业务/技术分家", d: "靠开会交接\n翻译损耗最大——需求失真", fill: C.bgRed, strip: C.red },
    ];
    extremes.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 4.15;
      s.addShape("rect", { x, y, w: 4.3, h: 1.15, fill: { color: it.fill } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.15, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.1, w: 1.7, h: 0.95, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: x + 2.0, y: y + 0.1, w: 2.2, h: 0.95, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
  }
};
