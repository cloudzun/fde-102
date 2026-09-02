// slide-02.js — 实操目标与产出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "实操目标与产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实操目标与产出", C.bgLight);
    const goals = [
      "把方案框架翻译成高质量启动提示词（7 项信息块）",
      "Agent 按 gstack 八环节自动跑，你在 checkpoint 把关 / 拍板",
      "验证“一次 LLM 调用做文本分类”是最简路径",
      "产出可运行系统 + 交付件 + 演示级验收声明",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "产出：市民诉求五分类系统（住建/人社/市监/城管/其他）+ Streamlit 验证面板 + 完整 gstack 交付件（SPEC/代码/review/qa-report/retro）。", 4.55, C.bgBlue, C.primary);
    calloutBar(s, "一句话：Echo 人脑挖需求出框架；Delta 把它翻译成启动提示词 → Agent 跑 8 环节 → 你在 checkpoint 把关。", 5.12, C.bgAmber, C.accentWarm);
  }
};
