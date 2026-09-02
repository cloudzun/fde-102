// compile.js — 第15章 Echo 价值化 · 业务 Scale PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第15章 Echo 价值化 · 业务 Scale";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 26;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch15-Echo价值化业务Scale.pptx` })
  .then(() => console.log(`✅ ch15-Echo价值化业务Scale.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
