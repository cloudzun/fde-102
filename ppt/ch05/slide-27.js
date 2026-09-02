// slide-29.js — 5.8.1 Discovery Gate 六要素
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 29, title: "Discovery Gate" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Discovery Gate：六要素核验", C.bgWhite);
    const rows = [
      ["要素", "本阶段内容"],
      ["输入条件", "已立项 / 客户授权；可接触干系人与数据入口"],
      ["核心活动", "干系人地图 · 痛点诊断 · 数据盘点 · 快赢筛选 · 场景选型"],
      ["必交付物", "地图 + 痛点清单 + 数据清单 + 评分表 +《解决方案框架》"],
      ["通过证据", "方向认可 · 冠军到位 · 数据可得 · 选型讲得清 · 红线入案 · 基线有来源"],
      ["未通过动作", "缺证据→补；范围过大→砍场景；无快赢→重筛或终止"],
      ["主责与协同", "Echo 主导；Delta 补可行性；客户决策者 + 业务骨干确认"],
    ];
    table(s, rows, { y: 1.35, colW: [1.5, 7.3], rowH: 0.5 });
    calloutBar(s, "快速自检：决策者认可？冠军用户到位？数据已验证？“黑话”复述得出来？", 5.0, C.bgBlue, C.primary);
  }
};
