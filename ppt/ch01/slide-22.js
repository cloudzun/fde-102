// slide-25.js — 案例二：Airbus — 一个客户的问题变成一个行业的平台
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 25, title: "案例二：Airbus" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "案例二：Airbus——一个客户的问题，变成一个行业的平台", C.bgWhite);
    // 关键数字
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.85, fill: { color: C.primary }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.15 } });
    s.addText("A350 客机增产 33%", { x: 0.6, y: 1.38, w: 3.0, h: 0.7, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, align: "center", valign: "middle", margin: 0 });
    s.addText("500 万个零件 · 数百个团队 · 多国生产线\n排产 / 零件 / 工单 / 质检数据散落各系统", { x: 3.8, y: 1.4, w: 5.4, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: "D9E0F5", valign: "middle", margin: 0, lineSpacingMultiple: 1.25 });
    const steps = [
      { t: "2015 · 问题", d: "紧急增产 A350 33%，生产数据散落各系统。", fill: C.bgBlue, strip: C.primary },
      { t: "FDE 驻场", d: "接入数据建统一视图，实现 33% 增产。", fill: C.bgGreen, strip: C.green },
      { t: "但故事没有结束", d: "数据碎片化、排产靠经验——是航空制造业的通用痛点。", fill: C.bgAmber, strip: C.accentWarm },
      { t: "平台回注", d: "反馈产品团队，升级为面向全行业的 Skywise。", fill: C.bgCard, strip: C.primary },
    ];
    steps.forEach((it, i) => {
      const y = 2.3 + i * 0.64;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.56, fill: { color: it.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.56, fill: { color: it.strip } });
      s.addText(it.t, { x: 0.85, y, w: 2.7, h: 0.56, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.7, y, w: 5.5, h: 0.56, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "“反馈闭环”（能力回注）的终极展示：一个客户的问题 → 识别可复用模式 → 行业平台——“卖人力到卖能力”的活例子。", 4.95);
    s.addText("来源：Palantir 官网 Impact | Airbus and Skywise（palantir.com/impact/airbus），信息截至 2026 年。", { x: 0.6, y: 5.45, w: 8.8, h: 0.14, fontSize: 8, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
