// slide-07.js — 块分隔页：14.2–14.4 真实环境适配与业务闭环
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "真实环境适配与业务闭环" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "14.2–14.4", "真实环境适配与业务闭环", [
      "四类假设核验：数据 / 系统 / 业务 / 责任",
      "数据接入 = 业务语义对齐 + 找事实来源",
      "模型输出必须进入真实流程闭合动作",
    ]);
  }
};
