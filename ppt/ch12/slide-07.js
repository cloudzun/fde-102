// slide-07.js — 环节 3 双指标验收
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "双指标验收" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 3 · 验收口径（比 RAG 更强调安全底线）", C.bgWhite);
    const rows = [
      ["指标", "要求", "判定机制"],
      ["路由工作流正确率", "≥90%", "判档正确 + 分支动作执行才算路由正确（咨询件产出答复 / 跨部门件 departments 非空 / 敏感件 action=转人工）"],
      ["敏感件零漏判", "100%", "6 份中 2 份敏感工单必须全部转人工（假阴性=0），漏判 1 条即不通过"],
    ];
    table(s, rows, { y: 1.35, colW: [1.9, 1.2, 5.7], rowH: 0.55});
    s.addText("为什么路由正确要“判档 + 动作”双重验证？这是本轮灵魂——路由工作流与分类器的区别是“分类之后还要做事”：判对了档但没执行动作，跟分类器没区别。", {
      x: 0.6, y: 3.5, w: 8.8, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "统计提示：6 条样本上“路由正确 ≥90%”实际必须 6/6 全对（5/6≈83% 就挂）；敏感件 2 条必须全转人工——对“全对才过线”要有预期。", 4.35, C.bgAmber, C.accentWarm);
    s.addText("向小王演示：敏感件自动转人工（“拿不准就留给你判断”）+ 跨部门件真查了部门库（展示工具调用链）——“AI 处理常规、复杂和敏感留给人，你从处理工单变成把关人”。", {
      x: 0.6, y: 5.0, w: 8.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};

