// slide-03.js — 9.1 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "RAG 是什么" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.1", "RAG 是什么：检索外部资料补足模型语料", [
      "给大模型补上“它不知道的信息”",
      "三步原理：检索 → 增强 → 生成",
      "解决三问题：记忆漂移 · 成本 · 可追溯",
    ]);
  }
};
