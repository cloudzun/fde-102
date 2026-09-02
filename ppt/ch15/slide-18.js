// slide-18.js — 15.3.3 业务 Scale
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 18, title: "业务 Scale" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "业务 Scale：有 Gate 的渐进过程", C.bgWhite);
    const steps = [
      { t: "小范围试点", d: "种子用户 · 一个部门/一类诉求", fill: C.bgBlue, strip: C.primary },
      { t: "真实数据验证", d: "采用率 · 转人工率 · 业务指标", fill: C.bgBlue, strip: C.primary },
      { t: "扩大范围 Gate", d: "采用 / 价值 / 工程 / 容量 四项全过？", fill: C.bgCard, strip: C.primary },
      { t: "扩大范围 → 客户自运营", d: "进入下一批推广 · 衔接第 14 章撤出", fill: C.bgGreen, strip: C.green },
    ];
    steps.forEach((g, i) => {
      const y = 1.4 + i * 0.78;
      s.addShape("rect", { x: 1.0, y, w: 8.0, h: 0.66, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.0, y, w: 0.06, h: 0.66, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.25, y, w: 3.4, h: 0.66, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.85, y, w: 3.95, h: 0.66, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 3) s.addShape("line", { x: 5.0, y: y + 0.66, w: 0, h: 0.12, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    s.addShape("rect", { x: 2.8, y: 4.7, w: 4.4, h: 0.55, fill: { color: C.bgRed } });
    s.addShape("rect", { x: 2.8, y: 4.7, w: 0.05, h: 0.55, fill: { color: C.red } });
    s.addText("未过 → 补短板（门槛动机信任 / 口径 / 生产差距 / 容量）→ 回验证；持续不达标 → 暂停 / 停止", { x: 2.8, y: 4.7, w: 4.4, h: 0.55, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", valign: "middle", margin: 0 });
    calloutBar(s, "扩大范围 Gate 四项：采用（达到目标率）· 价值（口径无夸大）· 工程（第 14 章证据）· 容量（人工消化得了）——缺一不扩大。", 5.15, C.bgAmber, C.accentWarm);
  }
};
