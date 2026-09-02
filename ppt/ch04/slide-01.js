// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Echo 与 Delta" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "4", "Echo 与 Delta：作战单元的分工与协作",
      "翻译损耗 · 三角色 · 战位≠人格 · 人能判断 AI 能执行 · 四阶段主导权", 16);
  }
};
