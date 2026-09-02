// slide-02.js — 本章导学：学习目标（精简）
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "PPT 三要素：People 是根、Process 是脉、Technology 是器",
      "客户侧与己方侧；Echo / Delta 分工与协作",
      "四阶段：Discovery → Prototype → Build → Scale",
      "Stage Gate 六要素与止损规则",
      "LLM 能力金字塔 + 能力回注四步法",
      "五个实操的“总分总”实验设计",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, {
        x: 1.35, y, w: 8.0, h: 0.55,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: C.textDark, valign: "middle", margin: 0
      });
    });
    calloutBar(s, "前置：第 1–2 章（FDE 定义、飞轮）。本章是全书地图——进入实操前的总纲。", 5.1);
  }
};
