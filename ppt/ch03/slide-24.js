// slide-25.js — 3.5.3 两条作战纪律
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 25, title: "两条作战纪律" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "两条作战纪律", C.bgLight);
    const items = [
      { t: "五次部署法则", d: "约 5 个客户前\n别写死 Playbook——\n先验证，再固化 SOP", fill: C.bgAmber, strip: C.accentWarm },
      { t: "负荷管理", d: "同时只重点攻坚\n1–2 个大客户——\n避免都做不深", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.6;
      s.addShape("rect", { x, y, w: 4.3, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.1, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 1.3, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.4, valign: "top" });
    });
  }
};
