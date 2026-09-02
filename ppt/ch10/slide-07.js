// slide-07.js — 环节 3 双指标验收
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 7, title: "双指标验收" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 3 · 验收口径（双指标）", C.bgWhite);
    const rows = [
      ["指标", "要求", "判定机制"],
      ["答案准确率", "≥80%", "LLM 语义评判：对照 expected_answer 判一致/不一致"],
      ["来源可追溯率", "≥90%", "严格比对“文件名+条款号”与 expected_source 一致才算对（漏引/错引/不符都算未达标）"],
    ];
    table(s, rows, { y: 1.4, colW: [1.7, 1.2, 5.9], rowH: 0.55});
    s.addText("为什么“答案对但来源错”也扣分？政务命门是可溯源——答案对了、来源引错，等于让市民去核对一个不存在的文件，比不答更糟。", {
      x: 0.6, y: 3.3, w: 8.8, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "统计提示（小样本口径）：6 条验证集上“可追溯率 ≥90%”实际需要 6/6 全对——小样本下 90% 门槛退化为“全对制”，只说明本次样本。", 4.2, C.bgAmber, C.accentWarm);
    s.addText("向小王演示“来源引用”：系统答完告诉市民哪份文件哪一条，可以去核对——把“AI 答错了谁负责”从“坐席背锅”变成“按文件来、有据可查”。", {
      x: 0.6, y: 4.95, w: 8.8, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
  }
};

