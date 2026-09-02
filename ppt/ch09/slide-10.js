// slide-10.js — 9.2 七步表
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "链路七步" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "链路每一步：输入 · 输出 · 常见坑", C.bgLight);
    const rows = [
      ["步骤", "一句话作用", "常见坑"],
      ["1 解析", "把“纸”变成文字", "扫描件不出字、表格被切乱"],
      ["2 分块", "决定“一个答案对应哪几段”", "块太小截断信息、太大检索不准"],
      ["3 向量化", "语义相近的文字在数字空间靠近", "中文用错 embedding，语义鸿沟大"],
      ["4 存库", "存向量 + 原文 + 来源", "只存向量丢原文，来源就没了"],
      ["5 问题向量化", "把问题放到与片段同维空间", "分词/语义与库不一致"],
      ["6 检索", "找出支撑答案的依据", "K 太小漏、K 太大噪"],
      ["7 生成 + 引用", "限定只用片段应答、标来源", "越出片段自由发挥 = 幻觉"],
    ];
    table(s, rows, { y: 1.3, colW: [1.6, 3.3, 3.9], rowH: 0.5 });
    redBar(s, "全章纪律：检索不到不能编——片段不足以支撑答案时，明确说“未检索到、无法回答”，而不是凭空编一段。", 4.95);
  }
};
