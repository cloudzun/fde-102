// slide-13.js — 5.3 权力 × 兴趣四象限（图 5-3 / 表 5-1）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 13, title: "权力 × 兴趣四象限" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "权力（纵）× 兴趣（横）四象限", C.bgWhite);
    const quads = [
      { t: "Q1 高权 · 高兴趣", d: "决策者 / 冠军用户\n讲价值 · 拉入伙", fill: C.bgGreen, strip: C.green },
      { t: "Q2 高权 · 低兴趣", d: "监管层 / 阻碍者\n重点维护 · 防一票否决", fill: C.bgRed, strip: C.red },
      { t: "Q3 低权 · 高兴趣", d: "使用者\n讲角色升级 · 防抵制", fill: C.bgBlue, strip: C.primary },
      { t: "Q4 低权 · 低兴趣", d: "边缘角色\n保持知会即可", fill: C.bgAmber, strip: C.accentWarm },
    ];
    // 2×2 布局：左上 Q1、右上 Q2、左下 Q3、右下 Q4
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
    s.addText("纵轴：权力高低（说了算不算）｜横轴：兴趣高低（想不想推动）", { x: 1.2, y: 5.42, w: 7.4, h: 0.18, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0 });
  }
};
