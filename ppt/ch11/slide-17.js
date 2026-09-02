// slide-19.js — 11.5.2 MCP
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 19, title: "MCP" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "MCP：标准化工具接入协议", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.35, w: 2.6, h: 0.8, fill: { color: C.bgRed }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
    s.addShape("rect", { x: 0.6, y: 1.35, w: 0.06, h: 0.8, fill: { color: C.red } });
    s.addText("Agent\n（决策循环）", { x: 0.6, y: 1.35, w: 2.6, h: 0.8, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
    s.addShape("rightArrow", { x: 3.3, y: 1.6, w: 0.5, h: 0.3, fill: { color: C.primaryLight } });
    s.addShape("rect", { x: 3.9, y: 1.35, w: 2.6, h: 0.8, fill: { color: C.bgBlue }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
    s.addShape("rect", { x: 3.9, y: 1.35, w: 0.06, h: 0.8, fill: { color: C.primary } });
    s.addText("Host · MCP Client\n（opencode / 自建）", { x: 3.9, y: 1.35, w: 2.6, h: 0.8, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
    const servers = [
      { t: "MCP Server 1", d: "查部门职责库", x: 7.0 },
      { t: "MCP Server 2", d: "政策检索", x: 8.3 },
    ];
    servers.forEach((sv) => {
      s.addShape("line", { x: 6.5, y: 1.75, w: 0.5, h: 0, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
      s.addShape("rect", { x: sv.x, y: 1.35, w: 1.25, h: 0.8, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: sv.x, y: 1.35, w: 1.25, h: 0.06, fill: { color: C.green } });
      s.addText(sv.t, { x: sv.x, y: 1.42, w: 1.25, h: 0.35, fontSize: 9, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(sv.d, { x: sv.x, y: 1.75, w: 1.25, h: 0.35, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
    });
    s.addText("类比 USB-C：MCP 统一了智能体与工具之间的接口——工具怎么暴露、怎么调用，一套协议搞定。三个原语：Tools（可执行函数）· Resources（可读数据）· Prompts（提示模板）。", {
      x: 0.6, y: 2.55, w: 8.8, h: 0.7, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "何时上 MCP：多工具 / 多 agent 共享、接入方式杂、团队共享工具库（能力回注落点）；单个工具单次接入 → 直接函数调用即可，从最简单开始。", 3.7, C.bgBlue, C.primary);
    s.addText("工具层与决策层解耦：LangGraph 管“决策图”，MCP 管“工具接入”——各司其职。", { x: 0.6, y: 4.5, w: 8.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
  }
};
