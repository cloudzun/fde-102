// slide-05.js — 14.1.1/2 转换 1+2
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 5, title: "转换 1 与 2" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "转换 1 · 模拟数据 → 真实数据", C.bgLight);
    const items = [
      { t: "现场问题", d: "原型测试集自己造的、字段干净；真实数据有缺失、脏值、格式不一致" },
      { t: "FDE 判断", d: "分布差异是否影响验收指标？真实数据能否在安全域内使用？谁负责、如何更新？" },
      { t: "反模式", d: "用原型测试集指标冒充真实数据验证——没有真实样本的“接入”不成立" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.75;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.65, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.65, fill: { color: C.primary } });
      s.addText(it.t, { x: 0.85, y, w: 1.6, h: 0.65, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 2.6, y, w: 6.6, h: 0.65, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("转换 2 · 独立 Demo → 客户业务系统", { x: 0.6, y: 3.6, w: 8.8, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const items2 = [
      { t: "FDE 判断", d: "入口在哪？调哪些现有系统？哪个是事实来源？结果写回哪里？失败时业务如何继续？" },
      { t: "反模式", d: "只把 Demo 部署到一台服务器就宣称“接入”——没有入口、写回、事实来源 = 没接" },
    ];
    items2.forEach((it, i) => {
      const y = 4.05 + i * 0.7;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.6, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.6, fill: { color: C.accentWarm } });
      s.addText(it.t, { x: 0.85, y, w: 1.6, h: 0.6, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 2.6, y, w: 6.6, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    s.addText("验收：端到端演示——输入 → 判断 → 写回 → 可查（西岭：分类出“住建”要调用模拟工单接口写回，不是弹个标签）。", { x: 0.6, y: 5.35, w: 8.8, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0 });
  }
};
