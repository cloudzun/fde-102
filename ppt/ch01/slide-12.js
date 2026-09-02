// slide-14.js — 1.4 三重角色融合（三卡片 + 为什么必须有）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 14, title: "三重角色融合" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "三重角色融合：工程师 × 业务顾问 × 产品经理", C.bgWhite);
    const items = [
      { t: "全栈工程师", d: "写代码 · 接数据 · 搭系统", why: "现场真正“做出来”，不是只写方案", fill: C.bgBlue, strip: C.primary },
      { t: "业务顾问", d: "读业务 · 挖真痛点", why: "真需求藏在模糊表达背后", fill: C.bgAmber, strip: C.accentWarm },
      { t: "产品经理", d: "定边界 · 抽象可复用", why: "让定制反哺平台、驱动飞轮", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 2.85, h: 2.3, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.15, w: 2.6, h: 0.5, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.68, w: 2.55, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0 });
      s.addText("为什么必须有", { x: x + 0.15, y: y + 1.3, w: 2.55, h: 0.35, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.textMid, align: "center", margin: 0 });
      s.addText(it.why, { x: x + 0.15, y: y + 1.65, w: 2.55, h: 0.6, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "三种角色“三位一体”压在一个岗位上——形成最短闭环。", 4.1);
    calloutBar(s, "澄清：三位一体是“团队”整体画像，非要求个人全能（分工见第 4 章）。", 4.75, C.bgBlue, C.primary);
  }
};
