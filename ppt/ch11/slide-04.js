// slide-04.js — 11.1.1/2 定义与三档能力
const { C, sectionTitle, table, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 4, title: "Agent 定义" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "智能体（Agent）的定义", C.bgWhite);
    bigCallout(s, "目标驱动 + 能调工具 / 与环境交互 + 能根据中间结果自主决策——循环直至任务完成。", 1.35, 0.7);
    const rows = [
      ["层", "比喻", "能力"],
      ["普通 LLM", "嘴", "只会说话——你问它答它"],
      ["RAG", "嘴 + 图书馆", "查资料再说话——检索增强回答"],
      ["Agent", "嘴 + 手 + 大脑", "查资料、调工具、做决策——根据中间结果决定下一步"],
    ];
    table(s, rows, { y: 2.5, colW: [1.6, 2.0, 5.2], rowH: 0.55});
    s.addText("中文名：业界普遍称“智能体”（agent），也有“智能代理 / AI 代理”——本书统一用“智能体”。", {
      x: 0.6, y: 4.85, w: 8.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};

