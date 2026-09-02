// slide-04.js — 2.1.1 死亡螺旋（图 2-1 图形化：垂直七段 + 闭环）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "死亡螺旋" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "项目制交付的死亡螺旋", C.bgLight);
    const bands = [
      { t: "客户定制需求多且分散", d: "", fill: C.bgAmber, strip: C.accentWarm },
      { t: "企业投入大量研发进行定制开发", d: "", fill: C.bgBlue, strip: C.primary },
      { t: "交付周期长 · 成本失控", d: "", fill: C.bgBlue, strip: C.primary },
      { t: "项目利润率（毛利）极低甚至亏损", d: "", fill: C.bgRed, strip: C.red },
      { t: "无力投入核心平台研发", d: "", fill: C.bgRed, strip: C.red },
      { t: "产品竞争力下降", d: "", fill: C.bgRed, strip: C.red },
      { t: "只能靠低价和更深度的定制抢单", d: "", fill: C.bgAmber, strip: C.accentWarm },
    ];
    bands.forEach((g, i) => {
      const y = 1.2 + i * 0.55;
      s.addShape("rect", { x: 0.7, y, w: 7.8, h: 0.48, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.7, y, w: 0.06, h: 0.48, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.95, y, w: 7.3, h: 0.48, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
    });
    // 右侧闭环箭头（自下而上回到起点）
    s.addShape("line", { x: 8.7, y: 1.4, w: 0, h: 3.6, line: { color: C.red, width: 2, beginArrowType: "triangle" } });
    s.addText("自我强化\n闭环", { x: 8.62, y: 1.6, w: 1.3, h: 1.0, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.red, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
    s.addText("*图 2-1：需求分散→定制→亏损→无力投平台 的自我强化死亡螺旋*", { x: 0.7, y: 5.08, w: 7.8, h: 0.2, fontSize: 8.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
    s.addText("局部理性、全局自杀：每绕一圈，定制更重、毛利更薄、离平台更远。", { x: 0.7, y: 5.28, w: 8.6, h: 0.22, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
  }
};
