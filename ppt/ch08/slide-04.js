// slide-04.js — 任务书
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 4, title: "任务书" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "任务书：照第 6 章《解决方案框架》场景 A 施工", C.bgLight);
    const items = [
      { t: "技术方案（已定）", d: "文本分类：输入一句诉求 → 输出类别\n（不是 RAG、不是 Agent）\n技术栈：opencode + gstack + DeepSeek + Streamlit", fill: C.bgBlue, strip: C.primary },
      { t: "验收口径（已定）", d: "自信区准确率 ≥85%\n转人工比例 ≤30%（转人工不算错）", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.4;
      s.addShape("rect", { x, y, w: 4.3, h: 2.0, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.0, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.d, { x: x + 0.2, y: y + 0.65, w: 3.9, h: 1.2, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.35, valign: "top" });
    });
    s.addText("最小工具契约（供后续复用）", { x: 0.6, y: 3.7, w: 8.8, h: 0.35, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    calloutBar(s, "分类能力封装为 classify_request 工具：输入诉求全文 → 输出类别 + 置信度 + 是否建议转人工。第 12 章与实操四B 会把它当“工具”调用（什么情况该调、什么情况跳过——是 FDE 判断）。", 4.15);
  }
};
