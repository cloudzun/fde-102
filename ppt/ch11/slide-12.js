// slide-13.js — 11.3.7 路由 vs 受控 Agentic Loop
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 13, title: "路由 vs 受控 Agent" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "路由工作流 vs 受控 Agentic Loop", C.bgLight);
    const rows = [
      ["维度", "路由工作流", "受控 Agentic Loop"],
      ["下一步", "预先写定：判档 → 条件边 → 固定分支", "按目标 + 当前状态动态选择"],
      ["工具", "固定调用 check_department", "从多个工具中按需选择"],
      ["观察后重规划", "无（一次判断到位）", "有：工具结果可触发换工具 / 重新判断"],
      ["信息不足", "固定转人工", "主动追问后再继续"],
      ["人工介入", "敏感件固定转人工", "request_human_review（interrupt + resume）"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 3.5, 3.6], rowH: 0.55});
    calloutBar(s, "判断方法就是二维判断：路径可枚举 → 路由工作流（实操四）；路径不可枚举或需反复观察 → 受控 Agent（实操四B Lab4B）。", 4.85, C.bgAmber, C.accentWarm);
  }
};

