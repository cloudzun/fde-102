// compile.js — 课程总览 3 页（总封面 / 总体脉络与核心理念 / 总结束）
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "FDE 认证培训 · 课程总览（3 页）";
pres.author = "人工智能工程师（高级）FDE 认证培训";
pres.subject = "《人工智能工程师（高级）FDE 认证培训》教科书配套课件 · 西岭市民服务平台单案例贯穿";
pres.company = "FDE 认证培训";

const TOTAL = 3;
for (let i = 1; i <= TOTAL; i++) {
  const mod = require(`./slide-${String(i).padStart(2, `0`)}.js`);
  mod.createSlide(pres);
}

const outDir = "./output";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
pres.writeFile({ fileName: path.join(outDir, `FDE课程总览3页.pptx`) })
  .then(() => console.log(`✅ FDE课程总览3页.pptx 生成成功 (${TOTAL}页)`))
  .catch(err => { console.error(err); process.exit(1); });
