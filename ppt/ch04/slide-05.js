// slide-05.js — 4.1 FDE 解法：分工解耦 × 战斗力整合
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 5, title: "FDE 的解法" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "FDE 的解法", C.bgLight);
    bigCallout(s, "分工解耦 × 战斗力整合", 1.6, 0.7);
    const items = [
      { t: "解耦的是分工", d: "Echo 管业务端\nDelta 管技术端\n两个高度专精的角色", fill: C.bgAmber, strip: C.accentWarm },
      { t: "整合的是战斗力", d: "同处一个作战单元\n深度协作 · 目标一致\n无缝交接", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 2.7;
      s.addShape("rect", { x, y, w: 4.3, h: 1.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.7, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 0.95, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    s.addText("既避免“一人干全程”的不可复制，也避免“跨团队甩锅交接”的翻译损耗。", {
      x: 0.6, y: 4.75, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
  }
};
