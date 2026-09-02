// slide-12.js — 13.2.6 价格核算
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "价格核算" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "高性价比档位与价格核算（V4 Flash 为例）", C.bgLight);
    const rows = [
      ["档位", "核心硬件", "参考成本", "适合场景"],
      ["极致性价比", "单张 RTX 4090（24GB）", "≈0.5–0.8 万", "个人开发者、轻量开发"],
      ["消费级甜点", "RTX 5090（32GB）", "≈2–3 万", "个人 / 独立开发者"],
      ["均衡之选", "4× RTX 6000 Ada（192GB）", "≈21 万", "小型团队、中等并发"],
      ["企业级入门", "AMD MI300X（192GB）", "≈10 万", "追求吞吐的企业"],
      ["国产化", "Atlas 800（昇腾）", "≈120–140 万", "数据合规 / 国产化政企"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 2.9, 1.9, 2.5], rowH: 0.55 });
    calloutBar(s, "结论（2026 口径）：均衡档瓶颈是吞吐不是成本；“省钱替代 API”的现实档位是 MI300X 这类高吞吐大显存单卡；国产 Atlas 走合规路线而非省钱路线。", 4.75, C.bgAmber, C.accentWarm);
    s.addText("算成本别只算静态打平点：算力利用率 · 分摊模式 · 软硬件维护 · 折旧残值（GPU 36 个月残值约 30–40%）。", { x: 0.6, y: 5.35, w: 8.8, h: 0.2, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
