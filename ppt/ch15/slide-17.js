// slide-17.js — 15.3.2 双线话术
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 17, title: "双线话术" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "双线话术示范", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.35, w: 8.8, h: 0.55, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
    s.addShape("rect", { x: 0.6, y: 1.35, w: 0.05, h: 0.55, fill: { color: C.green } });
    s.addText("金字塔结论句模板：“这套（系统）上线后，（核心价值·用数字）；全程（约束，如数据不出域）；需要你（一个具体动作）。”", {
      x: 0.85, y: 1.35, w: 8.3, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    const items = [
      { t: "对陈主任（决策层 · 讲价值）", d: "“一年能省约 30 万人工分派工时——算的是每天 2000 条里那 60% 的简单件；全程数据不出政务网；三个月后用真实数据再出准确数字，您下月去市里汇报可以直接用。”" },
      { t: "对市数据局（监管层 · 讲合规）", d: "“一开始就把合规放第一位：数据不出政务外网、模型本地部署、流程不进公网；AI 只做辅助分类，关键决策由人拍板，出错可回滚、可追责。”" },
    ];
    items.forEach((it, i) => {
      const y = 2.15 + i * 1.45;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 1.3, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 1.3, fill: { color: i === 0 ? C.primary : C.red } });
      s.addText(it.t, { x: 0.85, y: y + 0.1, w: 8.3, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: 0.85, y: y + 0.48, w: 8.3, h: 0.75, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "同一个方案翻译成两套话术——陈主任听“值不值、能不能拿去汇报”，市数据局听“合规、责任、审计”。", 5.15, C.bgAmber, C.accentWarm);
  }
};
