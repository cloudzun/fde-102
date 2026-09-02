// slide-02.js — 实操目标与产出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "实操目标与产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实操目标与产出", C.bgLight);
    const goals = [
      "复用实操二工作流：启动提示词 → gstack 八环节 → checkpoint 把关",
      "施工 RAG：解析（含 docx/pdf）→ 分块 → 向量化 → 检索 → 生成 + 引用",
      "把“答案可追溯”落地为双指标验收（准确率 + 可追溯率）",
      "拍板 RAG 特有决策点：切块策略 · top-K · 检索不到兜底 · 建索引抽查",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "产出：政务政策问答系统（带来源引用的回答）+ Streamlit 对话界面 + 完整 gstack 交付件。坡度递增：分类器（一把梭）→ RAG（检索+生成）。", 4.55, C.bgBlue, C.primary);
    calloutBar(s, "最小工具契约：检索能力封装为 search_policy（输入问题 → 输出带来源元数据的证据片段），守住“无证据不回答”。", 5.1, C.bgAmber, C.accentWarm);
  }
};
