// slide-03.js — 知识背景定位
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 3, title: "知识背景定位" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "这一轮在 Ch7 坐标系里的位置", C.bgWhite);
    const items = [
      { t: "第 1 层 · 提示词工程", d: "一次 LLM 调用 + 好提示词\n不需要 RAG（要检索）\n不需要 Agent（要多步决策）", fill: C.bgGreen, strip: C.green },
      { t: "从最简单开始", d: "能做分类就不上 RAG/Agent\n用最低复杂度交付客户需要的价值", fill: C.bgBlue, strip: C.primary },
      { t: "低成本验证", d: "坡度第一级：先证明 AI 方案可行\n跑通“描述意图→AI 执行→人把关”闭环", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 1.25, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35 });
    });
    calloutBar(s, "数据不出域：教学用 API；若客户数据不能出域 → 切本地模型 / 私有化（第 13 章路径），提示词 / 逻辑不变。", 4.2, C.bgRed, C.red);
  }
};
