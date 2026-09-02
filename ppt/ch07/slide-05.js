// slide-05.js — 7.1.3 三个产能瓶颈
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "三个产能瓶颈" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Technology 维度的三个产能瓶颈", C.bgLight);
    const items = [
      { t: "时间瓶颈", d: "客户现场时间有限\n几周内从零做出\n“可演示 + 能上生产”的最小系统", fill: C.bgAmber, strip: C.accentWarm },
      { t: "广度瓶颈", d: "一个 Delta 要覆盖\n数据管道 / 后端 / 前端 / AI / 部署\n人力不可能全栈精通", fill: C.bgBlue, strip: C.primary },
      { t: "复用瓶颈", d: "能力回注四步法要求\n“本次经验”变“下次可复用资产”\n纯手工识别与抽象成本高", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "三者都落在 Technology（器）维度、集中在 Prototype / Build 段——恰是 Delta 的主战场。", 4.3, C.bgAmber, C.accentWarm);
  }
};
