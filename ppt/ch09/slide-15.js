// slide-17.js — 9.5 Embedding 选型
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 17, title: "Embedding 选型" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Embedding + 中文选型", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.25, w: 8.8, h: 0.8, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.25, w: 0.05, h: 0.8, fill: { color: C.green } });
    s.addText("Embedding 把一段文字映射成高维数字向量，语义相近的文字距离更近——“外地户口能交社保吗”与“灵活就业人员参保条件”字面不重合，但向量距离很近，能被适配的模型抓出来。", {
      x: 0.85, y: 1.32, w: 8.3, h: 0.65, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25, valign: "middle"
    });
    const rows = [
      ["维度", "BGE-M3（BAAI）", "Qwen3-Embedding（阿里）"],
      ["向量维度", "1024 维", "0.6B→1024 · 4B→2560 · 8B→4096"],
      ["能力", "稠密+稀疏+多向量三重表示", "Matryoshka 维度压缩；4B/8B 稠密+稀疏"],
      ["部署", "MIT 可本地自部署（不出域）", "开源权重，本地或托管"],
    ];
    table(s, rows, { y: 2.3, colW: [1.4, 3.7, 3.7], rowH: 0.55});
    calloutBar(s, "落地判读：要“数据不出域”→ 选可本地部署的中文模型（BGE-M3）；要语义靠近 → 强语义 embedding；精确词命中 → 交给混合检索的关键词通道。", 5.0, C.bgAmber, C.accentWarm);
  }
};

