// slide-10.js — 15.2.3 估算三公式
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 10, title: "估算三公式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "估算方法：先问客户最想看到的变化，套对应公式", C.bgLight);
    const rows = [
      ["价值类型", "年价值公式（示意）"],
      ["效率型（省时间）", "日均处理量 × 年运行天数 × AI 覆盖比例 × 每单节省工时 × 单位时间成本"],
      ["质量型（少出错）", "日均处理量 × 年运行天数 × 原错误率 × 错误率降幅 × 单次错误损失"],
      ["收入型（多赚钱）", "日均增量转化量 × 年运行天数 × 客单价 × 净利率"],
    ];
    table(s, rows, { y: 1.4, colW: [1.8, 7.0], rowH: 0.55});
    calloutBar(s, "年运行天数要写明来源（客户确认或实测，如 365 天 24 小时值守）——否则数字不可复算、不可审计。", 4.75, C.bgBlue, C.primary);
    s.addText("示例（效率型，教学假设）：日均 2000 条 × 250 天 × 60% 简单件 × 每条省 1.5 分钟 × 时薪 40 元 ≈ 年省 32 万。", { x: 0.6, y: 5.25, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

