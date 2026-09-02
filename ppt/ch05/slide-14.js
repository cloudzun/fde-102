// slide-15.js — 5.4 痛点诊断做法 + 四类痛点
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "四类痛点" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "做法 + 四类痛点", C.bgLight);
    const ways = [
      { t: "结构化访谈", d: "按角色列问题\n深挖“每天最头疼的事”" },
      { t: "跟班观察", d: "到现场看业务流转\n眼睛看到的比嘴上说的更真实" },
    ];
    ways.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 4.3, h: 1.3, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.3, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.12, w: 3.9, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.55, w: 3.9, h: 0.65, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25 });
    });
    const types = [
      { t: "流程", d: "低效 · 返工", ex: "简单/复杂诉求混走一套流程", fill: C.bgAmber, strip: C.accentWarm },
      { t: "数据", d: "拿不齐 · 不可用", ex: "政策库格式混杂", fill: C.bgBlue, strip: C.primary },
      { t: "决策", d: "靠人 · 易错", ex: "坐席老分错部门", fill: C.bgGreen, strip: C.green },
      { t: "协作", d: "信息孤岛", ex: "工单/市民/政策分属多套系统", fill: C.bgRed, strip: C.red },
    ];
    types.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 3.0;
      s.addShape("rect", { x, y, w: 2.1, h: 1.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.12, w: 2.1, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.52, w: 2.1, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
      s.addText(it.ex, { x: x + 0.1, y: y + 0.95, w: 1.9, h: 0.6, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "完成判据：每条痛点有原始证据（访谈引述 / 观察记录 / 数据样例），不凭印象；能说清影响谁、多频繁、代价多大。", 5.0);
  }
};
