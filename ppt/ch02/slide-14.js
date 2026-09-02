// slide-14.js — 2.3.2 经验曲线公式
const { C, sectionTitle, codeBlock } = require("../common");
module.exports = {
  slideConfig: { type: "formula", index: 14, title: "经验曲线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "经验曲线：FDE 越做越省的经济学规律", C.bgLight);
    // 公式框
    s.addShape("rect", { x: 1.6, y: 1.35, w: 6.8, h: 1.0, fill: { color: "2C3E50" }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("Cₙ = C₁ × n⁻ᵅ", { x: 1.6, y: 1.35, w: 6.8, h: 1.0, fontSize: 34, fontFace: "Consolas", bold: true, color: "DBE4F0", align: "center", valign: "middle", margin: 0 });
    const vars = [
      { t: "Cₙ", d: "交付第 n 个客户的部署成本" },
      { t: "C₁", d: "交付第 1 个客户的极高初始成本（此时 FDE 需大量写非标代码）" },
      { t: "n", d: "累计客户交付数量" },
      { t: "α", d: "学习率参数——由 FDE 团队将非标经验抽象回注给核心平台的速度决定" },
    ];
    vars.forEach((v, i) => {
      const y = 2.6 + i * 0.55;
      s.addText(v.t, { x: 2.2, y, w: 0.9, h: 0.5, fontSize: 14, fontFace: "Consolas", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(v.d, { x: 3.3, y, w: 5.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("经验曲线效应（Experience Curve Effect，源自波士顿咨询总结的行业经验规律）——本书用作解释 FDE“越做越省”的框架，教材提炼、非厂商官方公式。", {
      x: 0.6, y: 4.9, w: 8.8, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
