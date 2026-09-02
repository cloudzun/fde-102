// slide-03.js — 13.1 分隔页
const { divider } = require("../common");
module.exports = {
  slideConfig: { type: "divider", index: 3, title: "为什么本地 + 怎么选型" },
  createSlide(pres) {
    const s = pres.addSlide();
    divider(s, "13.1", "为什么在本地部署 + 怎么选型", [
      "三条合规红线：数据不出域 · 算法备案 · 自主可控",
      "选型三问：数据能否出域 / 能否本地部署 / 选哪个档位",
      "经济性：烧不起公网 API，转本地跑",
    ]);
  }
};
