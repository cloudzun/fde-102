// slide-18.js — 11.5.1 LangGraph
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 18, title: "LangGraph" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "LangGraph：把“决策循环”画成图", C.bgWhite);
    const rows = [
      ["机制", "说明"],
      ["State / Node / Conditional Edge", "共享状态驱动；Node 处理单元；条件边按条件分支"],
      ["Checkpointing（持久化）", "每次节点后写检查点，按 thread_id 隔离会话；支持断点恢复 / 回放"],
      ["interrupt()（人机回环）", "暂停 → 交给人 → 收集输入后恢复；含 interrupt 的节点恢复时从头重跑"],
      ["幂等性 / 副作用防护", "框架不自动保证幂等——副作用操作放独立节点 + 幂等键，恢复路径必须实测"],
      ["节点级 timeout / retry", "为每个节点设超时与重试，避免在某步卡死"],
    ];
    table(s, rows, { y: 1.35, colW: [2.3, 6.5], rowH: 0.55});
    calloutBar(s, "反例：中断恢复后重复发消息——按“生成回复 → 发送 → interrupt()”编排，恢复时节点重跑、消息可能重复发送；正确做法是把“发送”放到 interrupt() 之后或加幂等键。", 5.05, C.bgRed, C.red);
  }
};

