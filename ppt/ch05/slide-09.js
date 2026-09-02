// slide-09.js — 5.2 脚手架二：四层决策链
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 9, title: "四层决策链" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "脚手架二：四层决策链——对不同层级说不同话", C.bgLight);
    const items = [
      { t: "决策层", d: "关心：值不值、能不能汇报\n说：ROI 和成效", fill: C.bgAmber, strip: C.accentWarm },
      { t: "操作层", d: "关心：会不会抢饭碗、好不好用\n说：角色升级（分派员→审核员）", fill: C.bgBlue, strip: C.primary },
      { t: "技术层", d: "关心：数据安全、对接量\n说：本地部署 · 少动现有系统", fill: C.bgGreen, strip: C.green },
      { t: "监管层", d: "关心：合规 · 可解释\n说：不出域 · 可解释 · 有兜底", fill: C.bgRed, strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.75;
      s.addShape("rect", { x, y, w: 4.3, h: 1.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.6, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.9, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    calloutBar(s, "用法：画权力 × 兴趣坐标，把关键干系人（含“刁钻”的监管层）定位进去，为每人写一句沟通策略。", 5.0, C.bgBlue, C.primary);
  }
};
