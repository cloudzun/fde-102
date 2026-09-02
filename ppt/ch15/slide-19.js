// slide-19.js — 15.4 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 19, title: "能力回注" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "15.4", "能力回注：把跨客户的价值带回平台", [
      "四步法 + 三块拼图（分类 · 问答 · 路由 + HITL）",
      "两条路径：工程能力回注 / 业务语义回注",
      "本体 = 业务语义回注的载体（六类元素）",
    ]);
  }
};
