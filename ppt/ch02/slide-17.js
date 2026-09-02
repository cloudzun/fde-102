// slide-17.js — 块分隔页：2.4–2.5 财务证据与真伪鉴别
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 17, title: "财务证据与真伪鉴别" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "2.4–2.5", "财务证据与真伪鉴别：从数据到判断标准", [
      "Palantir：毛利率 67%→82.4% · 净利率 2023 转正 · NRR>100%",
      "启示：早期亏钱换 Know-how，后期非线性回报",
      "8 条教材诊断量表鉴别真伪 FDE",
    ]);
  }
};
