// slide-14.js — 3.3.1 Build 构建期 + Scale 扩展期
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 14, title: "Build 与 Scale" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Build 构建期 · Scale 扩展期", C.bgLight);
    const cards = [
      { t: "Build 构建期", tag: "做实做稳，能上生产", fill: C.bgAmber, strip: C.accentWarm,
        d: ["原型 → 生产级：集成 · 质量 · 合规 · 上线", "Demo 能演示，生产要能天天用、出事有人负责", "Delta 主导 → 生产级系统 + 质量报告"] },
      { t: "Scale 扩展期", tag: "放大复制，沉淀能力", fill: "EDEAF6", strip: "907BB5",
        d: ["跨部门推广 + 客户自运营", "能力回注：分类器 → 通用组件，回注平台", "全团队 → 自运营交接 + 回注清单"] },
    ];
    cards.forEach((c, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.9, fill: { color: c.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.9, fill: { color: c.strip } });
      s.addText(c.t, { x: x + 0.18, y: y + 0.12, w: 4.0, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(c.tag, { x: x + 0.18, y: y + 0.55, w: 4.0, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      c.d.forEach((line, j) => {
        const ly = y + 1.05 + j * 0.6;
        s.addShape("ellipse", { x: x + 0.22, y: ly + 0.16, w: 0.14, h: 0.14, fill: { color: c.strip } });
        s.addText(line, { x: x + 0.45, y: ly, w: 3.7, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, valign: "middle" });
      });
    });
    s.addText("对应：Build → 第 14 章模拟客户环境接入、第 16 章差距评估；Scale → 第 16 章能力回注。", {
      x: 0.6, y: 4.9, w: 8.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
