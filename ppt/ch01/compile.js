// compile.js — 第1章 FDE 是什么 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第1章 FDE 是什么";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 23;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch01-FDE是什么.pptx` })
  .then(() => console.log(`✅ ch01-FDE是什么.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
