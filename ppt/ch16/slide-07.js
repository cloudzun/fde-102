// slide-07.js — 下一阶段决策
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "下一阶段决策" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "脑暴三 · 下一阶段决策", C.bgWhite);
    const rows = [
      ["决策", "含义"],
      ["Go", "正式推进"],
      ["Conditional Go", "附条件推进（写清条件、责任人、时限）"],
      ["Continue Pilot", "继续试点（合法中间态，写明范围与复核时间，不是拖延）"],
      ["No-Go", "停止或另起（如实呈现，不统一“全 Go”）"],
    ];
    table(s, rows, { y: 1.35, colW: [2.0, 6.8], rowH: 0.55});
    s.addText("决策单六项：当前决策 → 业务依据（第 15 章）→ 技术依据（第 14 章 Gate 八项 / 接管）→ 未关闭风险（数据出域 / 容量 / 责任 / 合规）→ 责任人（Echo / Delta / 客户方）→ 下一 Gate（什么条件、何时复核）", {
      x: 0.6, y: 4.0, w: 8.8, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "决策不是投票，是拿证据说话——没有证据支撑的“Go”和“No-Go”都是态度；三场景结论不一致（如 A 可 Go、C 需 No-Go）如实呈现。", 4.9, C.bgRed, C.red);
  }
};

