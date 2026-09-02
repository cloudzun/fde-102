// slide-03.js — 总结束
const { C, topAccentBar, bottomAccentBar } = require("../common");
module.exports = {
  slideConfig: { type: "closing", index: 3, title: "课程总结束" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    // 装饰层：水印 END + 圆环（右侧，避开文字区）
    s.addText("END", {
      x: 7.1, y: 0.2, w: 2.8, h: 3.6,
      fontSize: 110, fontFace: "Arial", bold: true,
      color: C.primaryLight, transparency: 82, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: 7.9, y: -1.4, w: 3.8, h: 3.8, fill: { color: "FFFFFF", transparency: 92 }, line: { color: C.onDarkBright, width: 1.5, transparency: 55 } });
    s.addShape("ellipse", { x: 8.45, y: -0.75, w: 2.7, h: 2.7, fill: { color: C.primaryLight, transparency: 88 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
    s.addShape("ellipse", { x: -1.3, y: 4.0, w: 2.8, h: 2.8, fill: { color: C.primary, transparency: 85 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
    // 左侧品牌竖线
    s.addShape("rect", { x: 0.8, y: 1.0, w: 0.07, h: 2.2, fill: { color: C.onDarkBright } });
    // 标题区
    s.addText("课程结束 · 感谢聆听", {
      x: 1.2, y: 1.0, w: 5.6, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0
    });
    s.addText("把问题变成答案\n把定制变成能力", {
      x: 1.2, y: 1.45, w: 5.6, h: 1.2,
      fontSize: 34, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0, lineSpacingMultiple: 1.1
    });
    s.addShape("rect", { x: 1.25, y: 2.75, w: 2.2, h: 0.045, fill: { color: C.primaryLight } });
    s.addText("—— 从交付项目，到交付能力", {
      x: 1.2, y: 2.9, w: 5.6, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei", italic: true, color: C.onDark, margin: 0
    });
    // 三点回顾
    const recap = [
      "五实操总分总：Echo 定方向 → Delta 施工 → 全团队收口",
      "四条红线：不出域 · 可追溯 · 零漏判 · 人能判断",
      "能力回注：碎石路 → 铺装公路，越做越省",
    ];
    let y = 3.6;
    recap.forEach(pt => {
      s.addShape("ellipse", { x: 1.3, y: y + 0.14, w: 0.18, h: 0.18, fill: { color: C.primaryLight } });
      s.addText(pt, {
        x: 1.65, y, w: 5.4, h: 0.45,
        fontSize: 13, fontFace: "Microsoft YaHei", color: C.onDark, margin: 0
      });
      y += 0.48;
    });
    // 底部
    s.addText("《人工智能工程师（高级）FDE 认证培训》 · FDE-101：https://www.cloudzun.com/fde-course/", {
      x: 1.2, y: 5.05, w: 8.4, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei", color: C.onDarkBright, margin: 0
    });
  }
};
