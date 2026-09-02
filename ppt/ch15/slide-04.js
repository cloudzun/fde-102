// slide-04.js — 15.1 三个不等于
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 4, title: "三个不等于" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "三个“不等于”（本章暗线）", C.bgWhite);
    const rows = [
      ["不等于", "含义"],
      ["工程验收通过 ≠ 业务价值成立", "监控指标再漂亮，也可能没解决客户真正的痛点"],
      ["业务价值成立 ≠ 组织愿意采用", "坐席怕被替代、管理层担心没人负责，照样用不起来"],
      ["组织愿意采用 ≠ 能力已经回注平台", "客户用得再好，不做回注，公司照样退回“卖人力”"],
    ];
    table(s, rows, { y: 1.5, colW: [3.4, 5.4], rowH: 0.55});
    calloutBar(s, "判断必须建立在第 14 章工程证据上——“能稳定运行”要说成“跨组接管演练通过”，不能只给口头承诺。", 4.8, C.bgAmber, C.accentWarm);
  }
};

