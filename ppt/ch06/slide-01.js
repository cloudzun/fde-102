// slide-01.js — 实操课封面（独特花纹：LAB 水印 + 菱形点阵 + 实验流程条）
const { labCover } = require("../common");
module.exports = {
  slideConfig: { type: "labCover", index: 1, title: "西岭需求调研 →《解决方案框架》" },
  createSlide(pres) {
    const s = pres.addSlide();
    labCover(s, "6", "实操一", "西岭需求调研 →《解决方案框架》",
      "角色 Echo · Discovery 阶段 · 头脑风暴（关键判断不用 AI）",
      ["读材料", "挖风险", "理干系人", "拆场景", "选型", "汇报"]);
  }
};
