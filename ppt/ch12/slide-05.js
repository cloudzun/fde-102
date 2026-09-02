// slide-05.js — 环节 1 三档判定标准
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "三档判定标准" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "环节 1 · 三档判定标准（核心是“动作”而非字面信号）", C.bgWhite);
    const rows = [
      ["档位", "判定", "动作"],
      ["咨询", "模式固定、直接问怎么办", "自动答复"],
      ["跨部门", "只要“需要查询部门职责归属才能处理”就算，即使只涉一个部门", "深度处理（查职责库）"],
      ["敏感", "对具体对象举报/投诉/安全隐患", "转人工（零漏判）"],
    ];
    table(s, rows, { y: 1.35, colW: [1.3, 4.7, 2.8], rowH: 0.55});
    calloutBar(s, "注意：“维权/投诉”字眼本身不决定档位——问“怎么处理”是跨部门，对具体对象“实名举报XX要求查处”才是敏感。", 4.5, C.bgAmber, C.accentWarm);
    s.addText("核心教学点 · 档位例子反向核对：写好判定标准后，用验证集样本逐条反向核对提示词里的档位例子——例子档位必须与验证集标注一致（首版把“拖欠工资维权”写进敏感档、验证集标跨部门，模型忠实执行错误定义导致首轮 66.7%）。", {
      x: 0.6, y: 5.05, w: 8.8, h: 0.5, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
  }
};

