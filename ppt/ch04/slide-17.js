// slide-17.js — 块分隔页：4.5–4.6 分工哲学与四阶段协作
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "分工哲学与四阶段协作" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "4.5–4.6", "分工哲学与四阶段协作", [
      "人能判断、AI 能执行 + 两种训练模式",
      "四阶段主导权：Echo → 双角色 → Delta → 全团队",
      "角色随阶段迁移（战位职责）",
    ]);
  }
};
