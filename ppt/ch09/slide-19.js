// slide-22.js — 9.7 中文 jieba 硬细节
const { C, sectionTitle, redBar, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 22, title: "jieba 硬细节" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "中文混合检索的硬细节", C.bgWhite);
    redBar(s, "中文混合检索必须显式配置 jieba 分词——这是“能不能跑通”的硬细节。", 1.4);
    s.addText("BM25 是“按词统计词频”的关键词检索：对中文若不先加载 jieba 分词器（建立索引前用 jieba.analyse 分词），一整句话会被当成一个“词”，导致精确词命中失效、混合检索退化为近似纯向量。", {
      x: 0.6, y: 2.15, w: 8.8, h: 0.9, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35
    });
    calloutBar(s, "落地：建立关键词索引之前显式配置 jieba，并用带编号 / 专名的测试数据抽检命中效果。", 3.4, C.bgAmber, C.accentWarm);
  }
};
