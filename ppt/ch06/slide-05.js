// slide-05.js — 流程总览（图 6-1：六环节）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 5, title: "六环节流程" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "本实操六个环节流程", C.bgWhite);
    const steps = [
      { t: "0 认识战队", d: "Echo / Delta / Engineering" },
      { t: "1 读材料", d: "个人独立判断" },
      { t: "2 脑暴一", d: "挖风险" },
      { t: "3 脑暴二", d: "理干系人" },
      { t: "4 脑暴三", d: "拆场景 + 选型" },
      { t: "5 汇报", d: "面向陈主任" },
    ];
    steps.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      s.addShape("rect", { x: 1.2, y, w: 7.6, h: 0.52, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 1.2, y, w: 0.06, h: 0.52, fill: { color: C.primary } });
      s.addText(g.t, { x: 1.45, y, w: 3.6, h: 0.52, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 5.2, y, w: 3.4, h: 0.52, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 5) s.addShape("line", { x: 5.0, y: y + 0.52, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "铁律：先独立、后碰撞——每一步先个人独立判断打底，再全组讨论，一上来就开口会被声量大的人带偏。", 5.05, C.bgRed, C.red);
  }
};
