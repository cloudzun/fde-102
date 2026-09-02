// slide-16.js — 5.4 收集候选业务语义
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "候选业务语义" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "顺带收集“候选业务语义”（不做最终建模）", C.bgWhite);
    const items = [
      { t: "业务对象", d: "客户反复提到：诉求 · 政策 · 工单 · 部门" },
      { t: "对象关系", d: "哪些关系决定业务结果：诉求依据哪条政策" },
      { t: "动作执行", d: "哪些动作由谁执行：分类 · 分派 · 升级 · 审批" },
      { t: "状态审批", d: "哪些状态变化需审批：转人工 · 驳回 · 关闭" },
    ];
    items.forEach((it, i) => {
      const y = 1.45 + i * 0.85;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 1.8, h: 0.6, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.3, y, w: 5.9, h: 0.6, fontSize: 12, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "只收集、不建模：对象边界、关系与动作的正确性，等数据与流程验证后再定（第 14 章工程验证、第 15 章建模）。", 5.05, C.bgBlue, C.primary);
  }
};
