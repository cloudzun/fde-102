#!/usr/bin/env node
/**
 * mermaid-dark-node-check.js —— mermaid「深底深字」回归检查
 *
 * 为什么需要它：
 *   本书大量 mermaid 节点用自定义深色填充（#3949ab 等）配白字。Material for MkDocs 会把
 *   mermaid 渲染结果放进 attachShadow({mode:"closed"})，并在 themeCSS 里注入
 *     .nodeLabel,.nodeLabel p{color:var(--md-mermaid-label-fg-color)}   ← 深色
 *   mermaid 只把 `style X ... color:#fff` 内联到 <g class="label"> / <span class="nodeLabel">，
 *   **内层 <p> 没有内联色**，于是命中 Material 那条规则 → 深底 + 深字，肉眼几乎不可读。
 *   项目用 javascripts/mermaid-themefix.js 追加 themeCSS 强制深色节点标签为白字。
 *
 *   该修复按「节点形状」写选择器，因此**任何形状漏写都会复现同一类线上问题**
 *   （例如 v1 只写了 rect，导致 <polygon> 决策节点在第 13/15 章深底深字）。
 *   本脚本就是防这个回归：它不读文案、不比对截图，而是把每张图真渲染一遍，
 *   按填充亮度找出所有"深底"节点，再用真实 CSS 层叠算出文字最终颜色。
 *
 * 检查内容（全书 16 章所有 ```mermaid 块）：
 *   1. 渲染每张图，按 sRGB 相对亮度 < 0.28 判定"深色填充节点"；
 *   2. 对每个深色节点，用 jsdom 的 getComputedStyle 求文字元素的计算色；
 *   3. 要求为 rgb(255,255,255)（color 或 fill 任一为白即通过，兼容 HTML / SVG 两种标签模式）；
 *   4. 任一深色节点不是白字 → 退出码 1。
 *
 * 用法：
 *   node scripts/mermaid-dark-node-check.js               # 检查（读取实际发布的 themefix 与 Material 真实 themeCSS）
 *   node scripts/mermaid-dark-node-check.js --nofix       # 基线/灵敏度自检：不注入 themefix，应报出全部深色节点
 *   node scripts/mermaid-dark-node-check.js --verbose     # 逐条列出每个深色节点及其文字色
 *
 * 前置：
 *   1. 依赖 jsdom —— 首次使用在 scripts/ 下执行 `npm install`；
 *   2. Material 的真实 themeCSS 从 `site/assets/javascripts/bundle.*.js` 提取，
 *      因此建议先跑 `mkdocs build`；若 site/ 不存在则回退到内置的最小规则集（会打印提示，
 *      该回退集含关键的 `.nodeLabel p` 规则，检查仍然有效）。
 *
 * 说明：mermaid 主题色与 Material 版本升级后都应重跑本脚本。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);
const TEXTBOOK = path.join(ROOT, 'textbook');
const MERMAID_JS = path.join(ROOT, 'assets', 'vendor', 'mermaid.min.js');
const THEMEFIX_JS = path.join(ROOT, 'javascripts', 'mermaid-themefix.js');

const ARGS = process.argv.slice(2);
const NOFIX = ARGS.includes('--nofix');
const VERBOSE = ARGS.includes('--verbose');

// 深色判定阈值：sRGB 相对亮度低于此值视作"深底"，需要白字
const DARK_LUMA = 0.28;

// site/ 不存在时使用的 Material themeCSS 最小子集（保留导致深底深字的关键规则）
const FALLBACK_MATERIAL_CSS = [
  '.node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}',
  '.label{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}',
  '.nodeLabel,.nodeLabel p{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}',
].join('');

// ---------------------------------------------------------------- 依赖

function loadJsdom() {
  const candidates = [
    path.join(__dirname, 'node_modules', 'jsdom'),
    path.join(ROOT, 'node_modules', 'jsdom'),
  ];
  for (const c of candidates) {
    try { return require(c); } catch (e) { /* 继续找 */ }
  }
  console.error('[FATAL] 缺少依赖 jsdom。首次使用请执行：\n    cd scripts && npm install');
  process.exit(2);
}

// ---------------------------------------------------------------- 素材

/** 从 Material bundle 里取出它注入的 themeCSS（变量名 Xn） */
function loadMaterialCss() {
  const dir = path.join(ROOT, 'site', 'assets', 'javascripts');
  if (!fs.existsSync(dir)) return { css: FALLBACK_MATERIAL_CSS, source: '内置回退（未找到 site/，建议先 mkdocs build）' };
  const bundle = fs.readdirSync(dir).find(n => /^bundle\..+\.js$/.test(n));
  if (!bundle) return { css: FALLBACK_MATERIAL_CSS, source: '内置回退（site/ 下无 bundle.*.js）' };
  const t = fs.readFileSync(path.join(dir, bundle), 'utf8');
  const i = t.indexOf('var Xn="');
  if (i < 0) return { css: FALLBACK_MATERIAL_CSS, source: '内置回退（bundle 中未找到 Xn）' };
  const j = t.indexOf('"', i + 8);
  return { css: t.slice(i + 8, j), source: 'site/assets/javascripts/' + bundle };
}

/** 执行真实的 javascripts/mermaid-themefix.js，捕获它追加进 themeCSS 的规则 */
function loadThemefixCss() {
  const src = fs.readFileSync(THEMEFIX_JS, 'utf8');
  const MARK = '__MATERIAL_THEMECSS__';
  let captured = null;
  const fakeWindow = { mermaid: { initialize(cfg) { captured = cfg.themeCSS; } } };
  new Function('window', src)(fakeWindow);
  fakeWindow.mermaid.initialize({ themeCSS: MARK });
  if (typeof captured !== 'string' || captured.indexOf(MARK) !== 0) {
    throw new Error('未能从 mermaid-themefix.js 捕获 themeCSS（脚本结构可能已变）');
  }
  return captured.slice(MARK.length);
}

// ---------------------------------------------------------------- 颜色

function luminance(hex) {
  const h = hex.replace('#', '');
  const f = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const v = [0, 2, 4].map(i => parseInt(f.slice(i, i + 2), 16) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}

const isWhite = (v) => /^rgba?\(255,\s*255,\s*255(,\s*1)?\)$/.test((v || '').trim());

// ---------------------------------------------------------------- 渲染

function makeWindow(JSDOM, mermaidSrc, themefixCss) {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    runScripts: 'dangerously', pretendToBeVisual: true,
  });
  const { window } = dom;
  // mermaid 布局需要的最小 SVG 度量 shim + Node 全局（pie 等图形需要 TextEncoder）
  const proto = window.SVGElement.prototype;
  proto.getBBox = () => ({ x: 0, y: 0, width: 120, height: 32 });
  proto.getComputedTextLength = () => 60;
  proto.getScreenCTM = () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, inverse() { return this; }, multiply() { return this; } });
  window.Element.prototype.getBBox = window.Element.prototype.getBBox || (() => ({ x: 0, y: 0, width: 120, height: 32 }));
  if (typeof window.TextEncoder === 'undefined' && typeof TextEncoder !== 'undefined') {
    window.TextEncoder = TextEncoder;
    window.TextDecoder = TextDecoder;
  }
  const inject = (code) => {
    const s = window.document.createElement('script');
    s.textContent = code;
    window.document.head.appendChild(s);
  };
  inject(mermaidSrc);
  if (themefixCss) {
    // 用捕获到的规则直接注入（等价于加载 mermaid-themefix.js，但不重复执行包装逻辑）
    inject('window.mermaid.initialize=(function(o){return function(c){c=c||{};' +
      'c.themeCSS=(c.themeCSS||"")+' + JSON.stringify(themefixCss) + ';' +
      'return o.call(window.mermaid,c);};})(window.mermaid.initialize);');
  }
  return window;
}

/** 找出图里所有"深色填充"节点，返回 [{shape, fill, text, color, fillColor, ok}] */
function inspect(doc, w) {
  const out = [];
  for (const node of doc.querySelectorAll('g.node')) {
    const shape = node.querySelector('rect, polygon, circle, ellipse, path');
    if (!shape) continue;
    const m = (shape.getAttribute('style') || '').match(/fill:\s*(#[0-9a-fA-F]{6})/);
    if (!m) continue;
    if (luminance(m[1]) >= DARK_LUMA) continue;              // 浅底跳过
    const target = node.querySelector('.nodeLabel p') || node.querySelector('.nodeLabel') ||
                   node.querySelector('p') || node.querySelector('text') || node.querySelector('.label');
    if (!target) continue;
    const st = w.getComputedStyle(target);
    out.push({
      shape: shape.tagName,
      fill: m[1],
      text: (node.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 24),
      color: st.color,
      fillColor: st.fill,
      ok: isWhite(st.color) || isWhite(st.fill),
    });
  }
  return out;
}

// ---------------------------------------------------------------- 主流程

(async () => {
  const { JSDOM } = loadJsdom();

  if (!fs.existsSync(MERMAID_JS)) { console.error('[FATAL] 找不到 ' + MERMAID_JS); process.exit(2); }
  if (!fs.existsSync(THEMEFIX_JS)) { console.error('[FATAL] 找不到 ' + THEMEFIX_JS); process.exit(2); }

  const mermaidSrc = fs.readFileSync(MERMAID_JS, 'utf8');
  const material = loadMaterialCss();
  const themefixCss = NOFIX ? null : loadThemefixCss();

  console.log('mermaid        : ' + path.relative(ROOT, MERMAID_JS));
  console.log('themefix       : ' + (NOFIX ? '未注入（--nofix 基线模式）' : path.relative(ROOT, THEMEFIX_JS)));
  console.log('Material CSS   : ' + material.source);

  const files = fs.readdirSync(TEXTBOOK).filter(f => f.startsWith('第') && f.endsWith('.md')).sort();
  let blocks = 0, skipped = 0, darkTotal = 0;
  const byShape = {};
  const failures = [];
  const details = [];

  for (const file of files) {
    const md = fs.readFileSync(path.join(TEXTBOOK, file), 'utf8');
    const sources = [...md.matchAll(/```mermaid\r?\n([\s\S]*?)```/g)].map(m => m[1]);
    if (!sources.length) continue;

    const window = makeWindow(JSDOM, mermaidSrc, themefixCss);
    window.mermaid.initialize({ startOnLoad: false, themeCSS: material.css });

    for (let i = 0; i < sources.length; i++) {
      blocks++;
      let svg;
      try {
        ({ svg } = await window.mermaid.render('chk' + Math.random().toString(36).slice(2), sources[i]));
      } catch (e) {
        skipped++;
        if (VERBOSE) console.log(`  [跳过] ${file} 块${i + 1}：${(e && e.message || '').slice(0, 60)}`);
        continue;
      }
      // 把 SVG 自带 <style> 挪到 HTML <style>，交给 jsdom 做层叠计算
      const svgCss = [...svg.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
      const doc = new JSDOM(`<!DOCTYPE html><html><head><style>${svgCss}</style></head><body>${svg}</body></html>`,
        { pretendToBeVisual: true });

      for (const r of inspect(doc.window.document, doc.window)) {
        darkTotal++;
        byShape[r.shape] = (byShape[r.shape] || 0) + 1;
        if (VERBOSE) details.push(`  ${r.ok ? 'ok ' : '✗  '} ${file} <${r.shape}> fill=${r.fill} "${r.text}" -> color=${r.color} fill=${r.fillColor}`);
        if (!r.ok) failures.push(`${file} 块${i + 1} <${r.shape}> fill=${r.fill} "${r.text}" -> color=${r.color} / fill=${r.fillColor}`);
      }
    }
  }

  console.log('');
  console.log(`mermaid 图块      : ${blocks}（jsdom 无法渲染 ${skipped}，多为 pie 等非 flowchart 图）`);
  console.log(`深色填充节点      : ${darkTotal}` + (darkTotal ? `  按形状 ${JSON.stringify(byShape)}` : ''));
  console.log(`文字非白色的节点  : ${failures.length}`);
  if (VERBOSE && details.length) console.log('\n--- 明细 ---\n' + details.join('\n'));
  if (failures.length) {
    console.log('\n--- 失败明细 ---');
    failures.forEach(f => console.log('  ✗ ' + f));
    console.log('\n提示：深色节点形状可能未被 javascripts/mermaid-themefix.js 的 themeCSS 覆盖。');
    console.log('      该文件里 SHAPES 需列出全部形状（rect / polygon / circle / ellipse / path）。');
    process.exit(1);
  }
  console.log('\n✓ 所有深色填充节点均为白字。');
})().catch(e => { console.error('[FATAL] ' + (e && e.stack || e)); process.exit(2); });
