// slide-04.js — 块分隔页：3.1–3.2 PPT 框架与 People 维度
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 4, title: "PPT 框架与 People 维度" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "3.1–3.2", "PPT 框架与 People 维度", [
      "People 是根 · Process 是脉 · Technology 是器",
      "客户侧：干系人 · 冠军用户 · 变革推动",
      "己方侧：Echo · Delta · Engineering",
    ]);
  }
};
