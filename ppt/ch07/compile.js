// compile.js — 第7章 Delta 工作法 · AI Coding 与工程纪律 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第7章 Delta 工作法 · AI Coding 与工程纪律";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 28;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch07-Delta工作法AICoding与工程纪律.pptx` })
  .then(() => console.log(`✅ ch07-Delta工作法AICoding与工程纪律.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
