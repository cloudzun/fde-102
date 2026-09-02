// slide-24.js — 14.10 七环节
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 24, title: "贯穿实操七环节" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "七环节：模拟客户环境接入", C.bgLight);
    const steps = [
      "核验原型假设（数据格式差异 → 更新方案边界）",
      "接入客户数据和系统（字段映射 · 调模拟工单接口 · 写回）",
      "闭合人工兜底（低置信度进队列 · 审核回写 · 超时提醒）",
      "处理现场变化（新增类别 / 字段改名 / 接口失败 → 分级处理）",
      "生产准入评审（八项 Gate 逐项证据与风险）",
      "跨组接管（接管组仅靠手册：启动 / 正常单 / 人工单 / 接口异常 / 恢复）",
      "能力回注（抽象工程机制 + 对象/动作模型 → 第二场景复用）",
    ];
    steps.forEach((st, i) => {
      const y = 1.3 + i * 0.54;
      numBadge(s, 0.7, y + 0.04, i + 1);
      s.addText(st, { x: 1.35, y, w: 8.0, h: 0.5, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "最终认知：Demo 能跑 ≠ 进入客户业务 ≠ 客户能接管 ≠ 能力可跨客户复用。", 5.12, C.bgAmber, C.accentWarm);
  }
};
