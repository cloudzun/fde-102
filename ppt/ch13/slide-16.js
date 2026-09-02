// slide-16.js — 13.3.4 七步流程（图 13-3）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 16, title: "微调七步流程" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一次微调的典型流程", C.bgWhite);
    const steps = [
      { t: "0 数据治理 Gate", d: "授权/脱敏/版权/去重/泄漏", fill: C.bgRed, strip: C.red },
      { t: "1 数据准备", d: "指令-回答 · 训/验/留出", fill: C.bgBlue, strip: C.primary },
      { t: "2 LoRA 训练", d: "量化基座 + 低秩增量", fill: C.bgBlue, strip: C.primary },
      { t: "3 合并 or adapter", d: "合并→重新量化编译\nadapter→引擎动态挂载", fill: C.bgAmber, strip: C.accentWarm },
      { t: "4 评测对照", d: "前后 + 量化前后 + 基线", fill: C.bgGreen, strip: C.green },
      { t: "5 灰度替换", d: "回滚 = 切回旧权重/adapter", fill: C.bgGreen, strip: C.green },
    ];
    steps.forEach((g, i) => {
      const y = 1.35 + i * 0.62;
      s.addShape("rect", { x: 1.0, y, w: 8.0, h: 0.56, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.0, y, w: 0.06, h: 0.56, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.25, y, w: 3.2, h: 0.56, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.6, y, w: 4.2, h: 0.56, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 5) s.addShape("line", { x: 5.0, y: y + 0.56, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "工程纪律：合并路径需重新量化编译再上生产；上线前必须基准对比评测（不能整体退化）；保留可回滚旧版本。", 5.12, C.bgAmber, C.accentWarm);
  }
};
