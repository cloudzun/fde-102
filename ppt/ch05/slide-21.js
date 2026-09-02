// slide-23.js — 5.7 分隔页：场景拆解与选型
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 23, title: "场景拆解与选型" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.7", "场景拆解与技术选型", [
      "把一句模糊大需求拆成可施工的子场景",
      "选型三问 + 决策树 + 技术决策矩阵",
      "西岭三个场景的选型理由",
    ]);
  }
};
