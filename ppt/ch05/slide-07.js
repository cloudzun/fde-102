// slide-07.js — 5.2 分隔页：三个思维脚手架
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 7, title: "三个思维脚手架" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.2", "三个思维脚手架：让头脑风暴有结构", [
      "脚手架一：四类失败模式（挖风险）",
      "脚手架二：四层决策链（理干系人）",
      "脚手架三：LLM 能力金字塔（选型）",
    ]);
  }
};
