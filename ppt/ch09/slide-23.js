// slide-27.js — 9.9 双指标 + 建索引三问
const { C, sectionTitle, calloutBar, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 27, title: "双指标验收" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本书的双指标验收口径（第 10 章 DoD）", C.bgLight);
    const items = [
      { t: "答案准确率", d: "每条结论是否正确、切题、没有幻觉", fill: C.bgGreen, strip: C.green },
      { t: "来源可追溯率", d: "每条关键论断是否带了对的出处（文号+条款），且出处与内容能对上", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 1.5, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.5, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.75, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
    });
    redBar(s, "验收只看“答案对不对”、不看“引用准不准”，是政务 RAG 最常见的失效点——双指标都必须过线，“答对但引错”同样不验收。", 3.4);
    s.addText("建索引三问（教材提炼）：①这份文档（含扫描/表格/混合格式）解析出来可读、结构未乱吗？②chunk 自包含、粒度合适吗？③向量库 embedding 维度与模型一致吗？top-K / 过滤 / 来源元数据配好了吗？", {
      x: 0.6, y: 4.25, w: 8.8, h: 0.7, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "RAGAS（开源评估框架）：每个指标只回答自己的问题——检索质量 / 回答相关性 / 上下文忠实度 / 引用质量，不能互相替代。", 5.05, C.bgBlue, C.primary);
  }
};
