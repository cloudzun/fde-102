// slide-12.js — 14.4 三个 Demo 的闭环动作
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "业务闭环" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "进入客户环境后必须闭合的动作", C.bgLight);
    const rows = [
      ["Demo", "Prototype 结果", "必须闭合的动作"],
      ["诉求分类器", "输出分类标签", "写回工单 · 低置信度进人工队列 · 人工修正回流"],
      ["政策 RAG", "输出答案和来源", "引用可打开原文 · 文档版本可核对 · 更新后重建并重新验证"],
      ["路由工作流", "输出处理分支", "调用真实工具 · 进入审批 · 动作结果回写 · 失败可恢复"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 1.7, 5.6], rowH: 0.55});
    s.addText("人工兜底不是标签：有明确接收队列 · 有负责人 · 有处理时限 · 人工可见上下文 · 审核结果能回写 · 未处理会告警 · 可评测改进。", {
      x: 0.6, y: 3.9, w: 8.8, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "案例：系统输出“转人工”但没有人工队列、负责人和处理时限——人工兜底必须进入真实流程，不能只是一个标签。", 4.7, C.bgRed, C.red);
  }
};

