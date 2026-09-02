// slide-10.js — 7.2.2 逐层工程形态与代价
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "逐层工程形态" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "逐层：实现形态 · 工程代价 · 验收方式", C.bgLight);
    const rows = [
      ["层级", "Delta 要建什么", "工程代价", "验收方式"],
      ["1 提示词", "一次调用 + 好提示词（7 项信息块）", "最低", "分类/抽取准确率（Ch8）"],
      ["2 RAG", "解析→分块→向量化→检索→引用", "中：建索引、管版本、防幻觉", "准确率 + 可追溯率双指标（Ch9/10）"],
      ["3 微调", "训练管线：标注数据 + GPU + 训练迭代", "高：数据与算力门槛", "评估集指标 + 行为稳定性（Ch13）"],
      ["4 Agent", "编排框架 + 工具定义 + 状态/权限管理", "最高：调用次数不定、需 HITL", "端到端轨迹 + 敏感件零漏判（Ch11/12）"],
    ];
    table(s, rows, { y: 1.35, colW: [1.1, 3.0, 2.3, 2.4], rowH: 0.55});
    calloutBar(s, "注意区分：coding agent（帮你写代码的开发工具）≠ 第 4 层 Agent（交付给客户的技术方案）——同名不同物。", 5.0, C.bgAmber, C.accentWarm);
  }
};

