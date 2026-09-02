// slide-34.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 34, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "5", "Echo 工作法 · 本章小结", [
      "Discovery 不以功能开发为目标（允许时间盒验证）",
      "三脚手架：失败模式 / 决策链 / 能力金字塔",
      "三 SOP：干系人地图 / 数据盘点 / 快赢筛选",
      "快赢评分 1–5 分排序候选场景",
      "场景拆解 + 选型三问 + 技术决策矩阵",
      "《解决方案框架》= Delta 施工图；Gate 六要素自检",
    ]);
  }
};
