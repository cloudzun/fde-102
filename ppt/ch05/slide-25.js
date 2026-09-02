// slide-27.js — 5.7.2 西岭选型理由
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 27, title: "西岭选型理由" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本课程实例：西岭选型理由", C.bgLight);
    const items = [
      { t: "场景 A · 诉求分类", sel: "分类器", d: "一次调用、无需多步决策\n——不用 Agent", fill: C.bgBlue, strip: C.primary },
      { t: "场景 B · 政策问答", sel: "RAG", d: "基于文档回答 + 可溯源\n政策常更新——不用微调\n组合：RAG + 库外拒答兜底", fill: C.bgGreen, strip: C.green },
      { t: "场景 C · 工单分流", sel: "工作流", d: "分流后还要“做事”\n（自动答复 / 转人工）\n——不是分类器", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.sel, { x, y: y + 0.55, w: 2.85, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 1.1, w: 2.55, h: 1.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    s.addText("每次选型都要能讲清：“为什么是它、为什么不用更复杂的、它与哪些维度组合、人工兜底在哪”。", {
      x: 0.6, y: 4.7, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
  }
};
