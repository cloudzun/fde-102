// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "区分 Prototype / FDE Build / FDE Scale；五个关键转换",
      "验证真实环境下的数据 / 系统 / 业务 / 责任四类假设",
      "模型输出接入真实业务动作 + 人工兜底闭环",
      "FDE 生产准入 Gate（八项）判断能否上线",
      "客户自运营、接管演练与 FDE 撤出条件",
      "识别并验证可回注的工程机制与业务本体",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "主线：FDE 的 Build 是把原型嵌入客户真实业务；FDE 的 Scale 是让客户自运营 + 能力回注。必做贯穿任务，产出证据供第 16 章评审。", 5.05, C.bgBlue, C.primary);
  }
};
