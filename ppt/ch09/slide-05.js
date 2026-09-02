// slide-05.js — 9.1.2 三步原理（图 9-3）+ 组件地图
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 5, title: "三步工作原理" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "RAG 三步工作原理", C.bgLight);
    const steps = [
      { t: "1 检索", d: "问题变查询\n找最相关 K 个片段", fill: C.bgBlue, strip: C.primary },
      { t: "2 增强", d: "片段 + 问题\n组装提示词", fill: C.bgAmber, strip: C.accentWarm },
      { t: "3 生成", d: "LLM 基于片段作答\n标注出处", fill: C.bgGreen, strip: C.green },
    ];
    steps.forEach((st, i) => {
      const x = 0.7 + i * 2.75;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.4, h: 1.5, fill: { color: st.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.4, h: 0.06, fill: { color: st.strip } });
      s.addText(st.t, { x, y: y + 0.14, w: 2.4, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(st.d, { x: x + 0.12, y: y + 0.6, w: 2.16, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
      if (i < 2) s.addShape("rightArrow", { x: x + 2.43, y: y + 0.55, w: 0.32, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addText("组件 → 本章地图：数据准备与索引（9.3–9.6）· 查询与检索（9.7）· 增强与生成（9.8）· 评估与监控（9.9）", {
      x: 0.6, y: 3.35, w: 8.8, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const comps = [
      { t: "离线一次", d: "解析 → 分块 → 向量化 → 向量库" },
      { t: "在线多次", d: "问题向量化 → top-K 检索 → 组装 → 生成+引用" },
    ];
    comps.forEach((c, i) => {
      const x = 0.6 + i * 4.55;
      const y = 3.9;
      s.addShape("rect", { x, y, w: 4.3, h: 1.0, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.0, fill: { color: i === 0 ? C.accentWarm : C.primary } });
      s.addText(c.t, { x: x + 0.2, y: y + 0.1, w: 3.9, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(c.d, { x: x + 0.2, y: y + 0.48, w: 3.9, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    calloutBar(s, "*图 9-3：检索 → 增强 → 生成*", 5.18);
  }
};
