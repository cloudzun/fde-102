// slide-22.js — 1.6 五大鸿沟详表 + 关键结论
const { C, sectionTitle, table, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "五大鸿沟详解" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "五大鸿沟：是什么 · 典型症状", C.bgWhite);
    const rows = [
      ["#", "鸿沟", "是什么", "典型症状"],
      ["1", "模型 ≠ 产品", "有模型能力 ≠ 有解决业务问题的产品", "模型很聪明，但不知为客户解决什么"],
      ["2", "数据合规", "客户数据不能随便给公有云 / 外部模型", "政企“数据不出域”，公有云大模型免谈"],
      ["3", "微调与工程", "想把模型调成“懂领域 / 懂客户”", "RAG 需检索增强、Prompt 需结合专有知识"],
      ["4", "系统集成", "要嵌入客户已有 CRM / ERP / 业务流", "装个断点软件没用，要融进真实流程"],
      ["5", "搁板软件", "系统做出来却没人用 / 用不起来", "“演示惊艳、生产翻车”“上线即搁板”"],
    ];
    table(s, rows, { y: 1.3, colW: [0.5, 1.5, 3.6, 3.2], rowH: 0.55 });
    bigCallout(s, "这五道鸿沟没有一道是“再多几层模型能力”能解决的——它们全是落地、连接、变革问题。模型负责“写得快”，FDE 负责“知道该写什么、写了有没有人用、用起来有没有价值”。", 4.85, 0.6);
  }
};
