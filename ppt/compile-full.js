// compile-full.js — 把 16 章的 slide 代码片段整合为一份 PPT（一次编译，单文件输出）
// 用法：在 ppt/ 根目录运行  node compile-full.js
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10in x 5.625in，与各章一致
pres.title = "FDE 认证培训 · 全套 16 章";
pres.author = "人工智能工程师（高级）FDE 认证培训";
pres.subject = "《人工智能工程师（高级）FDE 认证培训》教科书配套课件 · 西岭市民服务平台单案例贯穿";
pres.company = "FDE 认证培训";

// 每章 slide 文件数（与各章 compile.js 的 TOTAL 一致）
const CHAPTERS = [
  { no: 1,  total: 23 },
  { no: 2,  total: 24 },
  { no: 3,  total: 27 },
  { no: 4,  total: 23 },
  { no: 5,  total: 31 },
  { no: 6,  total: 9  },
  { no: 7,  total: 28 },
  { no: 8,  total: 9  },
  { no: 9,  total: 26 },
  { no: 10, total: 9  },
  { no: 11, total: 27 },
  { no: 12, total: 9  },
  { no: 13, total: 23 },
  { no: 14, total: 19 },
  { no: 15, total: 26 },
  { no: 16, total: 10 },
];

let total = 0;
for (const ch of CHAPTERS) {
  const dir = `./ch${String(ch.no).padStart(2, "0")}`;
  for (let i = 1; i <= ch.total; i++) {
    const file = `slide-${String(i).padStart(2, "0")}.js`;
    const p = path.join(dir, file);
    if (!fs.existsSync(p)) throw new Error(`缺少 slide 文件: ${p}`);
    const mod = require(`./${dir}/${file}`);
    mod.createSlide(pres);
    total++;
  }
}

const outDir = "./output-full";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
const fileName = path.join(outDir, "FDE认证培训全套16章.pptx");

pres.writeFile({ fileName })
  .then(() => console.log(`✅ FDE认证培训全套16章.pptx 生成成功 (${total}页, 16 章)`))
  .catch(err => { console.error(err); process.exit(1); });
