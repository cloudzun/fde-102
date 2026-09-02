// slide-15.js — 9.4 进阶分块
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 15, title: "进阶分块" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "进阶分块（从简单到进阶按需升级）", C.bgWhite);
    const rows = [
      ["策略", "解决什么问题", "关键做法"],
      ["语义分块", "按主题/段落语义边界切，减少“一句话被拦腰斩断”", "依标题、主题、段落划分，非固定 token 数"],
      ["父子文档", "小片嵌入提高召回精度，命中后取父级大块供模型读", "小片用于检索，命中后回取其所属大块"],
      ["上下文检索", "chunk 脱离文档语境导致召回失败", "嵌入前用小模型为每块补写“位置/主题”上下文"],
    ];
    table(s, rows, { y: 1.4, colW: [1.7, 3.6, 3.5], rowH: 0.55});
    calloutBar(s, "固定长度不够用时才升级——先确认问题确实存在，再决定是否加。", 4.9, C.bgBlue, C.primary);
  }
};

