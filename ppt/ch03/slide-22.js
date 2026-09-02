// slide-23.js — 3.5.1 优先级矩阵
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 23, title: "回注优先级矩阵" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "值不值得回注：通用性 × 实现成本", C.bgLight);
    const rows = [
      ["", "通用性高", "通用性中", "通用性低"],
      ["成本低", "P0 立即做", "P1 尽快做", "P3 观察"],
      ["成本中", "P1 尽快做", "P2 计划做", "不做"],
      ["成本高", "P2 计划做", "P3 观察", "不做"],
    ];
    table(s, rows, { y: 1.6, colW: [1.6, 2.4, 2.4, 2.4], rowH: 0.55});
    calloutBar(s, "值得回注 = 通用性高 × 成本可接受；低通用 + 高成本 → 留作定制，别污染“铺装公路”。", 4.9, C.bgAmber, C.accentWarm);
  }
};

