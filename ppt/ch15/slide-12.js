// slide-12.js — 15.2.3 汇报话术
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 12, title: "汇报话术" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "对决策层的话术", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.9, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.9, fill: { color: C.green } });
    s.addText("“最可能年省 32 万；即使效果打折（保守）也有十几万——可验证的经济可行性，不是拍脑袋。”再以“上线后 N 周用真实运营数据出真数字”收尾。", {
      x: 0.85, y: 1.38, w: 8.3, h: 0.75, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "middle"
    });
    const items = [
      { t: "快赢追问", d: "先上哪个、何时见效 → 回到第 6 章快赢场景，给“一个月看什么、三个月出真实数字”" },
      { t: "追责追问", d: "数据泄露谁负责 → 人是最终决策者、AI 只给建议；数据不出域、可回滚" },
      { t: "失业追问", d: "AI 会不会让我失业 → 机器干重复、人干判断，人在 checkpoint 把关" },
    ];
    items.forEach((it, i) => {
      const y = 2.45 + i * 0.85;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.75, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.75, fill: { color: C.accentWarm } });
      s.addText(it.t, { x: 0.85, y, w: 2.0, h: 0.75, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.0, y, w: 6.2, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "对外汇报提供区间与假设，不使用未经验证的单点承诺；第 16 章汇报同样遵守。", 5.1, C.bgBlue, C.primary);
  }
};
