// slide-03.js — 15.1 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "从系统能运行到组织愿意采用" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "15.1", "从“系统能运行”到“组织愿意采用”", [
      "三个不等于：本章暗线",
      "工程 Scale vs 业务 Scale",
      "三个话题 ↔ Scale Gate 三份证据",
    ]);
  }
};
