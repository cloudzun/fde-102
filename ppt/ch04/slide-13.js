// slide-14.js — 4.4 Delta 核心职责 5 条
const { C, sectionTitle, numBadge } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "Delta 核心职责" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Delta 核心职责（5 条）", C.bgLight);
    const items = [
      { t: "数据管道", d: "端到端搭建与清洗" },
      { t: "原型开发", d: "高价值场景迭代" },
      { t: "系统集成", d: "异构集成 · 底层攻坚" },
      { t: "能力回注", d: "识别共性 → 回注平台（Feedback Loop）" },
      { t: "工程落地", d: "审查 · 测试 · 部署 · 上生产" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 0.78;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.2, h: 0.6, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.7, y, w: 5.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("战略定义：驻扎客户现场的“全栈特种兵”——技术与业务现实碰撞最前沿的解题者。", {
      x: 0.6, y: 5.25, w: 8.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
