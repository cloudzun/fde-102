// slide-09.js — 讲演收尾
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 9, title: "讲演收尾" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "讲演收尾 · 每组 5 分钟（三句话结构）", C.bgWhite);
    const items = [
      { t: "验收结论", d: "两层验收结果：需求满足了吗？能不能上生产？（含实操四B）" },
      { t: "能力回注清单", d: "碎石路铺成了哪条公路？" },
      { t: "下一阶段与客户价值", d: "每个场景的决策是什么？值不值？" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 0.8;
      numBadge(s, 0.7, y + 0.1, i + 1);
      s.addText(it.t, { x: 1.35, y, w: 2.4, h: 0.6, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.95, y, w: 5.3, h: 0.6, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("汇报人：Echo 和 Delta 各一人上台（检验全团队）；听众扮“客户”追问。评分维度：判断力 / 能力回注 / 决策质量 / 客户视角 / 表达。", {
      x: 0.6, y: 3.85, w: 8.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    s.addText("预演常问：快赢（先上哪个？何时见效）· 追责（数据泄露谁负责？）· 失业（机器干重复、人干判断）· No-Go 场景（为什么？怎么向发起人交代？）", {
      x: 0.6, y: 4.4, w: 8.8, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "可选出口：复盘真实项目（课后、无编号、不影响结业）——用同一套 Echo/Delta 方法对真实项目做拆解 → 复盘 → 决策与汇报（labs/migration-review-real-project.md）。", 5.1, C.bgBlue, C.primary);
  }
};
