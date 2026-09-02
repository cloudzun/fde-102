// slide-25.js — 纪律二：启动提示词 7 项信息块
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 25, title: "纪律二" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "纪律二 · 启动提示词 7 项信息块", C.bgWhite);
    const rows = [
      ["#", "信息块", "缺了会怎样"],
      ["1", "背景与角色", "coding agent 脑补客户和场景"],
      ["2", "要做什么", "发明错误的接口"],
      ["3", "输入输出", "无法验收"],
      ["4", "技术选型（含理由）", "又问你要不要用 RAG"],
      ["5", "数据现状 + 测试集", "走传统 ML 死路"],
      ["6", "验收口径", "自己发明一套验收"],
      ["7", "约束与边界", "自由发挥"],
    ];
    table(s, rows, { y: 1.3, colW: [0.6, 2.6, 5.6], rowH: 0.45 });
    calloutBar(s, "本质：假设一个完全不熟悉项目的人接手，他需要知道什么才能“不重开讨论、直接开干”——coding agent 是最“难伺候的新人”，不是会猜的专家。", 4.95, C.bgAmber, C.accentWarm);
  }
};
