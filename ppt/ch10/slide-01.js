// slide-01.js — 实操课封面
const { labCover } = require("../common");
module.exports = {
  slideConfig: { type: "labCover", index: 1, title: "政策法规 RAG 问答系统" },
  createSlide(pres) {
    const s = pres.addSlide();
    labCover(s, "10", "实操三", "政策法规 RAG 问答系统（场景 B）",
      "角色 Delta · Prototype 阶段 · AI 施工（检索 + 生成）",
      ["写提示词", "建索引", "跑八环节", "双指标验收", "复盘交接"]);
  }
};
