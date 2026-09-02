// slide-20.js — 7.4.3 八环节流水线（图 7-5）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 20, title: "八环节流水线" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "工程流水线通用骨架：八环节，一环一停", C.bgWhite);
    const steps = [
      { t: "1 要不要做", d: "确认需求与范围", role: "提问者", fill: C.bgBlue, strip: C.primary },
      { t: "2 死磕边界", d: "No-Go · 数据模型 · 验收口径", role: "追问者", fill: C.bgBlue, strip: C.primary },
      { t: "3 决策拍板", d: "暴露两可决策，列选项", role: "决策者", fill: C.bgAmber, strip: C.accentWarm },
      { t: "4 做出来", d: "按 SPEC 实现，每模块即测", role: "审查者", fill: C.bgBlue, strip: C.primary },
      { t: "5 找隐患", d: "P0–P3 分级，能跑但会出事", role: "审查者", fill: C.bgRed, strip: C.red },
      { t: "6 测体验", d: "核心流程 + 边界输入", role: "验收者", fill: C.bgBlue, strip: C.primary },
      { t: "7 收尾", d: "版本 + CHANGELOG + README", role: "收尾者", fill: C.bgGreen, strip: C.green },
      { t: "8 复盘", d: "摩擦 / 未覆盖 / 行动项", role: "复盘者", fill: C.bgAmber, strip: C.accentWarm },
    ];
    steps.forEach((g, i) => {
      const y = 1.3 + i * 0.5;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.42, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.05, h: 0.42, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.8, y, w: 1.9, h: 0.42, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 2.9, y, w: 4.3, h: 0.42, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.role, { x: 7.4, y, w: 1.8, h: 0.42, fontSize: 10.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      if (i < 7) s.addShape("line", { x: 5.0, y: y + 0.42, w: 0, h: 0.08, line: { color: C.textMid, width: 1, endArrowType: "triangle" } });
    });
    calloutBar(s, "三原则：人的判断不可替代 · 每环节产出都是文件（可追溯可复用）· 不必所有改动都走全流程（做错代价大才走）。", 5.15, C.bgBlue, C.primary);
  }
};
