// slide-18.js — 2.4 第一阶段：毛利率证明“这不是外包”
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 18, title: "毛利率第一阶段" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "第一阶段（2018–2022）：毛利率证明“这不是外包”", C.bgWhite);
    const rows = [
      ["财年", "整体毛利率（GAAP）", "核心驱动因素"],
      ["2018", "72.2%", "政府合同 + 平台订阅占比高，净亏损主要在人力与研发"],
      ["2019", "67.4%", "收入结构变化、实施扩张"],
      ["2020", "67.3%", "组件复用提升、收入结构调整"],
      ["2021", "78.0%", "平台复用扩大、FDE 人效改善"],
      ["2022", "78.5%", "本体/语义层复用扩大、实施效率改善"],
    ];
    table(s, rows, { y: 1.3, colW: [1.0, 2.0, 5.8], rowH: 0.55 });
    calloutBar(s, "2018–2020 已站稳 67–72%，远高于外包 10–30%——“不是外包”起点即成立；2021 起爬升至 78.5%。", 4.75);
    s.addText("注：GAAP 整体毛利率，按 SEC 备案复算（约数）；驱动因素为教材解释假说（财报不披露归因）；GAAP 毛利率 ≠ 项目级毛利，口径不可混用。", {
      x: 0.6, y: 5.3, w: 8.8, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
