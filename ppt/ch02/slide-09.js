// slide-09.js — 2.2 适配度 × 复用率（图 2-2 + 分层破解）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 9, title: "适配度 × 复用率" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "破解“适配 × 复用”二选一悖论", C.bgLight);
    const items = [
      { t: "标准 SaaS", d: "低适配 · 高复用\n一套代码服务所有客户\n客户削足适履", fill: C.bgBlue, strip: C.primary },
      { t: "项目外包", d: "高适配 · 低复用\n完全按客户需求定制\n几乎零复用", fill: C.bgAmber, strip: C.accentWarm },
      { t: "FDE + 平台", d: "高适配 · 高复用\n平台保复用 + 现场定制保适配", fill: C.bgGreen, strip: C.green, big: true },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 2.85, h: 1.65, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.58, w: 2.55, h: 0.95, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
    });
    s.addText("FDE 的分层破解：平台底座（保复用）＋ 现场定制集成（保适配）", {
      x: 0.6, y: 3.25, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    const layers = [
      { t: "底层约 70% 靠平台", d: "数据引擎、本体层、通用组件标准化、跨客户复用——贡献复用率", fill: C.bgBlue, strip: C.primary },
      { t: "上层约 30% 靠现场定制", d: "贴合每个客户的具体流程、数据、界面——贡献适配度", fill: C.bgAmber, strip: C.accentWarm },
      { t: "30% 不白写：回注平台", d: "通用部分回注为平台能力，下一个客户的“70%”变 75%、80%——复用率动态上升", fill: C.bgGreen, strip: C.green },
    ];
    layers.forEach((g, i) => {
      const y = 3.7 + i * 0.48;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.44, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.44, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.85, y, w: 2.9, h: 0.44, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 3.9, y, w: 5.3, h: 0.44, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "上述 70% / 30% 比例均为教材教学假设（示意）——真正关键是“复用率本身是动态上升的”。", 5.18);
  }
};
