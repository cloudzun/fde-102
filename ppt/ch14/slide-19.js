// slide-25.js — 本章小结
const { summarySlide } = require("../common");
module.exports = {
  slideConfig: { type: "summary", index: 25, title: "本章小结" },
  createSlide(pres) {
    const s = pres.addSlide();
    summarySlide(s, "14", "Delta 生产化 · 本章小结", [
      "区分：Prototype / FDE Build / FDE Scale",
      "四类假设核验：数据 / 流程 / 系统 / 责任",
      "模型输出接入业务动作 + 人工兜底闭环",
      "八项生产准入 Gate：有条件通过 / 试点 / 返回",
      "客户自运营 + 接管演练 + 撤出（依赖下降=完成）",
      "能力回注：业务本体 + 工程机制（第二场景验证）",
    ]);
  }
};
