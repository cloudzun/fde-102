// slide-08.js — 14.2 四类假设核验表
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "假设核验表" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "原型假设核验表", C.bgLight);
    const rows = [
      ["假设", "客户现场证据", "不成立的影响", "调整动作"],
      ["数据可得、口径一致", "真实样本 + 字段映射", "指标失真或范围收窄", "换数据源 / 回 Prototype"],
      ["接口稳定、可写回", "联调记录", "无法闭合动作", "降级人工 / 换集成方式"],
      ["业务规则有正式口径", "业务方确认", "自动判断不可信", "收窄自动化边界"],
      ["责任边界清楚", "责任人确认", "不敢上线", "补《谁负责》"],
    ];
    table(s, rows, { y: 1.35, colW: [1.9, 2.2, 2.2, 2.3], rowH: 0.55});
    calloutBar(s, "最常被跳过的是“原型测试集是否代表真实业务分布”——测试集自己造的，指标必然好看，真实分布一换数字就要重测。", 4.7, C.bgAmber, C.accentWarm);
    s.addText("业务假设最容易被技术视角漏掉，却最影响能不能上线——Echo 参与确认（呼应第 5 章干系人）。", { x: 0.6, y: 5.25, w: 8.8, h: 0.25, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};

