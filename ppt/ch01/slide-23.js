// slide-23.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 23, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "1", "FDE 是什么 · 本章小结", [
      "三重结构性矛盾：SaaS 病 / 外包病 / 数据不出域",
      "定义与三层含义：岗位 / 团队 / 方法论",
      "三重角色必须融合——工程师身份是内核",
      "卖人力 → 卖能力：区分 FDE 与外包 / 咨询",
      "AI 五大鸿沟（模型≠产品 / 合规 / 微调 / 集成 / 搁板）指向 FDE",
    ]);
  }
};
