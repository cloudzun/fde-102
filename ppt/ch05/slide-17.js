// slide-18.js — 5.5 业务牵引逆向盘点（图 5-4）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 18, title: "逆向盘点五问" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "“业务牵引”逆向盘点", C.bgWhite);
    const steps = [
      { t: "业务需要什么数据？", fill: C.bgBlue, strip: C.primary },
      { t: "数据在哪？（哪个系统 / 部门）", fill: C.bgGreen, strip: C.green },
      { t: "什么格式？（md / xlsx / pdf / 扫描件）", fill: C.bgGreen, strip: C.green },
      { t: "能拿到吗？（可得性 / 权限 / 合规）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "能直接用吗？（还需清洗多少）", fill: C.bgAmber, strip: C.accentWarm },
    ];
    steps.forEach((g, i) => {
      const y = 1.4 + i * 0.78;
      s.addShape("rect", { x: 1.0, y, w: 8.0, h: 0.68, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.0, y, w: 0.07, h: 0.68, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.3, y, w: 7.4, h: 0.68, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("line", { x: 5.0, y: y + 0.68, w: 0, h: 0.13, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    s.addText("先想清楚业务需要哪些数据，再倒查数据在哪、格式如何、能否拿到——而不是“有什么数据做什么”。", {
      x: 0.6, y: 5.3, w: 8.8, h: 0.28, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
  }
};
