// compile.js — 第10章 实操三 · 政策法规 RAG 问答系统（场景 B）PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第10章 实操三 · 政策法规 RAG 问答系统";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 9;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch10-实操三政策法规RAG问答.pptx` })
  .then(() => console.log(`✅ ch10-实操三政策法规RAG问答.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
