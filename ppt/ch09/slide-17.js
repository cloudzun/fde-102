// slide-19.js — 9.6 向量库存三样 + 选型
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "向量库" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "向量库要存三样东西", C.bgWhite);
    const items = [
      { t: "向量", d: "用于相似度检索", fill: C.bgBlue, strip: C.primary },
      { t: "原文片段", d: "命中后给模型读、做依据", fill: C.bgAmber, strip: C.accentWarm },
      { t: "来源元数据", d: "文号 · 条款号 · 页号——溯源全靠它", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 2.85, h: 1.3, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.12, w: 2.85, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.12, y: y + 0.55, w: 2.6, h: 0.65, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
    });
    s.addText("选型：", { x: 0.6, y: 2.95, w: 8.8, h: 0.35, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const picks = [
      { t: "Chroma", d: "嵌入式 · PoC 首选" },
      { t: "Milvus", d: "分布式 · 生产大规模" },
      { t: "pgvector", d: "数据已在 Postgres" },
    ];
    picks.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 3.4;
      s.addShape("rect", { x, y, w: 2.85, h: 1.05, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.05, fill: { color: C.primary } });
      s.addText(it.t, { x, y: y + 0.1, w: 2.85, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.48, w: 2.85, h: 0.5, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
    });
    calloutBar(s, "只存向量、丢原文，溯源就断了——向量解决“找得准”，原文与来源解决“答得可追溯”，缺一不可。", 4.75, C.bgRed, C.red);
    s.addText("PoC/原型阶段（第 10 章就是）用 Chroma 开箱即用；规模、并发、混合检索上量后再迁 Milvus 或 pgvector——不要一上来就搭分布式。", { x: 0.6, y: 5.3, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
