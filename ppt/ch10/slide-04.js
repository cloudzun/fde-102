// slide-04.js — 任务书
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 4, title: "任务书" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "任务书：场景 B 政务政策知识问答", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.25, w: 8.8, h: 0.8, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.25, w: 0.05, h: 0.8, fill: { color: C.green } });
    s.addText("市民问政策 → 系统直接给答案，还得告诉他是哪份文件、哪条规定的——免得坐席背锅。技术方案（已定）：RAG，不是微调、不是纯关键词。", {
      x: 0.85, y: 1.32, w: 8.3, h: 0.65, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25, valign: "middle"
    });
    const rows = [
      ["文件", "格式", "内容"],
      ["社保参保政策.md", "Markdown", "6 章 27 条"],
      ["医保报销政策.md", "Markdown", "7 章 28 条"],
      ["保障性住房政策.md", "Markdown", "7 章 27 条"],
      ["户籍迁移政策.docx", "Word", "7 章 23 条"],
      ["就业创业补贴政策.pdf", "PDF", "6 章 33 条"],
    ];
    table(s, rows, { y: 2.35, colW: [3.0, 1.6, 4.2], rowH: 0.5 });
    calloutBar(s, "docx/pdf 要先做格式解析再分块向量化；施工时让 Agent 从素材目录读取，不让 Agent 自己编政策内容。", 5.0, C.bgAmber, C.accentWarm);
  }
};
