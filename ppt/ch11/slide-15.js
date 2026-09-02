// slide-16.js — 11.4.3 工单分级落地
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "工单分级三档" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工单分级：三路分流的政务版本", C.bgLight);
    const rows = [
      ["档位", "对应", "处理方式"],
      ["咨询类（简单）", "low → quick", "自动答复——模式固定、风险低，该自动化"],
      ["跨部门类（复杂）", "high → deep", "深度处理 + 调工具——AI 查部门职责库、生成意见，人可介入"],
      ["敏感类（投诉/举报/重大）", "uncertain → escalate", "必须转人工——政务安全底线；验收口径：给定验证集召回率 100%"],
    ];
    table(s, rows, { y: 1.5, colW: [2.2, 1.7, 4.9], rowH: 0.55});
    redBar(s, "敏感件零漏判：给定验证集召回率 = 100%（一条不漏）是可验收的；生产目标为零漏判——靠“漏判上报 + 复盘回灌”逼近，不是一句承诺。", 4.7);
  }
};

