// slide-18.js — 3.4.1 LLM 能力金字塔（图 3-6）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 18, title: "LLM 能力金字塔" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "选什么——LLM 能力金字塔", C.bgLight);
    const bands = [
      { t: "Agent", d: "自主决策 · 调工具 · 多步流转", fill: "EDEAF6", strip: "907BB5", white: true },
      { t: "微调", d: "学领域知识 · 数据足够", fill: C.bgAmber, strip: C.accentWarm },
      { t: "RAG", d: "精确回答 · 可溯源", fill: C.bgBlue, strip: C.primary },
      { t: "提示词 / 分类", d: "一次调用能解决", fill: C.bgGreen, strip: C.green },
    ];
    bands.forEach((g, i) => {
      const y = 1.5 + i * 0.92;
      s.addShape("rect", { x: 1.3, y, w: 7.4, h: 0.78, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.3, y, w: 0.07, h: 0.78, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.55, y, w: 2.4, h: 0.78, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: g.white ? "FFFFFF" : C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.2, y, w: 4.3, h: 0.78, fontSize: 11.5, fontFace: "Microsoft YaHei", color: g.white ? "FFFFFF" : C.textDark, valign: "middle", margin: 0 });
      if (i < 3) s.addShape("line", { x: 5.0, y: y + 0.78, w: 0, h: 0.14, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    s.addText("原则：从最简单开始，仅必要时升级；各层可组合，不是单线升级。", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
  }
};
