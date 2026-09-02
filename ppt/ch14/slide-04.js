// slide-04.js — 14.1 五个转换图（图 14-1）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 4, title: "五个转换" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "FDE Build / Scale 的五个关键转换", C.bgWhite);
    const steps = [
      { t: "1 模拟数据 → 真实数据", d: "字段 / 分布 / 质量差异验证", fill: C.bgBlue, strip: C.primary },
      { t: "2 独立 Demo → 客户业务系统", d: "入口 · 事实来源 · 写回", fill: C.bgBlue, strip: C.primary },
      { t: "3 模型输出 → 业务动作闭环", d: "判断 → 确认 → 动作 → 写回", fill: C.bgGreen, strip: C.green },
      { t: "4 开发者运行 → 客户团队运营", d: "自运营 · 接管演练", fill: C.bgAmber, strip: C.accentWarm },
      { t: "5 客户定制 → 平台能力", d: "区分客户内容 / 通用机制", fill: C.bgCard, strip: C.primary },
    ];
    steps.forEach((g, i) => {
      const y = 1.35 + i * 0.72;
      s.addShape("rect", { x: 1.0, y, w: 8.0, h: 0.62, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.0, y, w: 0.06, h: 0.62, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.25, y, w: 4.2, h: 0.62, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 5.7, y, w: 3.1, h: 0.62, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("line", { x: 5.0, y: y + 0.62, w: 0, h: 0.1, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    calloutBar(s, "只完成前两个是“把 Demo 接到客户系统”；第四个不完成 Scale 没有发生；第五个不做公司退回“卖人力”。", 5.05, C.bgAmber, C.accentWarm);
  }
};
