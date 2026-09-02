// slide-15.js — 4.4 Delta 时间分配 + 能力画像
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "Delta 时间分配" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Delta 日常时间分配（参考）", C.bgWhite);
    const items = [
      { t: "70%", d: "编码与系统构建", fill: C.bgBlue, strip: C.primary },
      { t: "20%", d: "客户沟通与联调", fill: C.bgAmber, strip: C.accentWarm },
      { t: "10%", d: "能力回注记录", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 1.5, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.16, w: 2.85, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x, y: y + 0.75, w: 2.85, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
    });
    s.addText("能力画像：技术实现 · 工程稳定 · 调试排查 极强；业务理解中等（够听懂需求、判断可行性）", {
      x: 0.6, y: 3.35, w: 8.8, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "一句话：Delta 的 70/20/10——时间主要花在“写、联、回注”。", 4.2, C.bgBlue, C.primary);
  }
};
