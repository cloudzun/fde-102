// slide-26.js — 11.8.1/2 三层护栏 + 真实事故
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 26, title: "三层护栏" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "三层护栏框架", C.bgLight);
    const rows = [
      ["层", "内容", "典型做法"],
      ["输入过滤", "防注入 · 去敏 · 输入校验", "prompt injection 检测 · PII 脱敏 · 限流"],
      ["行为约束", "最小权限 · 工具白名单 · 审批门控", "只给工作所需最少工具；越权自动拒绝"],
      ["输出审查", "校验输出 · 发布前复核 · 审计日志", "关键输出风险校验 · 人工复核点 · 全链路可追溯"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 3.3, 4.0], rowH: 0.55});
    redBar(s, "真实事故（截至 2026-08）：AI 编程代理 9 秒删库、约 30 小时无法恢复；Operator 代理执行未授权交易；人类审核者放行约 1/3 危险请求——权限最小化 + 审批门控 + 人机回环是基石。", 4.4);
  }
};

