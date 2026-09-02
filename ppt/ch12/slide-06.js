// slide-06.js — 环节 2 关键决策点
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "关键决策点" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 2 · 路由工作流特有的决策点（要拍板）", C.bgLight);
    const items = [
      { t: "分级判定标准", d: "按“动作而非字面信号”三档定义拍板" },
      { t: "工具设计 check_department", d: "传入工单全文（不传单个 keyword）；职责库关键词考虑口语变体（“物业管理”vs“物业不处理”前 2 字兜底）；找不到返回空列表而非报错" },
      { t: "敏感件兜底", d: "拿不准 → 宁可转人工，不可漏过；confidence <0.6 一律兜底转人工" },
      { t: "LLM 返回异常", d: "分级结果不是三档之一 / 解析失败 → 兜底转人工，不默认自动处理" },
    ];
    items.forEach((it, i) => {
      const y = 1.3 + i * 1.0;
      numBadge(s, 0.7, y + 0.12, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.75, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.9, y, w: 5.4, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "自查追问：敏感件拿不准时怎么办？不能说“你看着办”——政务场景敏感诉求漏转人工就是事故，你必须拍板“宁可多升级，不可漏”。", 5.15, C.bgRed, C.red);
  }
};
