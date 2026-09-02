// slide-06.js — 14.1.3/4/5 转换 3+4+5
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "转换 3 4 5" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "转换 3 · 4 · 5", C.bgWhite);
    const items = [
      { t: "3 模型输出 → 业务动作闭环", d: "模型给出结果 ≠ 业务动作完成\n动作链：输入 → 判断 → 谁确认 → 哪个动作 → 写回哪里 → 失败停哪 → 谁继续", fill: C.bgGreen, strip: C.green },
      { t: "4 开发者运行 → 客户团队运营", d: "谁启动/停服务 · 谁处理失败 · 谁维护规则 · 谁批准变更 · 谁担最终责任\n“客户离不开原作者”不是 Scale 成功", fill: C.bgAmber, strip: C.accentWarm },
      { t: "5 客户定制 → 平台能力", d: "哪些只能留在客户域内？哪些对象/关系/动作/机制有通用性？\n代码可复用 ≠ 业务语义可复用", fill: C.bgBlue, strip: C.primary },
    ];
    items.forEach((it, i) => {
      const y = 1.4 + i * 1.35;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 1.25, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 1.25, fill: { color: it.strip } });
      s.addText(it.t, { x: 0.85, y: y + 0.12, w: 3.4, h: 1.0, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 4.4, y: y + 0.12, w: 4.8, h: 1.0, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.3 });
    });
    calloutBar(s, "反模式：分类正确但工单接口超时、工单没真正分派——“模型指标正确 ≠ 业务闭环完成”。", 5.15, C.bgRed, C.red);
  }
};
