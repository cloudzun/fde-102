// slide-21.js — 7.4.4 gstack
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 21, title: "gstack 八环节命令" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "gstack：harness 的一个开源实现（Garry Tan）", C.bgLight);
    const rows = [
      ["环节（通用）", "gstack 命令", "环节（通用）", "gstack 命令"],
      ["1 要不要做", "/office-hours", "5 找隐患", "/review"],
      ["2 死磕边界", "/spec", "6 测体验", "/qa"],
      ["3 决策拍板", "/autoplan", "7 收尾", "/ship"],
      ["4 做出来", "自然语言（build）", "8 复盘", "/retro"],
    ];
    table(s, rows, { y: 1.35, colW: [2.2, 2.2, 2.2, 2.2], rowH: 0.55 });
    s.addText("gstack 把单次 AI 会话扩成“虚拟团队流水线”（官方 23 个 opinionated tools；“八环节”为教材对主干命令链的归纳）。支持跨 agent 运行：Claude Code / Codex / opencode 均可作 host。", {
      x: 0.6, y: 4.0, w: 8.8, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "八环节骨架为教材提炼（基于 gstack 实践，符合 harness 通用规范），非大厂官方流程——纪律比工具重要。", 5.1, C.bgAmber, C.accentWarm);
  }
};
