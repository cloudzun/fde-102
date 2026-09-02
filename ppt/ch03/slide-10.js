// slide-11.js — 3.3.1 西岭走四阶段（图 3-5）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 11, title: "西岭走四阶段" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一个项目走四阶段：西岭市民服务平台", C.bgWhite);
    const bands = [
      { t: "Discovery", d: "找对问题", role: "Echo", out: "《解决方案框架》", fill: C.bgBlue, strip: C.primary },
      { t: "Prototype", d: "快速证明", role: "Delta + Echo", out: "可跑 Demo", fill: C.bgGreen, strip: C.green },
      { t: "Build", d: "能上生产", role: "Delta", out: "生产级系统", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Scale", d: "沉淀能力", role: "全团队", out: "自运营 + 回注", fill: "EDEAF6", strip: "907BB5" },
    ];
    bands.forEach((g, i) => {
      const y = 1.4 + i * 0.92;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.82, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.82, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.85, y, w: 1.8, h: 0.82, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 2.8, y, w: 1.8, h: 0.82, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.role, { x: 4.7, y, w: 1.9, h: 0.82, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(g.out, { x: 6.7, y, w: 2.5, h: 0.82, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "Echo 找对问题 → Delta 快速证明 / 做实做稳 → 全团队放大与回注。本书五个实操就是这条线的浓缩。", 5.1);
  }
};
