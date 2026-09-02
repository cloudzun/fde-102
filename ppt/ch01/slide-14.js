// slide-14.js — 1.5 分隔页：FDE ≠ 外包 ≠ 咨询
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 14, title: "FDE ≠ 外包 ≠ 咨询" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "1.5", "核心分野：从“卖人力”到“卖能力”", [
      "外包、咨询、FDE 都在“帮助客户”，但本质不同",
      "一句话判断标准：项目做完，公司平台能力增长了吗？",
      "最危险的事：FDE 悄悄退化成外包",
    ]);
  }
};
