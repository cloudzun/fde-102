// slide-17.js — 7.4 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "harness 与 gstack" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.4", "harness：从理念到 gstack 实现", [
      "把 AI 执行约束进受控工程流程",
      "SPEC 驱动 + 八环节流水线",
      "gstack 八环节命令 · 15 分钟最小演练",
    ]);
  }
};
