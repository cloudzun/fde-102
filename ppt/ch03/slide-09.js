// slide-10.js — 3.3 四阶段总览（图 3-4）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 10, title: "四阶段总览" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "四阶段：发现 → 原型 → 构建 → 扩展", C.bgLight);
    const items = [
      { t: "Discovery", tag: "发现", d: "先找对问题", fill: C.bgBlue, strip: C.primary },
      { t: "Prototype", tag: "原型", d: "快速证明", fill: C.bgGreen, strip: C.green },
      { t: "Build", tag: "构建", d: "做实做稳", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Scale", tag: "扩展", d: "放大复制", fill: "EDEAF6", strip: "907BB5" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.55;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.16, w: 2.1, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.95, w: 2.1, h: 0.45, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.6, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addText("阶段之间由 Stage Gate 把关：拿“通过证据”过检查，过不了就返回、补证据、降范围或终止。", {
      x: 0.6, y: 3.6, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("术语：四阶段为业界通用提炼（非 Palantir 官方术语）；Stage Gate 为教材提炼的工程管理实践。", {
      x: 0.6, y: 4.15, w: 8.8, h: 0.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
