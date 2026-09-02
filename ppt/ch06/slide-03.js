// slide-03.js — 任务场景
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "case", index: 3, title: "任务场景" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "任务场景：西岭市民服务平台", C.bgWhite);
    s.addShape("rect", { x: 0.6, y: 1.3, w: 8.8, h: 0.9, fill: { color: C.bgAmber }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.08 } });
    s.addShape("rect", { x: 0.6, y: 1.3, w: 0.05, h: 0.9, fill: { color: C.accentWarm } });
    s.addText("陈主任撂下一句话：“用 AI 把这一整套都智能化了”——然后等你们给方案，他下个月要去市里汇报。这一句就是全部正式需求。", {
      x: 0.85, y: 1.38, w: 8.3, h: 0.75, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25, valign: "middle"
    });
    const tasks = [
      { t: "拆场景", d: "把一句模糊大需求\n拆成能落地的子场景" },
      { t: "选技术", d: "每场景选对路线\n分类 / RAG / Agent" },
      { t: "挖风险", d: "数据 / 业务 / 合规 / ROI\n材料里都埋了线索" },
      { t: "出框架", d: "《解决方案框架》\n实操二三四的施工任务书" },
    ];
    tasks.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 2.6;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: C.primary } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.1, h: 0.4, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.12, y: y + 0.58, w: 1.86, h: 0.9, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
    });
    calloutBar(s, "顺带收集候选业务语义（对象 / 关系 / 动作）——只收集、不做最终本体，它们是第 15 章回注的输入。", 4.55, C.bgBlue, C.primary);
    s.addText("需求材料：《实验手册》labs/source-client-requirements.md（会议纪要 + 各方吐槽，信息散、藏风险）。", { x: 0.6, y: 5.2, w: 8.8, h: 0.3, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
