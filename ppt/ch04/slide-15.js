// slide-16.js — 4.4 Delta ≠ 只会写码
const { C, sectionTitle, numBadge, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 16, title: "Delta ≠ 只会写码" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Delta ≠ “只会写码的程序员”", C.bgLight);
    const items = [
      { t: "懂业务约束", d: "参与技术可行性判断，听懂 Echo 的需求" },
      { t: "主动能力回注", d: "识别定制代码共性，回注平台" },
    ];
    items.forEach((it, i) => {
      const y = 1.6 + i * 0.9;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.2, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.7, y, w: 5.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    redBar(s, "不做能力回注，Delta 就退化成外包——呼应第 2 章“卖人力 vs 卖能力”。", 4.3);
  }
};
