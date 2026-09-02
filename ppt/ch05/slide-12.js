// slide-12.js — 5.3 SOP1 六段式
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 12, title: "SOP1 六段式" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "干系人地图：输入 · 步骤 · 输出 · 判据", C.bgLight);
    const rows = [
      ["要素", "内容"],
      ["目标", "谁说了算 · 谁会挡路 · 对谁说什么话"],
      ["输入", "项目材料（需求原文 / 组织架构）+ 可接触人员范围"],
      ["步骤", "① 列清单（决策者 / 影响者 / 使用者 / 阻碍者 / 冠军候选）② 权力×兴趣定位四象限 ③ 每人一句沟通策略；头三天锁定冠军用户"],
      ["输出", "干系人清单 + 权力×兴趣图 + 每人一句沟通策略"],
      ["完成判据", "四象限都有落位；五类干系人能点名；对每人都能答“该对他说什么”"],
      ["异常", "名单不全→跟班/访谈补全；监管层信息不足→查制度文件+正式访谈"],
    ];
    table(s, rows, { y: 1.35, colW: [1.4, 7.4], rowH: 0.52 });
    calloutBar(s, "示例（西岭）：陈主任（高权·高兴趣）、市数据局（高权·低兴趣）、小王（低权·高兴趣）、李工（低权·低兴趣）。", 5.1, C.bgBlue, C.primary);
  }
};
