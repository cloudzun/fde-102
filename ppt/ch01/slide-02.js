// slide-02.js — 本章导学：学习目标 + 章节地图
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "讲清 FDE 产生于哪三重结构性矛盾",
      "说出 FDE 的定义、一句箴言与三层含义（岗位 / 团队 / 方法论）",
      "讲清“三重角色”为何必须融合，并守住“工程师身份是内核”",
      "用“从卖人力到卖能力”标准区分 FDE 与外包 / 咨询",
      "说出 AI 时代大模型落地的五大鸿沟，并解释它们为什么指向 FDE",
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
    calloutBar(s, "章节地图：第 1 章“是什么”（what）→ 第 2 章“为什么成立”（why）→ 第 3 章“怎么工作”（how）→ 第 4 章由谁（Echo/Delta）执行 → 第 6 章起动手做。", 4.75);
  }
};
