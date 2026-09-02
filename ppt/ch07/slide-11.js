// slide-11.js — 7.2.3 从最简单开始的施工含义 + 图 7-3 接力
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 11, title: "从最简单开始" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "“从最简单开始”的施工含义", C.bgWhite);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.75, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.75, fill: { color: C.green } });
    s.addText("能用提示词不上 RAG，能用 RAG 不微调，能用 Workflow 不上 Agent——先做最小验证，升级必须带证据（量化差距），不是“感觉不够”。", {
      x: 0.85, y: 1.38, w: 8.3, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25, valign: "middle"
    });
    s.addText("实操坡度 = 金字塔逐层实践：Ch8 分类器（1 层）→ Ch9–10 RAG（2 层）→ Ch11–12 Agent（4 层），每次都先问“更简单那层够不够”。", {
      x: 0.6, y: 2.3, w: 8.8, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    // 图 7-3 接力四节点（垂直）
    const steps = [
      { t: "Echo · 选层（定方向）", d: "第 5/6 章 · 业务判据决定提示词 / RAG / 微调 / Agent", fill: C.bgAmber, strip: C.accentWarm },
      { t: "交接 · 同一张金字塔", d: "Echo 说“第 2 层 RAG”，Delta 就明白要建什么", fill: C.bgBlue, strip: C.primary },
      { t: "Delta · 建层（定落地）", d: "第 7 章起 · AI Coding 把选定的层实现出来", fill: C.bgBlue, strip: C.primary },
      { t: "可交付系统", d: "落地成果", fill: C.bgGreen, strip: C.green },
    ];
    steps.forEach((g, i) => {
      const y = 3.0 + i * 0.55;
      s.addShape("rect", { x: 1.2, y, w: 7.6, h: 0.48, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.2, y, w: 0.06, h: 0.48, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.45, y, w: 3.6, h: 0.48, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 5.2, y, w: 3.4, h: 0.48, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 3) s.addShape("line", { x: 5.0, y: y + 0.48, w: 0, h: 0.07, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "分工以金字塔为界，协作以金字塔为契合点——选层与建层，是同一张图的两半。", 5.18, C.bgBlue, C.primary);
  }
};
