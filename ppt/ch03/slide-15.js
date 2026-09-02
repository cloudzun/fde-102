// slide-16.js — 3.3.2 四 Gate 通过证据 + 止损规则
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "四 Gate 通过证据" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "四个 Gate：凭什么“过了”", C.bgLight);
    const rows = [
      ["Gate", "通过证据（关键词）", "未通过动作"],
      ["Discovery", "方向认可 · 冠军到位 · 数据可得 · 选型讲得清 · 红线入案", "补证据 / 砍场景 / 重筛或终止"],
      ["Prototype", "达标 · 可溯源 · 零漏判 · 决策层认可", "定位原因 → 迭代 → 回退或砍掉"],
      ["Build", "验收过 · 红线合规 · 演练过 · 能自运营", "修复 → 降级放行 → 回退"],
      ["Scale", "撤离后自运营 · 回注复用验证过 · 飞轮有记录", "暂缓回注 / 延长陪跑"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 4.6, 2.7], rowH: 0.55});
    redBar(s, "止损规则：连续两次 Gate 未过（或超预算仍无证据）→ 降范围 / 换方案 / 终止——防止“做错了还往下走”。", 5.0);
  }
};

