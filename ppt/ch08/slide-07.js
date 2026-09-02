// slide-07.js — 环节 3 验收与收尾
const { C, sectionTitle, calloutBar, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "checklist", index: 7, title: "环节 3 验收收尾" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 3 · 验收与收尾", C.bgWhite);
    const items = [
      { t: "1 核对交付物", d: "SPEC / SPEC-决策记录 / src / streamlit_app / tests(~25 条) / review / qa-report / 版本 / retro" },
      { t: "2 向小王演示", d: "用她听得懂的话讲；先演示“拿不准的转人工”——“你不是被替代，是变成审核员”；让她看到错分会减少" },
      { t: "3 写演示级验收声明", d: "“约 25 条测试样本，属演示级验收——只证明方案在给定样本上可行，不宣称生产可用”" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 1.05;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.95, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.95, fill: { color: C.primary } });
      s.addText(it.t, { x: 0.85, y: y + 0.1, w: 2.2, h: 0.75, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "top", margin: 0 });
      s.addText(it.d, { x: 3.2, y: y + 0.1, w: 6.0, h: 0.75, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    });
    redBar(s, "为什么必须写声明？FDE 第一戒律是不能夸大交付物——25 条全对 ≠ 1.2 万条真实诉求全对，写“准确率 100%”就是埋雷。", 4.75);
  }
};
