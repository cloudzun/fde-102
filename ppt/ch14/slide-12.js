// slide-14.js — 14.5 八项 Gate
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 14, title: "八项 Gate" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "八项 FDE 生产准入条件", C.bgWhite);
    const rows = [
      ["Gate", "核心问题", "通过证据"],
      ["数据接入", "真实数据可用且责任清楚吗", "数据样本 · 字段映射 · 质量报告"],
      ["系统集成", "输入、动作和状态回写接通了吗", "接口联调记录 · 端到端演示"],
      ["权限责任", "谁能看/改/批准清楚吗", "权限矩阵 · 责任确认"],
      ["异常兜底", "外部依赖失败后业务还能继续吗", "故障演练 · 人工队列"],
      ["过程追溯", "能还原一次业务判断和动作吗", "日志 · 审计 · 版本标识"],
      ["发布回退", "新版本退化时能恢复吗", "灰度记录 · 回滚验证"],
      ["客户接管", "客户团队能独立运行吗", "运行手册 · 接管演练"],
      ["回注准备", "能区分客户专属与通用能力吗", "回注候选 · 复用证据"],
    ];
    table(s, rows, { y: 1.3, colW: [1.4, 3.6, 3.8], rowH: 0.52 });
    redBar(s, "Gate 是给客户的承诺底线：“未通过”是正常结果，掩盖风险才是失败；不得为了按计划上线把“未通过”写成“基本通过”。", 4.9);
  }
};
