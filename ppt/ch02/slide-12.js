// slide-12.js — 2.3.1 能力回注飞轮（图 2-3 图形化：垂直五段 + 闭环）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 12, title: "能力回注飞轮" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "正向飞轮：把死亡螺旋反转", C.bgLight);
    const bands = [
      { t: "客户现场解决问题", d: "在真实场景交付结果", fill: C.bgBlue, strip: C.primary },
      { t: "提炼定制中的通用组件（能力回注）", d: "识别 → 抽象 → 集成 → 验证", fill: C.bgGreen, strip: C.green },
      { t: "下个项目复用：更快 · 更省", d: "部署成本随 n 幂律下坠", fill: C.bgGreen, strip: C.green },
      { t: "利润再投入平台", d: "省下的钱反哺平台研发", fill: C.bgAmber, strip: C.accentWarm },
      { t: "平台更强", d: "覆盖更多通用能力", fill: C.bgGreen, strip: C.green },
    ];
    bands.forEach((g, i) => {
      const y = 1.25 + i * 0.68;
      s.addShape("rect", { x: 0.7, y, w: 7.8, h: 0.58, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.7, y, w: 0.06, h: 0.58, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.95, y, w: 4.6, h: 0.58, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 5.6, y, w: 2.7, h: 0.58, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    // 右侧闭环箭头（自下而上回到起点）
    s.addShape("line", { x: 8.7, y: 1.35, w: 0, h: 3.4, line: { color: C.green, width: 2, beginArrowType: "triangle" } });
    s.addText("飞轮\n闭环", { x: 8.62, y: 1.5, w: 1.3, h: 1.0, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.green, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
    s.addText("*图 2-3：能力回注飞轮——把死亡螺旋反转为正向飞轮（自上而下成环）*", { x: 0.7, y: 4.85, w: 7.8, h: 0.2, fontSize: 8.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
    s.addText("回注资产不只是代码：对象模型、关系模型、动作模式、治理规则——业务语义同样是可回注、可复用的资产（教材提炼）。", {
      x: 0.7, y: 5.1, w: 8.6, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
  }
};
