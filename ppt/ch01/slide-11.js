// slide-12.js — 1.3 三层含义对比表 + 先分清两个概念
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "三层含义对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "三层含义对比", C.bgLight);
    const rows = [
      ["层级", "是什么", "一句话", "回答的关键问题"],
      ["岗位", "一种角色定位", "一个具体的人，驻扎客户现场，串联产品与客户", "我做的是不是 FDE 的活？"],
      ["团队", "一种组织模式", "一组 FDE 组成“特种作战单元”（Echo / Delta / Engineering 分工）", "我们团队怎么搭？"],
      ["方法论", "一种交付范式", "一整套“把非标痛点变成平台能力”的做事方法", "项目该怎么推进？"],
    ];
    table(s, rows, { y: 1.35, colW: [1.1, 1.7, 4.0, 2.0], rowH: 0.55});
    calloutBar(s, "先分清两个概念：1.3 三层含义讲“FDE 这个词”的组织层次；1.4 三重角色讲“FDE 这个人”要融合的专业能力——一个是词的层级，一个是人的能力。", 4.7);
  }
};

