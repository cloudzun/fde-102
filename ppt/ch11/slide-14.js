// slide-15.js — 11.4.2 三路分流图（图 11-3）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 15, title: "三路分流" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Router 三路分流", C.bgWhite);
    s.addShape("rect", { x: 3.4, y: 1.35, w: 3.2, h: 0.6, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 } });
    s.addText("工单 / 请求进入", { x: 3.4, y: 1.35, w: 3.2, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    s.addShape("rect", { x: 3.4, y: 2.35, w: 3.2, h: 0.6, fill: { color: C.bgAmber }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
    s.addShape("rect", { x: 3.4, y: 2.35, w: 0.05, h: 0.6, fill: { color: C.accentWarm } });
    s.addText("Router 判断", { x: 3.4, y: 2.35, w: 3.2, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
    s.addShape("line", { x: 5.0, y: 1.95, w: 0, h: 0.4, line: { color: C.textMid, width: 1.5, endArrowType: "triangle" } });
    const branches = [
      { t: "low · 低风险/简单", d: "→ quick 快路径（自动处理）", fill: C.bgGreen, strip: C.green, x: 0.6 },
      { t: "high · 高价值/复杂", d: "→ deep 深度路径（强模型/多步流程）", fill: C.bgBlue, strip: C.primary, x: 3.6 },
      { t: "uncertain · 置信度不足", d: "→ escalate 升级（转人工 / 降级只读）", fill: C.bgRed, strip: C.red, x: 6.6 },
    ];
    branches.forEach((b, i) => {
      s.addShape("line", { x: 5.0, y: 2.95, w: 0, h: 0.35, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
      s.addShape("rect", { x: b.x, y: 3.7, w: 2.8, h: 1.2, fill: { color: b.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: b.x, y: 3.7, w: 2.8, h: 0.06, fill: { color: b.strip } });
      s.addText(b.t, { x: b.x + 0.1, y: 3.78, w: 2.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(b.d, { x: b.x + 0.1, y: 4.2, w: 2.6, h: 0.6, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.15 });
    });
    s.addText("主体流程 = 预编排路由工作流（Agentic Workflow）：输入 → LLM 判档 → 条件边 → 固定分支动作。", { x: 0.6, y: 5.1, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
