// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "Agent 定义：目标驱动 · 调工具 · 自主决策（决策循环）",
      "工作流 / Agentic Workflow / Agent 三分；六种模式二维判断",
      "Router 三路分流；假阳性 vs 假阴性权衡",
      "LangGraph + MCP；工具工程化五件套；三层护栏",
      "自动化边界三问——FDE 的核心业务决策",
      "银行反洗钱场景看懂“工作流 + 智能体 + 人机回环”",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "红线本处落地：敏感件零漏判——“给定验证集召回率 100%”，宁多升级、不可漏。第 12 章实操四当场做出来。", 5.05, C.bgRed, C.red);
  }
};
