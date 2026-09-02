// slide-12.js — 3.3.1 Discovery 发现期
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 12, title: "Discovery 发现期" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "Discovery 发现期——先找对问题，别做错事", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.25, w: 8.8, h: 0.7, fill: { color: C.bgBlue } });
    s.addShape("rect", { x: 0.6, y: 1.25, w: 0.05, h: 0.7, fill: { color: C.primary } });
    s.addText("陈主任：“用 AI 把这一整套都智能化了”——初期不以功能开发为目标。", {
      x: 0.85, y: 1.25, w: 8.3, h: 0.7, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0
    });
    const items = [
      { t: "走访四方", d: "决策 / 操作 / 技术 / 监管", strip: C.primary },
      { t: "盘数据", d: "5 份杂乱文档", strip: C.accentWarm },
      { t: "挖风险", d: "不出域 · 怕替代 · ROI 说不清", strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 2.15;
      s.addShape("rect", { x, y, w: 2.85, h: 1.3, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.3, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.15, y: y + 0.12, w: 2.55, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.55, w: 2.55, h: 0.65, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "作用：先找对问题——跳过它，方案可能做在错误地基上（如不知“数据不出域”选了公有云）。", 3.85);
    calloutBar(s, "职能：Echo 主导 →《解决方案框架》：拆三个子场景（诉求分类 / 政策问答 / 工单分流）+ 技术选型 + 优先级。", 4.5, C.bgAmber, C.accentWarm);
    s.addText("对应：第 5 章方法、第 6 章实操一。", { x: 0.6, y: 5.15, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
