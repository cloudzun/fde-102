// slide-16.js — 块分隔页：5.5–5.6 数据盘点与快赢筛选
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 16, title: "数据盘点与快赢筛选" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "5.5–5.6", "数据盘点与快赢筛选", [
      "SOP2 数据盘点：业务牵引逆向盘点",
      "SOP3 快赢筛选：影响力 × 可行性矩阵",
      "评分量表 1–5 分，必须附依据",
    ]);
  }
};
