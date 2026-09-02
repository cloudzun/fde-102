// slide-03.js — 14.1 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "五个关键转换" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "14.1", "从 Prototype 到客户环境：五个关键转换", [
      "转换 1–3 完成 Build：嵌入真实业务",
      "转换 4–5 属于 Scale：自运营 + 回注",
      "五个转换缺一不可",
    ]);
  }
};
