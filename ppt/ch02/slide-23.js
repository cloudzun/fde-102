// slide-23.js — 2.5 八条鉴别项 + 甲方阈值
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "checklist", index: 23, title: "八条鉴别项" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "8 条鉴别项（真 FDE 应尽量满足）", C.bgLight);
    const items = [
      "交付结束后，公司能力是否增长？（不只是客户受益）",
      "是否有能力回注动作？（识别→抽象→集成→验证闭环）",
      "是否按价值而非人头计费？（报价挂钩结果/KPI，人天计费会逼回外包）",
      "FDE 是否汇报给产品线而非销售？（汇报线决定行为）",
      "定制代码是否被抽象为可复用组件？（不是写完就留客户那里）",
      "是否沉淀了 Playbook / SOP？（固化可复用方法文档）",
      "离开现场后系统是否仍能自运营？（交付物是能力而非人）",
      "人才是否是真工程师（能写生产级代码）而非咨询顾问？",
    ];
    items.forEach((it, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.6 + col * 4.55;
      const y = 1.3 + row * 0.78;
      s.addShape("rect", { x, y, w: 4.3, h: 0.68, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("ellipse", { x: x + 0.12, y: y + 0.18, w: 0.32, h: 0.32, fill: { color: C.bgCard }, line: { color: C.primary, width: 1 } });
      s.addText(String(i + 1), { x: x + 0.12, y: y + 0.15, w: 0.32, h: 0.36, fontSize: 11, fontFace: "Arial", bold: true, color: C.primary, align: "center", valign: "middle", margin: 0 });
      s.addText(it, { x: x + 0.55, y: y + 0.06, w: 3.65, h: 0.56, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
    });
    calloutBar(s, "给甲方的判读阈值：勾选 ≥6 条，且 1、2、3、4 四条硬指标必须勾选，才可认定“真 FDE 倾向”；硬指标缺任何一条（尤其 3 按价值计费、4 汇报产品线）＝高退化风险，签约前优先核验这两条。", 4.75, C.bgBlue, C.primary);
    s.addText("本量表为教材提炼的教学工具（非行业标准认证）；对外做正式判断时，请结合合同条款、考核与汇报线等一手证据。", {
      x: 0.6, y: 5.32, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
