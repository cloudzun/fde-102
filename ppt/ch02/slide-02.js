// slide-02.js — 本章导学：学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "描述传统项目制的“死亡螺旋”，并解释为何它是“结构性”而非“管理不善”",
      "对比 SaaS / 咨询 / 外包 / FDE+平台四种交付模式，说清 FDE“既要适配又要复用”",
      "用“能力回注飞轮 + 经验曲线（Cₙ = C₁ × n⁻ᵅ）”解释 FDE“越做越省”",
      "记忆一组 Palantir 财务数据（毛利率约 67%→82.4%、净利率转正、NRR）佐证模式",
      "用 8 条教材诊断量表鉴别“真伪 FDE”",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.72;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "前置知识：第 1 章（FDE 定义、“卖人力 vs 卖能力”判断标准）。本章用经济学证明 FDE 模式成立。", 4.85);
  }
};
