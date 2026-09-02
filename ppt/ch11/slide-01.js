// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Agent 方法 · 自动化边界" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "11", "Agent 方法 · 自动化边界",
      "智能体定义 · 六种模式 · 三路分流 · 工具工程化 · FP/FN · 人机回环", 16);
  }
};
