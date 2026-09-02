// slide-05.js — 环节 1 写启动提示词
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "环节 1 启动提示词" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 1 · 写启动提示词（这是你 Delta 的活，不是 AI 的）", C.bgWhite);
    const rows = [
      ["#", "信息块", "本场景内容（从方案框架摘）"],
      ["1", "背景与角色", "FDE 团队 Delta，为西岭施工场景 A"],
      ["2", "要做什么", "诉求五分类：住建/人社/市监/城管/其他"],
      ["3", "输入输出", "输入一句诉求 → 输出类别"],
      ["4", "技术选型（含理由）", "已选文本分类，不用 RAG/Agent，一次调用"],
      ["5", "数据现状 + 测试集", "无历史标注 → 走大模型零样本分类；测试集写入 tests/test_cases.csv"],
      ["6", "验收口径", "自信区 ≥85%，转人工 ≤30%（转人工不算错）"],
      ["7", "约束与边界", "API key 走环境变量；不做 40+ 部门细分类"],
    ];
    table(s, rows, { y: 1.3, colW: [0.5, 2.0, 6.3], rowH: 0.45 });
    calloutBar(s, "两处关键写法：①写“无历史标注→零样本分类”，否则 Agent 走传统 ML 死路；②写“转人工不算错”，否则与“拿不准转人工”的设计自相矛盾。", 4.95, C.bgAmber, C.accentWarm);
    s.addText("写完用 7 个自查问题审自己（换一个不了解项目的人能看懂吗？）——答不上就回第 6 章查：写不出某一项，往往是方案框架那部分没吃透。", { x: 0.6, y: 5.42, w: 8.8, h: 0.18, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
