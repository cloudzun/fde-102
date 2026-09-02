// slide-03.js — 知识背景定位
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 3, title: "知识背景定位" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "这一轮在 Ch11 坐标系里的位置", C.bgWhite);
    const items = [
      { t: "Agentic Workflow", d: "档位固定、分支预先枚举\n判档只是开始\n还要自动答复 / 查部门库 / 转人工", fill: C.bgBlue, strip: C.primary },
      { t: "LangGraph 编排", d: "State / Node / Conditional Edge\n代码级框架（不用低代码平台）\n精细控制状态与兜底逻辑", fill: C.bgAmber, strip: C.accentWarm },
      { t: "三路分流 + HITL", d: "咨询→quick / 跨部门→deep / 敏感→escalate\n敏感件“必须转人工”= 暂停等人工确认", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.2, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 1.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "这不是动态自主 Agent——档位与分支动作预先枚举；“观察结果后重新规划”的受控 Agent 在实操四B。", 4.35, C.bgBlue, C.primary);
  }
};
