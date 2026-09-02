// slide-20.js — 13.4.1 三层适配
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "三层适配" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "为什么必须适配：三个层面", C.bgLight);
    const items = [
      { t: "接口层", d: "超时与重试（本地并发池有限）\n参数通道（temperature/max_tokens 语义）\n并发与限流（RPM/TPM 由部署容量决定）\n不兼容时自建 provider 适配层", fill: C.bgBlue, strip: C.primary },
      { t: "行为层", d: "指令遵循与 Prompt 兼容性\n输出格式稳定性（JSON 解析失败率单测）\n工具调用（schema 兼容、thinking 回传）\n采样与上下文（tokenizer 差异）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "质量层", d: "量化漂移（FP8 小、NVFP4 明显、INT4 必须定档）\nembedding 更换（场景 B）→ 必须重建索引\n微调模型行为漂移（合并 vs adapter 有差异）", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.7, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.12, w: 2.85, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.58, w: 2.55, h: 2.0, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.3, valign: "top" });
    });
    calloutBar(s, "三个 Demo 的验收口径在切换后必须重新验证成立，才允许宣告“本地回填完成”。", 4.6, C.bgRed, C.red);
  }
};
