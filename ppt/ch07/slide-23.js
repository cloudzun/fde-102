// slide-23.js — 7.5 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 23, title: "四条工程纪律" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "7.5", "四条工程纪律：驾驭 AI Coding，防止翻车", [
      "纪律一：测试数据必须外部给定",
      "纪律二：启动提示词写清 7 项信息块",
      "纪律三：驱动指令把流程纪律“焊”进执行",
      "纪律四：数据与评测证据独立、可追溯、可复现",
    ]);
  }
};
