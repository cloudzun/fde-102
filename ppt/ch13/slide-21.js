// slide-21.js — 13.4.2 适配五步（图 13-4）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 21, title: "适配五步" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "适配五步：从接口抽象到灰度回滚", C.bgWhite);
    const steps = [
      { t: "1 接口抽象与参数基线", d: "OpenAI 兼容 / 自建适配层；两套参数基线对照" },
      { t: "2 行为回归（冻结基准集）", d: "先测格式与工具，再测业务指标" },
      { t: "3 检索重建与 embedding 回归", d: "场景 B：重建索引 + 命中/拒答回归" },
      { t: "4 量化与精度对照", d: "与公网基线同一基准对照" },
      { t: "5 灰度双轨 → 正式切换", d: "守卫 SLA，退化可回滚" },
    ];
    steps.forEach((g, i) => {
      const y = 1.35 + i * 0.72;
      s.addShape("rect", { x: 1.0, y, w: 7.2, h: 0.6, fill: { color: i === 4 ? C.primary : C.bgCard } });
      s.addShape("rect", { x: 1.0, y, w: 0.06, h: 0.6, fill: { color: i === 4 ? C.primary : C.primary } });
      s.addText(g.t, { x: 1.25, y, w: 3.5, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: i === 4 ? C.textLight : C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.9, y, w: 3.0, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: i === 4 ? C.textLight : C.textDark, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("line", { x: 4.6, y: y + 0.6, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    s.addShape("line", { x: 9.3, y: 2.15, w: 0, h: 2.6, line: { color: C.red, width: 1.5, beginArrowType: "triangle" } });
    s.addText("回滚：切回旧权重/adapter/索引", { x: 8.35, y: 2.4, w: 1.5, h: 1.0, fontSize: 9.5, fontFace: "Microsoft YaHei", bold: true, color: C.red, align: "center", margin: 0, lineSpacingMultiple: 1.15 });
    calloutBar(s, "顺序不跳、退化可回退：观察期退化 → 回滚 → 修复后重走 2–5 步。", 5.08, C.bgAmber, C.accentWarm);
  }
};
