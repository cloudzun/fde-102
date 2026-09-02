// compile.js — 第6章 实操一 · 西岭需求调研 →《解决方案框架》 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第6章 实操一 · 西岭需求调研 →《解决方案框架》";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 9;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch06-实操一西岭需求调研.pptx` })
  .then(() => console.log(`✅ ch06-实操一西岭需求调研.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
