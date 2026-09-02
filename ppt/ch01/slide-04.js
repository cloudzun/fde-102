// slide-04.js — 1.1 三重结构性矛盾（图 1-1 图形化：三矛盾 → FDE）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "三重结构性矛盾" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "一个结构性矛盾：现成软件永远差那么一点", C.bgLight);
    const items = [
      { t: "标准化产物（SaaS 病）", d: "高复用 · 低适配\n复杂痛点够不到\n客户削足适履", fill: C.bgAmber, strip: C.accentWarm },
      { t: "纯定制开发（外包病）", d: "高适配 · 低复用\n每单从头造轮子\n无法规模化盈利", fill: C.bgRed, strip: C.red },
      { t: "核心数据不能出域", d: "越核心越敏感\n现场才是最安全的处理场所\n系统必须私有化部署", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const y = 1.25 + i * 1.28;
      s.addShape("rect", { x: 0.6, y, w: 3.7, h: 1.12, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 1.12, fill: { color: it.strip } });
      s.addText(it.t, { x: 0.85, y: y + 0.08, w: 3.3, h: 0.38, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: 0.85, y: y + 0.46, w: 3.3, h: 0.62, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.12, valign: "top" });
      s.addShape("rightArrow", { x: 4.4, y: y + 0.36, w: 0.85, h: 0.42, fill: { color: C.primaryLight } });
    });
    // FDE 汇聚
    s.addShape("rect", { x: 5.4, y: 1.95, w: 4.0, h: 2.0, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.15 } });
    s.addText("FDE", { x: 5.4, y: 2.15, w: 4.0, h: 0.6, fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", margin: 0 });
    s.addText("平台能力 × 现场定制 × 能力回注", { x: 5.6, y: 2.85, w: 3.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: "D9E0F5", align: "center", margin: 0 });
    s.addText("三重矛盾的同时解法", { x: 5.6, y: 3.35, w: 3.6, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: "C5CDEC", align: "center", margin: 0 });
    s.addText("*图 1-1：FDE 为三重结构性矛盾而生*", { x: 5.4, y: 4.15, w: 4.0, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, align: "center", margin: 0 });
  }
};
