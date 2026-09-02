// slide-22.js — 5.6 快赢评分量表
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "快赢评分量表" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "快赢评分量表（影响力 × 可行性，1–5 分）", C.bgLight);
    const rows = [
      ["维度", "评分项", "1 分", "3 分", "5 分"],
      ["影响力", "领导关注", "无人关心", "部门主任关心", "决策者点名要"],
      ["", "业务获得感", "无感", "部分受益", "高频 · 强痛点"],
      ["", "覆盖规模", "单点", "一个部门", "跨部门 / 全流程"],
      ["可行性", "数据", "拿不到", "有条件（需申请/清洗）", "已在手"],
      ["", "技术复杂度", "高（微调 / Agent）", "中（RAG）", "低（一次调用）"],
      ["", "合规", "有红线风险", "需评审", "无新增风险"],
      ["", "周期", ">1 个月", "2–4 周", "≤2 周"],
    ];
    table(s, rows, { y: 1.3, colW: [1.1, 1.7, 2.0, 2.0, 2.0], rowH: 0.45 });
    redBar(s, "铁律：每项分值必须写判断依据（数字 / 事实 / 访谈引述）——不允许“凭感觉”打分。", 5.05);
  }
};
