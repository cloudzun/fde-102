// slide-05.js — 第二层验收
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "第二层验收" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "第二层验收 · 实操四B（受控 Agent）", C.bgWhite);
    const rows = [
      ["验收维度", "通过判据"],
      ["动态选工具", "不同任务走不同工具路径，不强制固定顺序"],
      ["观察后继续", "工具结果（如信息冲突）触发换工具或重新判断"],
      ["主动追问", "信息不足时调用 ask_clarification，追问后能续跑"],
      ["真暂停", "敏感 / 高风险走 request_human_review（interrupt + resume 真暂停—恢复）"],
      ["有限循环", "达完成条件即结束；达最大步数 / 风险边界即暂停或停止"],
      ["工作台可演示", "毕业展示工作台：用户说了什么 → Agent 做了什么 → 为何交人工 → 得到什么"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 7.1], rowH: 0.55});
    calloutBar(s, "若未做实操四B：本环节改为评审“它的加入会不会改变三个 MVP 的决策”——实操四B 是未来可评估的综合形态，不作结业硬性依赖。", 5.0, C.bgBlue, C.primary);
  }
};

