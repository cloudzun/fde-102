// slide-24.js — 15.4.5 四层回注模型
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 24, title: "四层回注模型" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "四层能力回注模型：回注什么、不回注什么", C.bgLight);
    const rows = [
      ["回注层", "回注内容", "西岭示例", "适合公共回注？"],
      ["内容层", "客户特定数据与知识", "西岭政策文本、部门名称", "通常否，留在客户域内"],
      ["语义层", "可复用对象/属性/关系/状态", "诉求、政策、部门、工单", "跨场景验证后可以"],
      ["动作层", "可复用业务动作和规则", "分类、查依据、分派、升级、审批", "权限与接口验证后可以"],
      ["治理层", "权限、审计和责任边界", "谁能看/改/批准、如何追责", "通用机制可回注，策略配置化"],
    ];
    table(s, rows, { y: 1.35, colW: [1.2, 2.7, 2.7, 2.2], rowH: 0.55});
    redBar(s, "不应回注：客户原始数据 · 个人信息与敏感实例 · 专属政策文本 · 未授权业务规则 · 客户部门与人员信息；不为了“通用”过度抽象。", 4.7);
  }
};

