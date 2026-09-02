// slide-04.js — 3.1 PPT 三要素（图 3-1）
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "PPT 三要素" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "一次交付 = 三个维度同步改造", C.bgLight);
    const items = [
      { t: "People", tag: "是根", d: "谁来用\n谁来推\n谁来接盘", fill: C.bgGreen, strip: C.green },
      { t: "Process", tag: "是脉", d: "业务如何运转\n如何被重塑", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Technology", tag: "是器", d: "用什么技术打通\n如何对接", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.0, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.15, w: 2.85, h: 0.45, fontSize: 17, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.tag, { x, y: y + 0.6, w: 2.85, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 1.05, w: 2.85, h: 0.85, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    bigCallout(s, "三者缺一不可，People 为先：只上技术 → 搁板软件；只谈流程 → 纸上谈兵。", 3.95, 0.6);
    s.addText("“PPT” = People–Process–Technology，与演示文稿无关。本章按 People → Process → Technology 顺序展开。", {
      x: 0.6, y: 4.9, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
