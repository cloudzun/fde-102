// slide-13.js — 15.3 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "推动用户采纳与推广" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "15.3", "推动用户采纳与推广", [
      "门槛 · 动机 · 信任——“推不动”总能归到三件里至少一件",
      "四类干系人各自的表达",
      "业务 Scale：试点 → 复核 → 扩大 Gate → 停止条件",
    ]);
  }
};
