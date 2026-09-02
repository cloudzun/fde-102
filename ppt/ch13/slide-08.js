// slide-08.js — 13.2.1 四种形态 + 出域六情形
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "四种部署形态" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "私有化 ≠ 只能放客户本地机房", C.bgLight);
    const rows = [
      ["形态", "是什么", "适合谁"],
      ["本地机房 / 一体机", "硬件部署在客户自有机房", "涉密、高合规、无云依赖"],
      ["专属云", "客户专属 VPC / 资源隔离区，租户级隔离", "一般政企、运维能力强"],
      ["离线一体机", "一体化交付，断电断网可运行", "现场网络受限、极端隔离"],
      ["混合部署", "核心数据与模型在本地，外围走云 API", "多数政企的现实形态"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 3.7, 3.4], rowH: 0.55});
    calloutBar(s, "“出域”要拆开说（六情形）：出本地设备 / 出客户内网 / 上公有云 / 向第三方提供 / 跨境 / 出批准的安全域——合规要求完全不同，不得笼统称同一个“出域”。", 4.85, C.bgRed, C.red);
    s.addText("西岭口径：课堂模拟数据可走公网；所模拟的真实政务数据未经确认不得进公网；真实客户数据按分级 + 制度确定处理边界。", { x: 0.6, y: 5.35, w: 8.8, h: 0.2, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

