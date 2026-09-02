// slide-08.js — 7.2 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 8, title: "Delta 视角金字塔" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.2", "LLM 能力四层级金字塔：Echo 选层、Delta 建层", [
      "Delta 视角：每一层要建什么、代价多大",
      "从最简单开始：先做最小验证，升级必须带证据",
      "选层与建层，是同一张图的两半",
    ]);
  }
};
