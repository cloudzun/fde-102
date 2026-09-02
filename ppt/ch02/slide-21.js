// slide-21.js — 2.4 对 To B / To G 技术服务商的启示
const { C, sectionTitle, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 21, title: "对服务商的启示" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "对 To B / To G 技术服务商的启示", C.bgLight);
    bigCallout(s, "早期容忍较低毛利率、敢于向客户现场派驻顶尖人才（FDE），是获取行业 Know-how 和核心数据的必经之路。", 1.4, 0.7);
    // 七年路径对比
    s.addShape("rect", { x: 1.0, y: 2.5, w: 3.4, h: 1.1, fill: { color: C.bgAmber }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addText("2018 · 起点", { x: 1.0, y: 2.6, w: 3.4, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
    s.addText("72.2% 毛利 · 大额净亏损", { x: 1.0, y: 2.95, w: 3.4, h: 0.55, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
    s.addShape("rightArrow", { x: 4.6, y: 2.9, w: 0.8, h: 0.35, fill: { color: C.primaryLight } });
    s.addText("约七年", { x: 4.62, y: 2.35, w: 0.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
    s.addShape("rect", { x: 5.6, y: 2.5, w: 3.4, h: 1.1, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addText("2025 · 成熟", { x: 5.6, y: 2.6, w: 3.4, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
    s.addText("82.4% 毛利 · 36.5% 净利率", { x: 5.6, y: 2.95, w: 3.4, h: 0.55, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
    calloutBar(s, "只要建立“现场定制 → 平台抽象”的坚实反馈管道，后期规模化盈利水到渠成——飞轮启动慢，但一旦转起来，回报呈非线性（幂律式）增长。", 4.0, C.bgGreen, C.green);
    s.addText("Palantir 用了约七年走完这条路（信息截至 FY2025，2026 年 8 月）。", { x: 0.6, y: 4.75, w: 8.8, h: 0.3, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
