// slide-10.js — 4.3 Echo 核心职责 5 条
const { C, sectionTitle, numBadge } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 10, title: "Echo 核心职责" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Echo 核心职责（5 条）", C.bgWhite);
    const items = [
      { t: "干系人管理", d: "谁说了算、谁会挡路" },
      { t: "痛点识别", d: "高价值 ROI 的业务场景" },
      { t: "场景规划", d: "拆大需求 · 定 MVP 边界" },
      { t: "技术选型", d: "能力金字塔选对路线" },
      { t: "落地推动", d: "客户采纳 · 撬动快赢" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 0.78;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.2, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.7, y, w: 5.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("战略定义：业务专家 + “产品侦探”——看穿客户嘴上说的“伪需求”与实际面临的“真痛点”之间的鸿沟。", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
