// slide-31.js — 5.8.3 八字段表 + 教学初始值
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 31, title: "八字段" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "每个场景一张八字段表——成功标准与验收设计", C.bgWhite);
    const rows = [
      ["字段", "要回答的问题"],
      ["业务目标", "对谁、解决什么问题"],
      ["成功指标", "业务和技术分别衡量什么"],
      ["数据与样本", "数据来自哪里，谁持有标签"],
      ["通过门槛", "当前阈值是多少，为什么定这个数"],
      ["人工兜底", "哪些情况必须转人工"],
      ["失败代价", "错分、错答、漏判各造成什么后果"],
      ["责任人", "谁确认口径，谁执行验证"],
      ["待校准假设", "哪些阈值只能在 Prototype 后确定"],
    ];
    table(s, rows, { y: 1.3, colW: [1.8, 7.0], rowH: 0.4 });
    redBar(s, "“教学初始值”与“校准”分开写：教材默认阈值（如 ≥85%）须标注为教学初始值；Prototype 后校准须记录变更原因与确认人。Delta 不得自行发明业务阈值——那是 Echo 的职责。", 4.95);
  }
};
