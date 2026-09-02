// slide-04.js — 第一层验收
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 4, title: "第一层验收" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "第一层验收 · 三个单点 MVP 双视角", C.bgLight);
    const rows = [
      ["视角", "问题", "输出"],
      ["Echo 视角", "需求满足了吗？✅/⚠️/❌ 为什么", "需求满足度表（场景 | 需求/验收标准 | 是否满足 | 差距 | 证据）"],
      ["Delta 视角", "这个 MVP 能上生产吗？差距在哪", "生产差距表（对照八项 FDE 生产准入）"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 3.4, 3.9], rowH: 0.55});
    s.addText("自查追问：每个 Demo 验收都达标（分类 ≥85%、RAG 双指标、路由零漏判）——但验收达标就等于需求满足了吗？你量的到底是当初承诺的东西，还是客户真正要的东西？", {
      x: 0.6, y: 3.5, w: 8.8, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    redBar(s, "数据出域必须明交代：课堂用模拟数据走公网验证；真实客户数据只能在批准安全域内验证——交付包必须写明：哪些用了模拟数据、换真实数据要重新验证什么、本地回填形态与工期。", 4.35);
    s.addText("流程：先独立判断（每人写）→ 组内讨论（需求满足度墙 + 生产差距墙）→ 达成共识输出两张表。", { x: 0.6, y: 5.15, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

