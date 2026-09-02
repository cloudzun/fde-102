// compile.js — 第5章 Echo 工作法 · 定义问题（Discovery）PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第5章 Echo 工作法 · 定义问题（Discovery）";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 31;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch05-Echo工作法定义问题.pptx` })
  .then(() => console.log(`✅ ch05-Echo工作法定义问题.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
