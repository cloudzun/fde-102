// mermaid-contrast.js —— 修复 Material 主题覆盖 mermaid 节点文字色导致的深底深字看不清问题
// 原理：Material 注入 `.label{color:var(--md-mermaid-label-fg-color)}`（深色），
//       在深色填充的节点上会把白字覆盖成深字。此脚本对每个 mermaid 节点，
//       读取其填充色，若为深色则把该节点标签文字强制为白字（用 inline style 覆盖）。
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
    return lum < 0.28; // 亮度低于阈值视为深色
  }

  function fix(node) {
    if (!(node instanceof SVGElement)) return;
    var rect = node.querySelector('rect.basic, rect, ellipse, polygon, path');
    if (!rect) return;
    var fillMatch = (rect.getAttribute('style') || '').match(/fill:\s*?(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/);
    if (!fillMatch) return;
    var fill = fillMatch[1];
    var hex = fill.replace(/rgba?\([^)]+\)/, '');
    // 只处理能被 isDark 识别的 hex 深色
    if (/^#/.test(fill) && isDark(fill)) {
      var label = node.querySelector('.label');
      if (label) {
        label.setAttribute('style', 'color:#fff !important');
        var span = label.querySelector('span');
        if (span) span.setAttribute('style', 'color:#fff !important');
        var div = label.querySelector('foreignObject div');
        if (div) div.setAttribute('style', (div.getAttribute('style') || '') + ';color:#fff !important');
      }
    }
  }

  function run() {
    document.querySelectorAll('.mermaid svg .node').forEach(fix);
  }

  // Material 用 mermaid.initialize + mermaid.run 渲染，通常在 DOMContentLoaded 后异步完成
  // 延迟执行并在必要时轮询，覆盖异步渲染
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 300); });
  } else {
    setTimeout(run, 300);
  }
  // 兜底：间隔轮询一段短时间，确保异步渲染的节点也被处理
  var tries = 0;
  var iv = setInterval(function () {
    run();
    if (++tries > 20) clearInterval(iv);
  }, 500);
})();
