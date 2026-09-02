// slide-24.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 24, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "13", "私有化部署与模型微调 · 本章小结", [
      "为什么本地 + 选型三问：出域？本地？哪档？",
      "部署四形态：机房 / 专属云 / 离线一体机 / 混合",
      "先 RAG 后微调：RAG 管事实、微调管行为",
      "方法：LoRA / QLoRA / 全参 SFT（默认 LoRA/QLoRA）",
      "流程：数据治理 Gate → 训练 → 评测对照 → 灰度替换",
      "公网→本地：接口 / 行为 / 质量三层适配回归 + 回滚",
    ]);
  }
};
