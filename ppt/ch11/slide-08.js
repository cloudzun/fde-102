// slide-09.js — 11.3.1/2 工作流与编排工具
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 9, title: "工作流与编排工具" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工作流（Workflow）+ 编排工具", C.bgLight);
    s.addShape("rect", { x: 0.6, y: 1.25, w: 8.8, h: 0.7, fill: { color: C.bgBlue }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.25, w: 0.05, h: 0.7, fill: { color: C.primary } });
    s.addText("工作流：把业务处理步骤固定下来、按预先写好的顺序执行——可控、可预测、失败点可定位。与智能体的区别一句话：工作流的“下一步”是写死的，智能体的“下一步”是模型自己决定的。", {
      x: 0.85, y: 1.3, w: 8.3, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.2, valign: "middle"
    });
    const rows = [
      ["工具", "形态", "适合谁"],
      ["Dify", "开源低代码 / 可视化编排平台", "业务与工程协同、快速搭“工作流 + 局部智能体”"],
      ["Coze（扣子）", "低代码智能体平台", "快速搭建、工具市场丰富"],
      ["LangGraph", "代码级编排框架", "复杂、可编程、要深度定制的生产逻辑"],
    ];
    table(s, rows, { y: 2.2, colW: [1.7, 3.0, 4.1], rowH: 0.55});
    calloutBar(s, "判读：要几天内上线、业务参与配置 → 平台（Dify/Coze）；逻辑复杂、要精细控制 → 代码框架（LangGraph）；两者常混用（平台搭骨架 + 框架做复杂节点）。", 4.8, C.bgBlue, C.primary);
  }
};

