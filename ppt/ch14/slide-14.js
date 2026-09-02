// slide-18.js — 14.7 判断要点
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "生产保障判断要点" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "FDE 必须确认的判断要点", C.bgWhite);
    const items = [
      { t: "配置与密钥", d: "配置与代码分离；Secret 不进源码；缺配置安全失败" },
      { t: "日志审计指标", d: "发生了什么 · 谁做了什么 · 用什么模型/版本 · 现在是否异常" },
      { t: "超时重试降级", d: "失败是否重试？有副作用的动作要幂等（幂等键/状态确认/补偿）" },
      { t: "权限动作边界", d: "模型能建议什么、能执行什么；哪些必须人工批准" },
      { t: "灰度回滚监控", d: "新版本先小范围验证；退化可切回；告警有负责人" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.72;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.62, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.62, fill: { color: C.primary } });
      s.addText(it.t, { x: 0.85, y, w: 1.9, h: 0.62, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 2.95, y, w: 6.2, h: 0.62, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "反模式：工单分派接口超时，系统不知道第一次是否成功，重试把同一工单分派两次——涉及外部动作时必须设计幂等键 / 状态确认 / 补偿。", 5.15, C.bgRed, C.red);
  }
};
