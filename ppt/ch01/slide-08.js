// slide-09.js — 1.2.2 时间线：从 Palantir 到行业共识
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 9, title: "FDE 演进时间线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "时间线：从 Palantir 到行业共识", C.bgLight);
    const rows = [
      ["时间", "事件", "意义"],
      ["2003–2005", "Palantir 带核心平台驻场深度定制", "FDE 模式的业界通常归因"],
      ["2015", "Airbus 问题 → 行业平台 Skywise", "“现场定制→平台回注”成型"],
      ["2020s", "航空制造、医疗等行业验证", "模式被行业验证"],
      ["2025", "OpenAI DeployCo 派驻工程师", "约 40 亿美元部署单元"],
      ["2025", "Anthropic 企业服务团队", "头部 AI 公司集体跟进"],
    ];
    table(s, rows, { y: 1.3, colW: [1.3, 4.9, 2.6], rowH: 0.52 });
    s.addText("*图 1-2：FDE 从 Palantir 走向 AI 行业共识*", { x: 0.6, y: 4.5, w: 8.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
    calloutBar(s, "FDE 正在成为整个 AI 行业的共识（信息截至 2026 年）。", 4.9);
  }
};
