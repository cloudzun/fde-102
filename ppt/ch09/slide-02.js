// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "RAG 核心思想：检索外部信息补足模型语料",
      "画出 RAG 核心链路（解析→分块→向量化→向量库→检索→生成+引用）",
      "选型判断：RAG / 超长上下文 / 微调 / 关键词 / 一次调用",
      "解析 · 分块 · Embedding · 向量库 · 检索增强的选型与参数判读",
      "“答案准确率 + 来源可追溯率”双指标验收",
      "20–30 分钟最小 RAG 预实验",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "红线本处落地：答案可追溯——政务 AI 准入门槛（教材经验口径）。第 10 章实操三把本章当场做出来。", 5.05, C.bgRed, C.red);
  }
};
