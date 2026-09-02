// slide-10.js — 11.3.3 六种模式
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "六种模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "六种常见设计模式", C.bgWhite);
    const rows = [
      ["模式", "是什么", "复杂度"],
      ["Prompt Chaining 提示链", "固定步骤串行，前步输出喂后步", "低"],
      ["Routing 路由", "分类输入并导向专门分支", "低"],
      ["Parallelization 并行化", "并行执行独立子任务后汇总", "中"],
      ["Orchestrator-Workers 编排者-工人", "中央编排者动态拆解任务、分派给工人", "高"],
      ["Evaluator-Optimizer 评估-优化", "生成器产出 → 评估器评判 → 不达标回炉", "中"],
      ["自主智能体", "模型自主规划、调工具、观察、循环", "高"],
    ];
    table(s, rows, { y: 1.35, colW: [3.2, 4.4, 1.2], rowH: 0.55 });
    calloutBar(s, "生产里绝大多数“智能体系统”是“工作流 / Agentic Workflow + 局部智能体”的混合，不是整套自主智能体。", 5.0, C.bgBlue, C.primary);
  }
};
