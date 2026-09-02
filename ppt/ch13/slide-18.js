// slide-18.js — 13.3.5 红线呼应 + 13.3.6 QLoRA 实验
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 18, title: "红线呼应 + 实验" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "红线呼应 + 小模型 QLoRA 实验", C.bgWhite);
    const rows = [
      ["红线", "本处落地"],
      ["数据不出域", "模型权重与微调数据不出政务/企业边界，走信创昇腾或合规可得算力私有化"],
      ["人能判断、AI 能执行", "“值不值得微调、评测是否达标、要不要回滚”由人拍板"],
    ];
    table(s, rows, { y: 1.35, colW: [2.0, 6.8], rowH: 0.55});
    s.addText("小模型 QLoRA 实验（可选，24GB 单卡）：", { x: 0.6, y: 3.05, w: 8.8, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const steps = [
      "7B 级开源模型 + 200–500 条“指令-回答”（8:1:1 划分）",
      "LLaMA-Factory 跑 QLoRA（4-bit 基座 + LoRA），记录显存与时长",
      "固定评测集对比微调前 / 后；训练前保留原权重，证明“删掉 adapter 就回到原模型”",
    ];
    steps.forEach((st, i) => {
      const y = 3.5 + i * 0.55;
      s.addShape("ellipse", { x: 0.7, y: y + 0.14, w: 0.24, h: 0.24, fill: { color: C.primary } });
      s.addText(st, { x: 1.1, y, w: 8.2, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "DoD：训练数据过了治理 Gate（至少隐私与泄漏）· 有前后对比记录 · 能演示回滚 · 能说出“值不值得上生产”。", 5.1, C.bgBlue, C.primary);
  }
};

