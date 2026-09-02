// slide-24.js — 3.5.2 碎石路 → 铺装公路
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 24, title: "碎石路 → 铺装公路" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "碎石路 → 铺装公路", C.bgWhite);
    const items = [
      { t: "碎石路（非标定制）", d: "现场临时代码 · 非标配置\n（今天的 Demo）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "铺装公路（平台固化）", d: "抽象成标准模块\n（明天所有客户直接用）", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.6;
      s.addShape("rect", { x, y, w: 4.3, h: 1.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.6, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.4, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.4, h: 0.85, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    s.addShape("rightArrow", { x: 4.98, y: 2.15, w: 0.55, h: 0.4, fill: { color: C.primaryLight } });
    s.addText("反复验证\n抽象回注", { x: 4.52, y: 2.6, w: 0.62, h: 0.6, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
    bigCallout(s, "核心理念：今天客户 A 的定制 → 明天平台的一个配置项 → 后天所有客户的标准能力。但拒绝过早标准化——没跑通就抽象，只会做出搁板软件。", 3.85, 0.7);
  }
};
