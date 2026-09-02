// slide-04.js — 9.1.1 RAG vs 微调（图 9-2）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "RAG vs 微调" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "RAG 与微调：两条互补路径", C.bgWhite);
    const cols = [
      { t: "RAG · 开卷式", d: "回答时临时检索外部资料，拼进提示词\n答案带出处", fill: C.bgBlue, strip: C.primary, tag: "适合：资料常更新 · 需溯源\n更新 = 重建索引" },
      { t: "微调 · 背书式", d: "把信息“学进”模型参数\n之后凭参数作答", fill: C.bgAmber, strip: C.accentWarm, tag: "适合：行为/风格要固化\n更新 = 重新训练（第 13 章）" },
    ];
    cols.forEach((c, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 1.9, fill: { color: c.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.9, fill: { color: c.strip } });
      s.addText(c.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(c.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
      s.addText(c.tag, { x: x + 0.2, y: y + 1.35, w: 3.9, h: 0.5, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "打个比方：开卷（RAG）考试翻书找答案、能指出依据；背书（微调）把能力长在身上。没有优劣，只有适用场景不同。", 3.95, C.bgAmber, C.accentWarm);
    s.addText("模型知识来自训练语料——训练时没见过的信息，模型要么答不出，要么凭印象编。", { x: 0.6, y: 4.75, w: 8.8, h: 0.35, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
  }
};
