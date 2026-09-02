// slide-30.js — 5.8.2 《解决方案框架》五部分
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 30, title: "框架五部分" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "《解决方案框架》模板（一页纸）", C.bgLight);
    const items = [
      { t: "一、需求拆解", d: "八字段表（场景 A/B/C）" },
      { t: "二、技术选型", d: "场景 × 选型 × 为什么 × 为何不用更复杂" },
      { t: "三、施工优先级", d: "快赢第一优先" },
      { t: "四、风险与应对", d: "四类风险 × 初步应对" },
      { t: "五、数据不出域方案", d: "红线写入方案，非施工期才发现" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 1.83;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 1.7, h: 2.3, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 1.7, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.1, y: y + 0.14, w: 1.5, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0, lineSpacingMultiple: 1.15 });
      s.addText(it.d, { x: x + 0.1, y: y + 0.85, w: 1.5, h: 1.35, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25, valign: "top" });
    });
    calloutBar(s, "这份《解决方案框架》就是 Echo 交给 Delta 的“施工图 / 任务书”——第 6 章实操一产出它，第 8 / 10 / 12 章照它施工。", 4.4);
    s.addText("成品样例不随正文公布——它是实操一的产出，公布等于直接给答案。", { x: 0.6, y: 5.0, w: 8.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
