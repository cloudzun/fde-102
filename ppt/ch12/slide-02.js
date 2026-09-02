// slide-02.js — 实操目标与产出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "实操目标与产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实操目标与产出", C.bgLight);
    const goals = [
      "用 LangGraph 的 State / Node / Conditional Edge 构建固定路由工作流",
      "分清分类器 vs 路由工作流 vs 受控 Agent（分类之后还要做事）",
      "把“敏感件零漏判”落地为验收硬指标",
      "设计高质量工具 check_department，验证“工具描述决定准确率”",
      "说清“为什么这里不需要动态 Agent”（从最简单开始）",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.6;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "产出：工单分级路由工作流（自动答复 / 深度处理 / 转人工）+ Streamlit 界面 + 完整 gstack 交付件。路径预先枚举 = Agentic Workflow，不是动态自主 Agent。", 4.72, C.bgBlue, C.primary);
    calloutBar(s, "坡度最高级：分类器 → RAG → 路由工作流（预编排 + 分支动作）；真正动态受控 Agent 见实操四B（Lab4B）。", 5.18, C.bgAmber, C.accentWarm);
  }
};
