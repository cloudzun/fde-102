// slide-21.js — 1.6 五大鸿沟（图 1-5 图形化：垂直七段带）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 21, title: "五大鸿沟" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "从“有模型”到“业务变好”的五道鸿沟", C.bgLight);
    const bands = [
      { t: "有模型能力", d: "把模型当原材料卖出去", fill: C.bgAmber, strip: C.accentWarm, bold: true },
      { t: "1. 模型 ≠ 产品", d: "有模型 ≠ 有解决业务问题的产品", fill: C.bgBlue, strip: C.primary },
      { t: "2. 数据合规", d: "企业核心数据不能出域", fill: C.bgBlue, strip: C.primary },
      { t: "3. 微调与工程", d: "RAG / Prompt 需深度结合专有知识", fill: C.bgBlue, strip: C.primary },
      { t: "4. 系统集成", d: "需嵌入已有 CRM / ERP 才有闭环", fill: C.bgBlue, strip: C.primary },
      { t: "5. 搁板软件", d: "没人推动变革，好系统也被束之高阁", fill: C.bgRed, strip: C.red },
      { t: "业务真正变好", d: "落地、连接、变革全部打通", fill: C.bgGreen, strip: C.green, bold: true },
    ];
    bands.forEach((g, i) => {
      const y = 1.15 + i * 0.60;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.52, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.52, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.85, y, w: 2.6, h: 0.52, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 3.6, y, w: 5.6, h: 0.52, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("*图 1-5：从“有模型”到“业务变好”要跨过的五道鸿沟（自上而下逐层跨越）*", { x: 0.6, y: 5.35, w: 8.8, h: 0.18, fontSize: 8.5, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, align: "center", margin: 0 });
  }
};
