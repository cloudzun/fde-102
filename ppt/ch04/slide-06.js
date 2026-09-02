// slide-07.js — 4.2 三角色（图 4-2）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "三角色" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "作战单元三角色：战场比喻", C.bgWhite);
    const items = [
      { t: "Delta · 技术执行", tag: "尖刀", d: "手上沾泥\n把方案翻译成能跑的代码", fill: C.bgBlue, strip: C.primary },
      { t: "Echo · 业务策略师", tag: "政委 / 导航员", d: "以业务与价值判断为主\n挖真需求 · 出策略 · 做取舍", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Engineering · 基础设施", tag: "保阵地", d: "安全合规 · 网络\n部署运维等脏活累活", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.tag, { x, y: y + 0.55, w: 2.85, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.98, w: 2.55, h: 1.0, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "本书主线 = Echo + Delta 双主角；Engineering 在课程中由讲师环境兜底。", 4.35);
  }
};
