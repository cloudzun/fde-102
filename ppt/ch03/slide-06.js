// slide-07.js — 3.2.2 作战单元三角色（图 3-2）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 7, title: "作战单元三角色" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "己方侧：FDE 作战单元", C.bgLight);
    const items = [
      { t: "Echo · 业务策略师", tag: "主责判断", d: "挖需求 · 拆场景 · 出方案\n→《解决方案框架》（施工图 = 任务书）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Delta · 技术执行", tag: "主责施工", d: "写代码 · 搭原型 · 上线\n+ 能力回注回平台", fill: C.bgBlue, strip: C.primary },
      { t: "Engineering · 基础设施", tag: "保阵地", d: "安全合规 · 网络\n部署运维", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.tag, { x, y: y + 0.55, w: 2.85, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.98, w: 2.55, h: 1.0, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "Echo / Delta 深度画像、职责矩阵、时间分配 → 第 4 章专项展开。", 4.4);
  }
};
