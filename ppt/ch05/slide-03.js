// slide-03.js — 5.1 分隔页：核心原则
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "核心原则" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.1", "核心原则：Discovery 初期不以功能开发为目标", [
      "先听客户说话，成为内行人",
      "允许时间盒（time-boxed）技术验证",
      "产出“判断依据”，不是“可用功能”",
    ]);
  }
};
