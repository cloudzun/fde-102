// slide-05.js — 5.1 时间盒技术验证：允许 vs 不允许
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 5, title: "时间盒技术验证" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "“不以功能开发为目标” ≠ “完全不碰技术”", C.bgLight);
    const rows = [
      ["维度", "允许（时间盒技术验证）", "不允许（功能开发）"],
      ["做法", "连一次 API · 跑通 1 条样例\n解析 1 份文档 · 查字段可得性", "写业务代码 · 搭界面\n做完整数据管线"],
      ["目的", "消除“数据/技术不可行”的不确定性\n支撑选型判断", "交付可用的功能"],
      ["时间盒", "单次半天以内\n累计不超过 Discovery 工作量 20%", "无时间盒\n（留到 Prototype）"],
    ];
    table(s, rows, { y: 1.4, colW: [1.3, 4.0, 3.5], rowH: 0.55});
    calloutBar(s, "判断标准：验证产出的是“判断依据”，不是“可用功能”——能让选型更确定的就值得做。", 5.08, C.bgBlue, C.primary);
  }
};

