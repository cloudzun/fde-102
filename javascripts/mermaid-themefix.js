// mermaid-themefix.js —— 修复 Material 主题下 mermaid 深色节点文字"深底深字"看不清
//
// 根因（已从 Material bundle 源码与 mermaid 11.16.1 实际渲染结果双向确认）：
//   1. Material 把 mermaid 渲染结果塞进 attachShadow({mode:"closed"})（封闭 Shadow DOM），
//      页面级 CSS（extra.css）与 document.querySelectorAll 都无法作用/穿透到 SVG 内部；
//   2. Material 通过 mermaid.initialize({ themeCSS: Xn }) 注入规则
//        .node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);…}
//        .label{color:var(--md-mermaid-label-fg-color);…}
//        .nodeLabel,.nodeLabel p{color:var(--md-mermaid-label-fg-color);…}
//      mermaid 会把源码里的 `style X fill:#3949ab,color:#fff` 内联成
//        <g class="label" style="color:#fff !important">…<span class="nodeLabel" style="color:#fff !important"><p>文本</p>
//      但内联样式只作用于元素自身——**内层 <p> 没有内联色**，于是命中 Material 的
//      `.nodeLabel p{color:深色}`（该规则带选择器特异性，胜过从父级继承的白字）→ 文字变深色。
//
// 修法：包装 mermaid.initialize，把我们的覆盖规则**追加进 themeCSS**。
//       mermaid 会把 themeCSS 写进生成 SVG 的 <style>（位于 Shadow DOM 内），
//       这是唯一能作用于 Shadow DOM 内部元素的通道。规则带 !important，选择器命中
//       "深色填充节点的 .label 及其全部后代（含 <p>）"，可压过 Material 那条不带 !important 的规则；
//       浅色填充节点不受影响（保持 Material 的深色字，浅底深字正常）。
//
// 形状覆盖（2026-09 修复）：**节点形状不只是 rect**——决策节点是 <polygon>，
//   还有 <circle> / <ellipse> / <path>。此前只列出 rect，导致
//   第 13 章 图 13-1 q0、图 13-2 M，第 15 章 图 15-2 G 等"深底菱形"仍是深底深字。
//   已用 jsdom + 本仓 vendored mermaid 11.16.1 逐形状实测：rect / polygon / circle
//   的 label 结构一致（形状元素与 <g class="label"> 同为 .node 的子元素且后者在后），
//   故统一用"形状 ~ .label"兄弟选择器；另附 :has() 兜底规则应对版本差异。
(function () {
  if (typeof window === 'undefined' || !window.mermaid) return;

  // 深色填充 -> 强制该节点 .label 及其内部所有文本为白字（color 与 fill 双保险）。
  // [style*="..." i] 大小写不敏感（第 6 章用 #7B5EA7 大写）。
  var DARK_FILLS = ['#3949ab', '#1a237e', '#2e6ba8', '#7b5ea7', '#907bb5', '#e45756'];
  // mermaid flowchart 的节点形状元素（rect=矩形/圆角/体育场，polygon=菱形，circle/ellipse/path 等）
  var SHAPES = ['rect', 'polygon', 'circle', 'ellipse', 'path'];

  var DECL = '{color:#fff !important;fill:#fff !important;}';

  // 规则一：形状元素与 .label 是兄弟（mermaid 11.x 实际结构，已逐形状实测）
  var sibling = [];
  // 规则二：:has() 兜底（.label 不是形状的后继兄弟时也能命中）。
  //   单独成规则——不支持 :has() 的浏览器只会丢弃这一条，不会连带废掉规则一。
  var hasFallback = [];

  DARK_FILLS.forEach(function (f) {
    var fill = '[style*="fill:' + f + '" i]';
    SHAPES.forEach(function (tag) {
      sibling.push('.node ' + tag + fill + '~.label', '.node ' + tag + fill + '~.label *');
      var node = '.node:has(>' + tag + fill + ')';
      hasFallback.push(node + ' .label', node + ' .label *');
    });
  });

  var EXTRA_THEME_CSS =
    '\n/* mermaid-themefix */' +
    sibling.join(',') + DECL +
    hasFallback.join(',') + DECL;

  var orig = window.mermaid.initialize;
  if (typeof orig !== 'function') return;

  window.mermaid.initialize = function (config) {
    var cfg = config || {};
    var existing = (cfg.themeCSS || '');
    if (existing.indexOf('mermaid-themefix') === -1) {
      cfg.themeCSS = existing + EXTRA_THEME_CSS;
    }
    return orig.call(window.mermaid, cfg);
  };
})();
