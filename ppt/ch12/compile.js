// compile.js — 第12章 实操四 · 工单智能分级路由工作流（场景 C）PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第12章 实操四 · 工单智能分级路由工作流";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 9;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch12-实操四工单智能分级路由.pptx` })
  .then(() => console.log(`✅ ch12-实操四工单智能分级路由.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
