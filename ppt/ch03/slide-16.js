// slide-17.js — 3.4 分隔页：Technology 维度
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "Technology 维度" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.4", "Technology 维度：技术选型与工具", [
      "选什么：LLM 能力金字塔（从最简单开始）",
      "用什么：opencode / gstack / Streamlit",
      "部署在哪：数据不出域",
    ]);
  }
};
