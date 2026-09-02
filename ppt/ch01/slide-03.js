// slide-03.js — 块分隔页：1.1–1.2 为什么会有 FDE
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "为什么会有 FDE" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.1–1.2", "为什么会有 FDE：三重矛盾与定义", [
      "三重矛盾：SaaS 病 · 外包病 · 数据不出域",
      "FDE = 带核心平台驻场 · 深度定制 · 能力回注（“胶水”）",
      "演进：从 Palantir 到 AI 行业共识",
    ]);
  }
};
