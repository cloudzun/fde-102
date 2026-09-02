// slide-21.js — 5.6 影响力 × 可行性矩阵（图 5-5）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 21, title: "影响力 × 可行性矩阵" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "影响力 × 可行性矩阵——找出“快赢”", C.bgWhite);
    const quads = [
      { t: "Q1 ★ 快赢", d: "高影响 · 高可行\n第一优先，先做这个！", fill: C.bgGreen, strip: C.green },
      { t: "Q2 可做价值有限", d: "低影响 · 高可行\n延后，有余力再排", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Q3 需补条件", d: "高影响 · 低可行\n第二优先，先补数据 / 条件", fill: C.bgBlue, strip: C.primary },
      { t: "Q4 不做", d: "低影响 · 低可行\n砍掉，不投入", fill: C.bgRed, strip: C.red },
    ];
    const pos = [
      { x: 1.2, y: 1.5 }, { x: 5.0, y: 1.5 },
      { x: 1.2, y: 3.5 }, { x: 5.0, y: 3.5 },
    ];
    quads.forEach((q, i) => {
      const p = pos[i];
      s.addShape("rect", { x: p.x, y: p.y, w: 3.6, h: 1.85, fill: { color: q.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: p.x, y: p.y, w: 3.6, h: 0.06, fill: { color: q.strip } });
      s.addText(q.t, { x: p.x + 0.15, y: p.y + 0.12, w: 3.3, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(q.d, { x: p.x + 0.15, y: p.y + 0.55, w: 3.3, h: 1.2, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    s.addText("纵轴：可行性（数据 / 技术 / 合规 / 周期）｜横轴：影响力（领导关心 / 获得感 / 覆盖）", { x: 1.2, y: 5.42, w: 7.4, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
  }
};
