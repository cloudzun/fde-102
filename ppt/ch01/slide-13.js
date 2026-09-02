// slide-15.js — 1.4 最短闭环 + 方法论是形、工程师是神
const { C, sectionTitle, bigCallout, calloutBar, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "callout", index: 15, title: "最短闭环与内核" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "为什么三位一体", C.bgLight);
    // 最短闭环（横向 4 步，元素≤4 允许水平）
    const steps = ["发现问题", "定义问题", "做出方案", "落地验证"];
    steps.forEach((st, i) => {
      const x = 0.6 + i * 2.3;
      s.addShape("rect", { x, y: 1.4, w: 2.0, h: 0.7, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
      s.addText(st, { x, y: 1.4, w: 2.0, h: 0.7, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.05, y: 1.62, w: 0.25, h: 0.28, fill: { color: C.primaryLight } });
    });
    s.addText("一个人 / 一个小队走完完整闭环——无需售前、实施、交付间反复交接翻译。", {
      x: 0.6, y: 2.35, w: 8.8, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    bigCallout(s, "“方法论是形，工程师是神”——三重角色融合 ≠ 让 FDE 变咨询顾问。", 3.0, 0.65);
    s.addText("FDE 能成立，正因为它是一群能写生产级代码的真工程师——把方法论交给不会写代码的角色落地，就会退化成 PPT 咨询。", {
      x: 0.6, y: 3.85, w: 8.8, h: 0.8, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "FDECore 的引擎：“人肉反向传播”——平台能力靠一个个种子项目反复喂反馈、逐轮收敛。", 4.8);
  }
};
