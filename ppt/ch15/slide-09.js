// slide-09.js — 15.2.2 五类口径
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 9, title: "五类口径" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "五类口径：不能混着叫“ROI”", C.bgWhite);
    const items = [
      { t: "年度价值", d: "= 效率收益 + 质量收益 + 风险避免收益", fill: C.bgGreen, strip: C.green },
      { t: "年净收益", d: "= 年度价值 − 年运营增量成本", fill: C.bgBlue, strip: C.primary },
      { t: "TCO", d: "= 建设 + 运行 + 维护 + 人工审核成本", fill: C.bgAmber, strip: C.accentWarm },
      { t: "ROI", d: "= (累计收益 − 总投入) / 总投入，覆盖整个投资周期", fill: C.bgCard, strip: C.primary },
      { t: "投资回收期", d: "= 总投入 / 月净收益——“多久回本”", fill: C.bgRed, strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 3) * 3.05;
      const y = 1.5 + Math.floor(i / 3) * 1.85;
      const w = 2.85;
      const xx = i === 4 ? 3.575 : x;
      s.addShape("rect", { x: xx, y, w, h: 1.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: xx, y, w, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: xx + 0.1, y: y + 0.12, w: w - 0.2, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: xx + 0.15, y: y + 0.58, w: w - 0.3, h: 1.0, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "注意 ROI 必须覆盖整个投资周期（累计收益对累计投入），不是一年的数字；客户要“赚回几倍”另用收益成本比。", 4.9, C.bgAmber, C.accentWarm);
  }
};
