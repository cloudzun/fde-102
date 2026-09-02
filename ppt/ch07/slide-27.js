// slide-27.js — 纪律四：数据与评测证据
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 27, title: "纪律四" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "纪律四 · 数据与评测证据独立、可追溯、可复现", C.bgWhite);
    const rows = [
      ["维度", "要求"],
      ["来源与授权", "数据从哪来、有无授权记录"],
      ["标签规范", "标注规则成文，检查一致性"],
      ["开发/盲测隔离", "调参只用开发集；验收集在 Prompt 冻结后使用，标签由讲师/脚本持有"],
      ["版本与血缘", "数据集带版本号、生成脚本、改动记录"],
      ["评测污染", "评测集不得出现在训练、提示词或检索上下文中"],
      ["漂移与回流", "记录线上与评测分布差异，设计反馈回流路径"],
    ];
    table(s, rows, { y: 1.3, colW: [1.7, 7.1], rowH: 0.48 });
    redBar(s, "反模式：把“开发集调出的结果”当“最终验收结果”上报；偷偷改了测试数据却说没改——验收将失去意义。", 4.85);
  }
};
