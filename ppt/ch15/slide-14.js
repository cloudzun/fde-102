// slide-14.js — 15.3.1 门槛·动机·信任
const { C, sectionTitle, table } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 14, title: "门槛动机信任" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "组织采用：门槛 · 动机 · 信任", C.bgWhite);
    const rows = [
      ["障碍", "症状", "Echo 策略"],
      ["门槛高（不好上手）", "表单多、绕原流程、没人教；“自己写放心”", "简化流程 · 默认值模板 · 现场走查配陪跑 · 种子用户先试用"],
      ["动机弱（对他没好处）", "“跟我有什么关系”“是不是要我多干活”", "讲“角色升级” · 让他参与验收标准 · 量化展示省下时间"],
      ["信任低（不可靠）", "“会不会又分错”“出问题找谁”", "小范围试点 · 写清《谁负责》 · 出错可回滚 · 定期异常报告"],
    ];
    table(s, rows, { y: 1.4, colW: [2.0, 3.0, 3.8], rowH: 0.55});
    s.addText("先降门槛让人愿意试 → 再用动机让人持续用 → 用信任让人敢依赖。每条对策都要能指到第 14 章工程证据。", {
      x: 0.6, y: 4.7, w: 8.8, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
  }
};

