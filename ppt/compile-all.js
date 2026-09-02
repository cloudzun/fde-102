// compile-all.js — 一键编译 ppt/ 下全部章节
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const root = __dirname;
const chapters = fs.readdirSync(root)
  .filter(d => /^ch\d+$/.test(d))
  .sort((a, b) => parseInt(a.slice(2), 10) - parseInt(b.slice(2), 10));

if (chapters.length === 0) {
  console.log("⚠ 未发现 chNN 章节目录");
  process.exit(0);
}

for (const ch of chapters) {
  const dir = path.join(root, ch);
  if (!fs.existsSync(path.join(dir, "compile.js"))) continue;
  console.log(`▶ 编译 ${ch}`);
  try {
    execSync("node compile.js", { cwd: dir, stdio: "inherit" });
  } catch (e) {
    console.error(`✘ ${ch} 编译失败`);
    process.exitCode = 1;
  }
}
console.log("✅ 全部章节编译结束");
