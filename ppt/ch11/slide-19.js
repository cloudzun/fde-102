// slide-21.js — 11.6.1/2 工具定义质量 + 国产模型
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 21, title: "工具定义质量" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "工具定义质量 + 国产模型注意点", C.bgWhite);
    const rules = [
      "描述具体，包含示例用法",
      "写清何时用、何时不用",
      "参数命名直观（用 keyword 而非 text）",
      "边界情况写清楚（查不到返回空列表）",
      "传入必要上下文（传工单全文，非单个关键词）",
    ];
    rules.forEach((r, i) => {
      const y = 1.35 + i * 0.6;
      numBadge(s, 0.7, y + 0.08, i + 1);
      s.addText(r, { x: 1.35, y, w: 8.0, h: 0.5, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "把工具描述当成“写给一个初级工程师看的接口文档”——描述越清楚，智能体调得越准。", 4.35, C.bgAmber, C.accentWarm);
    s.addText("国产模型（截至 2026-08）：①strict schema：DeepSeek 新增 strict-beta 路径与 JSON Schema 子集规则；②thinking 模式：多轮工具调用需把含 reasoning_content 的 assistant 消息一并回传，否则上下文丢失。", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};
