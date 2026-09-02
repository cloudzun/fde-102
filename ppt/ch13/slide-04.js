// slide-04.js — 13.1.1 三条合规红线
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 4, title: "三条合规红线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "三条合规红线：为什么真实数据必须留在本地", C.bgWhite);
    const items = [
      { t: "数据不能出域", d: "《数据安全法》《个保法》与出境评估\n重要/政务/个人信息不得随意出境或交第三方\n公网 API = 把数据交给第三方，直接违规", fill: C.bgRed, strip: C.red },
      { t: "算法要备案、行为可解释", d: "对外提供生成式 AI 服务须算法备案与安全评估\n语料/模型/服务安全，上线前评估\n依赖黑盒闭源服务，备案说不清", fill: C.bgAmber, strip: C.accentWarm },
      { t: "自主可控", d: "信创要求模型/权重/算力可自管\n政采普遍要求上线前检测、语料安全检测\n权重掌握在自己手里", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.5, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 1.65, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "三条红线不是“本地更好”的技术偏好，而是合规的硬要求——本地 / 私有化部署是政企场景的必要条件。", 4.7, C.bgRed, C.red);
  }
};
