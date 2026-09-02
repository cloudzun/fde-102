// slide-05.js — 11.1.3 决策循环
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 5, title: "决策循环" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "决策循环：智能体的本质", C.bgLight);
    const steps = [
      { t: "观察", d: "拿到输入（工单 / 交易 / 任务）", fill: C.bgBlue, strip: C.primary },
      { t: "思考", d: "判断属于哪类、下一步做什么", fill: C.bgAmber, strip: C.accentWarm },
      { t: "行动", d: "调工具 · 查数据 · 生成处置意见", fill: C.bgGreen, strip: C.green },
      { t: "再看结果", d: "决定交付 / 继续处理 / 升级人工", fill: C.bgRed, strip: C.red },
    ];
    steps.forEach((st, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: st.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: st.strip } });
      s.addText(st.t, { x, y: y + 0.14, w: 2.1, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(st.d, { x: x + 0.12, y: y + 0.6, w: 1.86, h: 0.85, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.6, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addText("工单分级为例：判断“跨部门诉求”后不会停下——继续查部门职责库 → 生成深度处理意见 → 决定要不要转人工。", {
      x: 0.6, y: 3.35, w: 8.8, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "口径：智能体比单次调用更贵、更慢、失败点更多——复杂度的代价是官方定性，不用具体倍数。", 4.3, C.bgBlue, C.primary);
  }
};
