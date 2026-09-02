// slide-02.js — 实操目标与产出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "实操目标与产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实操目标与产出", C.bgLight);
    const goals = [
      "双层验收：三个单点 MVP 双视角 + 实操四B 受控 Agent",
      "能力回注四步法：哪些“碎石路”能铺装成“公路”",
      "每场景下一阶段决策：Go / Conditional Go / Continue Pilot / No-Go",
      "ROI 框架 + 合规交代：面向决策层“双线汇报”",
      "理解“会做 ≠ 会说 ≠ 会决策”",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.6;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "产出：综合评审与交付决策包（两层验收 + 回注总结 + 每场景决策单 + 十页汇报稿）。不做新功能，只做四件事：验收 / 回注 / 决策 / 汇报。", 4.72, C.bgBlue, C.primary);
    calloutBar(s, "核心隐喻：碎石路 → 铺装公路——把西岭定制铺成给所有客户的能力。", 5.18, C.bgAmber, C.accentWarm);
  }
};
