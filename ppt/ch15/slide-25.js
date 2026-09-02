// slide-25.js — 15.4.6/7 优先级 + 第二场景验证
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 25, title: "优先级与第二场景验证" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "回注优先级 + 第二场景验证", C.bgWhite);
    const rows = [
      ["维度", "核心问题"],
      ["业务通用性", "是否在多个客户或行业重复出现（Echo 判）"],
      ["语义稳定性", "对象和关系是否长期稳定，而非临时流程"],
      ["工程可实现性", "是否有可靠数据、接口和状态来源（Delta 判）"],
      ["治理可落地性", "权限、审计、责任和回滚是否清楚"],
      ["复用收益", "是否能明显降低下一次交付成本"],
      ["回注风险", "是否带入客户数据、知识产权或错误抽象"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 7.1], rowH: 0.5 });
    s.addText("第二场景（企业员工服务台）：市民诉求→员工请求 · 政策文件→企业制度 · 责任部门→人力/IT/行政/财务 · 工单→服务请求单 · 市数据局→合规或信息安全部门", {
      x: 0.6, y: 4.6, w: 8.8, h: 0.45, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "验证标准：只需替换对象实例、部门配置和内容数据，不推倒“请求—依据—责任主体—工单—人工审核”结构 → 有跨场景复用价值。", 5.15, C.bgBlue, C.primary);
  }
};
