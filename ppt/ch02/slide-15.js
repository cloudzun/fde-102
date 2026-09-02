// slide-15.js — 2.3.2 边际成本递减效应示例表
const { C, sectionTitle, table } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 15, title: "边际成本递减" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "边际成本递减效应示例（示意）", C.bgWhite);
    const rows = [
      ["项目次序", "现场 FDE 人数", "实施周期", "平台覆盖度", "定制代码量", "项目利润率（示意）"],
      ["第 1 个项目", "5 人", "6 个月", "40%", "60%", "-20%（战略亏损）"],
      ["第 5 个项目", "3 人", "3 个月", "60%", "40%", "+35%"],
      ["第 10 个项目", "1.5 人", "1 个月", "80%", "20%", "+65%"],
      ["第 20 个项目", "1 人", "2 周", "95%", "5%", "+85%"],
    ];
    table(s, rows, { y: 1.35, colW: [1.2, 1.5, 1.2, 1.5, 1.4, 2.0], rowH: 0.55});
    s.addText("同样的项目：一个是越做越省（FDE 成本按 n⁻ᵅ 快速下坠），一个是越做越贵（外包无平台复用、成本持平甚至抬头）——两条线不断张开的“剪刀差”就是平台沉淀带来的成本红利。", {
      x: 0.6, y: 4.55, w: 8.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0, lineSpacingMultiple: 1.25
    });
    s.addText("口径说明：上表为示意性单项目核算（把 FDE 现场人力计入后，某项目自身的盈亏）——与 2.4 节 Palantir 公司整体毛利率（软件毛利率，通常不为负）是两个不同口径，勿混淆。", {
      x: 0.6, y: 5.1, w: 8.8, h: 0.35, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.2
    });
  }
};

