// slide-06.js — 3.2.1 客户侧三件事
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "客户侧三件事" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "客户侧：系统被谁用、谁推动、谁接盘", C.bgWhite);
    const items = [
      { t: "干系人管理", d: "决策者 · 使用者 · 技术层 · 监管层\n不同层级说不同话", strip: C.primary },
      { t: "冠军用户", d: "头三天找到客户内部\n最懂业务、能帮推动的“自己人”", strip: C.accentWarm },
      { t: "变革推动", d: "防“没人用”：\n门槛 → 动机 → 信任", strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.6;
      s.addShape("rect", { x, y, w: 2.85, h: 1.9, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.9, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.15, y: y + 0.15, w: 2.55, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.7, w: 2.55, h: 1.1, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35 });
    });
  }
};
