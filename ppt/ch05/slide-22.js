// slide-24.js — 5.7.1 把大需求拆成子场景（图 5-6）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 24, title: "拆解子场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "把模糊大需求拆成子场景", C.bgWhite);
    s.addShape("rect", { x: 2.6, y: 1.35, w: 4.8, h: 0.7, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("一句模糊大需求：把整个平台都智能化", { x: 2.6, y: 1.35, w: 4.8, h: 0.7, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    const subs = [
      { t: "子场景 A", d: "诉求智能分类", fill: C.bgBlue, strip: C.primary },
      { t: "子场景 B", d: "政策智能问答", fill: C.bgGreen, strip: C.green },
      { t: "子场景 C", d: "工单智能分流", fill: C.bgAmber, strip: C.accentWarm },
    ];
    subs.forEach((g, i) => {
      const x = 0.9 + i * 2.9;
      const y = 2.6;
      s.addShape("line", { x: 5.0, y: 2.05, w: 0, h: 0.55, line: { color: C.primaryLight, width: 1.5 } });
      s.addShape("rect", { x, y, w: 2.6, h: 1.2, fill: { color: g.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.6, h: 0.06, fill: { color: g.strip } });
      s.addText(g.t, { x, y: y + 0.12, w: 2.6, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(g.d, { x, y: y + 0.55, w: 2.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.primary, align: "center", margin: 0 });
    });
    calloutBar(s, "每个子场景记清三件事：解决什么问题 · 用户是谁 · 成功怎么衡量（可数指标，如准确率 ≥95%）——这决定 Prototype 验收口径。", 4.3, C.bgBlue, C.primary);
    s.addText("*图 5-6：把“模糊大需求”拆成可施工的子场景*", { x: 0.6, y: 5.0, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
