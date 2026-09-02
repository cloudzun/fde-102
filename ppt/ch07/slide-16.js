// slide-16.js — 7.3.3/4 工具清单 + 7.3.5 选工具三问
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 16, title: "AI Coding 工具" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "工具清单（速查）与选型", C.bgWhite);
    const rows = [
      ["工具", "定位", "特点"],
      ["Claude Code", "Anthropic 官方 CLI", "终端自主编码 · Skills/MCP · $20/$100/$200"],
      ["Codex / CLI", "OpenAI coding agent", "云沙箱改码跑测提 PR · Free~$100"],
      ["opencode", "独立开源终端 agent", "模型无关 · 可接国产/本地模型 · 免费"],
      ["Trae（字节）", "全能型", "IDE 助手 + 智能体 · 免费~699 元/月"],
      ["Qoder（阿里）/ WorkBuddy（腾讯）", "编程 / 办公", "国内直连 · 免费版起（价格动态）"],
    ];
    table(s, rows, { y: 1.3, colW: [2.2, 2.2, 4.4], rowH: 0.5 });
    s.addText("选工具三问：①能否连境外？→ 不能走国产/自部署 ②编程还是办公为主？→ 决定 CLI/IDE 或办公智能体 ③数据合规？→ 内网/不出域 → 国产 + 自部署开源模型", {
      x: 0.6, y: 4.4, w: 8.8, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "工具是手段，纪律是根本——价格截至 2026-08，落地前以官方页复核。", 5.18, C.bgAmber, C.accentWarm);
  }
};
