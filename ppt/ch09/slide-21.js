// slide-24.js — 9.8 提示词组装（图 9-6）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 24, title: "提示词组装" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "生成阶段提示词组装", C.bgLight);
    const parts = [
      { t: "系统提示", d: "只用所给片段作答\n不得凭记忆补充", fill: C.bgBlue, strip: C.primary },
      { t: "检索片段", d: "按相关性排序\n建议 3–8 段", fill: C.bgAmber, strip: C.accentWarm },
      { t: "用户问题", d: "本次提问", fill: C.bgGreen, strip: C.green },
    ];
    parts.forEach((p, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.45;
      s.addShape("rect", { x, y, w: 2.85, h: 1.35, fill: { color: p.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: p.strip } });
      s.addText(p.t, { x, y: y + 0.12, w: 2.85, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(p.d, { x: x + 0.12, y: y + 0.55, w: 2.6, h: 0.7, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
      if (i < 2) s.addShape("rightArrow", { x: x + 2.88, y: y + 0.5, w: 0.17, h: 0.28, fill: { color: C.primaryLight } });
    });
    s.addShape("rect", { x: 2.2, y: 3.05, w: 5.6, h: 0.6, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("模型输出：答案 + 引用（文号 · 条款）", { x: 2.2, y: 3.05, w: 5.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    const rules = [
      { t: "只给检索片段，不给全文", d: "塞整本手册 = 退回超长上下文，成本高、易失焦" },
      { t: "片段排序 + 控制数量", d: "top-K 即片段数，政务建议 3–8 段；去重后按相关性从高到低排" },
    ];
    rules.forEach((r, i) => {
      const y = 3.85 + i * 0.55;
      s.addShape("ellipse", { x: 0.7, y: y + 0.14, w: 0.26, h: 0.26, fill: { color: C.primary } });
      s.addText(r.t, { x: 1.1, y, w: 2.6, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(r.d, { x: 3.85, y, w: 5.3, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "系统提示没写死“只用片段作答、不得凭记忆补充”，模型会回归“凭记忆编”——引用就不可信了。", 5.08, C.bgAmber, C.accentWarm);
  }
};
