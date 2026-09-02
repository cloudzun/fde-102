// slide-02.js — 本章导学：学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "翻译损耗 → 为什么需要双角色",
      "三角色：Delta / Echo / Engineering",
      "战位职责 ≠ 个人能力（T 型）",
      "Echo 与 Delta 的职责、能力画像、时间分配",
      "人能判断、AI 能执行 + 两种训练模式",
      "四阶段谁主导；定位练习认领战位",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "前置：第 1–3 章（FDE 定义、飞轮、四阶段）——尤其第 3 章 3.2 的分工骨架，本章深入展开并认领战位。", 5.1);
  }
};
