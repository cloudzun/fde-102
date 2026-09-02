// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Echo 工作法 · 定义问题" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "5", "Echo 工作法 · 定义问题（Discovery）",
      "不以功能开发为目标 · 三个脚手架 · 三个 SOP · 选型 · 解决方案框架 · Gate", 16);
  }
};
