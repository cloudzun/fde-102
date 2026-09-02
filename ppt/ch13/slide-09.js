// slide-09.js — 13.2.2 算力路线
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 9, title: "算力路线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "算力路线：合规可得性优先分层选择", C.bgWhite);
    const rows = [
      ["路线", "代表硬件", "适用"],
      ["国产信创", "昇腾 910C / Atlas 800", "合规可得（信创默认，政企首选）；涉密走全私有化一体机"],
      ["性价比", "RTX 4090/5090、4×6000 Ada", "中小规模、开发 / 中低频本地（留意出口管制）"],
      ["吞吐", "单张 AMD MI300X", "高吞吐、省钱替代 API（ROCm 生态）"],
      ["旗舰（仅参照）", "B300（Blackwell Ultra）", "禁运：官方渠道不可得，本书不推荐"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 2.6, 4.5], rowH: 0.55});
    calloutBar(s, "政企默认：涉密/高合规走全私有化一体机（昇腾）；一般政企走“私有化核心 + 云 API 补充”混合；信创环境默认昇腾路线。", 4.85, C.bgBlue, C.primary);
    s.addText("昇腾 910C 是当前国产算力中流砥柱（大湾区 11,520 张 910C 万卡集群已上线，截至 2026-08）。", { x: 0.6, y: 5.35, w: 8.8, h: 0.2, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

