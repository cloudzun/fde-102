// slide-04.js — 7.1.1/2 Delta 的价值从哪来
const { C, sectionTitle, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 4, title: "Delta 的价值" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Delta 的价值从哪来", C.bgWhite);
    bigCallout(s, "交付速度 × 交付质量 × 可复用性（能力回注）——不是写了多少行代码。", 1.5, 0.7);
    s.addText("放回 PPT 与四阶段：", { x: 0.6, y: 2.55, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const items = [
      { t: "Technology 是器", d: "Delta 的 AI 干活能力 = 技术维度的重写——工具变了，判断在人不变" },
      { t: "主导段落", d: "Prototype（双角色）→ Build（主导）→ Scale（自运营 + 回注）" },
      { t: "10% 回注不是可选项", d: "不做能力回注，Delta 就退化成“会写码的外包”" },
    ];
    items.forEach((it, i) => {
      const y = 3.0 + i * 0.6;
      s.addShape("ellipse", { x: 0.7, y: y + 0.14, w: 0.28, h: 0.28, fill: { color: C.primary } });
      s.addText(it.t, { x: 1.15, y, w: 2.4, h: 0.56, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.7, y, w: 5.6, h: 0.56, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "AI 赋能 Delta，本质是赋能 Prototype / Build / Scale 三个阶段的产能。", 4.95, C.bgBlue, C.primary);
  }
};
