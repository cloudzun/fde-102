// slide-07.js — 13.2 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "私有化部署" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "13.2", "私有化部署：形态、算力路线与硬件规范", [
      "四种形态：本地机房 / 专属云 / 离线一体机 / 混合",
      "算力路线：合规可得性优先分层选择",
      "量化取舍 · 推理引擎 · 价格核算",
    ]);
  }
};
