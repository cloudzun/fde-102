// slide-07.js — 产出物清单
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "checklist", index: 7, title: "产出物清单" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "产出物清单（每组一份）", C.bgWhite);
    const items = [
      { t: "风险墙.jpg", d: "脑暴一：四类失败模式风险墙（拍照）" },
      { t: "干系人图.jpg", d: "脑暴二：权力 × 兴趣图（拍照）" },
      { t: "解决方案框架.md", d: "★核心产出：三场景 + 选型 + 优先级（照模板）" },
      { t: "汇报话术.txt", d: "150 字全业务语言方案汇报" },
    ];
    items.forEach((it, i) => {
      const y = 1.45 + i * 0.85;
      s.addShape("rect", { x: 0.7, y, w: 8.6, h: 0.75, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.7, y, w: 0.06, h: 0.75, fill: { color: i === 2 ? C.green : C.primary } });
      s.addText(it.t, { x: 0.95, y, w: 3.0, h: 0.75, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.1, y, w: 5.0, h: 0.75, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "★《解决方案框架》是本实操最重要的产出——它是实操二三四的施工任务书，下一步你将作为 Delta 照着它施工。", 5.05, C.bgGreen, C.green);
  }
};
