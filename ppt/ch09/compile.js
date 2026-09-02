// compile.js — 第9章 RAG 方法 · 答案可追溯 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第9章 RAG 方法 · 答案可追溯";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 26;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch09-RAG方法答案可追溯.pptx` })
  .then(() => console.log(`✅ ch09-RAG方法答案可追溯.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
