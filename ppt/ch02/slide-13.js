// slide-13.js — 2.3.1 飞轮双维度：价值 + 杠杆
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 13, title: "飞轮的双维度" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "飞轮真正“转”的是两个维度同步推进", C.bgWhite);
    const items = [
      { t: "价值维度", d: "结果价值越来越大：客户在用、变好、增购", fill: C.bgGreen, strip: C.green },
      { t: "杠杆维度", d: "交付越来越容易：代码越少、时间越短；组件越通用，下个交付越轻", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 1.8, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.8, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.5, fontSize: 17, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.68, w: 3.9, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    bigCallout(s, "缺一不可：只盯价值 → 退回人力硬扛的外包；只盯杠杆 → 为抽象而抽象。价值与杠杆同步推进，飞轮才算真转。", 3.55, 0.85);
  }
};
