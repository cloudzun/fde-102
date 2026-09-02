// slide-05.js — 13.1.2 选型三问
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "选型三问" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "选型三问：在合规前提下把模型落到本地", C.bgLight);
    const items = [
      { t: "Q1 数据能否出域？", d: "教学模拟数据 → 可走公网 API\n真实客户数据 → 不能出域\n不能出域就没有选择，直接进本地路线", fill: C.bgRed, strip: C.red },
      { t: "Q2 能否本地部署？", d: "三个子条件合起来才算“能”：\n权重可得（开源）· 算力与许可满足 · 自主可控\n三者缺一不可", fill: C.bgAmber, strip: C.accentWarm },
      { t: "Q3 选哪个档位？", d: "任务复杂度定档：深度推理 → 大模型档\n模式匹配 → 小模型档\n公开基准初筛 + 业务数据实测", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.4, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.1, y: y + 0.14, w: 2.65, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.1 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 1.55, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "完整链路：数据不能出域 → 开源权重 + 算力 + 许可满足 → 按任务选档 → 部署形态与硬件规格（13.2）。", 4.55, C.bgBlue, C.primary);
  }
};
