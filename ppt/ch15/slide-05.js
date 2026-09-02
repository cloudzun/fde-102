// slide-05.js — 15.1 工程 Scale vs 业务 Scale
const { C, sectionTitle, table } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "双 Scale 对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工程 Scale vs 业务 Scale", C.bgLight);
    const rows = [
      ["尺度", "核心问题", "主导", "证据"],
      ["工程 Scale（第 14 章）", "系统能否稳定运行、监控、恢复并接管", "Delta", "日志 · 指标 · 故障注入 · 回滚 · 接管演练"],
      ["业务 Scale（本章）", "组织是否愿意采用、推广，价值是否成立", "Echo", "价值证据链 · 采用反馈 · 回注判断"],
    ];
    table(s, rows, { y: 1.5, colW: [1.9, 3.4, 1.0, 2.5], rowH: 0.55});
    s.addText("两者共同构成完整 Scale：Delta 让系统接得住，Echo 让组织愿意接——缺一不可。", {
      x: 0.6, y: 3.7, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("本章所有判断必须建立在第 14 章的工程证据上，不能只给口头承诺。", {
      x: 0.6, y: 4.3, w: 8.8, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
  }
};

