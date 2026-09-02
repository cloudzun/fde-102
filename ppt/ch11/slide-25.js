// slide-29.js — 11.9 三问框架
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 29, title: "判断三问" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "“该不该自动化某一步”三问", C.bgLight);
    const items = [
      { t: "模式是否固定？", d: "固定、重复、低风险 → 可自动\n每次都不一样、需判断 → 留人" },
      { t: "出错代价多大？", d: "影响真金白银 / 安全 / 合规 / 对外承诺 → 留人工确认环\n代价可逆可回滚 → 可自动 + 事后审计" },
      { t: "能否设计兜底？", d: "拿不准就异常返回、能兜底到人工 → 不怕自动\n无法兜底（一步错全盘错）→ 保守留人" },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 1.15;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 1.05, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 1.05, fill: { color: C.primary } });
      numBadge(s, 0.75, y + 0.3, i + 1);
      s.addText(it.t, { x: 1.5, y: y + 0.12, w: 2.6, h: 0.8, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.3, y: y + 0.12, w: 4.9, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "用法：任何一问指向“留人”就设暂停点；三问全指向“可自动”也仍要留审计——“可自动”不等于“无人看”。边界要写进 SPEC（自动化范围 / 转人工触发 / 兜底动作 / 人工超时策略）。", 5.05, C.bgBlue, C.primary);
  }
};
