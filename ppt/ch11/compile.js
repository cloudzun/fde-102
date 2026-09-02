// compile.js — 第11章 Agent 方法 · 自动化边界 PPT 编译脚本
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "第11章 Agent 方法 · 自动化边界";
pres.author = "人工智能工程师（高级）FDE 认证培训";

const TOTAL = 27;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

pres.writeFile({ fileName: `./output/ch11-Agent方法自动化边界.pptx` })
  .then(() => console.log(`✅ ch11-Agent方法自动化边界.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => console.error(err));
