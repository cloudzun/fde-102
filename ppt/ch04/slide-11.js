// slide-12.js — 4.3 Echo ≠ 客户经理
const { C, sectionTitle, numBadge, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 12, title: "Echo ≠ 客户经理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Echo ≠ 客户经理 / 售前", C.bgWhite);
    const items = [
      { t: "懂技术", d: "能判断技术可行性，不是只谈业务" },
      { t: "定义问题", d: "不是只记录需求，而是重构问题并做取舍" },
      { t: "对落地负责", d: "不只签单，而是对“业务真变好”负责" },
    ];
    items.forEach((it, i) => {
      const y = 1.5 + i * 0.85;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.0, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.5, y, w: 5.8, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    redBar(s, "汇报线隔离：Echo 定义问题，但不背签单与定价指标——否则会被签单压力裹挟成售前。", 4.6);
  }
};
