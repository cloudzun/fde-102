// slide-14.js — 9.4 分块参数
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "分块参数" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "分块：太小 vs 太大", C.bgLight);
    const items = [
      { t: "块太小", d: "关键信息被切断——检索到了，但片段不含完整答案", fill: C.bgRed, strip: C.red },
      { t: "块太大", d: "一段里塞太多无关内容——检索不精准，模型易跑偏", fill: C.bgAmber, strip: C.accentWarm },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 1.3, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.3, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.4, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.58, w: 3.9, h: 0.65, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3 });
    });
    s.addText("参数起点：chunk_size 256–1024 token（中文常用 512–1024）；overlap 10%–20%——经验起点，非万能最优。", {
      x: 0.6, y: 3.0, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    const adjust = [
      { t: "检索命中但回答不完整", d: "块太小 → 增大 chunk_size / overlap", fill: C.bgBlue, strip: C.primary },
      { t: "检索不精准、常带无关内容", d: "块太大 → 缩小 chunk_size", fill: C.bgGreen, strip: C.green },
    ];
    adjust.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 3.6;
      s.addShape("rect", { x, y, w: 4.3, h: 1.0, fill: { color: it.fill } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.0, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.1, w: 3.9, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.48, w: 3.9, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    calloutBar(s, "拿到实测结果后再微调；最优值因语料与检索器而异（第 10 章用“建索引抽查”验证调参）。", 4.95, C.bgAmber, C.accentWarm);
  }
};
