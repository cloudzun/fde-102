// slide-13.js — 13.3 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 13, title: "微调" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "13.3", "微调：判断、方法与成本", [
      "先 RAG 后微调——微调是最后一公里",
      "LoRA / QLoRA / 全参 SFT 三种方法",
      "七步流程 + 数据治理 Gate",
    ]);
  }
};
