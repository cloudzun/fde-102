// slide-06.js — 7.1.4 两种偏差
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "两种偏差" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "立两个方向，避免两种偏差", C.bgWhite);
    const items = [
      { t: "偏差一「AI 万能论」", d: "以为有 AI 就不需要懂业务、懂现场的工程师——AI 解决“写得快”，不解决“知道该写什么、有没有人用”", fill: C.bgRed, strip: C.red },
      { t: "偏差二「AI 与己无关」", d: "以为数据管道、异构集成、现场推动 AI 碰不到——AI 正系统性地吃掉 FDE 工作里最可标准化、最重复的部分", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.0, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.0, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 1.2, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    bigCallout(s, "结论：AI 放大 FDE 的“复合能力”——让懂业务的人写代码更快、让写代码的人更快理解业务。主旋律：主动采用 AI，同时驾驭 AI。", 3.95, 0.8);
  }
};
