// slide-24.js — 11.7 FP/FN
const { C, sectionTitle, calloutBar, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 24, title: "FP vs FN" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "两个出错方向", C.bgWhite);
    const items = [
      { t: "假阳性 FP", d: "不该打断时打断：正常交易被误判可疑、频繁转人工——信任流失 · 效率下降 · “狼来了”", fill: C.bgAmber, strip: C.accentWarm },
      { t: "假阴性 FN", d: "该拦时没拦：可疑交易漏报、越权动作放行——真实事故 · 数据损失 · 合规风险", fill: C.bgRed, strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 1.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.7, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.95, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
    });
    s.addText("实测证据：审批门控复盘“11 个拦截里 9 个误报”；人在环监督测试中，人类审核者放行了约 1/3 的危险请求——靠直觉定自动化边界不可靠。", {
      x: 0.6, y: 3.4, w: 8.8, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    redBar(s, "政务 / 金融敏感件：假阴性代价 ≫ 假阳性——铁律“宁可多升级，不可漏”；验收口径 = 给定验证集召回率 100%，生产目标为零漏判。", 4.3);
  }
};
