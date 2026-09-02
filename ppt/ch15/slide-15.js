// slide-15.js — 15.3.1 三关对策
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 15, title: "三关对策" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "对治动作（每关指到工程证据）", C.bgLight);
    const items = [
      { t: "门槛关", d: "运行稳定性 · 一键启动 · 操作手册（Delta 证据）\n种子用户先试用一个月，对比手工 vs 系统时长", fill: C.bgBlue, strip: C.primary },
      { t: "动机关", d: "使用时长与工作量变化（指标）\n“从每条都看”变“只看 AI 拿不准的”——角色升级", fill: C.bgAmber, strip: C.accentWarm },
      { t: "信任关", d: "审计 · HITL · 回滚报告 · 安全域证据\n《谁负责》一页纸：人是最终决策者、AI 只给建议", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.5;
      s.addShape("rect", { x, y, w: 2.85, h: 2.2, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: it.strip } });
      s.addText(it.t, { x, y: y + 0.14, w: 2.85, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.6, w: 2.55, h: 1.5, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.35 });
    });
    calloutBar(s, "说服的关键不是讲道理，是改变他在项目里的“位置”和“安全感”。对“高权力 + 低兴趣”的监管层：关键节点主动预审，并给内部推手做“小抄”。", 4.35, C.bgBlue, C.primary);
  }
};
