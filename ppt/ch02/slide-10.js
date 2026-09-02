// slide-10.js — 2.2 一句话抓住四种模式本质
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 10, title: "四种模式本质" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一句话抓住四种模式的本质", C.bgWhite);
    const items = [
      { t: "SaaS 卖“标准品”", d: "边际成本趋零\n但触达不了复杂痛点", strip: C.primary },
      { t: "咨询卖“洞见”", d: "交付 PPT 和方法论\n但不落地为可运行系统", strip: C.accentWarm },
      { t: "外包卖“人天”", d: "完全定制\n公司什么资产都沉淀不下来", strip: C.red },
      { t: "FDE+平台卖“能力”", d: "平台底座保复用 + 现场定制保适配\n定制再回注平台", strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.45 + Math.floor(i / 2) * 1.85;
      s.addShape("rect", { x, y, w: 4.3, h: 1.65, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.65, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.95, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
  }
};
