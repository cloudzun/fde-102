// slide-05.js — 2.1.2 为什么是结构性而非管理不善（五环拆解 + CAUTION）
const { C, sectionTitle, numBadge, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "结构性而非管理不善" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "为什么是“结构性”而非“管理不善”？", C.bgWhite);
    const steps = [
      { t: "需求分散 → 定制开发", d: "需求合理、销售必须接——局部看是对的" },
      { t: "定制开发 → 周期长、成本失控", d: "每单从头造轮子，成本随项目数线性甚至超线性增长" },
      { t: "成本失控 → 毛利极低甚至亏损", d: "为中标不得不压价，利润被两头挤压" },
      { t: "无利润 → 无力投入平台研发（最致命一环）", d: "没钱投“一次开发、多次复用”的平台——平台是唯一打破线性成本的东西" },
      { t: "无平台 → 竞争力下降 → 只能更低价、更深定制抢单", d: "回到第 1 步——每绕一圈，定制更重、离平台更远" },
    ];
    steps.forEach((st, i) => {
      const y = 1.25 + i * 0.72;
      numBadge(s, 0.7, y + 0.06, i + 1);
      s.addText(st.t, { x: 1.35, y, w: 8.0, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
      s.addText(st.d, { x: 1.35, y: y + 0.3, w: 8.0, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0 });
    });
    bigCallout(s, "自我强化的死循环：越缺钱越不敢投平台、越不投越堆定制、越堆越缺钱——单靠“更努力”走不出去，只能从结构上切断某一环。", 5.0 - 0.02, 0.6);
  }
};
