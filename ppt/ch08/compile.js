// compile.js — 第8章 实操二 · 诉求智能分类器（场景 A）PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第8章 实操二 · 诉求智能分类器";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 9;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch08-实操二诉求智能分类器.pptx` })
  .then(() => console.log(`✅ ch08-实操二诉求智能分类器.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
