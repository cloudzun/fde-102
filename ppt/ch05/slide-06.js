// slide-06.js — 5.1 Echo 在 Discovery 初期的时间分配
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "Discovery 时间分配" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Echo 在 Discovery 初期的时间分配（参考）", C.bgWhite);
    const items = [
      { t: "35%", d: "听客户说话\n干系人访谈", fill: C.bgAmber, strip: C.accentWarm },
      { t: "25%", d: "跟班观察\n业务现场", fill: C.bgBlue, strip: C.primary },
      { t: "20%", d: "数据资产盘点", fill: C.bgGreen, strip: C.green },
      { t: "20%", d: "验证与方案设计\n（含时间盒验证）", fill: "EDEAF6", strip: "907BB5" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.1, h: 1.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.16, w: 2.1, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.72, w: 2.1, h: 0.9, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "与 Delta 的根本分工：Echo 的第一任务是把问题“定义对”，而不是“动手做”——判断错，再快的施工也是白费。", 3.85, C.bgAmber, C.accentWarm);
    s.addText("*图 5-1：Echo 把 Discovery 初期时间花在听懂业务上*", { x: 0.6, y: 4.6, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
