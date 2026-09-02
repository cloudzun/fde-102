// compile.js — 第4章 Echo 与 Delta：作战单元的分工与协作 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第4章 Echo 与 Delta：作战单元的分工与协作";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 23;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch04-Echo与Delta分工协作.pptx` })
  .then(() => console.log(`✅ ch04-Echo与Delta分工协作.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
