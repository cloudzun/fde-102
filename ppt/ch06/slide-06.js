// slide-06.js — 环节 7 可选：AI 红队
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "环节 7 AI 红队" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 7 · 可选：用 AI 当“红队”", C.bgLight);
    const items = [
      { t: "做什么", d: "把《解决方案框架》贴给 AI\n请它扮演挑剔的评审专家\n挑漏掉的风险 / 拆错的场景\n站不住脚的选型", fill: C.bgBlue, strip: C.primary },
      { t: "为什么", d: "这是“验证”，不是“代替你思考”\n对比 AI 的挑战与你们的结论：\n哪些点到了盲区？\n哪些是 AI 不懂政务在瞎说？", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.3, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.3, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 1.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    calloutBar(s, "体会：AI 是好用的“陪练”，判断对错的还是你——也为实操二三四“用 AI 施工”埋下伏笔。", 4.3, C.bgAmber, C.accentWarm);
  }
};
