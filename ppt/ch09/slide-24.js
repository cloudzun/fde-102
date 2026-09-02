// slide-28.js — 9.9.5 评估落地三件事
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 28, title: "评估怎么落地" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "评估怎么落地：三件事", C.bgWhite);
    const items = [
      { t: "检索与生成分开评估", d: "检索侧看命中率（调分块/embedding/混合检索）\n生成侧看忠实度（调提示词/模型）\n引用侧看出处对不对——排错口诀：先问找没找对，再问答没答对，最后问引没引对", fill: C.bgBlue, strip: C.primary },
      { t: "固定评估配置", d: "evaluator prompt、模型、参数必须固定（温度 0）\nLLM 打分只作初筛，抽检 ≥20% 人工复核\n冲突时以人工为准并记录", fill: C.bgAmber, strip: C.accentWarm },
      { t: "库外问题（外部给定）", d: "知识库中不存在答案的问题，由讲师/脚本外部给定\n验收口径：模型应回答“未检索到、无法回答”，不得编造", fill: C.bgRed, strip: C.red },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 1.25;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 1.1, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 1.1, fill: { color: it.strip } });
      s.addText(it.t, { x: 0.85, y: y + 0.05, w: 2.4, h: 1.0, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.4, y: y + 0.05, w: 5.8, h: 1.0, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "答案错了不等于生成错，更可能是检索没找对——先定位，再修。", 5.12, C.bgAmber, C.accentWarm);
  }
};
