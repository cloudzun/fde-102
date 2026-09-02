// slide-13.js — 7.3 AI Coding 的两半（图 7-4）
const { C, sectionTitle, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 13, title: "AI Coding 的两半" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "AI Coding 的两半", C.bgLight);
    s.addShape("rect", { x: 2.7, y: 1.35, w: 4.6, h: 0.65, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("AI Coding = Delta 释放 AI 潜力的完整手段", { x: 2.7, y: 1.35, w: 4.6, h: 0.65, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    const halves = [
      { t: "驱动层 · Vibe Coding", d: "怎么让 coding agent 听话地写\n描述意图 → 审查判断\n（7.3.2 五原则）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "约束层 · harness（gstack）", d: "写了之后怎么不翻车\n受控执行 · 可验收 · 可追溯\n（7.4 / 7.5）", fill: C.bgGreen, strip: C.green },
    ];
    halves.forEach((h, i) => {
      const x = 0.6 + i * 4.55;
      const y = 2.35;
      s.addShape("rect", { x, y, w: 4.3, h: 1.7, fill: { color: h.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.7, fill: { color: h.strip } });
      s.addText(h.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(h.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 1.0, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
    });
    bigCallout(s, "光有驱动层、没有约束层就是“裸 vibe”——写得快但不可验收、不可追溯。", 4.4, 0.6);
    calloutBar(s, "Vibe Coding 一词由 Karpathy 于 2025 年 2 月提出；gstack 是 harness 类里的一个开源实现（Garry Tan）。", 5.18, C.bgBlue, C.primary);
  }
};
