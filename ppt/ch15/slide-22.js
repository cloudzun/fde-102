// slide-22.js — 15.4.3 本体三层 + 六类元素
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "本体三层与六类元素" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本体论三层 + 六类基础元素", C.bgLight);
    const rows = [
      ["层次", "是什么"],
      ["哲学本体论", "研究“存在”本身——概念源头，不直接进入工程"],
      ["知识表示层", "用类 / 属性 / 关系 / 实例描述领域（Gruber 定义）——“能查询的概念模型”"],
      ["操作型业务本体", "在对象 / 属性 / 关系之上，再纳入状态 / 动作 / 权限治理——“能执行、能治理的模型”"],
    ];
    table(s, rows, { y: 1.3, colW: [1.8, 7.0], rowH: 0.55 });
    s.addText("六类基础元素：对象类型 · 属性 · 关系类型 · 状态 · 动作类型 · 权限与治理——组织成人和系统都能共同理解、查询和执行的业务语言（平台无关，Palantir 是代表实现而非唯一标准）。", {
      x: 0.6, y: 3.3, w: 8.8, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "本书只借鉴 Palantir Foundry 的建模思想（教材提炼），不需要学员有 Foundry 账号——领域模型、知识图谱、业务对象层均可表达同类思想。", 4.4, C.bgBlue, C.primary);
  }
};
