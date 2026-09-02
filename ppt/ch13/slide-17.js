// slide-17.js — 13.3.4 数据治理 Gate
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 17, title: "数据治理 Gate" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "数据治理 Gate：进微调前的第一关", C.bgLight);
    const rows = [
      ["检查项", "要求"],
      ["授权", "数据来源有授权记录（客户数据用于训练是否在合同/制度范围内）"],
      ["隐私与脱敏", "个人信息先脱敏/去标识，训练样本不得带真实个人信息"],
      ["版权", "不直接用未授权的第三方内容充当训练语料"],
      ["去重", "重复样本去重，避免某类样本过度加权"],
      ["血缘与版本", "数据集带来源、版本号、生成脚本与改动记录"],
      ["删除可达", "数据应可删除/可剔除（客户撤回授权时能重训替换）"],
      ["泄漏检查", "评测集/盲测集不得进入训练语料——否则评测数字全部失真"],
    ];
    table(s, rows, { y: 1.35, colW: [1.6, 7.2], rowH: 0.5 });
    redBar(s, "反模式：把验证集顺手加进训练集“提升效果”——这是微调项目最常见的自我欺骗，等于自己出题自己考。", 5.0);
  }
};
