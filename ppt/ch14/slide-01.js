// slide-01.js — 封面
const { cover } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "Delta 生产化 · 工程 Scale" },
  createSlide(pres) {
    const s = pres.addSlide();
    cover(s, "14", "Delta 生产化 · 工程 Scale：生产落地与客户接管",
      "五个转换 · 假设核验 · 生产准入 Gate · 自运营接管 · 能力回注", 16);
  }
};
