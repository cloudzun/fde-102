// slide-19.js — 块分隔页：13.4–13.5 切换适配与动态速查
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 19, title: "切换适配与动态速查" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "13.4–13.5", "切换适配与动态速查", [
      "三层适配：接口 / 行为 / 质量",
      "适配五步：接口抽象 → 行为回归 → 检索重建 → 量化对照 → 灰度回滚",
      "模型 / 硬件动态速查：信息截至 2026-08，以官方为准",
    ]);
  }
};
