// slide-10.js — 14.3 语义对齐
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 10, title: "语义对齐" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "业务语义对齐 + 找事实来源", C.bgWhite);
    const items = [
      { t: "找事实来源", d: "对每个关键数据明确：哪个系统是唯一事实来源？有无冲突来源？谁能解释字段？延迟多长？错误谁修？", fill: C.bgBlue, strip: C.primary },
      { t: "对齐业务术语", d: "“诉求/案件/事件/工单”是否同一对象？“责任部门/承办部门”是否同义？——不能自行猜测，与 Echo、业务方、系统负责人共同确认", fill: C.bgAmber, strip: C.accentWarm },
      { t: "收集回注候选", d: "核心业务对象 · 属性 · 关系 · 生命周期状态 · 可执行动作 · 权限与审批条件（完整通用性判断由第 15 章完成）", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.4, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.7, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "案例：工单系统的“类别”= 责任部门，数据平台的“类别”= 事件性质——只按字段名对接，分类结果会写入错误位置。数据接入首先是业务语义对齐，不是接口调用。", 4.55, C.bgRed, C.red);
  }
};
