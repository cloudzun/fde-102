// slide-08.js — 块分隔页：9.2–9.3 核心链路与文档解析
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 8, title: "核心链路与文档解析" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "9.2–9.3", "核心链路与文档解析", [
      "离线建库一次 + 在线问答多次",
      "全章纪律：检索不到不能编",
      "解析：把“纸”变成可检索的文字",
    ]);
  }
};
