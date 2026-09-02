// slide-19.js — 7.4.2 SPEC 驱动
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "SPEC 驱动" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "SPEC 驱动：harness 的第一条通用规范", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.7, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.7, fill: { color: C.green } });
    s.addText("动手 build 之前，先写死一份规格（SPEC）——build 阶段不重复讨论技术参数，只严格按 SPEC 实现。", {
      x: 0.85, y: 1.38, w: 8.3, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, valign: "middle"
    });
    const items = [
      { t: "边界（No-Go）", d: "本阶段刻意不做的事——防止自由发挥" },
      { t: "数据模型", d: "输入/输出形状、字段、类型" },
      { t: "验收口径", d: "什么样算成功（如准确率 ≥85%）——防止自己发明验收" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 2.35;
      s.addShape("rect", { x, y, w: 2.85, h: 1.5, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.58, w: 2.55, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "SPEC 是“代码的压缩表示”——写死了，build 就是执行，这正是“施工力”和“随意写代码”的区别。", 4.5, C.bgAmber, C.accentWarm);
  }
};
