// ppt-qa.js — 解析生成的 .pptx，检查版式问题
// 用法: node ppt-qa.js <pptx路径>
// 检查项:
//  1. 所有形状越出页面边界 (10 x 5.625 in = 9144000 x 5143500 EMU)
//  2. 文字形状之间的重叠
const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");

const SLIDE_W = 9144000;   // 10 in
const SLIDE_H = 5143500;   // 5.625 in

function emuToIn(v) { return (v / 914400).toFixed(2); }

async function main(file) {
  const buf = fs.readFileSync(file);
  const zip = await JSZip.loadAsync(buf);
  const slideFiles = Object.keys(zip.files)
    .filter(f => /^ppt\/slides\/slide\d+\.xml$/.test(f))
    .sort((a, b) => parseInt(a.match(/slide(\d+)/)[1]) - parseInt(b.match(/slide(\d+)/)[1]));
  console.log(`共 ${slideFiles.length} 页\n`);

  let problems = 0;
  for (const sf of slideFiles) {
    const num = sf.match(/slide(\d+)/)[1];
    const xml = await zip.files[sf].async("string");
    const shapes = parseShapes(xml);
    // 1) 越界检查
    for (const sh of shapes) {
      if (sh.x < -1000 || sh.y < -1000 || sh.x + sh.w > SLIDE_W + 1000 || sh.y + sh.h > SLIDE_H + 1000) {
        console.log(`⚠ [P${num}] 越界: "${(sh.text || "").slice(0, 24)}" x=${emuToIn(sh.x)}" y=${emuToIn(sh.y)}" w=${emuToIn(sh.w)}" h=${emuToIn(sh.h)}" (right=${emuToIn(sh.x + sh.w)}" bottom=${emuToIn(sh.y + sh.h)}")`);
        problems++;
      }
    }
    // 2) 文字框重叠检查
    const texts = shapes.filter(s => s.text);
    for (let i = 0; i < texts.length; i++) {
      for (let j = i + 1; j < texts.length; j++) {
        const a = texts[i], b = texts[j];
        const ox = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
        const oy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
        if (ox > 0.2 * Math.min(a.w, b.w) && oy > 0.25 * Math.min(a.h, b.h)) {
          // 只报文本内容不同的重叠（同内容多为装饰重复）
          if (a.text !== b.text) {
            console.log(`⚠ [P${num}] 文字重叠: "${(a.text || "").slice(0, 16)}" 与 "${(b.text || "").slice(0, 16)}"`);
            problems++;
          }
        }
      }
    }
  }
  console.log(problems === 0 ? "\n✅ 未发现越界或文字重叠问题" : `\n共 ${problems} 处问题`);
}

function parseShapes(xml) {
  const shapes = [];
  // 匹配 spTree 内的每个 <p:sp> ... </p:sp>
  const spRe = /<p:sp>([\s\S]*?)<\/p:sp>/g;
  let m;
  while ((m = spRe.exec(xml)) !== null) {
    const body = m[1];
    const off = body.match(/<a:off x="(-?\d+)" y="(-?\d+)"\/>/);
    const ext = body.match(/<a:ext cx="(-?\d+)" cy="(-?\d+)"\/>/);
    if (!off || !ext) continue;
    const tx = body.match(/<a:t>([\s\S]*?)<\/a:t>/g);
    const text = tx ? tx.map(t => t.replace(/<\/?a:t>/g, "")).join("") : "";
    shapes.push({
      x: parseInt(off[1]), y: parseInt(off[2]),
      w: parseInt(ext[1]), h: parseInt(ext[2]),
      text
    });
  }
  // 表格（graphicFrame → a:tbl）整体边框
  const gfRe = /<p:graphicFrame>([\s\S]*?)<\/p:graphicFrame>/g;
  while ((m = gfRe.exec(xml)) !== null) {
    const body = m[1];
    const off = body.match(/<a:off x="(-?\d+)" y="(-?\d+)"\/>/);
    const ext = body.match(/<a:ext cx="(-?\d+)" cy="(-?\d+)"\/>/);
    if (!off || !ext) continue;
    const tx = body.match(/<a:t>([\s\S]*?)<\/a:t>/g);
    const text = tx ? tx.map(t => t.replace(/<\/?a:t>/g, "")).join("") : "";
    shapes.push({
      x: parseInt(off[1]), y: parseInt(off[2]),
      w: parseInt(ext[1]), h: parseInt(ext[2]),
      text: "[表格]" + text.slice(0, 20)
    });
  }
  return shapes;
}

main(process.argv[2] || "ppt/ch01/output/ch01-FDE是什么.pptx").catch(e => { console.error(e); process.exit(1); });
