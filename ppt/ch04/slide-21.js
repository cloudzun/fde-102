// slide-23.js — 4.6 四阶段主导权矩阵
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 23, title: "四阶段主导权" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四阶段：谁主导、谁配合", C.bgWhite);
    const rows = [
      ["阶段", "主导", "Echo", "Delta"],
      ["Discovery 发现", "Echo", "挖痛点 · 理干系人 · 拆场景 · 选型", "补技术可行性"],
      ["Prototype 原型", "双角色", "定义 MVP · 讲 Demo · 拿决策", "快速做出可跑原型"],
      ["Build 构建", "Delta", "验需求 · 推采纳", "集成 · 测试 · 合规 · 上线"],
      ["Scale 扩展", "全团队", "推变革 · 讲价值", "自运营 · 回注 · 评估生产"],
    ];
    table(s, rows, { y: 1.35, colW: [1.6, 1.2, 3.1, 2.9], rowH: 0.55});
    calloutBar(s, "协作节奏：Echo 从“挖需求”到“验收 + 讲价值”，Delta 从“判断可行性”到“主导施工 + 回注”——角色不是静止的，而是随阶段迁移。", 5.05);
  }
};

