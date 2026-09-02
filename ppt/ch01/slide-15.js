// slide-17.js — 1.5 三方对比表
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 17, title: "外包 / 咨询 / FDE 对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "外包 · 咨询 · FDE：本质对比", C.bgWhite);
    const rows = [
      ["维度", "驻场外包", "传统咨询", "FDE"],
      ["交付物", "客户定制孤立系统", "建议方案 / 报告", "生产环境的定制化系统集成"],
      ["能力 / IP 归属", "归客户，无法复用", "归咨询公司方法论", "回注己方平台，越做越强"],
      ["对己方意义", "赚人天差价（卖人力）", "赚洞察费（卖洞见）", "完善平台、驱动规模化（卖能力）"],
    ];
    table(s, rows, { y: 1.3, colW: [1.6, 2.4, 2.4, 2.4], rowH: 0.55});
    calloutBar(s, "判断标准：项目做完，公司只赚这一次人天费，还是平台能力增长了？", 4.85, C.bgAmber, C.accentWarm);
  }
};

