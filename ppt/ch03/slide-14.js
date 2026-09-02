// slide-15.js — 3.3.2 Stage Gate 六要素
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "Gate 六要素" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Stage Gate 六要素（教材提炼）", C.bgWhite);
    const items = [
      { t: "输入条件", d: "已立项 · 有入口", strip: C.primary },
      { t: "核心活动", d: "阶段主要工作", strip: C.primary },
      { t: "必交付物", d: "阶段产物", strip: C.primary },
      { t: "通过证据", d: "凭什么“过了”", strip: C.green },
      { t: "未通过动作", d: "补证据 · 砍范围 · 终止", strip: C.red },
      { t: "主责与协同", d: "谁主导 · 谁配合", strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.6 + Math.floor(i / 2) * 1.3;
      s.addShape("rect", { x, y, w: 4.3, h: 1.2, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.2, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.18, y: y + 0.1, w: 3.9, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: y + 0.45, w: 3.95, h: 0.7, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.2 });
    });
  }
};
