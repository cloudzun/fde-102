// slide-20.js — 3.4.2 / 3.4.3 工具链 + 部署在哪
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "工具链与部署" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "用什么 · 部署在哪", C.bgLight);
    const items = [
      { t: "工具链", d: "opencode（AI Coding）\ngstack（八环节工作流）\nStreamlit（验证面板）\nDeepSeek（大模型 API）+ 向量库", fill: C.bgBlue, strip: C.primary },
      { t: "部署在哪", d: "数据不出域 → 本地 / 私有化\n信创 · 备案等合规红线\n边界由数据分级 + 监管 + 合同确定", fill: C.bgRed, strip: C.red },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 4.3, h: 2.5, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.5, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.18, y: y + 0.14, w: 4.0, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.18, y: y + 0.62, w: 3.95, h: 1.75, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.4, valign: "top" });
    });
    calloutBar(s, "Technology 是器、Process 是脉、People 是根——顺序不可颠倒，选型服务于业务价值。", 4.6, C.bgAmber, C.accentWarm);
  }
};
