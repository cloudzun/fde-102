// slide-08.js — DoD 完成标准
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "checklist", index: 8, title: "完成标准 DoD" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "完成标准（DoD）", C.bgLight);
    const checks = [
      "完成 Echo/Delta 定位并做了组内分工",
      "每人独立写了 ≥4 张判断便签（先独立后碰撞）",
      "风险墙：四类失败模式各 ≥1 条本项目具体风险",
      "干系人图：四层决策链全覆盖，市数据局和小王策略正确",
      "解决方案框架：三场景 + 各自选型理由 + 施工优先级",
      "每场景填了成功标准八字段，门槛有来源或标注“教学初始值”",
      "150 字全业务语言汇报，讲清方案且无技术黑话",
      "5 个自查追问全部在组内讨论过",
    ];
    checks.forEach((c, i) => {
      const y = 1.3 + i * 0.46;
      s.addShape("rect", { x: 0.75, y: y + 0.06, w: 0.28, h: 0.28, fill: { color: C.bgWhite }, line: { color: C.primary, width: 1.2 } });
      s.addText("☐", { x: 0.7, y: y + 0.02, w: 0.38, h: 0.36, fontSize: 13, fontFace: "Arial", color: C.primary, align: "center", valign: "middle", margin: 0 });
      s.addText(c, { x: 1.3, y, w: 8.0, h: 0.42, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "模板见 resources/templates/solution-framework.md；自查追问汇总与讲师引导见《实验手册》lab1 附录。", 5.05);
  }
};
