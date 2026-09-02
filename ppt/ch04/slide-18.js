// slide-19.js — 4.5 人能判断、AI 能执行（图 4-5）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 19, title: "人能判断 AI 能执行" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "人能判断、AI 能执行", C.bgLight);
    const cols = [
      { t: "判断力（前脑）· 人", d: ["挖真需求 / 做取舍 / 出策略", "拍板（验收口径 / 兜底策略）", "审查 AI 产出对错"], fill: C.bgAmber, strip: C.accentWarm },
      { t: "施工力（后手）· AI + 人", d: ["Agent 跑流程 / 写样板代码", "人在 checkpoint 把关"], fill: C.bgBlue, strip: C.primary },
    ];
    cols.forEach((c, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.6, fill: { color: c.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.6, fill: { color: c.strip } });
      s.addText(c.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      c.d.forEach((line, j) => {
        const ly = y + 0.72 + j * 0.6;
        s.addShape("ellipse", { x: x + 0.25, y: ly + 0.15, w: 0.14, h: 0.14, fill: { color: c.strip } });
        s.addText(line, { x: x + 0.5, y: ly, w: 3.65, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, valign: "middle" });
      });
    });
    s.addText("两种能力缺一不可——“人会判断、AI 会执行”是 FDE 交付的核心引擎。", {
      x: 0.6, y: 4.5, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("*图 4-5：人能判断、AI 能执行*", { x: 0.6, y: 5.0, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
