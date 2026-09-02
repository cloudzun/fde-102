// slide-21.js — 9.7 三段递进（图 9-5）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 21, title: "检索增强三段递进" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "检索增强三段递进（不是默认全上）", C.bgLight);
    const stages = [
      { t: "基础向量检索", d: "top-K 语义相似基线", fill: C.bgGreen, strip: C.green },
      { t: "混合检索", d: "稠密 + 关键词（BM25·jieba）\n治“召回漏”", fill: C.bgBlue, strip: C.primary },
      { t: "重排 rerank", d: "cross-encoder 精排 top-K\n治“排序差”", fill: C.bgAmber, strip: C.accentWarm },
      { t: "HyDE / 改写", d: "先造假设答案再检索\n治“表达不对齐”", fill: C.bgRed, strip: C.red },
    ];
    stages.forEach((g, i) => {
      const y = 1.45 + i * 0.85;
      s.addShape("rect", { x: 1.2, y, w: 7.6, h: 0.72, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.2, y, w: 0.07, h: 0.72, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.45, y, w: 2.6, h: 0.72, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.2, y, w: 4.4, h: 0.72, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
      if (i < 3) s.addShape("line", { x: 5.0, y: y + 0.72, w: 0, h: 0.13, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "从最简单开始：先基础 top-K 验证；漏精确词 → 加混合；首屏精度不够 → 加重排；查询表达对不上 → 才 HyDE/改写。每一层先确认问题确实存在。", 5.1, C.bgBlue, C.primary);
  }
};
