// slide-03.js — 块分隔页：11.1–11.2 智能体是什么与何时用
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "智能体是什么与何时用" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "11.1–11.2", "智能体是什么与何时用", [
      "目标驱动 · 调工具 · 自主决策（决策循环）",
      "三档能力：普通 LLM / RAG / Agent",
      "从最简单开始——智能体是最后一级",
    ]);
  }
};
