// slide-27.js — 11.8.3 HITL
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 27, title: "人机回环 HITL" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "人机回环（HITL）", C.bgWhite);
    const rows = [
      ["层次", "机制", "适用"],
      ["人在环内（in-the-loop）", "关键路径必须暂停，等人确认", "政务 / 金融敏感路径：发钱、删数据、对外上报"],
      ["人在环上（on-the-loop）", "智能体自主跑，人在监督", "一般任务：仪表盘 · 抽检 · 异常告警"],
      ["人在环外（out-of-the-loop）", "无人工介入，事后审计 + 回滚", "低风险、可逆的重复任务"],
    ];
    table(s, rows, { y: 1.35, colW: [2.0, 3.4, 3.4], rowH: 0.55});
    s.addText("三个工程要点：①暂停点选在影响真金白银 / 安全 / 合规 / 对外动作的路径，其他路径不要处处暂停；②确认界面给人“上下文 + 候选动作 + 风险提示”，能判断而非盲批；③人工不响应 → 超时默认拒绝、升级，绝不“超时自动通过”。", {
      x: 0.6, y: 3.9, w: 8.8, h: 0.7, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "HITL 不是免死金牌——关键路径要双人复核或抽检，并记录“谁在什么时间批准了什么”（审计）。", 4.95, C.bgRed, C.red);
  }
};

