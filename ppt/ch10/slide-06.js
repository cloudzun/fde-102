// slide-06.js — 环节 2 RAG 特有决策点
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "RAG 特有决策点" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "环节 2 · 跟进八环节：RAG 特有决策点（要拍板）", C.bgLight);
    const items = [
      { t: "按条切块", d: "政策天然按“条”组织，正则匹配行首“第X条”，条款号随块保留——引用粒度对齐；过滤程序性条款（解释/施行/有效期）防污染" },
      { t: "top-K", d: "太少答案不全、太多噪声大——实测 top-5 + 程序性条款过滤稳定" },
      { t: "检索不到兜底", d: "绝不能编——“政策库中未找到，建议咨询人工”；两层防线：相似度阈值 + 提示词约束模型判断拒答" },
      { t: "来源引用格式", d: "文件名 + 条款号——政务可溯源底线" },
      { t: "建索引后抽查", d: "对每条验证集问题输出 top-k，人工扫目标条款在不在前几——不抽查直接验收，首轮必 FAIL" },
    ];
    items.forEach((it, i) => {
      const y = 1.3 + i * 0.78;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.0, h: 0.65, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.5, y, w: 5.8, h: 0.65, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "自查追问：Agent 问“检索不到怎么回答”——不能说“你看着办”。政务场景编造政策答案是事故，你必须拍板“不能编”。", 5.15, C.bgRed, C.red);
  }
};
