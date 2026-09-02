// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "三个不等于：验收 ≠ 价值 ≠ 采用 ≠ 回注",
      "价值证据链：痛点 → 基线 → 能力 → 指标 → 变化 → 价值",
      "五类口径：年度价值 / 净收益 / TCO / ROI / 回收期",
      "门槛 · 动机 · 信任诊断“推不动 / 没人用”",
      "业务 Scale：试点 → 复核 → 扩大 Gate → 停止条件",
      "能力回注联合决策：Echo 判通用性 + Delta 证复用性 + 本体承载",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "主线：第 14 章证明系统接得住，本章证明组织愿意接——价值（15.2）/ 采用（15.3）/ 回注（15.4）三块证据供第 16 章评审。", 5.05, C.bgBlue, C.primary);
  }
};
