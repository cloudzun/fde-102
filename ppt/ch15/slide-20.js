// slide-20.js — 15.4.1 四步法 + 三块拼图
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 20, title: "四步法三块拼图" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "能力回注四步法 + 三块拼图", C.bgLight);
    const steps = [
      { t: "1 识别", d: "西岭专属“碎石路” vs 别的客户也要的“能铺路”", fill: C.bgBlue, strip: C.primary },
      { t: "2 抽象", d: "定制逻辑泛化成标准模块（类别清单做成配置项）", fill: C.bgGreen, strip: C.green },
      { t: "3 集成", d: "并入平台、标准化为可配置组件", fill: C.bgGreen, strip: C.green },
      { t: "4 验证", d: "确认真能复用、不回坏平台质量", fill: C.bgCard, strip: C.primary },
    ];
    steps.forEach((g, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: g.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: g.strip } });
      s.addText(g.t, { x, y: y + 0.12, w: 2.1, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(g.d, { x: x + 0.12, y: y + 0.58, w: 1.86, h: 0.9, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.6, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addText("三块拼图：分类器（是什么）· RAG（依据）· 路由（怎么办）——合起来才是完整能力栈", { x: 0.6, y: 3.3, w: 8.8, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const pics = [
      { t: "分类器", d: "答“是什么”\n通用文本分类", fill: C.bgBlue, strip: C.primary },
      { t: "RAG", d: "答“依据”\n可溯源知识库问答", fill: C.bgGreen, strip: C.green },
      { t: "路由", d: "答“怎么办”\n分级路由 + 兜底", fill: C.bgAmber, strip: C.accentWarm },
    ];
    pics.forEach((p, i) => {
      const x = 0.6 + i * 3.05;
      const y = 3.75;
      s.addShape("rect", { x, y, w: 2.85, h: 1.1, fill: { color: p.fill }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.05, fill: { color: p.strip } });
      s.addText(p.t, { x, y: y + 0.1, w: 2.85, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(p.d, { x, y: y + 0.48, w: 2.85, h: 0.55, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "最通用的那一个：三处都用的“拿不准就兜底转人工”（HITL）——同时是第四条红线的落地。", 5.15, C.bgAmber, C.accentWarm);
  }
};
