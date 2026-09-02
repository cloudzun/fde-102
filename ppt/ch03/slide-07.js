// slide-08.js — 3.2.2 协作模式（图 3-3）
const { C, sectionTitle, numBadge } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 8, title: "Echo / Delta 协作" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "协作模式：本书最重要的分工关系", C.bgWhite);
    s.addShape("rect", { x: 0.6, y: 1.4, w: 3.8, h: 1.0, fill: { color: C.bgAmber }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.4, w: 0.06, h: 1.0, fill: { color: C.accentWarm } });
    s.addText("Echo（判断）", { x: 0.85, y: 1.48, w: 3.4, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
    s.addText("挖需求 → 出《解决方案框架》", { x: 0.85, y: 1.85, w: 3.4, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    s.addShape("rect", { x: 5.6, y: 1.4, w: 3.8, h: 1.0, fill: { color: C.bgBlue }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 5.6, y: 1.4, w: 0.06, h: 1.0, fill: { color: C.primary } });
    s.addText("Delta（施工）", { x: 5.85, y: 1.48, w: 3.4, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
    s.addText("照图施工 → 可跑 Demo → 能力回注", { x: 5.85, y: 1.85, w: 3.4, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    s.addShape("rightArrow", { x: 4.55, y: 1.62, w: 0.9, h: 0.4, fill: { color: C.primaryLight } });
    s.addText("任务书", { x: 4.55, y: 1.15, w: 0.9, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
    s.addShape("line", { x: 3.7, y: 2.75, w: 3.6, h: 0, line: { color: C.green, width: 1.5, beginArrowType: "triangle" } });
    s.addText("能力回注", { x: 4.65, y: 2.8, w: 1.4, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.green, align: "center", margin: 0 });
    const rows = [
      { t: "分工解耦", d: "Echo 管做什么、Delta 管怎么做" },
      { t: "战斗力整合", d: "同单元 · 无缝交接" },
      { t: "分工哲学", d: "人能判断、AI 能执行" },
    ];
    rows.forEach((r, i) => {
      const y = 3.35 + i * 0.62;
      numBadge(s, 0.7, y + 0.05, i + 1);
      s.addText(r.t, { x: 1.35, y, w: 1.7, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(r.d, { x: 3.2, y, w: 6.0, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("训练模式：判断型实操（Ch6/16）关键判断不用 AI；AI 施工实操（Ch8/10/12）用 opencode + gstack。", {
      x: 0.6, y: 5.3, w: 8.8, h: 0.25, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
