// slide-06.js — 15.1 三个话题 ↔ Scale Gate
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 6, title: "三个话题与 Scale Gate" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "三个话题 ↔ Scale Gate 三份证据", C.bgWhite);
    const rows = [
      ["话题", "回答的问题", "对应 Scale Gate 证据"],
      ["对决策层证明价值（15.2）", "系统值多少钱、多久回本", "通过证据：价值成立"],
      ["推动用户采纳与推广（15.3）", "一线用不用、组织铺不铺得开", "客户能自运营"],
      ["能力回注（15.4）", "哪些对象、关系、动作值得带回平台", "回注候选通过复用验证"],
    ];
    table(s, rows, { y: 1.5, colW: [2.6, 3.2, 3.0], rowH: 0.55});
    calloutBar(s, "三个话题恰好对应 Scale Gate 三份证据 + 全书主线“卖人力 → 卖能力”——本章就是 Scale 阶段业务侧的落地。", 4.85, C.bgBlue, C.primary);
  }
};

