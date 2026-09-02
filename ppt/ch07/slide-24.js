// slide-24.js — 纪律一：测试数据外部给定
const { C, sectionTitle, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 24, title: "纪律一" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "纪律一 · 测试数据必须外部给定", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.4, w: 8.8, h: 1.2, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.4, w: 0.05, h: 1.2, fill: { color: C.green } });
    s.addText("把固定的测试数据直接写进启动提示词、让 coding agent 落盘成 CSV，并明确“不得自行改动或重新生成”。", {
      x: 0.85, y: 1.5, w: 8.3, h: 1.0, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0, lineSpacingMultiple: 1.4, valign: "middle"
    });
    redBar(s, "防止 coding agent 自己出题自己考——否则验收无意义。", 3.3);
    s.addText("第 8 / 10 / 12 章将用“盲测集验收”把这条纪律落地。", { x: 0.6, y: 4.1, w: 8.8, h: 0.35, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
  }
};
