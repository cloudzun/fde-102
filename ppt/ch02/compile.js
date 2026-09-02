// compile.js — 第2章 为什么需要 FDE PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第2章 为什么需要 FDE";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 24;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch02-为什么需要FDE.pptx` })
  .then(() => console.log(`✅ ch02-为什么需要FDE.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
