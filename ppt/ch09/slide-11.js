// slide-12.js — 9.3 解析器选型
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "解析器选型" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "解析器选型（截至 2026-08，以官方为准）", C.bgWhite);
    const rows = [
      ["解析器", "定位", "何时用"],
      ["Docling（IBM）", "开源文档转换库，含布局/表格/阅读顺序", "混合格式、含表格的常用首选"],
      ["LlamaParse", "托管解析云服务，索引即用", "不想自建、接受托管时"],
      ["Unstructured", "开源 + 托管，按元素切分，LangChain 生态深", "已在 LangChain 生态、要代码级控制"],
      ["PyMuPDF", "轻量底层 PDF 文字提取，速度快", "纯文本 PDF、兜底预处理"],
    ];
    table(s, rows, { y: 1.35, colW: [1.8, 3.9, 3.1], rowH: 0.55});
    calloutBar(s, "中文扫描件：必须先 OCR（Docling 内置多套引擎），中文效果取决于引擎对中文支持——落地前务必用自己那批扫描件实测。", 4.65, C.bgAmber, C.accentWarm);
    s.addText("判读：西岭是 5 份混合格式政策文档（md/pdf/docx）——混合格式+表格复杂 → Docling；扫图居多 → 先 OCR 实测。", { x: 0.6, y: 5.25, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

