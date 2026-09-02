// slide-11.js — 15.2.3 估算纪律
const { C, sectionTitle, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "warning", index: 11, title: "估算纪律" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四条估算纪律", C.bgWhite);
    const items = [
      { t: "口径第一", d: "只算“AI 真正覆盖的那部分”——只覆盖 60% 简单件，只能按 60% 算省下的人时" },
      { t: "给区间不给单点", d: "保守 / 基准 / 乐观三场景（如 ≈14 万 / 32 万 / 59 万），不是拍一个数" },
      { t: "每个数字标来源", d: "已实测 / 客户确认 / 教学假设 / 待验证——基线、覆盖率取自第 14 章盲测与运行证据" },
      { t: "书面锁口径", d: "会后发邮件列清参数取值与区间——“我们聊的”变成“我们共同确认的”" },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 0.85;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.75, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.75, fill: { color: C.primary } });
      s.addText(it.t, { x: 0.85, y, w: 2.2, h: 0.75, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.2, y, w: 6.1, h: 0.75, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    redBar(s, "锁口径最容易跳过、代价最大：三个月后换负责人，翻出方案只看到“年省 32 万”，却不知道是“简单件 60%”假设下算的——算完就发那封邮件。", 4.85);
  }
};
