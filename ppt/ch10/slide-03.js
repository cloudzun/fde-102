// slide-03.js — 知识背景定位
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 3, title: "知识背景定位" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "这一轮在 Ch9 坐标系里的位置", C.bgWhite);
    const items = [
      { t: "第 2 层 · RAG", d: "先检索政策片段，再基于片段作答并标注来源\n不用微调（常更新·需溯源）\n不用纯关键词（语义鸿沟）", fill: C.bgBlue, strip: C.primary },
      { t: "双指标", d: "答案准确率 + 来源可追溯率\n政务 AI 准入门槛\n检索不到不能编", fill: C.bgRed, strip: C.red },
      { t: "从最简单开始", d: "基础向量检索（Chroma + top-K）\n不堆叠混合检索 / 重排\n评估发现持续差才逐段升级", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.15, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.14, w: 2.6, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 1.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "数据不出域：教学用课堂模拟数据（可走公网 API）；换真实客户数据 → 切本地向量库与本地 embedding（第 13 章路径）。", 4.3, C.bgRed, C.red);
    s.addText("embedding 两条路：API 优先（如硅基流动 bge-m3，免运维验证快）；API 不可用再降级本地（下载 2GB+ 模型）。", { x: 0.6, y: 5.0, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
