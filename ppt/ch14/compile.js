// compile.js — 第14章 Delta 生产化 · 工程 Scale PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第14章 Delta 生产化 · 工程 Scale";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 19;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch14-Delta生产化工程Scale.pptx` })
  .then(() => console.log(`✅ ch14-Delta生产化工程Scale.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
