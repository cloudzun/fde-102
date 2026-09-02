// slide-20.js — 14.8 自运营与撤出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 20, title: "自运营与撤出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "客户自运营 + 撤出条件", C.bgLight);
    s.addText("六类 owner：业务 · 技术 · 数据 · 人工审核 · 安全合规 · 事故升级（RACI：谁负责/批准/咨询/知会）", {
      x: 0.6, y: 1.3, w: 8.8, h: 0.4, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("客户需掌握：启动与健康检查 · 看状态 · 处理人工任务 · 更新政策/配置 · 处理常见故障 · 版本回滚 · 发起变更审批", {
      x: 0.6, y: 1.75, w: 8.8, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("接管演练：接管组不能询问原作者，只能依据运行手册完成启动、处理预设异常、确认业务状态并恢复——文档是否有效由接管者判断。", {
      x: 0.6, y: 2.25, w: 8.8, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    const checks = [
      "客户 owner 已确认 · 日常操作已培训",
      "常见故障可独立处理 · 人工审核队列有人负责",
      "关键指标有人查看 · 版本变更有审批流程",
      "支持边界和升级渠道已确认 · 未关闭风险已书面接受",
      "客户在限定观察期内完成独立运行",
    ];
    checks.forEach((c, i) => {
      const y = 3.05 + i * 0.42;
      s.addShape("rect", { x: 0.75, y: y + 0.04, w: 0.26, h: 0.26, fill: { color: C.bgWhite }, line: { color: C.primary, width: 1.2 } });
      s.addText("☐", { x: 0.7, y: y, w: 0.36, h: 0.34, fontSize: 12, fontFace: "Arial", color: C.primary, align: "center", valign: "middle", margin: 0 });
      s.addText(c, { x: 1.25, y, w: 8.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "撤出九条件逐条勾选完成，且客户依赖下降 = Scale 完成标志。", 5.18);
  }
};
