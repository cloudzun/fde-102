// slide-02.js — 课程核心理念（四条）
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "overview", index: 2, title: "课程核心理念" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "课程核心理念", C.bgLight);

    const ideas = [
      { t: "卖人力 → 卖能力", d: "区分 FDE 与外包 / 咨询：做完项目，平台有没有增长", strip: C.primary },
      { t: "人能判断 · AI 能执行", d: "Echo 主责判断、Delta 主责施工——判断归人、执行归 AI", strip: C.accentWarm },
      { t: "四条红线", d: "数据不出域 · 答案可追溯 · 敏感件零漏判 · 人能判断", strip: C.red },
      { t: "从最简单开始", d: "提示词 → RAG → 工作流 → Agent：够用即止，升级必须带证据", strip: C.green },
    ];
    const pos = [
      { x: 0.6, y: 1.4 }, { x: 5.1, y: 1.4 },
      { x: 0.6, y: 3.05 }, { x: 5.1, y: 3.05 },
    ];
    ideas.forEach((it, i) => {
      const p = pos[i];
      s.addShape("rect", { x: p.x, y: p.y, w: 4.3, h: 1.5, fill: { color: "FFFFFF" }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: p.x, y: p.y, w: 0.07, h: 1.5, fill: { color: it.strip } });
      numBadge(s, p.x + 0.25, p.y + 0.25, i + 1, it.strip);
      s.addText(it.t, { x: p.x + 0.95, y: p.y + 0.28, w: 3.1, h: 0.5, fontSize: 17, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: p.x + 0.25, y: p.y + 0.85, w: 3.8, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textMid, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });

    calloutBar(s, "主线一句话：把客户定制（碎石路）铺装成平台能力（公路）——五个实操总分总，走完“从卖人力到卖能力”的完整闭环。", 5.12, C.bgAccent, C.primary);
  }
};
