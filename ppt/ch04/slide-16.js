// slide-17.js — 4.4 Echo vs Delta 对照表
const { C, sectionTitle, table } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 17, title: "Echo vs Delta 对照" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Echo vs Delta 对照", C.bgWhite);
    const rows = [
      ["维度", "Echo", "Delta"],
      ["主战场", "商务 · 共识 · 需求 · 策略", "代码 · 原型 · 工程 · 回注"],
      ["核心工具", "脑子 · 嘴 · 白板", "手 · opencode · gstack"],
      ["训练什么", "判断力（前脑）", "施工力（后手）"],
      ["主导实操", "Ch6 需求调研、Ch16 汇报", "Ch8/10/12 三个 Demo、Ch16 技术评估"],
      ["靠什么完成交付", "挖真需求 · 出施工图", "把施工图做成能跑的 Demo"],
    ];
    table(s, rows, { y: 1.35, colW: [1.6, 3.6, 3.6], rowH: 0.55});
  }
};

