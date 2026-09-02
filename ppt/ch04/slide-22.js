// slide-24.js — 实战演练：角色定位（认领战位）
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "exercise", index: 24, title: "角色定位演练" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实战演练：角色定位——认领你的战位", C.bgLight);
    const items = [
      { t: "玩法一：倾向自测", d: "8 题选 A / B\nA 多 → Echo（策略型）\nB 多 → Delta（工程型）\n接近 → 双栖型" },
      { t: "玩法二：情境判断", d: "5 张情境卡，判断“该谁主导”\n例：敏感件可能漏判 →\nEcho + Delta 协作" },
      { t: "产出物", d: "自测结果.txt\n战位声明.md（职责边界 + T 型计划）\n能力短板清单.md" },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 2.85, h: 2.4, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.7, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    calloutBar(s, "重要前提（呼应 4.2.1）：本演练判断的是战位倾向，不是人格测验——结果只决定“谁主导哪一步”。建议 15–20 分钟（单测）/ 30 分钟（组内讨论）。", 4.35);
    s.addText("A/B 无优劣、无高低之分——只说明你更愿意把精力放在“想清楚”还是“做出来”，两者对 FDE 都必要。", {
      x: 0.6, y: 5.1, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
