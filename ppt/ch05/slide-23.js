// slide-25.js — 5.7.2 选型三问 + 决策树（图 5-7）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 25, title: "选型三问决策树" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "选型三问 + 决策树", C.bgLight);
    const steps = [
      { q: "Q1 只需归个类？（一次调用）", a: "是 → 分类器", fill: C.bgGreen, strip: C.green },
      { q: "Q2 要基于文档精确回答 + 溯源？", a: "是 → RAG", fill: C.bgBlue, strip: C.primary },
      { q: "Q3 要自主决策 + 调工具 + 多步流转？", a: "是 → Agent", fill: "EDEAF6", strip: "907BB5" },
      { q: "Q4 需内化特定领域风格 / 格式 / 协议？", a: "是 → 微调", fill: C.bgAmber, strip: C.accentWarm },
      { q: "全都不满足？", a: "→ 高级提示词 / 固定工作流", fill: C.bgBlue, strip: C.primary },
    ];
    steps.forEach((g, i) => {
      const y = 1.35 + i * 0.75;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.64, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.07, h: 0.64, fill: { color: g.strip } });
      s.addText(g.q, { x: 0.85, y, w: 5.6, h: 0.64, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.a, { x: 6.6, y, w: 2.6, h: 0.64, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("line", { x: 5.0, y: y + 0.64, w: 0, h: 0.11, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "注意：Q1/Q2/Q3 全不满足并不必然要微调——是否“学会”特定领域风格 / 格式 / 私有协议（Q4）才是微调判据；否则用高级提示词 / 固定工作流。", 5.12, C.bgAmber, C.accentWarm);
  }
};
