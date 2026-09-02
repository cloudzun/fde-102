// slide-13.js — 块分隔页：11.4–11.5 三路分流与工程底座
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "三路分流与工程底座" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "11.4–11.5", "三路分流与工程底座", [
      "Router 三路分流：low→quick / high→deep / uncertain→escalate",
      "LangGraph：把决策循环画成图",
      "MCP：标准化工具接入协议",
    ]);
  }
};
