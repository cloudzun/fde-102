// slide-13.js — 3.3.1 Prototype 原型期
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 13, title: "Prototype 原型期" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Prototype 原型期——快速证明价值，让决策层信", C.bgWhite);
    s.addShape("rect", { x: 0.6, y: 1.25, w: 8.8, h: 0.7, fill: { color: C.bgGreen } });
    s.addShape("rect", { x: 0.6, y: 1.25, w: 0.05, h: 0.7, fill: { color: C.green } });
    s.addText("照任务书，Delta 快速做出三个可跑 Demo（各配 Streamlit 验证面板）。", {
      x: 0.85, y: 1.25, w: 8.3, h: 0.7, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    const items = [
      { t: "诉求分类器", d: "一次 LLM 调用", sub: "实操二 · Ch8" },
      { t: "政策问答 RAG", d: "可溯源问答", sub: "实操三 · Ch10" },
      { t: "工单分级工作流", d: "固定路由", sub: "实操四 · Ch12" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 2.15;
      s.addShape("rect", { x, y, w: 2.85, h: 1.4, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.6, w: 2.85, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
      s.addText(it.sub, { x, y: y + 1.0, w: 2.85, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
    });
    calloutBar(s, "作用：最小代价证明最大价值——让决策层亲眼看到价值，而不是三个月后才发现没人要。", 3.85);
    calloutBar(s, "职能：Delta 主导 + Echo 辅助（讲 Demo、对齐验收口径）→ 可跑 Demo + 验收记录。", 4.5, C.bgAmber, C.accentWarm);
    s.addText("本书原型期 = 实操二三四。", { x: 0.6, y: 5.15, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
