// slide-07.js — 1.2.1 一个激进的决定：定义 + 胶水箴言
const { C, sectionTitle, card, bigCallout, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "一个激进的决定" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "一个激进的决定", C.bgLight);
    s.addText("面对结构性矛盾，Palantir 没有造更通用的标准产品，也没有陷入纯定制，而是——", {
      x: 0.6, y: 1.25, w: 8.8, h: 0.45, fontSize: 14, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    bigCallout(s, "把工程师带着核心平台能力，直接派驻客户现场，做深度定制部署。", 1.8, 0.7);
    s.addText("Forward Deployed Engineer（前沿部署工程师，简称 FDE）", {
      x: 0.6, y: 2.7, w: 8.8, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    card(s, 0.6, 3.35, 8.8, 1.05, C.primary);
    s.addText("“胶水”箴言（业界常见概括）", { x: 0.85, y: 3.45, w: 8.3, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    s.addText("“FDEs are the glue between our products and our customers.”", { x: 0.85, y: 3.82, w: 8.3, h: 0.4, fontSize: 14, fontFace: "Consolas", color: C.textDark, margin: 0 });
    s.addText("（FDE 是连接“我们的产品”与“我们的客户”之间的胶水）", { x: 0.85, y: 4.22, w: 8.3, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
    calloutBar(s, "官方 FDSE 招聘 JD 口径：embedding talented engineers directly with our customers to tackle their most pressing challenges head-on（直接派驻工程师，解决最紧迫挑战）。", 4.95);
  }
};
