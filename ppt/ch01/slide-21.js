// slide-24.js — 案例一：批次零件被卡住（业务对象关系网）
const { C, sectionTitle, calloutBar, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 24, title: "案例一：零件被卡住" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "案例一：一个批次零件被卡住，受影响飞机如何瞬间浮出？", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.8, fill: { color: C.bgBlue } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.8, fill: { color: C.primary } });
    s.addText("场景：一批紧固件在海关被卡住——这批零件用在哪些飞机上？哪些总装会被拖累？", {
      x: 0.85, y: 1.35, w: 8.3, h: 0.7, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25, valign: "middle"
    });
    const items = [
      { t: "传统方式（吃力）", d: "跨多张表多次 JOIN 回溯血缘——等算清楚，总装线往往已停。", fill: C.bgRed, strip: C.red },
      { t: "FDE 在现场（先建网）", d: "先把“业务实体关系”建成可操作的网：零件→工位→飞机→质检员，各段关系清晰。", fill: C.bgGreen, strip: C.green },
      { t: "事件发生时（瞬间联动）", d: "“紧固件被卡住”→ 系统瞬间联动，受影响飞机全部标红——无需临时联表。", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const y = 2.15 + i * 0.83;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.75, fill: { color: it.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.75, fill: { color: it.strip } });
      s.addText(it.t, { x: 0.85, y: y + 0.06, w: 2.7, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: 0.85, y: y + 0.36, w: 8.3, h: 0.36, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    bigCallout(s, "核心价值：把“看不见的业务连带关系”变成“一秒钟就能决策”的现场能力——交付的不是报表，而是“遇突发、当场反应”的能力。", 4.78, 0.7);
  }
};
