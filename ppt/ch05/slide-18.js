// slide-19.js — 5.5 常见陷阱 + 完成判据
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 19, title: "数据盘点陷阱" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "常见陷阱 + 完成判据", C.bgLight);
    const items = [
      { t: "纸面上有、实际拿不到", d: "权限 / 合规拿不出", fill: C.bgRed, strip: C.red },
      { t: "格式杂乱", d: "PDF / Word / 扫描件\n需大量清洗", fill: C.bgAmber, strip: C.accentWarm },
      { t: "口径对不上", d: "字段定义与业务口径不一致", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 1.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.58, w: 2.55, h: 1.0, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "完成判据：每字段有出处与格式；每项标可得性并写明原因；至少核实过系统一次；基线数字（如错分率）有来源或标注“待核实”。", 3.75);
    s.addText("示例（西岭）：政策库 5 份混合格式文档（3 md + 1 docx + 1 pdf）——数据不可用风险的地基；错分率无统计 → 标“待核实”。", {
      x: 0.6, y: 4.55, w: 8.8, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};
