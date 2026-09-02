// slide-08.js — 5.2 脚手架一：四类失败模式
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 8, title: "四类失败模式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "脚手架一：四类失败模式", C.bgWhite);
    const items = [
      { t: "数据不可用", d: "数据拿不齐、拿不干净\n格式杂乱 · 字段缺失", fill: C.bgBlue, strip: C.primary },
      { t: "业务不配合", d: "用系统的人抵制\n怕被替代 · 消极使用", fill: C.bgAmber, strip: C.accentWarm },
      { t: "合规卡住", d: "法规/监管一票否决\n不出域 · 可解释 · 兜底", fill: C.bgRed, strip: C.red },
      { t: "ROI 说不清", d: "算不清投入产出\n没基线 · 拍脑袋", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.75;
      s.addShape("rect", { x, y, w: 4.3, h: 1.6, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 0.06, h: 1.6, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.9, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    calloutBar(s, "用法：对项目材料逐条问“属于哪一类”——停在哪个区最空？空区往往是全组集体盲区（多数组会漏非技术风险）。", 5.0, C.bgAmber, C.accentWarm);
  }
};
