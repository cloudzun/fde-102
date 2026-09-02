// slide-08.js — 环节 4 复盘 + Echo 检查单 + 桥接 Lab4B
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "环节 4 复盘沉淀" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 4 · 复盘沉淀 + 桥接", C.bgLight);
    const items = [
      { t: "更新 AGENTS.md", d: "分级判定标准 · 工具定义 · 验证命令 · 工具坑" },
      { t: "改进交接", d: "“实操五汇报前先看这条经验：____”（“简单诉求自动化率”是 ROI 汇报亮点）" },
      { t: "Echo 检查单", d: "敏感件业务定义确认 · 升级审批责任 · 人工容量 · 错路由代价分级 · 是否满足原需求" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.85;
      numBadge(s, 0.7, y + 0.1, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.0, h: 0.65, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.5, y, w: 5.8, h: 0.65, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "桥接实操四B（Lab4B）：本章做的是“预编排固定分支”路由；想体验真正按目标反复决策的受控 Agent（动态选工具 / 追问 / 人工暂停 / 有限循环），进入无编号实操四B。", 4.35, C.bgBlue, C.primary);
    s.addText("演示级验收声明：“6 份工单样本，属演示级验收——只证明路由逻辑在给定样本上可行”。政务场景夸大更危险。", { x: 0.6, y: 5.0, w: 8.8, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
