// slide-11.js — 4.3 Echo 时间分配 + 能力画像
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 11, title: "Echo 时间分配" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Echo 日常时间分配（参考）", C.bgLight);
    const items = [
      { t: "70%", d: "客户沟通与业务洞察", fill: C.bgAmber, strip: C.accentWarm },
      { t: "20%", d: "方案设计与选型", fill: C.bgBlue, strip: C.primary },
      { t: "10%", d: "推动落地与对齐", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 1.5, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.16, w: 2.85, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.75, w: 2.85, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
    });
    s.addText("能力画像：业务理解 · 沟通 · 产品思维 · 学习敏捷度 极强；技术深度中等（够对话、够选型）", {
      x: 0.6, y: 3.35, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "一句话：Echo 把时间主要花在“听、想、推”上。", 4.2, C.bgAmber, C.accentWarm);
  }
};
