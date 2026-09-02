// slide-08.js — 环节 4 复盘沉淀 + Echo 检查单
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "环节 4 复盘沉淀" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 4 · 复盘沉淀（经验回注）", C.bgLight);
    const items = [
      { t: "AGENTS.md", d: "项目硬约束 · 目录地图 · 验收命令 · 工具坑——实操三开新会话时让 AI 直接继承上下文" },
      { t: "交接行动项", d: "“下一轮（场景 B RAG）开工前，我要先看这条经验：____”" },
      { t: "Echo Prototype 检查单", d: "错分代价分级 · 阈值与转人工策略确认 · 人工容量检查 · 用户反馈 · 是否满足原需求" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 1.1;
      numBadge(s, 0.7, y + 0.12, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.3, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.8, y, w: 5.5, h: 0.8, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "衔接第 10 章：实操三开工时读实操二的 AGENTS.md + retro.md，就继承“怎么跑、有哪些坑”——FDE 团队经验回注的微缩版。", 5.0, C.bgBlue, C.primary);
  }
};
