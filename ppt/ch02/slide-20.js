// slide-20.js — 2.4 NRR + 单客户产出 + 相关≠因果
const { C, sectionTitle, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "NRR 与单客户产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "还有两组数据与“落地生根、卖能力”相互印证", C.bgWhite);
    const items = [
      { t: "净收入留存率（NRR）", d: "老客户今年比去年多付多少；>100% = 持续增购。FY2021 总体 131%、FY2022 115%、2024 回升至 ~118%——佐证“先用快赢切入、再横向复制”的扩张逻辑", strip: C.primary },
      { t: "单客户产出持续走高", d: "规模化不是堆客户数，而是做深单客户。Top 20 客户近 12 个月平均收入：2024 约 6460 万美元 → 2025 约 9390 万美元（财报披露约数）", strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 2.3, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.3, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.66, w: 3.9, h: 1.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    redBar(s, "相关 ≠ 因果：财务趋势只能说明与“平台复用带动利润率上升”假说一致，不能单凭财务数据证明“FDE 模式导致了利润率提升”——对外引用勿表述为“财务数据证明 FDE 有效”。", 4.05);
    s.addText("NRR 口径提示：Palantir 曾对 NRR 统计口径做过调整，跨期数值并非严格可比；对外引用以最新年度财报披露口径为准。", {
      x: 0.6, y: 4.85, w: 8.8, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
