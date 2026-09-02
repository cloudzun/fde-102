// mermaid-contrast.js —— 修复 Material 主题覆盖 mermaid 节点文字色导致的"深底深字"看不清问题
//
// 背景：Material 的 mermaid 集成会在 SVG 里注入 `.label{color:var(--md-mermaid-label-fg-color)}`，
// 并把页面文字色设为深色。源码里深色填充节点本意是"白字"（color:#fff），但真实浏览器里
// 显示文字的元素（通常是 <p>）没有继承到 div 上的白色，而直接用了页面深色，于是深底+深字看不清。
//
// 方案：对每个 mermaid 节点，读取其填充色；若为深色，就把该节点标签内【所有】文本元素
// （<p>、<span>、foreignObject 内的 div、以及它们任意后代，含 <br> 分行）递归强制为白字。
// 用 inline style + !important，可压过 Material 那条不带 !important（或低优先级）的 .label 规则。
(function () {
  function isDark(hex) {
    if (!hex) return false;
    hex = hex.trim().replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    if (hex.length !== 6) return false;
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    var lin = function (c) { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    var lum = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return lum < 0.28; // 亮度低于阈值视为深色填充
  }

  function forceWhite(el) {
    if (!el) return;
    // 给元素本体设置 inline 白字
    var existing = el.getAttribute('style') || '';
    if (/**/ /color\s*:/i.test(existing)) {
      // 已有 color，替换成白字并加 important
      el.setAttribute('style', existing.replace(/color\s*:[^;]*/i, '') + ';color:#fff !important');
    } else {
      el.setAttribute('style', existing + (existing ? ';' : '') + 'color:#fff !important');
    }
    // 递归强制所有后代（覆盖 <p>、<p> 内 <br>、任意嵌套）
    Array.prototype.slice.call(el.querySelectorAll('*')).forEach(function (child) {
      if (child.tagName && child.tagName.toLowerCase() === 'style') return; // 忽略 svg 内样式
      var c = child.getAttribute('style') || '';
      if (/color\s*:/i.test(c)) {
        child.setAttribute('style', c.replace(/color\s*:[^;]*/i, '') + ';color:#fff !important');
      } else {
        child.setAttribute('style', c + (c ? ';' : '') + 'color:#fff !important');
      }
    });
  }

  function fix(node) {
    if (!node || typeof node.querySelectorAll !== 'function') return;
    var rect = node.querySelector('rect.basic, rect, ellipse, polygon, path');
    if (!rect) return;
    var fillMatch = (rect.getAttribute('style') || '').match(/fill:\s*?(#[0-9a-fA-F]{3,8})/);
    if (!fillMatch) return;
    var fill = fillMatch[1];
    if (!/^#[0-9a-fA-F]{6}$/.test(fill) || !isDark(fill)) return;
    var label = node.querySelector('.label');
    if (!label) return;
    // 强制 .label 及其全部后代为白字
    forceWhite(label);
    // 某些 mermaid 版本标签在 .label-group / foreignObject 外层，兜底
    forceWhite(node);
  }

  function run() {
    // 遍历所有 mermaid 容器里的 node 组
    var svgNodes = [];
    document.querySelectorAll('.mermaid svg').forEach(function (svg) {
      svg.querySelectorAll('.node').forEach(function (n) { svgNodes.push(n); });
    });
    // 也扫全文档（防 Material 渲染的结构差异）
    if (!svgNodes.length) {
      document.querySelectorAll('.node').forEach(function (n) { svgNodes.push(n); });
    }
    svgNodes.forEach(fix);
  }

  // 首次运行：等 DOM 就绪后延迟，覆盖 mermaid 异步渲染
  function initialRun() { setTimeout(run, 400); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialRun);
  } else {
    initialRun();
  }
  // 兜底轮询：mermaid 常在不同时机渲染，多跑几次确保全部覆盖
  var tries = 0;
  var iv = setInterval(function () {
    run();
    if (++tries > 30) clearInterval(iv);
  }, 500);
})();
