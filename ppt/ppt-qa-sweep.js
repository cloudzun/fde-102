// ppt-qa-sweep.js — 全量 QA 清扫：过滤封面/分隔页的装饰类提示（出血圆环、水印数字），其余真实问题全报
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const chapters = fs.readdirSync(root).filter(d => /^ch\d+$/.test(d)).sort((a, b) => parseInt(a.slice(2), 10) - parseInt(b.slice(2), 10));

let totalReal = 0;
for (const ch of chapters) {
  const pptx = fs.readdirSync(path.join(root, ch, "output")).find(f => f.endsWith(".pptx"));
  if (!pptx) { console.log(`${ch}: 无输出`); continue; }
  const out = execSync(`node ppt-qa.js "${path.join(root, ch, "output", pptx)}"`, { encoding: "utf8", cwd: root });
  const lines = out.split(/\r?\n/).filter(l => l.includes("⚠"));
  const real = lines.filter(l => !isDecorative(l));
  if (real.length) {
    console.log(`\n${ch}: ${real.length} 处真实问题`);
    real.forEach(l => console.log("  " + l.trim()));
  } else {
    console.log(`${ch}: OK`);
  }
  totalReal += real.length;
}
console.log(`\n共 ${totalReal} 处真实问题`);

function isDecorative(line) {
  // 越界且无文字 = 出血装饰圆环
  if (line.includes("越界") && line.includes('""')) return true;
  // 分隔页/封面水印数字与标题文字重叠（数字在标题下层，属设计意图）
  if (line.includes("文字重叠")) {
    const m = line.match(/文字重叠: "([^"]+)" 与 "([^"]+)"/);
    if (!m) return false;
    const a = m[1], b = m[2];
    // 水印数字（章节号或 LAB 或 x.x / x.x–x.y 节号）
    const isNum = s => /^\d{1,2}$/.test(s) || /^\d+\.\d+(–\d+\.\d+)?$/.test(s) || s === "LAB";
    const isWatermark = s => s === "LAB" || s === "FDE" || s === "END";
    if (isNum(a) || isNum(b) || isWatermark(a) || isWatermark(b)) return true;
  }
  return false;
}
