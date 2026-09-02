// slide-20.js — 4.5 两种训练模式
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "两种训练模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "由此引出本书的两种训练模式", C.bgWhite);
    const items = [
      { t: "判断型实操", d: "Ch6 实操一 · Ch16 实操五\n关键判断不用 AI\nAI 仅辅助整理 / 润色 / 扮演红队\n——练判断力", fill: C.bgAmber, strip: C.accentWarm },
      { t: "AI 施工品类", d: "Ch8/10/12 实操二三四\n用 opencode + gstack\nAgent 跑流程、人在 checkpoint 把关\n——练施工力", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.7, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.68, w: 3.9, h: 1.9, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.4, valign: "top" });
    });
  }
};
