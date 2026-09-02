// slide-06.js — 2.1.3 痛感场景
const { C, sectionTitle, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 6, title: "一个痛感场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "一个痛感场景：同一类问题，解决了两遍", C.bgLight);
    const items = [
      { t: "A 客户交付完", d: "团队刚交付完 A 客户的定制系统；A 的代码写死了字段和流程，几乎无法复用", strip: C.primary },
      { t: "B 客户来了", d: "几乎一样的需求，却只能推倒重来——同一类问题解决了两遍、收了两份人天钱", strip: C.accentWarm },
      { t: "第 3 个客户", d: "依然要从零开始——什么都没沉淀出资产", strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 2.85, h: 1.75, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.75, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.15, y: y + 0.14, w: 2.55, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.58, w: 2.55, h: 1.05, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    bigCallout(s, "收入在增长，但公司什么都没积累下来——这就是项目制的本质陷阱：用规模换收入，却换不来资产。", 3.6, 0.7);
    s.addText("FDE 模式则把这条恶性螺旋反转为正向飞轮：现场解决问题的同时把定制代码提炼为通用组件，下个项目复用更快更省，省下的利润再投入更强大的平台。", {
      x: 0.6, y: 4.55, w: 8.8, h: 0.75, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};
