// slide-11.js — 13.2.5 推理引擎
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 11, title: "推理引擎" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "模型服务化与推理引擎", C.bgWhite);
    const rows = [
      ["引擎", "角色", "何时用"],
      ["vLLM", "开源主流推理引擎", "生产默认首选（吞吐高、生态全）"],
      ["TensorRT-LLM", "英伟达编译优化", "英伟达硬件上追求极致性能"],
      ["Triton / Dynamo", "统一推理网关层", "多模型 / 多框架统一服务"],
      ["MindIE", "昇腾 910C 默认推理引擎", "国产昇腾栈（信创路线）"],
    ];
    table(s, rows, { y: 1.35, colW: [2.0, 2.8, 4.0], rowH: 0.55});
    s.addText("三个关键机制（同卡多并发）：①Continuous batching 动态拼批；②PagedAttention / KV cache 分页管理；③Prefix Caching 相同前缀只算一次（政务 RAG 命中率高、成本下降明显）。", {
      x: 0.6, y: 4.15, w: 8.8, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    calloutBar(s, "多卡并行：TP 单机张量并行（首选）· PP 跨节点 · DP 吞吐优先 · EP MoE 专家并行；生产配 K8s + 入口网关 + 健康监控 + 多副本灰度。", 5.0, C.bgBlue, C.primary);
  }
};

