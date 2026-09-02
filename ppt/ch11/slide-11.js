// slide-12.js — 11.3.6 二维判断
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "二维判断" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "六种模式的二维判断", C.bgWhite);
    const rows = [
      ["", "路径：预定义（可枚举）", "路径：动态（不可预写）"],
      ["迭代：单轮", "Prompt Chaining · Routing · Parallelization", "Orchestrator-Workers"],
      ["迭代：闭环", "Evaluator-Optimizer（固定“生成→评估→回炉”环）", "自主智能体（观察-思考-行动循环）"],
    ];
    table(s, rows, { y: 1.5, colW: [1.6, 3.6, 3.6], rowH: 0.55});
    calloutBar(s, "读法：先问“路径能不能预写死”——能 → 工作流类，不能 → 智能体类；再问“要不要闭环迭代”。工单路由是“预定义 × 单轮”，所以用 Routing 就够。", 4.85, C.bgBlue, C.primary);
  }
};

