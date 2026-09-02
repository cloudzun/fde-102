// slide-21.js — 15.4.2 两条回注路径
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 21, title: "两条回注路径" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "两条互补的回注路径", C.bgWhite);
    const rows = [
      ["路径", "回注什么", "典型内容", "主导"],
      ["工程能力回注", "可跨系统复用的技术机制", "配置 · 日志 · 审计 · provider 适配 · 重试熔断 · 健康检查 · 发布回滚", "Delta 主导（第 14 章 14.9）"],
      ["业务语义回注", "对业务世界的稳定表达", "对象 · 属性 · 关系 · 状态 · 动作 · 业务规则 · 权限边界", "Echo 主导抽象，Delta 验证实现"],
    ];
    table(s, rows, { y: 1.4, colW: [1.5, 2.2, 3.6, 1.5], rowH: 0.55});
    calloutBar(s, "两条路径分别回答：工程能力回注——“这套技术机制能否在下一个系统复用？”；业务语义回注——“这套业务语言能否在下一个客户复用？”", 4.7, C.bgBlue, C.primary);
  }
};

