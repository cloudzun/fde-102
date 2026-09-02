// slide-26.js — 纪律三：驱动指令
const { C, sectionTitle, numBadge, calloutBar, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 26, title: "纪律三" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "纪律三 · 驱动指令把流程纪律“焊”进执行", C.bgLight);
    const rules = [
      { t: "按八环节逐步执行", d: "office-hours → … → retro，顺序不跳、不简化" },
      { t: "禁止全自动", d: "走完一环停下汇报，获许可才流转" },
      { t: "拍板点列选项", d: "验收口径 / 门槛 / 兜底，列出选项与利弊等你选" },
      { t: "环节产出落盘", d: "每环节对应文件落盘当前目录" },
    ];
    rules.forEach((it, i) => {
      const y = 1.35 + i * 0.75;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.6, h: 0.6, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.1, y, w: 5.2, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "为什么“一环一停、拍板点列选项”如此关键：一口气跑完就失去所有中途纠偏机会——让 AI“一小步一确认”是把失控风险控制住。", 4.7, C.bgBlue, C.primary);
    s.addText("注入启动提示词时写明以上驱动指令，从 /office-hours 开始（参考指令模板见教材 7.5 纪律三）。", { x: 0.6, y: 5.35, w: 8.8, h: 0.2, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
