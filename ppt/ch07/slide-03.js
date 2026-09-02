// slide-03.js — 7.1 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "为什么 FDE 需要 AI" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.1", "为什么 FDE 需要 AI：主动拥抱、更要会驾驭", [
      "Technology（器）维度的三个产能瓶颈",
      "避免两种偏差：AI 万能论 / AI 与己无关",
      "人能判断、AI 能执行——落到施工侧",
    ]);
  }
};
