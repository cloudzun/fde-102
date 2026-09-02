// slide-23.js — 13.5 速查说明
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 23, title: "速查说明" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "动态速查：去哪查", C.bgLight);
    const items = [
      { t: "模型 / 硬件", d: "13.5 速查表\n型号 · 参数 · 许可证\n以官方模型卡为准", fill: C.bgBlue, strip: C.primary },
      { t: "工具 / 价格", d: "7.3.3 / 7.3.4\ncoding agent 工具与订阅\n以产品官网实时显示为准", fill: C.bgAmber, strip: C.accentWarm },
      { t: "harness 生态", d: "7.6 速查\ngstack · OpenSpec · LangGraph\n以官方发布为准", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35 });
    });
    calloutBar(s, "来源纪律：型号、参数与许可证必须以厂商官方页为准，媒体与聚合站只作线索；把“待核验”写进交付物是反模式。", 4.3, C.bgRed, C.red);
  }
};
