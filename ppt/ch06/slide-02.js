// slide-02.js — 实操目标与产出
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "实操目标与产出" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "实操目标与产出", C.bgLight);
    const goals = [
      "扮演 Echo，把“整套智能化”拆成能落地的子场景",
      "用三个脚手架：挖风险 · 理干系人 · 选型",
      "挖出客户没说破的四类风险",
      "产出《解决方案框架》+ ≤150 字业务汇报",
    ];
    goals.forEach((g, i) => {
      const y = 1.35 + i * 0.66;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 14, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "产出 = 后续所有 Delta 实操的“施工任务书”：三场景 + 选型 + 优先级 + 风险应对 + 数据不出域方案。", 4.55, C.bgBlue, C.primary);
    calloutBar(s, "一句话：这一步训练判断力不是产出力——关键判断不用 AI，判断与取舍必须自己来。", 5.08, C.bgAmber, C.accentWarm);
  }
};
