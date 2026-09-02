// slide-11.js — 11.3.4 三分口径
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 11, title: "三分口径" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工作流 / Agentic Workflow / Agent（教材三分）", C.bgLight);
    const rows = [
      ["术语", "定义", "例子"],
      ["工作流（Workflow）", "步骤与判断都预先写死，LLM 只做固定步骤内单点应答", "抽字段 → 校验 → 归档"],
      ["智能体工作流（Agentic Workflow）", "路径预编排（可枚举），若干节点由 LLM 决策", "三路路由：LLM 判档 → 固定分支动作"],
      ["智能体（Agent）", "模型自主规划、调工具、观察、循环，路径不可穷举", "开放探索、多工具动态编排"],
    ];
    table(s, rows, { y: 1.4, colW: [2.2, 4.2, 2.4], rowH: 0.55});
    calloutBar(s, "为什么“路由”叫 Agentic Workflow 不叫 Agent：分支是预先枚举的，模型只在“判档”节点做决策，没有自主规划循环。", 4.85, C.bgAmber, C.accentWarm);
    s.addText("厂商原始框架（Anthropic）：提示链/路由/并行化/编排者-工人/评估-优化归 Workflows，自主智能体归 Agents；本书教学三分在其上增设 Agentic Workflow 中间层。", { x: 0.6, y: 5.35, w: 8.8, h: 0.25, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

