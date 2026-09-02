// compile.js — 第3章 FDE 交付方法论：四阶段与能力回注 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第3章 FDE 交付方法论：四阶段与能力回注";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 27;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch03-交付四阶段与能力回注.pptx` })
  .then(() => console.log(`✅ ch03-交付四阶段与能力回注.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
