// slide-08.js — 环节 4 复盘沉淀 + Echo 检查单
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "环节 4 复盘沉淀" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 4 · 复盘沉淀 + 演示级验收声明", C.bgLight);
    const items = [
      { t: "更新 AGENTS.md", d: "RAG 特有坑：程序性条款过滤 · 拒答两层防线" },
      { t: "改进交接", d: "“下一轮场景 C（Agent）开工前先看这条经验：____”" },
      { t: "Echo Prototype 检查单", d: "回答/拒答边界 · 引用是否支撑结论（抽查两类失败）· 政策边界确认 · 坐席反馈 · 是否满足原需求" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 0.85;
      numBadge(s, 0.7, y + 0.1, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.6, h: 0.65, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.1, y, w: 5.2, h: 0.65, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "演示级验收声明：“5 份政策文档 + 6 条 Q&A 验证集，属演示级验收——只证明方案在给定政策库和样本上可行”。政务场景夸大更危险——市民按错误信息办事，责任是平台扛。", 4.4, C.bgRed, C.red);
  }
};
