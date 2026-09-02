// slide-22.js — 11.6.3 工具调用工程化五件套
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "工具工程化五件套" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "工具调用工程化：五件套", C.bgLight);
    const rows = [
      ["机制", "要求", "反例"],
      ["超时 timeout", "每个调用设超时上限（10–30s）", "调外部 API 卡死，整个智能体挂起"],
      ["重试 retry", "有限次数（如 2 次）+ 退避", "无限重试把故障放大成雪崩"],
      ["幂等 idempotency", "有副作用的工具带幂等键 / 事务 / 补偿", "断点恢复后重复提交 / 扣款"],
      ["审计 audit", "入参 / 出参 / 耗时 / 谁触发，全留日志", "出事后无法复盘“谁让它干的”"],
      ["降级 degradation", "失败 → 重试 → 降级（只读/简化）→ 转人工", "工具失败时装成功、给用户错误结果"],
    ];
    table(s, rows, { y: 1.35, colW: [1.6, 3.6, 3.6], rowH: 0.55});
    redBar(s, "工具失败时“假装成功”是智能体工程最常见的翻车——兜底顺序：失败 → 有限重试 → 降级 → 转人工，永远不要越过“转人工”这道线。", 5.0);
  }
};

