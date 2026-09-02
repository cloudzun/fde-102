// slide-16.js — 15.3.2 四类干系人表达
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "四类干系人表达" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "面向四类干系人的表达", C.bgWhite);
    const rows = [
      ["干系人", "核心关切", "主要证据"],
      ["决策层（陈主任）", "值不值得 · 何时见效", "年度价值 · ROI · 回收期 · 剩余风险"],
      ["操作层（小王）", "好不好用 · 是否增加负担", "流程变化 · 人工兜底 · 实际采用反馈"],
      ["技术层（李工）", "能否维护 · 出问题怎么办", "运行手册 · 监控 · 回滚和接管证据"],
      ["监管层（市数据局）", "数据 · 权限 · 责任 · 审计", "安全域 · 权限矩阵 · 审计记录"],
    ];
    table(s, rows, { y: 1.4, colW: [1.9, 3.0, 3.9], rowH: 0.55});
    calloutBar(s, "别讲技术，讲“对你意味着什么”——先判断谁在听、他最关心什么、该讲哪套。", 4.85, C.bgAmber, C.accentWarm);
  }
};

