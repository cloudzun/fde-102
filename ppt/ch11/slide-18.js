// slide-18.js — 块分隔页：11.6–11.7 工具工程化与 FP/FN
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 18, title: "工具工程化与 FP/FN" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "11.6–11.7", "工具工程化与 FP/FN", [
      "工具五件套：超时 / 重试 / 幂等 / 审计 / 降级",
      "国产模型注意点：strict · thinking 回传",
      "宁可多升级、不可漏（召回率 100%）",
    ]);
  }
};
