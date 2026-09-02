// slide-30.js — 9.10 预实验五步
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 30, title: "预实验步骤" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "最小 RAG 预实验（5 步）", C.bgLight);
    const steps = [
      "解析与分块：自拟 3–5 段政策式片段，按条款切成 4–8 个 chunk",
      "向量化：任选一个 embedding（本地 BGE-M3 或托管 API）",
      "检索：2 个库内问题各取 top-1/2，1 个库外问题看结果",
      "组装与生成：按 9.8.1 组装，模型只用片段作答 + 标文号条款",
      "自评：先看检索命中没，再看生成忠不忠实，最后看引用对不对；库外必须拒答",
    ];
    steps.forEach((st, i) => {
      const y = 1.35 + i * 0.78;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(st, { x: 1.35, y, w: 8.0, h: 0.65, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "验收（你自己的 DoD）：库内 2 题都命中、答案有正确出处；库外 1 题拒答不编；能说清“答案错了是检索、生成还是引用的问题”。", 5.15, C.bgBlue, C.primary);
  }
};
