// slide-08.js — 客户汇报十页骨架
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "十页汇报骨架" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "客户汇报：金字塔结构十页骨架", C.bgLight);
    const rows = [
      ["页", "内容"],
      ["1 结论", "一句话：做了什么 + 核心价值（数字）+ 投入产出"],
      ["2 业务问题", "客户原有痛点 / 当初验收标准"],
      ["3 方案与价值", "三个 MVP + 实操四B 各一个价值点 + ROI 框架（给区间）"],
      ["4 合规与约束", "数据不出域 / 模拟数据边界与本地回填 / 责任边界"],
      ["5 验证证据", "盲测与用户反馈：能证明什么、不能证明什么"],
      ["6 能力回注", "碎石路铺成哪些公路：三块拼图 + Agent + 本体"],
      ["7 下一阶段", "各场景 Go / Conditional Go / Continue Pilot / No-Go 一览"],
      ["8 风险", "未关闭风险与降险动作"],
      ["9 需要的支持", "决策层要批准什么：资源 / 试点范围 / 本地部署立项"],
      ["10 下一步", "Demo → 生产路径 + “上线后 N 周出真实数字”承诺"],
    ];
    table(s, rows, { y: 1.3, colW: [0.9, 7.9], rowH: 0.4 });
    calloutBar(s, "两种汇报人看两套重点页：陈主任（决策层）讲 1/3/7/9（价值·决策·支持）；市数据局（监管层）讲 4/8（合规·风险）。ROI 用五步法：假设→效率→质量→敏感度→锁定，给区间不给单点。", 5.1, C.bgBlue, C.primary);
  }
};
