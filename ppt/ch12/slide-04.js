// slide-04.js — 任务书：三档路由图
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "三档路由" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "任务书：收到市民工单 → 判档 → 路由", C.bgLight);
    const steps = [
      { t: "工单进入", d: "State 初始化", fill: C.bgBlue, strip: C.primary },
      { t: "判档 Node", d: "LLM 判断：咨询 / 跨部门 / 敏感", fill: C.bgAmber, strip: C.accentWarm },
      { t: "条件边分流", d: "Conditional Edge", fill: C.bgGreen, strip: C.green },
    ];
    steps.forEach((st, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.45;
      s.addShape("rect", { x, y, w: 2.85, h: 1.15, fill: { color: st.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: st.strip } });
      s.addText(st.t, { x, y: y + 0.12, w: 2.85, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(st.d, { x: x + 0.12, y: y + 0.55, w: 2.6, h: 0.55, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.15 });
      if (i < 2) s.addShape("rightArrow", { x: x + 2.88, y: y + 0.42, w: 0.17, h: 0.28, fill: { color: C.primaryLight } });
    });
    const branches = [
      { t: "咨询类", d: "→ 自动答复", fill: C.bgGreen, strip: C.green },
      { t: "跨部门类", d: "→ 深度处理（调 check_department）", fill: C.bgBlue, strip: C.primary },
      { t: "敏感类", d: "→ 转人工（暂停等人工确认）", fill: C.bgRed, strip: C.red },
    ];
    branches.forEach((b, i) => {
      const x = 0.6 + i * 3.05;
      const y = 3.05;
      s.addShape("line", { x: 2.02 + i * 3.05, y: 2.6, w: 0, h: 0.45, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
      s.addShape("rect", { x, y, w: 2.85, h: 1.1, fill: { color: b.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: b.strip } });
      s.addText(b.t, { x, y: y + 0.1, w: 2.85, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(b.d, { x: x + 0.1, y: y + 0.48, w: 2.65, h: 0.55, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.15 });
    });
    calloutBar(s, "技术方案（已定）：路由工作流（Agentic Workflow）——不是分类器、不是 RAG、也不需要动态自主 Agent。验收时三路都要走通，且敏感件零漏判。", 4.55, C.bgAmber, C.accentWarm);
    s.addText("技术栈：opencode + gstack + LangGraph + DeepSeek + Streamlit（图 12-1）", { x: 0.6, y: 5.15, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
