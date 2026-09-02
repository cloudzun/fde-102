// slide-06.js — 9.1.3 RAG 解决三个问题
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "RAG 解决三问题" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "RAG 同时解决三类问题", C.bgWhite);
    const items = [
      { t: "记忆漂移", d: "政策一更新，模型凭旧记忆答错 → 答案来自最新索引库，更新只需重建索引", fill: C.bgAmber, strip: C.accentWarm },
      { t: "成本", d: "整本手册塞进上下文 → 只检索最相关一小段，成本与延迟可控", fill: C.bgBlue, strip: C.primary },
      { t: "可追溯", d: "答错没人知道依据 → 答案强制带出处（文号 + 条款号），可核对、可免责", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.2, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    calloutBar(s, "“答案可追溯”是政务 AI 的准入门槛：答错要负责——来源引用不是锦上添花，而是上线硬门槛。", 4.4, C.bgRed, C.red);
  }
};
