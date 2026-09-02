// slide-19.js — 2.4 第二阶段：盈利能力质变
const { C, sectionTitle, table, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 19, title: "盈利能力质变" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第二阶段（2023–2025）：飞轮威力转移到盈利能力", C.bgLight);
    const rows = [
      ["财年", "毛利率", "经营利润率", "净利率", "营收（亿美元）", "营收增速"],
      ["2022", "78.5%", "-8.5%", "-19.5%", "19.1", "+23.6%"],
      ["2023", "80.6%", "+5.4%", "+9.8%（首次转正）", "22.3", "+16.7%"],
      ["2024", "80.3%", "+10.8%", "+16.3%", "28.7", "+28.8%"],
      ["2025", "82.4%", "+31.6%", "+36.5%", "44.8", "+56.2%"],
    ];
    table(s, rows, { y: 1.3, colW: [0.9, 1.2, 1.5, 1.9, 1.7, 1.6], rowH: 0.55});
    bigCallout(s, "最反直觉、最有说服力的一点：2024→2025 营收增速不降反升（+28.8%→+56.2%），同时经营利润率翻了近三倍（10.8%→31.6%）——平台底座沉淀得越厚，新增收入边际成本越低，规模越大反而越赚钱。", 4.5, 0.7);
    s.addText("注：数据按各财年 SEC 10-K 复算（约数），信息截至 FY2025（2026 年 8 月）；精确值以各财年 10-K 原文为准。", {
      x: 0.6, y: 5.35, w: 8.8, h: 0.25, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};

