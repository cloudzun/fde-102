// slide-12.js — 7.3 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 12, title: "AI Coding 两半" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.3", "AI Coding：Vibe Coding 驱动 × harness 工程约束", [
      "驱动层：怎么让 coding agent 听话地写",
      "约束层：写了之后怎么不翻车、可验收",
      "coding agent 分类 · Vibe 五原则 · 工具选型",
    ]);
  }
};
