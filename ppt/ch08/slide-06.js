// slide-06.js — 环节 2 注入跟进八环节
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "环节 2 跟进八环节" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 2 · 注入并跟进八环节", C.bgLight);
    s.addText("注入时明确“走什么流程”（驱动指令 5 条）：", { x: 0.6, y: 1.25, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const rules = [
      "严格按 gstack 8 环节，不跳步不打乱",
      "每环节产出文件落盘",
      "禁止全自动：一环一停、获许可才流转",
      "拍板点列选项列利弊，等你选",
      "现在从 office-hours 开始",
    ];
    rules.forEach((r, i) => {
      const y = 1.62 + i * 0.5;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(r, { x: 1.35, y, w: 8.0, h: 0.45, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("关键决策点（Agent 停下时你要拍板）", { x: 0.6, y: 4.15, w: 8.8, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    calloutBar(s, "验收口径 ≥85% 别被改 · 拿不准归“转人工”不是“其他” · UI 阈值滑块你定 · No-Go 之外的事拒绝——拍板点不能说“你看着办”：85% 够不够是业务决策，只有你掌握业务上下文。", 4.55);
  }
};
