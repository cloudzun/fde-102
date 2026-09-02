// KaTeX 公式渲染（配合 pymdownx.arithmatex generic）
// 教材公式为 $...$（行内）与 $$...$$（独立），如 2.3 经验曲线 Cₙ=C₁·n⁻ᵅ
document$.subscribe(({ body }) => {
  renderMathInElement(body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    throwOnError: false
  });
});
