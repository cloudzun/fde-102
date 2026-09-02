// slide-31.js — 11.10 反洗钱场景
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 31, title: "反洗钱场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "银行反洗钱监测智能体：混合形态", C.bgWhite);
    s.addText("数据流转：交易流水 → 规则/模型初筛（确定性工作流）→ 可疑监测智能体分级处置 → 低风险自动通过 / 可疑深挖证据链（调工具：关联图谱·历史交易·规则库）/ 高风险转人工复核 → 专员拍板：上报 / 暂缓 / 排除。", {
      x: 0.6, y: 1.3, w: 8.8, h: 0.8, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    const rows = [
      ["红线", "在此场景的落地"],
      ["数据不出域", "金融数据隔离部署内部网段，模型走私有化"],
      ["答案可追溯", "可疑交易报告带依据：命中规则 / 交易 / 账户 / 关联图谱，来源可查"],
      ["敏感件零漏判", "漏报是合规事故——验收口径：给定验证集召回率 100%"],
      ["人能判断、AI 能执行", "复核 / 上报 / 暂缓由反洗钱专员决定，智能体只能“建议”"],
    ];
    table(s, rows, { y: 2.4, colW: [1.8, 7.0], rowH: 0.55 });
    calloutBar(s, "关键认知：工作流承载确定性、智能体承担灵活判断、人守住最后决定权——不是“一个聪明智能体把一切办完”。", 5.1, C.bgBlue, C.primary);
  }
};
