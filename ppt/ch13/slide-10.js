// slide-10.js — 13.2.4 量化与显存
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "量化与显存" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "显存规划与量化取舍", C.bgLight);
    const rows = [
      ["位宽", "每参数", "权重体积（每 10 亿参数）", "定位"],
      ["FP16 / BF16", "2 字节", "2GB", "全精度基线，评测对照用"],
      ["FP8 / INT8", "1 字节", "1GB", "生产默认（损失小、显存减半）"],
      ["INT4 / FP4", "0.5 字节", "0.5GB", "逼近硬件极限才用，必须评测定档"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 1.1, 2.6, 3.6], rowH: 0.55 });
    s.addText("总显存 ≈ 权重 + KV cache + 激活余量；所需卡数 = 总显存 ÷ 单卡显存。700B 示例：FP16≈140GB 需 ≥2 卡（80GB）· FP8≈70GB 需 ≥1 卡 · INT4≈35GB 单卡可装。", {
      x: 0.6, y: 3.9, w: 8.8, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "量化三步定档：①显存够不够（不够才量化）②精度敏不敏感（政务分类/RAG 答案保守，FP8 起步）③必须评测定档（低于验收线就升一档）——生产默认 FP8，INT4 慎用。", 4.75, C.bgAmber, C.accentWarm);
  }
};
