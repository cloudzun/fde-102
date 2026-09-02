// slide-02.js — 本章导学：学习目标
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "“不以功能开发为目标”原则 + 时间盒验证边界",
      "三个脚手架：失败模式 / 决策链 / 能力金字塔",
      "三个 SOP：干系人地图 · 数据盘点 · 快赢筛选",
      "快赢评分量表（1–5 分 + 判断依据）",
      "场景拆解 + 选型三问 + 技术决策矩阵",
      "产出《解决方案框架》；Discovery Gate 六要素自检",
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
    calloutBar(s, "本章是理论，第 6 章实操一马上用——“知识 → 动手”一对。", 5.1);
  }
};
