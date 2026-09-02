// compile.js — 第16章 实操五 · 综合证据评审与决策层汇报 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第16章 实操五 · 综合证据评审与决策层汇报";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 10;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch16-实操五综合证据评审与汇报.pptx` })
  .then(() => console.log(`✅ ch16-实操五综合证据评审与汇报.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
