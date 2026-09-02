// slide-25.js — 9.8.2 引用格式 + 检索不到不能编
const { C, sectionTitle, numBadge, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 25, title: "引用与拒答" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "引用格式 + 检索不到不能编", C.bgWhite);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.85, fill: { color: C.bgGreen }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.85, fill: { color: C.green } });
    s.addText("引用规范：“依据《XX 办法》（文号）第 X 条”；多来源并列“依据《A》第 X 条、《B》第 Y 条”；无文号时降级为“文件标题 + 段落位置”。", {
      x: 0.85, y: 1.38, w: 8.3, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3, valign: "middle"
    });
    s.addText("检索不到不能编（三条判据）", { x: 0.6, y: 2.5, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const rules = [
      { t: "检索为空 / 片段太少", d: "回答“未检索到、无法回答”" },
      { t: "命中但不相关", d: "说明“未找到与问题直接相关的条款”，不硬答" },
      { t: "片段互相冲突", d: "如实标注“不同条款存在差异”，交人工确认" },
    ];
    rules.forEach((r, i) => {
      const y = 3.0 + i * 0.64;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(r.t, { x: 1.35, y, w: 2.9, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(r.d, { x: 4.4, y, w: 4.8, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    redBar(s, "红线「答案可追溯」落此处：先有“片段 + 原文 + 来源”，再有“只用片段作答 + 强制引用 + 检索不到不编”——第 10 章把它量化为双指标。", 4.98);
  }
};
