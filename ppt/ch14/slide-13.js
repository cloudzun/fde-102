// slide-16.js — 14.6 处理分级
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "变化处理分级" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "现场变化处理分级（Delta 不默认继续加代码）", C.bgLight);
    const rows = [
      ["处理方式", "适用情况"],
      ["临时修复", "紧急恢复，不改变业务边界"],
      ["配置调整", "变化属于已设计的配置范围（类别清单 / 阈值 / 部门映射做成配置项）"],
      ["通用组件修改", "多场景存在同类需求，值得工程回注"],
      ["返回 Prototype", "技术方案或指标需要重新验证"],
      ["返回 Discovery", "业务问题、用户或价值假设发生变化"],
      ["停止", "风险、成本或价值已不成立"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 7.1], rowH: 0.55});
    calloutBar(s, "案例：部门职责调整——逻辑写死在 Prompt/代码里修改困难且无法追溯；应优先通过配置与业务模型处理；超出原边界时返回 Discovery。", 5.1, C.bgAmber, C.accentWarm);
  }
};

