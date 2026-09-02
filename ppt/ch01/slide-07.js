// slide-08.js — 1.2.1 身边的理解：水电工比喻
const { C, sectionTitle, card, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "水电工比喻" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "身边的理解——“水电工”比喻");
    const items = [
      { t: "装修图纸（设计图）", d: "产品 / 模型买好，方案画好", strip: C.primary },
      { t: "水电工（FDE）", d: "接通线路、让水流到每个龙头——“AI 的水电”接通到客户现场", strip: C.accentWarm },
      { t: "装不完的装修", d: "没有水电工，装修停在图纸上", strip: C.red },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 1.25;
      card(s, 0.6, y, 8.8, 1.15, it.strip);
      s.addText(it.t, { x: 0.85, y: y + 0.1, w: 2.6, h: 0.9, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "top", margin: 0 });
      s.addText(it.d, { x: 3.6, y: y + 0.1, w: 5.6, h: 0.95, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "产品标准化、需求按现场生长——中间的缝隙与接口，就是 FDE 的战场。", 5.12);
  }
};
