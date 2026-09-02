// slide-15.js — 13.3.2 三种微调方法
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 15, title: "三种微调方法" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "LoRA / QLoRA / 全参 SFT", C.bgLight);
    const rows = [
      ["方法", "原理", "关键"],
      ["LoRA（低秩适配）", "冻结原权重，只训练注入的低秩增量矩阵", "显存低于全参；几百~几千条数据即可见效"],
      ["QLoRA", "4-bit 量化基座 + LoRA", "显存再降，单卡可跑更大模型；训练慢、极端量化有损失"],
      ["全参 SFT", "更新全部权重", "显存≈权重 4~6 倍；通常数万~百万条数据才值"],
    ];
    table(s, rows, { y: 1.4, colW: [1.8, 3.4, 3.6], rowH: 0.55});
    calloutBar(s, "企业默认路径 = “量化基座 + LoRA/QLoRA”；全参 SFT 主要出现在上游厂商 / 专项后训练。决策先问“LoRA 够不够”。", 4.7, C.bgBlue, C.primary);
  }
};

