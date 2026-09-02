// mermaid-themefix.js —— 修复 Material 主题下 mermaid 深色节点文字"深底深字"看不清
//
// 根因（已从 Material bundle 源码确认）：
//   1. Material 把 mermaid 渲染结果塞进 attachShadow({mode:"closed"})（封闭 Shadow DOM），
//      页面级 CSS（extra.css）与 document.querySelectorAll 都无法作用/穿透到 SVG 内部；
//   2. Material 通过 mermaid.initialize({ themeCSS: Xn }) 注入深色 label 规则
//      .label{color/fill:var(--md-mermaid-label-fg-color)}（深色常量，不带 !important），
//      把深色填充节点上本应为白字的文字染成深色 → 看不清。
//
// 修法：包装 mermaid.initialize，把我们的覆盖规则**追加进 themeCSS**。
//       mermaid 会把 themeCSS 写进生成 SVG 的 <style>（位于 Shadow DOM 内），
//       这是唯一能作用于 Shadow DOM 内部元素的通道。规则带 !important 且选择器
//       只命中"深色填充节点"，可压过 Material 那条不带 !important 的规则；
//       浅色填充节点不受影响（保持 Material 的深色字，浅底深字正常）。
(function () {
  if (typeof window === 'undefined' || !window.mermaid) return;

  // 深色填充 -> 强制该节点 .label 及其内部所有文本为白字（color 与 fill 双保险）。
  // [style*="..." i] 大小写不敏感（ch6 用 #7B5EA7 大写）。`:scope` 不适用，用 ~ 兄弟选择器。
  var DARK_FILLS = ['#3949ab', '#1a237e', '#2e6ba8', '#7b5ea7', '#907bb5', '#e45756'];
  var selectors = DARK_FILLS.map(function (f) {
    return '.node rect[style*="fill:' + f + '" i]~.label,' +
           '.node rect[style*="fill:' + f + '" i]~.label *';
  });
  var EXTRA_THEME_CSS = selectors.join(',') + '{color:#fff !important;fill:#fff !important;}';

  var orig = window.mermaid.initialize;
  if (typeof orig !== 'function') return;

  window.mermaid.initialize = function (config) {
    var cfg = config || {};
    // 先转小写以便大小写不敏感判断（避免 Material 或我们自己重复追加）
    var existing = (cfg.themeCSS || '');
    if (existing.indexOf('mermaid-themefix') === -1) {
      cfg.themeCSS = existing + '\n/* mermaid-themefix */' + EXTRA_THEME_CSS;
    }
    return orig.call(window.mermaid, cfg);
  };
})();
