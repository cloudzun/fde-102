// slide-11.js — 1.3 三层含义（图 1-3 图形化：垂直布局）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 11, title: "FDE 的三层含义" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "FDE 的三层含义", C.bgWhite);
    // 顶层节点
    s.addShape("rect", { x: 1.2, y: 1.3, w: 7.6, h: 0.7, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("FDE 的三层含义", { x: 1.2, y: 1.3, w: 7.6, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    // 三条连线（对准三张卡片中线）
    [2.025, 5.075, 8.125].forEach(x => {
      s.addShape("line", { x, y: 2.0, w: 0, h: 0.45, line: { color: C.primaryLight, width: 1.5 } });
    });
    const items = [
      { t: "岗位（角色）", d: "驻扎客户现场\n串联产品与客户", fill: C.bgAmber, strip: C.accentWarm, sub: "我做的是不是 FDE 的活？" },
      { t: "团队（组织模式）", d: "一组 FDE 组成作战单元\n（Echo/Delta/Engineering）", fill: C.bgBlue, strip: C.primary, sub: "我们团队怎么搭？" },
      { t: "方法论（交付范式）", d: "平台 + 现场定制\n+ 能力回注", fill: C.bgGreen, strip: C.green, sub: "项目该怎么推进？" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 2.45;
      s.addShape("rect", { x, y, w: 2.85, h: 1.75, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.12, w: 2.6, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.55, w: 2.55, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
      s.addText(it.sub, { x: x + 0.15, y: y + 1.35, w: 2.55, h: 0.35, fontSize: 9.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, align: "center", margin: 0 });
    });
    s.addText("*图 1-3：FDE 的三层含义——岗位 / 团队 / 方法论*", { x: 0.6, y: 4.4, w: 8.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, align: "center", margin: 0 });
    calloutBar(s, "三层含义贯穿全书骨架：第 4 章展开“团队”，“方法论”是全书正文核心。", 4.85);
  }
};
