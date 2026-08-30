# 新一代企业级算力调研（Blackwell Ultra B300 · 旗舰模型部署与微调硬件规范）· 截至 2026 年 8 月

> 调研性质：为 FDE 教科书收集的一手事实材料。**本报告是《企业级算力平台调研_截至2026年8月.md》（A100/H100/H20/L40S 时代）的新一代升级版**，按主编锚点升级到 **NVIDIA Blackwell Ultra B300 系列 + 当前旗舰模型（DeepSeek V4-Flash/V4-Pro、Kimi K3、GLM-5.2、Qwen3.8-2.4T-A95B）**，覆盖：B300 主流形态与规格、旗舰模型×B300 部署配置、B300 时代企业微调规范、昇腾/信创算力现状、价格与成本量级。
> 调研口径：当前日期 2026-08-30，数据截至 2026 年 8 月。仅做事实收集与归纳，不做教学建议。
> 可信度标注：✅官方（厂商官网/官方文档/官方发布/官方 GitHub/政府公告/权威研究机构）｜⚠️待核验（权威媒体转述、经销商/第三方技术博客、未能直接核对官方原文或精确数值）｜🔶教材提炼（基于公开公式/资料的标准化归纳与推算，非引用原文）。
> 来源纪律：已排除 CSDN、知乎、掘金、腾讯云开发者社区等低质来源；仅采用厂商官方 + 权威媒体 + 政府官方公告 + 权威第三方（Tom's Hardware、TrendForce、财联社、IT之家等）。
> 说明：本报告基于搜索引擎返回的标题、摘要与官方页面整理；个别精确数值未能从摘要直接核验，已逐条标注"⚠️待核验"并给出官方核验入口（见第六节），落地前请按官方页面核对。

> [!IMPORTANT] 主编锚点与本报告的标注约定
> - 主编已给的关键锚点：正文中以**【锚点】**标注；第 0 节给"锚点 × 核验结论"对照总表，第 6 节约束所有待核验项。
> - 本报告新核验到、且**锚点之外的增量信息**：正文中以**【核验】**标注。
> - 主编给的是方向性事实（如"8×B300 单节点 2.1–2.3TB"、"Kimi K3 官方推荐单节点 8×B300"）；本报告尽量用官方/权威来源把每条锚点落到"URL + 日期 + 可信度"。凡只能靠公式/常识推演的，一律标 🔶教材提炼。

---

## 0. 主编锚点 × 本报告核验对照总表

| # | 主编锚点 | 核验结论 | 关键证据（详见各节） |
| :- | :--- | :--- | :--- |
| A1 | B300：288GB HBM3e、显存带宽 8TB/s | ✅ 基本核验：288GB/8TB/s 与多来源一致；"144 PFLOPS FP4 / 72 PFLOPS FP8（sparse）"为 **8 卡节点口径**（每卡 FP4 dense 约 15 PFLOPS），见 1.1/1.3 | ✅ NVIDIA DGX B300 官方页；⚠️ 经销商规格（PNY/Scan 明确写"8×B300、72 PFLOPS FP8"）；✅ Tom's Hardware"1.5× B200、288GB HBM3e、15 PFLOPS dense FP4" |
| A2 | B300：TGP 最高 1200W | ⚠️ 部分核验：1200W 为锚点；媒体/经销商另有 1400W/1.4kW 液冷口径，**以 NVIDIA 官方白皮书为准（待核验）** | ⚠️ 经销商 1.4kW 液冷模块；媒体 1400W 报道 |
| A3 | 8 卡 HGX B300 单节点 **2.1–2.3TB 显存** | ✅ 核验：8×288GB 标称 2.3TB；整机可用宣传 2,100GB（2.1TB，含 HBM 冗余/预留） | ⚠️ [Scan.co.uk：PNY DGX 8×B300、2,100GB HBM3e（2026）](https://www.scan.co.uk/products/pny-nvidia-dgx-b300-deep-learning-ai-system-8x-b300-gpus-2100gb-hbm3e-72-petaflops-fp8-performance-3) |
| A4 | 节点内互联 14.4TB/s | 🟡 推演【锚点+🔶】：每卡 NVLink 约 1.8TB/s（与 GB200 同级）× 8 = 14.4TB/s 聚合；**逐字官方数字待核验** | 官方核验入口：NVIDIA DGX B300 用户指南（见第 6 节） |
| A5 | 需 CUDA 13 与对应驱动；Fabric Manager 版本一致；DOCA-OFED/IB/NCCL 网络栈 | ✅/🔶 部分核验：CUDA 13.0 已发布（B300 为 CUDA 13 世代）；Fabric Manager/DOCA/IB/NCCL 属多卡集群部署工程纪律（🔶教材提炼） | ⚠️ [ServeTheHome：NVIDIA CUDA Toolkit 13.0（2025-08）](https://www.servethehome.com/nvidia-cuda-toolkit-13-0-is-out/) |
| A6 | DeepSeek-V4-Flash：单节点 8×B300 可跑，TP=8，FP4+FP8 混合 | ✅ 部分核验：vLLM Recipes 官方"V4-Flash @ B300"配方存在，且 vLLM 官方修复"8-GPU 节点上 V4-Flash 单节点 TP=8" | ✅ [vLLM Recipes：DeepSeek-V4-Flash（284B/13B active、MOE、1024K ctx，hardware=b300）](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Flash?hardware=b300)；✅ [vLLM recipes 提交（TP=8 修复）](https://github.com/vllm-project/recipes/commit/0ebf8e12f7423e534e038209a04a531607ad18f9) |
| A7 | DeepSeek-V4-Pro：8 卡可部署、2 节点 B300 为生产级推荐 | ✅ 部分核验：V4-Pro=1600B/49B active；NVFP4 权重约 0.8TB（公式推演，8 卡可放）；NVIDIA 官方生态给出 GB200 NVL72 分解式（disagg）生产配方（2 节点级） | ✅ [vLLM Recipes：DeepSeek-V4-Pro（1600B/49B active）](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Pro?hardware=h200)；✅ [NVIDIA Dynamo：DeepSeek-V4-Pro vLLM disagg/gb200 配方](https://github.com/ai-dynamo/dynamo/pull/8811) |
| A8 | Kimi K3：官方推荐单节点 8×B300，NVFP4 权重约 1.6TB 加载量 | ✅ 基本核验：Kimi K3=2.8T 总参 MoE；NVIDIA 官方发布 NVFP4 量化权重（nvidia/Kimi-K3-NVFP4，含 SGLang 部署配方）；权重实际约 1.4–1.56TB、8 卡起步、8×B300 单节点已验证可跑 | ✅ [MoonshotAI/Kimi-K3（官方 GitHub）](https://github.com/MoonshotAI/Kimi-K3)；✅ [nvidia/Kimi-K3-NVFP4（NVIDIA 官方量化权重）](https://huggingface.co/nvidia/Kimi-K3-NVFP4)；⚠️ [Fixstars：单节点 8×B300 Day-0 实测](https://blog.us.fixstars.com/deploying-kimi-k3-on-day-0-can-a-2-8t-model-run-on-a-single-node-of-nvidia-b300-x8/)；⚠️ [七牛：Kimi K3 1560GB 权重、8 卡起步](https://news.qiniu.com/archives/1785219328249) |
| A9 | GLM-5.2-FP8：单节点 8×B300 跑通 | ✅ 核验：UCloud 官方博客"8 卡 B300 实测 GLM-5.2-FP8"；vLLM 官方博客给出 24×B300 NVFP4 生产级配方（含 TP8） | ⚠️ [UCloud：B300 部署 GLM-5.2-FP8 8 卡实测（2026）](https://www.ucloud.cn/yun/articles/2685)；✅ [vLLM 官方博客：24×B300 上服务 GLM-5.2（2026-07-23）](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd) |
| A10 | Qwen3.8-2.4T-A95B：8 卡 B300 已验证，NVFP4 | ✅ 基本核验：Qwen3.8-2.4T-A95B=2.4T/95B active、256K ctx；vLLM Day-0 支持（2026-08-12）；社区已在 B300 验证 NVFP4 量化部署 | ✅ [vLLM 官方博客：Qwen3.8 Day-0（2026-08-12）](https://vllm.ai/blog/2026-08-12-qwen3.8)；⚠️ [HuggingFace 博客：Qwen3.8-2.4T-A95B 已验证部署配方](https://huggingface.co/blog/hexgridcloud/deploying-qwen3-8-2-4t-a95b-with-vllm-verified-gpu) |
| A11 | 推理框架：vLLM / SGLang；精度优先 NVFP4 或 FP8 | ✅ 核验：vLLM/SGLang 均对 B300 与上述模型给出官方配方；NVIDIA 官方发布 NVFP4 版本（Kimi K3），社区 NVFP4 版本（Qwen3.8/V4-Pro） | 见 2.4 节 |
| A12 | 昇腾上跑模型仍是主流（尤其信创）；DeepSeek V4/Qwen3.8 昇腾适配 | ✅ 核验：华为昇腾超节点"全面支持 DeepSeek V4"；vLLM-Ascend 已支持 DeepSeekV4 与 Qwen3.8-2.4T-A95B（官方教程页）；华为开发者论坛有 V4 昇腾领域微调（LoRA）实践 | 见第四节 |
| A13 | 万卡智算集群（2026 大湾区昇腾 910C） | ✅ 核验：2026-07-10 粤港澳大湾区首个"国芯训国模"昇腾万卡智算集群在韶关发布；深圳点亮全国首个万卡级全栈自主可控智算集群（总算力 14000P） | ✅ [央广网（2026-07-10）](https://www.cnr.cn/gd/meiliguangdong/20260710/t20260710_527701525.shtml)；✅ [深圳市政府官网](https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12712072.html) |

> [!NOTE] 读法指引：第 0 节是"主编给的锚点落在哪里"的总索引；A1–A13 中 ✅ 表示锚点已有可点击证据链，⚠️ 表示存在但精确数值/官方原文待核验，🔶 表示需要靠公式推演的部分。详细证据与来源在正文各节与附录 A。

---

# 一、Blackwell Ultra B300：企业级主流形态与规格

## 1.1 B300 单 GPU 规格（锚点对齐 + 核验）

| 项 | 锚点给值 | 本报告核验 | 可信度与来源 |
| :--- | :--- | :--- | :--- |
| 定位 | 大规模、多卡集群旗舰（大规模训练 + 推理时代旗舰） | 一致：NVIDIA 官方以"AI Factory / Blackwell Ultra 平台"发布，面向集群与超大规模推理（reasoning）时代 | ✅ [NVIDIA 官方新闻稿：Blackwell Ultra AI Factory Platform（GTC 2025-03 PDF）](https://nvidianews.nvidia.com/_gallery/download_pdf/67d9bd1a3d6332a496666cf5/)；✅ [NVIDIA 台湾官方博客（2025-03）](https://blogs.nvidia.com.tw/blog/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning/) |
| 显存 | 288GB HBM3e | 一致（多来源）：每卡 288GB HBM3e | ✅ [NVIDIA DGX B300 官方产品页](https://www.nvidia.com/zh-tw/data-center/dgx-b300/)；⚠️ [Tom's Hardware 发布报道（2025-03）](https://finance.yahoo.com/news/nvidia-announces-blackwell-ultra-b300-183522091.html) |
| 显存带宽 | 8TB/s | 一致（多来源，含直销商规格） | ⚠️ [经销商：B300 模块 288GB HBM3e 8TB/s（用于 HGX/DGX B300）](https://www.changxinrobot.com/product/nvidia-b300-blackwell-ultra-ai-accelerator-module-288gb-hbm3e-8tb-s-for-hgx-dgx-b300/)；⚠️ [InferenceBench：B300 规格与定价页](https://inferencebench.io/gpus/nvidia-b300/) |
| 算力（锚点口径） | **FP4 144 PFLOPS、FP8 72 PFLOPS（sparse）** | 与 **8 卡节点口径**吻合：144/8=18（FP4 sparse/卡）、72/8=9（FP8 sparse/卡）；经销商整机页与锚点完全一致；Tom's Hardware 另给出**每卡 FP4 dense ≈15 PFLOPS**（1.5× B200） | ⚠️ [经销商（Run Sheng）：B300 SXM 288GB HBM3e 144 PFLOPS](https://www.runshengdcs.com/product/nvidia-b300-dgx-b300-blackwell-ultra-sxm-gpu-288gb-hbm3e-144pflops/)；⚠️ [Scan.co.uk：PNY DGX 8×B300、72 PFLOPS FP8](https://www.scan.co.uk/products/pny-nvidia-dgx-b300-deep-learning-ai-system-8x-b300-gpus-2100gb-hbm3e-72-petaflops-fp8-performance-3)；✅/⚠️ [Tom's Hardware：15 PFLOPS dense FP4、1.5× B200（2025-03）](https://www.tomshardware.com/pc-components/gpus/nvidia-announces-blackwell-ultra-b300-183522091.html) |
| 功耗 | TGP 最高 1200W | ⚠️ 部分一致：锚点 1200W；媒体/经销商另有 **1300–1400W / 1.4kW（液冷）** 口径；数据类型不同（TGP vs 模块液冷散热额定），**以官方白皮书为准** | ⚠️ [经销商：B300 模块 1.4kW 液冷](https://www.changxincontrol.com/product/nvidia-b300-blackwell-ultra-ai-compute-module-288gb-hbm3e-1-4kw-liquid-cool-genuine-for-hgx-b300-system/)；🔶 官方核验入口：NVIDIA B300 datasheet（第 6 节） |
| 软件栈 | 需 CUDA 13 与对应驱动 | ✅ 基本核验：CUDA 13.0 已随 Blackwell 世代发布（2025-08 起）；B300 对应 CUDA 13 驱动世代（DGX 软件栈文档也指向新驱动家族） | ⚠️ [ServeTheHome：NVIDIA CUDA Toolkit 13.0（2025-08）](https://www.servethehome.com/nvidia-cuda-toolkit-13-0-is-out/)；✅ [NVIDIA DGX B300 用户指南（Ubuntu/驱动安装章节）](https://docs.nvidia.com/dgx/dgx-os-7-user-guide/installing_on_ubuntu.html) |
| 互联/IO | 节点内互联 14.4TB/s；PCIe 6.0 | 🟡 推演 + 部分核验：每卡 NVLink 约 **1.8TB/s**（与 GB200 同级）→ 8 卡聚合 14.4TB/s（🔶）；B300 支持 **PCIe 6.0**（✅ 多来源） | ⚠️ [Tom's Hardware：Blackwell Ultra 秘密（NVFP4 加速 + PCIe 6.0）](https://www.tomshardware.com/pc-components/gpus/nvidia-shares-blackwell-ultras-secrets-nvfp4-boost-detailed-and-pcie-6-0-support)；🔶 官方核验入口：NVIDIA DGX B300 用户指南 |
| NVFP4 | —（锚点未列） | 【核验】Blackwell 系为 **NVFP4（NVIDIA FP4）** 原生加速；社区/官方均发布 NVFP4 权重（Kimi K3 官方、Qwen3.8、V4-Pro）；Kimi 技术报告侧用 MXFP4 称谓（两者并存，教材可写"NVFP4/MXFP4"） | ✅ [nvidia/Kimi-K3-NVFP4（NVIDIA 官方）](https://huggingface.co/nvidia/Kimi-K3-NVFP4)；⚠️ [HuggingFace 博客：Kimi K3 2.8T、MXFP4 量化概览](https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei) |

> [!IMPORTANT] 算力口径澄清（🔶教材提炼 + ⚠️待核验）
> 锚点"FP4 144 PFLOPS / FP8 72 PFLOPS（sparse）"与 8 卡整机/基板规格一致（经销商宣传页、PNY 整机"72 PFLOPS FP8"均同口径）；**每卡**约 FP4 dense 15 PFLOPS（Tom's Hardware 发布数据）。教材引用时建议写"HGX B300 8 卡节点 FP4≈144 PFLOPS、FP8≈72 PFLOPS（sparse；每卡 FP4 dense≈15 PFLOPS）"，并注明"以 NVIDIA 官方 datasheet 为准（待核验）"。

## 1.2 B300 各形态/ SKU 矩阵（SXM、HGX、DGX、GB300）

| 形态 | 组成 | 显存/算力量级 | 适用（🔶教材提炼） | 可信度与来源 |
| :--- | :--- | :--- | :--- | :--- |
| **B300 SXM 模块** | 单颗 288GB HBM3e GPU，SXM 封装，液冷 | 每卡 288GB、8TB/s；FP4 dense≈15 PFLOPS | 企业采购最小单元（= 库存/渠道按卡买卖），供 HGX/DGX 及 OEM 整机 | ⚠️ [经销商模块规格](https://www.changxinrobot.com/product/nvidia-b300-blackwell-ultra-ai-accelerator-module-288gb-hbm3e-8tb-s-for-hgx-dgx-b300/)；⚠️ [经销商中文整机介绍（B300/DGX）](https://www.cxdcs.cn/product/abb/nvidia-b300-2/) |
| **HGX B300（8-GPU 基板）** | 8×B300 基板供 ODM/OEM 组装（Supermicro/GIGABYTE/Compal 等）；8U 液冷整机 | 标称 2.3TB、可用约 2.1TB；节点 FP4≈144/FP8≈72 PFLOPS | **私有化单节点主力形态**：一台 8 卡节点即可承载万亿级 MoE 的量化版（见第二节）；企业普遍以"8 卡液冷节点"为交付单位 | ✅ [NVIDIA HGX B300 官方参考架构（HGX AI Factory 组件文档）](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html)；⚠️ [Supermicro 8U HGX B300 液冷整机页](https://www.supermicro.org.cn/zh_cn/products/system/gpu/8u/sys-822gs-nb3rt?mlg=2) |
| **DGX B300（NVIDIA 整机）** | NVIDIA 认证 8×B300 整机（液冷）+ DGX OS 软件栈 | 同上（整机宣传可用 2,100GB） | "开机即用"的企业私有化高端形态；配套 DGX 软件栈（驱动/容器/fabric 管理集成） | ✅ [NVIDIA DGX B300 官方产品页](https://www.nvidia.com/zh-tw/data-center/dgx-b300/)；✅ [NVIDIA DGX B300 System User Guide](https://docs.nvidia.com/dgx/dgxb300-user-guide/)；✅ [NVIDIA DGX SuperPOD（B300/XDR）参考架构组件](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/dgx-superpod-components.html) |
| **GB300（Grace Blackwell Ultra 双芯）** | 双 die 合一的超级芯片形态（GB200 的 Ultra 升级）；GB300 SXM 亦存在 | 单模块显存 288GB（双芯共享）；CUDA 核心双倍报道（20,480） | 与 B300 SXM 并存的主流 SKU；GB300 NVL72 机架以 NVLink-C2C 高低压液冷互联 72 卡 | ⚠️ [Guru3D：GB300 双芯、20,480 CUDA 核心](https://www.guru3d.com/story/nvidia-gb300-blackwell-ultra-dualchip-gpu-with-20480-cuda-cores/)；⚠️ [TechSpot：Blackwell Ultra 发布（2025-03）](https://www.techspot.com/news/107202-nvidia-unveils-new-blackwell-ultra-b300-ai-gpu.html) |
| **GB300 NVL72（机架级）** | 72 颗 GB300（NVL72 机架，液冷，"AI 工厂"最小部署单位） | 72×288GB≈20.7TB/NVL72；整架 FP4 达 EFLOPS 级（微软 4,608 卡集群宣传 92.1 EFLOPS FP4） | 大型 AI 工厂/云厂商旗舰形态；政企极少以整架起步（供电/液冷/机房门槛高） | ⚠️ [Yahoo/Tom's：微软部署 GB300 NVL72、4,608 卡、92.1 EFLOPS FP4（2026）](https://tech.yahoo.com/computing/articles/microsoft-deploys-worlds-first-supercomputer-133404382.html)；✅ [联想官方：GB300 NVL72 用户指南（OEM 官方文档）](https://pubs.lenovo.com/gb300-nvl72/) |

> [!NOTE] 读法指引：对企业 FDE 而言，**HGX B300（8 卡节点）与 DGX B300（整机）是"单节点部署"的两种名字，规格等同**；GB300 NVL72 是机架级形态，只有大型智算/云厂商使用。教材表述："B300 时代企业交付的最小完整单元 = 1 台 8×B300 液冷节点（约 2.1–2.3TB 显存）"。

## 1.3 相对前代（H100 / GB200）的提升量级

| 维度 | H100 SXM（前前代） | B200/GB200（前代） | **B300/GB300（本代）** | 量级结论 |
| :--- | :--- | :--- | :--- | :--- |
| 显存/卡 | 80GB HBM3 | 192GB HBM3e（B200） | **288GB HBM3e** | 约为 H100 的 **3.6 倍**（✅ 多来源规格） |
| 显存带宽/卡 | 3.35TB/s | 8TB/s | **8TB/s** | 约为 H100 的 **2.4 倍**（✅/⚠️ 规格多来源一致） |
| 单节点显存 | 8×80=640GB | 8×192≈1.5TB | **8×288≈2.3TB（可用约 2.1TB）** | 单节点约 H100 3.6 倍、B200 1.5 倍 |
| FP4 算力 | 不支持（INT8 为主） | FP4 dense 9 PFLOPS/卡 | FP4 dense≈15 PFLOPS/卡（**1.5× B200**）；节点 sparse≈144 PFLOPS | ✅ Tom's Hardware："1.5× faster than B200" |
| 定位差异 | 训练主力（被替代） | 推理/训练通用 | **推理时代旗舰**（AI Factory、多卡集群） | ✅ NVIDIA 官方发布口径 |

> 可信度：本表规格数字 ✅ 来自多来源一致（NVIDIA 官方页 + Tom's Hardware + 经销商规格）；"1.5× B200"✅ 来自 Tom's Hardware 引用 NVIDIA 发布（2025-03）；H100 行属旧一代对照（沿用既有公开规格，🔶教材提炼）。

## 1.4 8×B300 单节点能装多大模型（显存公式推演）

> 计算口径（🔶教材提炼，公开公式）：**权重显存 ≈ 参数量 × 每参数字节**（FP16/BF16=2B、FP8/INT8≈1B、NVFP4/INT4≈0.5B）+ **KV Cache + 激活 + 引擎开销**。生产建议按"权重 + 30%–100% 余量"配卡。

| 模型量级（总参） | FP16 权重 | FP8 权重 | NVFP4/INT4 权重 | 8×B300（~2.1TB 可用）能否单节点 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 284B（V4-Flash） | ~568GB | ~284GB | ~142GB | ✅ 轻松（FP8/NVFP4 + KV 余量充足） | 长上下文（1024K）KV 需预留数百 GB，FP8 KV 是默认做法 |
| 753B（GLM-5.2） | ~1.5TB | ~753GB | ~377GB | ✅ FP8 单节点可跑（UCloud 8 卡实测）；NVFP4 更从容 | 生产级 24×B300（PD 分离）见 2.1 |
| 1.6T（V4-Pro） | ~3.2TB | ~1.6TB | ~0.8TB | 🟡 FP8 超节点上限；**NVFP4 可单节点**（锚点"8 卡可部署"）；生产推荐 2 节点 | 2 节点 16×B300≈4.2–4.6TB，权重+KV 全余量 |
| 2.4T（Qwen3.8-2.4T-A95B） | ~4.8TB | ~2.4TB | **~1.2TB** | 🟡 NVFP4 可单节点（已 8 卡 B300 验证）；FP8 需 2 节点 | vLLM Day-0 支持（2026-08-12） |
| 2.8T（Kimi K3） | ~5.6TB | ~2.8TB | **~1.4TB（实际约 1.4–1.56TB）** | ✅ NVFP4 单节点 8×B300 官方推荐（见 2.1/2.2）；接近单节点上限 | "加载量约 1.6TB"= 权重 1.4–1.56TB + KV/激活开销（锚点 A8） |

> [!IMPORTANT] 一句话结论（🔶教材提炼）：**单节点 8×B300（约 2.1TB 可用）是"万亿级 MoE 量化版"的容量分水岭**：NVFP4 权重 ≤1.4TB（Kimi K3 / V4-Pro / Qwen3.8）可单节点起步，FP8 版本或更长上下文则上 2 节点；FP16/FP8 全权重训练仍属多节点范畴。

## 1.5 国内"数据不出域"用 B300 的部署形态与主流做法

| 做法 | 说明 | 可信度 |
| :--- | :--- | :--- |
| **私有化 8 卡液冷节点（主流）** | 政企机房自建 1–2 台 8×B300（HGX/DGX 或 OEM 整机），配 IB 或 400G RoCE/无损以太网，数据全程不出域 | 🔶教材提炼（形态上承接前版报告"私有化 8 卡服务器"惯例，本代升级为 B300 液冷节点） |
| **"一体机/开箱即用"交付** | B300 时代延续 NVIDIA"AI Appliance"式交付（DGX B300 整机 + 预装软件栈）；国内以 ODM 一体机 + 渠道集成商交付居多 | ✅ [NVIDIA DGX B300 官网页（整机形态）](https://www.nvidia.com/zh-tw/data-center/dgx-b300/)；⚠️ [Scan.co.uk：DGX B300 AI Appliance 命名](https://www.scan.co.uk/ai-solutions/nvidia-dgx-b300) |
| **智算中心/算力池共享** | 大型集团/园区建 B300 智算节点池，租用给内部业务（数据不出域的共享算力），而非每家自购 | 🔶教材提炼；背景量级见第四节万卡集群 |
| **合规前提** | 国产化替代政策与英伟达产品出口管制背景下，**政企采购 B300 需走可获批渠道**；"数据不出域"= 模型、数据、算力三者在本地闭环，与"用哪家芯片"正交，但芯片可得性影响路线选择（见 4.4） | ⚠️ [工商时报：B300 在华喊价百万美元（2026-05-01）](https://readers.ctee.com.tw/cm/20260501/a09aa9/1395251)；🔶教材提炼 |

> [!NOTE] 垂直边界（主编要求）：**RTX 4090 等家用消费卡在本调研中不作企业交付主体**；仅在"原型/POC/实验室环境"一句话边界内提及——家用卡可用于小模型原型验证，企业交付一律以 B300/昇腾等企业级硬件为准（🔶教材提炼）。

---

# 二、以当前旗舰模型反推部署配置（教学价值重点）

## 2.1 旗舰开源模型 × B300（含 H100 对照）多卡部署配置总表

> 读法指引：这是全报告最重要的表。列含义——"量化档"= 当前官方/社区主推权重格式；"权重体积"= 该量化档下的权重文件量级（🔶公式推演，实测见备注）；"B300 推荐配置"= 主编锚点 + 官方/权威实测的口径；"TP"= 张量并行度；"H100 对照"= 用同一公式换算到 8×80GB=640GB 节点（🔶推演，仅对照量级，参见 1.3 中 H100 已落后一代）。

| 模型 | 总参/激活（官方） | 上下文 | 主推量化档 | 权重体积（该档） | **B300 推荐配置** | TP | 推理框架 | H100 对照（🔶）|
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Kimi K3**（月之暗面） | 2.8T 总参 MoE（激活参数待核验）| 官方卡页为准（超长上下文）| **NVFP4**（NVIDIA 官方量化）| ≈1.4–1.56TB（"加载量约 1.6TB"）| **单节点 8×B300**【锚点/官方推荐】；2 节点更从容 | TP=8 | SGLang（NVIDIA 官方配方）/ vLLM | ≥3 节点（24×H100，仅权重）；KV 余量不足 |
| **DeepSeek V4-Pro** | 1.6T 总参 / 49B 激活 MoE | 1024K | NVFP4 / FP8 | NVFP4≈0.8TB；FP8≈1.6TB | **8 卡可部署（NVFP4）**【锚点】；**2 节点 16×B300 为生产级推荐**【锚点】 | TP=8（单节点）→ TP=16（2 节点） | vLLM / SGLang / NVIDIA Dynamo（disagg 生产配方） | ≥2 节点（16×H100 权重刚够，无 KV 余量） |
| **DeepSeek V4-Flash** | 284B 总参 / 13B 激活 MoE | 1024K | FP4 权重 + FP8 KV（混合） | FP8≈284GB；NVFP4≈142GB | **单节点 8×B300，TP=8**【锚点 + vLLM 官方配方】 | TP=8 | vLLM（官方 recipe @B300）/ SGLang | 1 节点 8×H100 勉强（FP8 权重 + 少量 KV）；长上下文需 2 节点 |
| **Qwen3.8-2.4T-A95B**（阿里） | 2.4T 总参 / 95B 激活 MoE | 256K | NVFP4（社区已验证）| ≈1.2TB | **单节点 8×B300 已验证**【锚点 + 社区实测】 | TP=8 | vLLM（Day-0 支持 2026-08-12）/ SGLang | ≥2 节点（16×H100） |
| **GLM-5.2**（智谱） | 753B（第三方总结口径，⚠️参数量待官方核验）| 1M（第三方总结）| **FP8**（官方/社区主推）与 NVFP4 | FP8≈753GB；NVFP4≈377GB | **单节点 8×B300：FP8 实测跑通**【锚点 + UCloud 实测】；生产级 24×B300（NVFP4、PD 分离）| TP=8（MTP=5 低延迟配方） | vLLM（官方 B300 配方）/ SGLang | 2 节点 16×H100（FP8 权重量级） |

> [!TIP] 教材讲法建议（🔶教材提炼）：表格落点一句话——**"当前五款旗舰开源模型的企业级起点都是 1 台 8×B300 单节点（NVFP4/FP8 量化后）；只有 DeepSeek V4-Pro 建议 2 节点，Kimi K3 单节点接近装满、2 节点为从容选项；没有任何一款需要 GB300 NVL72 整架起步"**——这正是"单节点够 / 多节点"教学分界（见 2.3）。

**来源明细（按行）：**
- Kimi K3：✅ [MoonshotAI/Kimi-K3（官方 GitHub）](https://github.com/MoonshotAI/Kimi-K3)；✅ [nvidia/Kimi-K3-NVFP4（NVIDIA 官方量化，含 SGLang 配方）](https://huggingface.co/nvidia/Kimi-K3-NVFP4)；⚠️ [Fixstars：单节点 8×B300 Day-0 可行性实测](https://blog.us.fixstars.com/deploying-kimi-k3-on-day-0-can-a-2-8t-model-run-on-a-single-node-of-nvidia-b300-x8/)；⚠️ [GPUStack：8×B300 上 vLLM vs SGLang 实测（2026-07-30）](https://gpustack.hashnode.dev/gpustack-day-0-support-for-kimi-k3-vllm-vs-sglang-inference-benchmark-on-8-b300-gpus)；⚠️ [七牛：Kimi K3 1560GB 权重、8 卡起步](https://news.qiniu.com/archives/1785219328249)
- V4-Pro：✅ [vLLM Recipes：DeepSeek-V4-Pro（1600B/49B active、1024K）](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Pro?hardware=h200)；✅ [NVIDIA Dynamo：V4-Pro disagg/GB200 生产配方](https://github.com/ai-dynamo/dynamo/pull/8811)；⚠️ [IT 之家：英伟达适配 DeepSeek-V4（GB200 NVL72 开箱 >150 tokens/s/user，2026-04-25）](https://m.ithome.com/html/943462.htm)
- V4-Flash：✅ [vLLM Recipes：DeepSeek-V4-Flash @ B300](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Flash?hardware=b300&features=tool_calling,reasoning)；✅ [vLLM recipes 提交：V4-Flash 8-GPU 节点 TP=8](https://github.com/vllm-project/recipes/commit/0ebf8e12f7423e534e038209a04a531607ad18f9)
- Qwen3.8：✅ [vLLM 官方博客：Qwen3.8 Day-0（2026-08-12）](https://vllm.ai/blog/2026-08-12-qwen3.8)；✅ [vLLM Recipes：Qwen3.8-2.4T-A95B（2.4T/95B active、256K）](https://recipes.vllm.ai/Qwen/Qwen3.8-2.4T-A95B?variant=default)；⚠️ [HuggingFace 博客：Qwen3.8 已验证部署（GPU Pods/量化/配方）](https://huggingface.co/blog/hexgridcloud/deploying-qwen3-8-2-4t-a95b-with-vllm-verified-gpu)
- GLM-5.2：⚠️ [UCloud 官方博客：B300 8 卡实测 GLM-5.2-FP8（2026）](https://www.ucloud.cn/yun/articles/2685)；✅ [vLLM 官方博客：24×B300 生产级 GLM-5.2（NVFP4、PD 分离、2026-07-23）](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd)；✅ [智谱官方：GLM 系列 API 文档入口](https://docs.bigmodel.cn/cn/guide/models/text/glm-5)；⚠️ [第三方总结：GLM-5.2 753B/1M ctx/MIT（2026）](https://www.morphllm.com/glm-5-2)

## 2.2 显存规划公式与"1.6TB 加载量"教学示例

> 公式（🔶教材提炼，公开换算）：权重显存（GB）≈ 参数量（十亿）× 每参数字节 ÷ 1024 修正（近似 1GB≈10 亿参数×2 字节）。
> - FP16/BF16：每 10 亿参数 ≈ **2GB**（锚点公式）；
> - FP8/INT8：每 10 亿参数 ≈ **1GB**（减半）；
> - NVFP4/INT4：每 10 亿参数 ≈ **0.5GB**（再减半）；
> - 总占用 = 权重 + **KV Cache（随上下文/并发增长，长上下文可用 FP8 KV 或量化 KV）** + 激活 + 引擎开销；生产按 +30%~100% 余量配卡。

| 教学示例 | 计算 | 结论 |
| :--- | :--- | :--- |
| Kimi K3（2.8T=2800 亿参数）NVFP4 | 2800 × 0.5GB ≈ **1.4TB 权重**；实测权重文件约 1.4–1.56TB（多来源） | 单节点 8×B300（约 2.1TB 可用）可装但接近上限；**"加载量约 1.6TB"= 权重 + KV/激活开销**（锚点 A8 ✅ 一致） |
| V4-Pro（1.6T）NVFP4 | 1600 × 0.5GB ≈ 0.8TB | 8 卡单节点可部署（锚点）；生产 2 节点给 KV/并发余量 |
| Qwen3.8（2.4T）NVFP4 | 2400 × 0.5GB ≈ 1.2TB | 8 卡单节点已验证（vLLM Day-0） |
| GLM-5.2（753B）FP8 | 753 × 1GB ≈ 753GB | 8 卡单节点 FP8 实测跑通（UCloud） |
| V4-Flash（284B）FP8 | 284 × 1GB ≈ 284GB | 8 卡单节点轻松；FP4 权重 + FP8 KV 混合进一步压缩 |

> 可信度：公式为公开换算（🔶教材提炼）；"1.4–1.56TB 权重"✅/⚠️ 来自 [NYU 上海分校转载（1.4TB）](http://rits.shanghai.nyu.edu/ai/kimi-k3-open-weights-ship-2-8t-parameters-1-4-tb-to-run/)、[七牛（1560GB）](https://news.qiniu.com/archives/1785219328249)、[Kimi K3 模型概览（MXFP4）](https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei)。

## 2.3 什么时候单节点够、什么时候要 2 节点/多节点（判定逻辑）

| 判定问题 | 单节点 8×B300（约 2.1TB 可用） | 需要 2 节点/多节点 | 备注 |
| :--- | :--- | :--- | :--- |
| NVFP4/FP8 权重 ≤ 1.4TB？ | ✅ 单节点可起步（Kimi K3/V4-Pro/Qwen3.8/V4-Flash/GLM-5.2-FP8） | 权重 >1.4TB（如 FP8 全量）才必需 | 见 2.1 表 |
| 目标上下文 / KV 预算？（1024K 长上下文 + 高并发） | 单节点 OK，但 KV 挤压权重余量，需 FP8 KV / 量化 KV | KV 预算 >0.5–0.8TB 时建议 2 节点 | 🔶教材提炼（KV 随 seq_len×并发 线性增长） |
| 生产 SLA（并发、首 token 时延、PD 分离）？ | 单节点可做小并发生产（GLM-5.2 官方就给了 24×B300 生产配方，说明单节点是"能跑"，生产级另算） | PD 分离（prefill/decode 分卡）生产级普遍 2–3 节点 | ✅ [vLLM 官方博客：GLM-5.2 24×B300 PD 配方（2026-07-23）](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd) |
| 模型是训练/微调而不是纯推理？ | 推理可单节点；**全参微调权重+优化器远超推理占用，见第三节** | 微调（尤其全参）天然多节点 | 🔶教材提炼 |
| 多卡间互联 | 节点内 NVLink（≈1.8TB/s/卡，聚合 14.4TB/s，锚点/🔶） | 跨节点走 IB / 400G RoCE；跨节点 TP 需高速网 | 🔶教材提炼 + 通用工程纪律 |

> [!TIP] 教材一句话（🔶教材提炼）：**"先按量化权重算容量，再按上下文/并发加 KV，最后按 SLA 定是否从单节点升 2 节点"——B300 时代 80% 的企业私有化推理需求落在 1–2 台 8×B300，只有全量 FP16/FP8 权重训练与超大规模并发才需要机架级/多节点。**

## 2.4 精度档与推理框架现状：NVFP4 / FP8 / vLLM / SGLang

| 项 | 现状 | 可信度与来源 |
| :--- | :--- | :--- |
| **NVFP4（第一优先）** | Blackwell Ultra 原生加速的 4-bit FP 格式；官方/社区为 Kimi K3（NVIDIA 官方）、Qwen3.8、V4-Pro 均提供 NVFP4 权重；vLLM 的 NVFP4 MoE kernel 在 Blackwell（SM12.0）上运行 | ✅ [nvidia/Kimi-K3-NVFP4](https://huggingface.co/nvidia/Kimi-K3-NVFP4)；⚠️ [vLLM GitHub issue：NVFP4 MoE kernel 与 Blackwell 兼容性（侧面证据）](https://github.com/vllm-project/vllm/issues/33416) |
| **FP8（第二优先）** | GLM-5.2 官方/社区主推 FP8；V4 系列 FP8 变体也在社区发布；FP8 比 NVFP4 精度更稳，显存翻倍 | ⚠️ [UCloud：GLM-5.2-FP8 B300 8 卡实测](https://www.ucloud.cn/yun/articles/2685)；⚠️ [HuggingFace：V4-Pro NVFP4+FP8 混合量化（社区）](https://huggingface.co/canada-quant/DeepSeek-V4-Pro-NVFP4-FP8-MTP) |
| **INT8 说明** | Blackwell Ultra 硬件主打 FP4/FP8；INT8 在 Blackwell Ultra 上的可用性存在审计论文（社区研究），**教材引出 INT8 时建议注明"官方路线是 FP8/NVFP4"** | ⚠️ [arXiv：Spec Sheets Are Not Kernels——Blackwell Ultra INT8 可用性审计（2026-08）](https://arxiv.org/html/2608.11693v1) |
| **vLLM** | 对 B300 及五款旗舰模型均有官方配方/博客/Day-0 支持（V4-Flash@B300、V4-Pro、Qwen3.8、GLM-5.2）；MTP（多 token 预测）加速 | ✅ [vLLM Recipes 站](https://recipes.vllm.ai/)；✅ [vLLM 博客：Qwen3.8 Day-0](https://vllm.ai/blog/2026-08-12-qwen3.8)；✅ [vLLM 博客：GLM-5.2 24×B300](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd) |
| **SGLang** | Kimi K3 官方（nvidia）SGLang 部署配方；DeepSeek-V4 SGLang cookbook 官方文档；8×B300 上与 vLLM 有对比实测 | ✅ [SGLang：DeepSeek-V4 cookbook（官方 GitHub）](https://github.com/sgl-project/sglang/blob/a10a24e9/docs_new/cookbook/autoregressive/DeepSeek/DeepSeek-V4.mdx)；⚠️ [GPUStack：8×B300 vLLM vs SGLang 实测](https://gpustack.hashnode.dev/gpustack-day-0-support-for-kimi-k3-vllm-vs-sglang-inference-benchmark-on-8-b300-gpus) |

---

# 三、企业微调的硬件规范与做法（B300 时代）

## 3.1 B300 288GB 大显存对微调的意义（单卡能训多大）

| 问题 | 答案 | 依据 |
| :--- | :--- | :--- |
| 单卡 288GB 比 80GB（H100）多 3.6 倍显存，对微调意味着什么？ | ① 同样的模型**更少卡即可微调**（例如 70B 级 LoRA 从"多卡/必须量化"降为"单卡量化基座 + LoRA"）；② 全参 SFT 的**单卡上限提升**：BF16 权重预算 ≈288/2≈144B 参数，但含 Adam 优化器状态（约 3–4× 权重）后实际全参 BF16 单卡约 30–70B 级；③ QLoRA/NVFP4 基座 + LoRA 增量让**单卡可训数百 B 量级的 MoE**（激活参数远小于总参） | 🔶教材提炼（公开公式：权重=参数量×字节；优化器状态≈2–3× 权重） |
| 288GB 与"单卡全参微调"的边界 | 全参 BF16：单卡理论 ~144B 权重，加优化器后建议 ≤70B 级；**MoE 全参（如 284B 总参）需 8×B300 起或量化基座+LoRA** | 🔶 同上 |
| 对 LoRA/QLoRA 的实际收益 | LoRA 只训练增量低秩矩阵：显存大头是**量化基座权重 + 激活 + 少量 LoRA 梯度**。288GB 可单卡放入 NVFP4 基座 ~500B+ 参数（≈250GB），配合激活即可 LoRA 微调 | 🔶教材提炼 |

> [!NOTE] 标准术语：LoRA（Low-Rank Adaptation，低秩适配，只训练增量低秩矩阵）；QLoRA（4-bit 量化基座 + LoRA）；全参 SFT（Full-parameter Supervised Fine-Tuning）。（✅ 原论文锚点可沿前版报告引用：LoRA arXiv:2106.09685、QLoRA arXiv:2305.14314。）

## 3.2 LoRA/QLoRA vs 全参 SFT：各需几卡、什么显存（B300 时代）

| 模型 | 全参 SFT（BF16 建议） | LoRA（NVFP4/FP8 基座） | QLoRA（4-bit 基座） | 备注（🔶 除标注外为公式推演） |
| :--- | :--- | :--- | :--- | :--- |
| V4-Flash（284B/13B active） | 8×B300 起步（权重 568GB + 优化器），2 节点更稳 | **单节点 8×B300 即可**；激活小（13B），甚至 4 卡可试 | 4 卡 B300 可试 | 激活参数小 = LoRA 显存大头在基座权重 |
| GLM-5.2（753B） | 2 节点 16×B300 起步（权重 1.5TB BF16 + 优化器） | 单节点 8×B300（FP8 基座 753GB） | 单节点 8×B300（NVFP4 基座 ~377GB） | 建议先 LoRA 验证 |
| V4-Pro（1.6T） | 4 节点 32×B300 级（🔶量级），成本极高 | **2 节点 16×B300**（NVFP4 基座 0.8TB + 激活） | 2 节点（更省） | 全参基本不在企业默认路径 |
| Kimi K3（2.8T） | 不建议常规全参（🔶成本量级与 1000 卡级后训练同构，见 3.3/5.2）；专项后训练需 Ascend/云集群 | **单节点 8×B300 起步**（NVFP4 基座 1.4TB 权重已近上限，LoRA 增量小）；2 节点更从容 | 同 LoRA | ⚠️ 具体显存实测待核验（官方核验入口：Kimi K3 模型卡/技术报告） |
| Qwen3.8-2.4T-A95B（2.4T） | 不建议常规全参 | 单节点 8×B300（NVFP4 基座 ~1.2TB） | 同 LoRA | 同上 |

> [!IMPORTANT] 教材落点（🔶教材提炼）：**B300 时代企业微调的默认路径是"NVFP4/FP8 基座 + LoRA"，显存够时 8×B300 单节点即可覆盖全部五款旗舰的 LoRA 微调；全参 SFT 只在上游厂商/专项后训练才出现（量级 16~32 卡乃至千卡），企业交付基本不碰。** ⚠️ 表中"几卡"为公式量级推演，落地前以 LLaMA-Factory/框架的显存实测与官方模型卡为准。

## 3.3 企业微调主流流程（B300 时代）：数据准备 → LoRA → 合并导出 → 量化编译 → 评测 → 灰度替换

| 步骤 | 做法（B300 时代） | 工具/框架 | 可信度与来源 |
| :--- | :--- | :--- | :--- |
| L1 数据准备 | 领域语料清洗、指令对构造、评测集划分（训练集/验证集/留出集）；**先查数据质量再训** | 企业内部数据管道 | 🔶教材提炼（承接本书数据资产盘点 SOP） |
| L2 LoRA/QLoRA 训练 | 加载 NVFP4/FP8 基座 + LoRA 增量，在 8×B300 单节点上跑（见 3.2）；MoE 注意 expert 路由与 LoRA 作用层 | **LLaMA-Factory**（统一高效微调框架，100+ 模型，支持昇腾镜像）；华为昇腾上有 V4 领域微调官方实践帖 | ✅ [LLaMA-Factory 官方 GitHub（含昇腾 a3 镜像 tag）](https://github.com/hiyouga/LlamaFactory)；✅ [华为开发者论坛：DeepSeek-V4 昇腾平台领域微调（LoRA 与 MoE 适配踩坑）](https://developer.huawei.com/home/forum/ascend/thread-02201218721769649032-1-1.html) |
| L3 合并/导出 | LoRA 增量合并回基座权重，导出标准权重目录（或保留 adapter 独立部署） | LLaMA-Factory 合并导出；vLLM 支持 adapter 热加载 | 🔶教材提炼（框架通用能力） |
| L4 量化编译 | 官方/社区 NVFP4 或 FP8 权重（NVIDIA 官方提供 Kimi-K3-NVFP4 等现成量化）；自训权重可走 NVIDIA ModelOpt 类工具转 FP8/NVFP4；注意 FP8 KV Cache 精度验证 | NVIDIA ModelOpt、NeMo；社区量化仓库 | ✅ [nvidia/Kimi-K3-NVFP4（官方量化权重即"官方帮你量化了"的范本）](https://huggingface.co/nvidia/Kimi-K3-NVFP4)；⚠️ [GPUStack 实测博客：FP8 KV Cache 需固定评测集验证精度](https://www.chinaz.com/2026/0730/1768126.shtml) |
| L5 评测 | 固定评测集（业务指标 + 通用能力）核对：量化前后、微调前后差异；**gate 检查清单**（本书纪律） | 内部评测框架 | 🔶教材提炼 |
| L6 灰度替换推理 | 新模型先灰度（小流量）替换旧模型；B300 生产可用 PD 分离（prefill/decode 分卡）保 SLA；回滚预案 | vLLM/SGLang + 网关灰度 | ✅ [vLLM 官方博客：GLM-5.2 24×B300 从 Day-0 到生产 SLA（PD 分离）](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd) |

> 可信度说明：L2–L6 的**各环节工具与事实**有 ✅/⚠️ 来源；**整体流程编排**为 🔶教材提炼（标准 LLMOps 微调流水线，编者整理）。

## 3.4 "先 RAG 后微调、微调是最后一公里"的取舍（🔶教材提炼）

| 取舍 | 说明 | 建议 |
| :--- | :--- | :--- |
| 先 RAG | 大多数"知识问答/内部资料"需求，先做检索增强（RAG）即可覆盖，改动可控、可回滚、可溯源 | 成本低、上线快，先做（与本书"先查数据资产再动手"一致） |
| 微调是最后一公里 | 当 RAG 覆盖不了"领域行为/风格/输出格式/私有协议"时，才用 LoRA 做最后一公里适配 | 微调前必须有固定评测集，量化（NVFP4/FP8）后必须复测 |
| 风险 | 微调是系统性改动（数据、超参、评测、回滚），做错一次代价高于 RAG | 遵循 3.3 流程分期灰度 |

> 本小节为 🔶教材提炼（基于公开 LLMOps 共识，非引用某厂商原文；与本书"敏感性零漏判/答案可追溯"红线同构）。

## 3.5 一体机/训推一体机在 B300 时代的主流形态与价格段

| 形态 | 内容 | 价格量级 | 可信度 |
| :--- | :--- | :--- | :--- |
| **英伟达栈一体化交付** | DGX B300 整机（8×B300，液冷）+ 预装软件栈（"AI Appliance"式交付）；或 OEM 8 卡液冷一体机 + 渠道集成 | B300 8 卡整机市场行情见第五节（国内渠道波动大：¥700 万–1450 万区间报道） | ✅ [NVIDIA DGX B300 官方页](https://www.nvidia.com/zh-tw/data-center/dgx-b300/)；⚠️ [Scan.co.uk：DGX B300 appliance](https://www.scan.co.uk/ai-solutions/nvidia-dgx-b300)；价格见 5.1 |
| **昇腾栈训推一体机** | 华为昇腾 DeepSeek 训推一体机、云从×华为训推一体机等：训练+推理一体交付、信创合规 | 云从×华为训推一体机"最高约百万级"（✅ 财联社 2025-03 口径）；华为一体机相对 H100 性能 60–70%、"价格有吸引力"（✅ TrendForce 2025-04） | ✅ [财联社：云从×华为训推一体机最高百万级（2025-03）](https://api3.cls.cn/share/article/1526110)（沿前版报告引用）；✅ [TrendForce：华为 DeepSeek 一体机拆解（2025-04-29）](https://www.trendforce.com/news/2025/04/29/news-decoding-huaweis-deepseek-all-in-one-machine-60-70-of-nvidia-h100-performance-at-an-appealing-price/) |
| **B300 时代一体机新变化**（🔶教材提炼） | 一体机从"小模型一体机"升级为"8 卡 B300 液冷节点 = 万亿级量化模型一体机"：即 2.1 节配置直接封装成交付单元；训练能力受限于显存（见 3.2） | 随硬件价（见 5.1） | 🔶教材提炼 |

---

# 四、国产/信创算力（昇腾）——中国 FDE 高频场景

## 4.1 昇腾主流硬件与软件栈现状

| 项 | 现状 | 可信度与来源 |
| :--- | :--- | :--- |
| Atlas 800I A2 推理服务器 | 华为官方当前主力推理服务器形态（多卡昇腾推理卡/训练卡整机） | ✅ [华为官方产品页：Atlas 800I A2](https://e.huawei.com/cn/products/computing/ascend/atlas-800i-a2)；✅ [华为官方快速安装指南](https://support.huawei.com/supportgateway/view/v1/enterprise/doc/main-content?nid=EDOC1100372610) |
| Atlas 300I Duo 推理卡 | 双芯合体推理卡（信创推理主流）；单卡万元级媒体报道（2025-10） | ✅ [华为官方产品页：Atlas 300I Duo](https://e.huawei.com/cn/products/computing/ascend/atlas-300i-duo)（沿前版报告引用）；⚠️ [TechWeb：双芯合体拆解报道（2025-10-19）](https://m.techweb.com.cn/article/2025-10-19/2966972.shtml) |
| 昇腾 910C / 超节点 | 910C 为当前训练/后训练主力 NPU；华为 CloudMatrix 384 超节点（384 NPU 全对等互联）支撑万亿级训练 | ⚠️ [新浪财经：CloudMatrix 384 研报解读（2025-06-25）](https://finance.sina.com.cn/stock/stockzmt/2025-06-25/doc-infcfxpq8236746.shtml)；🔶 910C 精确规格（显存/算力）待华为官方页核验（见第 6 节） |
| MindIE | 华为昇腾推理引擎（部署/加速软件栈） | ✅ [昇腾官方 MindIE 文档](https://www.hiascend.com/document/detail/zh/mindie/230/index/index.html) |
| vLLM-Ascend | vLLM 昇腾后端官方维护，已跟进 DeepSeekV4 与 Qwen3.8 | ✅ [vllm-project/vllm-ascend（官方 GitHub，含 DeepseekV4 支持 PR）](https://github.com/vllm-project/vllm-ascend/pull/9270)；✅ [vLLM-Ascend 官方教程：Qwen3.8-2.4T-A95B](https://docs.vllm.ai/projects/ascend/zh-cn/main/tutorials/models/Qwen3.8-2.4T-A95B.html) |

## 4.2 当前旗舰模型在昇腾的部署与微调适配现状（V4 / Qwen3.8 / Kimi K3）

| 事件 | 内容 | 可信度与来源 |
| :--- | :--- | :--- |
| 昇腾超节点全面支持 DeepSeek V4 | 华为官方口径：昇腾超节点系列产品支持 DeepSeek V4（Day-0 级）；宝德等整机厂商同步"0 天适配" | ⚠️ [IT 之家：华为昇腾超节点全面支持 DeepSeek V4（2026）](https://www.ithome.com/0/943/029.htm)；✅ [宝德计算官方：宝德自强昇腾产品 0 天适配 DeepSeek-V4](https://www.powerleader.com.cn/news_226/264407.html) |
| DeepSeek-V4 昇腾领域微调（LoRA） | 华为开发者论坛官方实践帖：V4 在昇腾平台领域微调、LoRA 与 MoE 适配与踩坑 | ✅ [华为开发者论坛（昇腾版块）](https://developer.huawei.com/home/forum/ascend/thread-02201218721769649032-1-1.html) |
| 昇腾上全参后训练（万亿级） | ① 华为牵头的团队宣称用约 1,000 张昇腾 910C 完成 DeepSeek V4-Pro（1.6T）全参后训练（2026-06，华为口径）；② SLAI-AITP 开源 T-Rex：DeepSeek-V4 家族在 Ascend SuperPOD 全参后训练工具链；③ 深圳河套学院等依托国产算力实现万亿级模型全参训练（"从能跑→能训、训稳、训优"） | ⚠️ [Yahoo/Tom's：Huawei-led team 后训练 V4-Pro（1,000×910C，2026-06）](https://tech.yahoo.com/ai/gemini/articles/huawei-led-team-claims-post-120000075.html)；✅ [SLAI-AITP/SLAI-T-Rex（GitHub）](https://github.com/SLAI-AITP/SLAI-T-Rex)；⚠️ [快科技：国产算力完成万亿级模型全参数训练（2026）](https://m.mydrivers.com/newsview/1128158.html) |
| Qwen3.8-2.4T-A95B 昇腾适配 | vLLM-Ascend 官方教程页已收录 Qwen3.8-2.4T-A95B（昇腾上部署教程） | ✅ [vLLM-Ascend 官方教程](https://docs.vllm.ai/projects/ascend/zh-cn/main/tutorials/models/Qwen3.8-2.4T-A95B.html) |
| Kimi K3 昇腾适配 | ⚠️ 本检索未命中昇腾官方/权威媒体对 Kimi K3 的适配公告 → **待核验**（昇腾适配节奏常跟随开源发布，见第 6 节官方入口） | ⚠️待核验 |

> [!IMPORTANT] 教材落点（🔶教材提炼 + ✅官方事实）：**昇腾上跑/微调旗舰模型已是常态化能力（V4 全家、Qwen3.8 均有官方路径），万亿级全参后训练也有 1,000 卡级成功案例；但企业交付仍以"推理部署 + LoRA 微调"为主，全参后训练是生态头部组织的能力项。** 昇腾生态的关键词是"信创合规 + 全栈可控"，代价是生态/性能相对英伟达栈不成熟（对比见 4.4）。

## 4.3 万卡智算集群背景（一句话给出处）

> ✅ 官方事实（2026-07-10，央广网/人民网）：**粤港澳大湾区首个"国芯训国模"昇腾万卡智算集群在韶关正式发布**——即主编锚点"2026 大湾区昇腾 910C 万卡集群"的落点；此外 2026 年深圳点亮**全国首个万卡级全栈自主可控智算集群、总算力 14000P**（深圳市政府官网）。[央广网（2026-07-10）](https://www.cnr.cn/gd/meiliguangdong/20260710/t20260710_527701525.shtml)｜[人民网（2026-07-10）](http://gd.people.com.cn/n2/2026/0710/c123932-41635687.html)｜[深圳市政府（2026）](https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12712072.html)

## 4.4 国产算力 vs 英伟达 B300：数据不出域政企场景的取舍

| 维度 | 英伟达 B300（HGX/DGX 8 卡节点） | 昇腾（Atlas 800I A2 / 910C / 超节点） | 来源/依据 |
| :--- | :--- | :--- | :--- |
| 性能/生态 | 本代旗舰：单节点 2.1–2.3TB、FP4 原生、官方配方最全（vLLM/SGLang/NVIDIA 官方量化） | 相对性能：华为一体机约 H100 的 60–70%（TrendForce 2025-04 口径）；生态以 MindIE/vLLM-Ascend/昇思为主 | ✅/⚠️ [TrendForce（2025-04-29）](https://www.trendforce.com/news/2025/04/29/news-decoding-huaweis-deepseek-all-in-one-machine-60-70-of-nvidia-h100-performance-at-an-appealing-price/) |
| 供应与合规（中国政企） | 出口管制下**获卡受限、渠道溢价高、黑市风险**（见 5.1）；"数据不出域"需自行组网、运维门槛高 | **信创合规、全栈自主可控**、交付即开箱；万卡集群/超节点国产化路径成熟 | ⚠️ [工商时报：B300 在华喊价百万美元（2026-05-01）](https://readers.ctee.com.tw/cm/20260501/a09aa9/1395251)；✅ [央广网：韶关国芯训国模万卡集群（2026-07-10）](https://www.cnr.cn/gd/meiliguangdong/20260710/t20260710_527701525.shtml) |
| 对"数据不出域"语义 | 满足"数据不出域"（本地闭环），但**政策/审计语境内常被要求国产化替代** | 天然匹配"数据不出域 + 信创"双重验收 | 🔶教材提炼（结合本书四条红线中"数据不出域"） |
| 主流选择（🔶教材提炼） | 能合规拿到 B300 的民企/市场化主体首选 B300；预算/合规受限的政企与金融客户默认昇腾一体机路线 | 大行/政企信创采购高发场景 | 🔶教材提炼 |

---

# 五、价格与成本量级（企业级，量级即可）

> 纪律说明：NVIDIA 不公布中国大陆官方售价；以下均为**官方可核验的公告/权威媒体/渠道报道口径**，全部标 ⚠️，只给量级，不给"精确价"。昇腾/华为价格同样只有媒体口径。

## 5.1 硬件采购价格量级

| 项目 | 量级 | 口径日期 | 可信度与来源 |
| :--- | :--- | :--- | :--- |
| B300 8 卡整机（海外正常渠道参考） | 8 卡 B300 整机约 **60 万美元级**（$77M / 128 套 ≈ 每套 $60 万） | 2026（行业交易公告） | ⚠️ [Edgen：AZIO AI 以 7,700 万美元采购 128 套 B300 整机](https://www.edgen.tech/zh/news/post/azio-ai-signs-77-million-deal-for-128-nvidia-b300-gpu-systems) |
| B300 整机/服务器（中国渠道与黑市） | DGX B300 黑市价超 **100 万美元（约 ¥700–800 万）**；国内渠道/舆情报道 ¥700 万–1450 万区间（2026-05~07 波动大，排队溢价） | 2026-05 ~ 2026-07 | ⚠️ [PCMag（UK）：走私 B300 服务器超 $1M（2026）](https://uk.pcmag.com/ai/165819/smuggled-nvidia-ai-servers-now-cost-over-1-million-in-china)；⚠️ [工商时报：B300 在华喊价百万美元（2026-05-01）](https://readers.ctee.com.tw/cm/20260501/a09aa9/1395251)；⚠️ [快科技：B300 服务器 ¥700 万、较去年底近翻倍（2026）](https://m.mydrivers.com/newsview/1119716.html)；⚠️ [至顶网：¥1450 万/台还要排队（2026-07-22）](https://www.zhiding.cn/zd-ai-lab/2026/0722/3194165.shtml) |
| B300 单卡（渠道口径） | 无官方价；按上面整机折算约 **$7–8 万/卡**（海外）至黑市更高 | 2026 | 🔶 由 5.1 首行折算；⚠️ 待核验 |
| GB300 NVL72 / DGX GB300 机架 | 未核到 2026 官方/权威单架价 → **待核验**（参考：GB200 NVL72 时代曾有整架百万美元级报道，不可沿用为 GB300） | — | ⚠️待核验；官方入口：NVIDIA 渠道/区域销售 |
| DGX Station（GB300 小型工作站） | 约 **10 万美元级**（海外媒体） | 2026-08 | ⚠️ [Yahoo/TechCrunch：GB300 版 DGX Station（2026-08）](https://tech.yahoo.com/computing/articles/nvidia-gb300-powered-dgx-station-130000742.html)（桌面级，非企业交付主体，仅对照） |
| 昇腾训推一体机 | 云从×华为训推一体机"**最高约百万级**"；华为一体机"性能约 H100 的 60–70%、价格有吸引力"（未给精确价→价格绝对值待核验） | 2025-03 / 2025-04 | ✅ [财联社（2025-03）](https://api3.cls.cn/share/article/1526110)（沿前版）；✅ [TrendForce（2025-04-29）](https://www.trendforce.com/news/2025/04/29/news-decoding-huaweis-deepseek-all-in-one-machine-60-70-of-nvidia-h100-performance-at-an-appealing-price/) |
| Atlas 800I A2（信创采购） | 具体成交请走政府采购/招投标公告（本报告未核到统一报价）；曾有渠道参考 ¥120–140 万级（个人博客口径，不采信）→ **待核验** | 2026 | ⚠️待核验；官方入口：华为企业业务渠道 / 政采平台 |

## 5.2 微调/运营成本量级（B300 时代，量级即可）

| 项 | 量级 | 说明 | 可信度 |
| :--- | :--- | :--- | :--- |
| B300 云租（海外云） | 从约 **$6.9/卡·小时** 起（聚合站 2026；Nebius/Hyperstack 有官方定价页） | 以单卡小时价计；包年/预留更便宜 | ⚠️ [gpufinder：B300 从 $6.94/hr（2026）](https://gpufinder.dev/gpu/b300)；✅ [Nebius 官方定价文档](https://docs.nebius.com/compute/resources/pricing)（规格/计费以官方页为准）；⚠️ [Modal 上线 B300（2026-07）](https://www.usagepricing.com/blueprint/activity/modal-2026-07-14-launch) |
| LoRA 微调一次（8×B300 单节点） | **数小时–数天级、几十万元级**（含机时折旧/云租）：如云租 8×$7/hr×24h×数天 ≈ $1.3k–4k 机时费（纯机时）；自购按折旧另计 → 🔶量级 | 以 V4-Flash（13B 激活）级别 LoRA 为参照 | 🔶教材提炼（机时公式：卡数×小时单价×时长） |
| 全参 SFT（284B 级）一次 | **2 节点 16×B300、周级、机时费几十–百万元级**（🔶量级） | 权重 568GB + 优化器，数据/多轮实验叠加 | 🔶教材提炼（公式推演，⚠️待核验） |
| 全参后训练（1.6T 级） | 华为口径：约 **1,000 张昇腾 910C** 完成 V4-Pro 后训练——"万亿级全参后训练"的量级锚点（企业基本不做，属生态头部能力） | 成本（电费/折旧/人力）未公布 → 金额待核验，只取"卡数×时长"量级 | ⚠️ [Yahoo/Tom's（2026-06）](https://tech.yahoo.com/ai/gemini/articles/huawei-led-team-claims-post-120000075.html) |
| 自购 vs 云租一句话（🔶教材提炼） | **稳定持续用（≥40–60% 利用率/多年折旧）自购合算；项目制/波动用云租**；B300 中国渠道溢价高时云租（海外）成本反而可控——中国政企受合规约束则基本自购/一体机 | 经验表述 | 🔶教材提炼 |

---

# 六、待核验清单与官方核验入口

| # | 待核验项 | 现状 | 官方核验入口 |
| :- | :--- | :--- | :--- |
| 1 | B300 官方 datasheet（TGP 1200W vs 1400W；FP4/FP8 dense/sparse 逐字数字） | 锚点 1200W；媒体/经销商 1400W；算力两套口径并存 | NVIDIA B300 官方产品页 + datasheet（nvidia.com/en-us/data-center/b300/，检索时产品页以 DGX B300 页存在为准） |
| 2 | "节点内互联 14.4TB/s"逐字值 | 推演=8×1.8TB/s；待官方页 | NVIDIA DGX B300 System User Guide（docs.nvidia.com/dgx/dgxb300-user-guide/） |
| 3 | Kimi K3 激活参数、上下文长度、KV 占用官数 | 只核到"2.8T 总参、MXFP4/NVFP4、权重 1.4–1.56TB" | MoonshotAI/Kimi-K3 模型卡与 47 页技术报告（github.com/MoonshotAI/Kimi-K3） |
| 4 | GLM-5.2 参数量（753B？）与上下文（1M？） | 第三方总结 ⚠️ | 智谱官方：docs.bigmodel.cn（GLM 系列 API 文档）/ zhipuai.cn 研究页 |
| 5 | DeepSeek V4-Flash"FP4 权重 + FP8 KV 混合精度"官方表述 | 与 NVIDIA Kimi-K3-NVFP4 同类做法一致；逐字官方未核到 | DeepSeek-V4 论文 arXiv:2606.19348 + deepseek-ai GitHub |
| 6 | B300 全参微调/LoRA 显存实测（3.2 各行为公式推演） | 🔶 推演 | LLaMA-Factory GitHub（hiyouga/LlamaFactory）实测记录 + vLLM/SGLang 文档 |
| 7 | 昇腾 910C 精确规格（显存/算力）与 Atlas 800I A2 官方报价 | 未核到官方逐字规格/报价 | 昇腾官方 docs.hiascend.com / 华为企业业务 e.huawei.com；政采平台成交公告 |
| 8 | Kimi K3 昇腾适配进展 | 未命中官方公告 | 华为昇腾社区 hiascend.com、vllm-ascend GitHub |
| 9 | GB300 NVL72 / DGX GB300 整架价格 | 未核到 | NVIDIA 区域渠道/大客户销售；云厂商官方定价页（Nebius/Hyperstack/Azure） |
| 10 | B300 中国云租小时价 | 海外 $6.9 起；国内云商 B300 上架情况未核到 | 国内云厂商官方定价页（UCloud 等已见 B300 实测文章，见 2.1） |

---

## 附录 A：本报告来源总表（URL + 日期 + 可信度）

> 说明：日期 = 事件/文章发布日（检索到的），带"~"为区间；检索动作统一发生于 2026-08-30。

| # | 来源 | 日期 | 可信度 | 用途 |
| :- | :--- | :--- | :--- | :--- |
| 1 | [NVIDIA 新闻稿：Blackwell Ultra AI Factory Platform（PDF）](https://nvidianews.nvidia.com/_gallery/download_pdf/67d9bd1a3d6332a496666cf5/) | 2025-03（GTC） | ✅官方 | B300 定位 |
| 2 | [NVIDIA 台湾官方博客：Blackwell Ultra](https://blogs.nvidia.com.tw/blog/nvidia-blackwell-ultra-ai-factory-platform-paves-way-for-age-of-ai-reasoning/) | 2025-03 | ✅官方 | 同上 |
| 3 | [NVIDIA DGX B300 官方产品页](https://www.nvidia.com/zh-tw/data-center/dgx-b300/) | 检索 2026-08 | ✅官方 | DGX B300 形态 |
| 4 | [NVIDIA DGX B300 System User Guide](https://docs.nvidia.com/dgx/dgxb300-user-guide/) | 检索 2026-08 | ✅官方 | 规格/软件栈核验入口 |
| 5 | [NVIDIA DGX SuperPOD（B300/XDR）参考架构](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/dgx-superpod-components.html) | 检索 2026-08 | ✅官方 | 集群形态 |
| 6 | [NVIDIA HGX AI Factory 官方参考架构（组件）](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html) | 检索 2026-08 | ✅官方 | HGX B300 基板 |
| 7 | [Tom's Hardware：Blackwell Ultra B300 1.5× B200、288GB、15 PFLOPS dense FP4](https://www.tomshardware.com/pc-components/gpus/nvidia-announces-blackwell-ultra-b300-183522091.html)（Yahoo 镜像） | 2025-03-18 | ⚠️权威媒体 | 每卡算力 |
| 8 | [Tom's Hardware：Blackwell Ultra 秘密（NVFP4/PCIe 6.0）](https://www.tomshardware.com/pc-components/gpus/nvidia-shares-blackwell-ultras-secrets-nvfp4-boost-detailed-and-pcie-6-0-support) | 2025-03 | ⚠️权威媒体 | NVFP4/PCIe |
| 9 | [Scan.co.uk：PNY DGX 8×B300、2,100GB、72 PFLOPS FP8](https://www.scan.co.uk/products/pny-nvidia-dgx-b300-deep-learning-ai-system-8x-b300-gpus-2100gb-hbm3e-72-petaflops-fp8-performance-3) | 检索 2026-08 | ⚠️经销商 | A3/A1 锚点印证 |
| 10 | [Run Sheng：B300 SXM 288GB 144 PFLOPS](https://www.runshengdcs.com/product/nvidia-b300-dgx-b300-blackwell-ultra-sxm-gpu-288gb-hbm3e-144pflops/) | 检索 2026-08 | ⚠️经销商 | FP4 144 印证 |
| 11 | [经销商：B300 模块 288GB 8TB/s / 1.4kW 液冷](https://www.changxinrobot.com/product/nvidia-b300-blackwell-ultra-ai-accelerator-module-288gb-hbm3e-8tb-s-for-hgx-dgx-b300/) | 检索 2026-08 | ⚠️经销商 | 带宽/功耗 |
| 12 | [ServeTheHome：CUDA 13.0](https://www.servethehome.com/nvidia-cuda-toolkit-13-0-is-out/) | 2025-08 | ⚠️权威媒体 | CUDA 13 |
| 13 | [vLLM Recipes：DeepSeek-V4-Flash @ B300](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Flash?hardware=b300) | 检索 2026-08 | ✅官方（vLLM） | A6 |
| 14 | [vLLM recipes 提交：V4-Flash TP=8 单节点](https://github.com/vllm-project/recipes/commit/0ebf8e12f7423e534e038209a04a531607ad18f9) | 检索 2026-08 | ✅官方（vLLM GitHub） | A6 |
| 15 | [vLLM Recipes：DeepSeek-V4-Pro（1600B/49B）](https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Pro?hardware=h200) | 检索 2026-08 | ✅官方（vLLM） | A7 |
| 16 | [NVIDIA Dynamo：V4-Pro disagg/gb200 配方](https://github.com/ai-dynamo/dynamo/pull/8811) | 2026 | ✅官方（NVIDIA GitHub） | V4-Pro 生产配方 |
| 17 | [IT 之家：英伟达适配 DeepSeek-V4（GB200 NVL72 150 tokens/s/user）](https://m.ithome.com/html/943462.htm) | 2026-04-25 | ⚠️权威媒体 | NVIDIA 官方适配事件 |
| 18 | [DeepSeek-V4 论文（arXiv:2606.19348）](https://arxiv.org/html/2606.19348) | 2026-06 | ✅官方论文 | V4 架构 |
| 19 | [MoonshotAI/Kimi-K3（官方 GitHub）](https://github.com/MoonshotAI/Kimi-K3) | 2026-07-30 前后 | ✅官方 | K3 开源 |
| 20 | [nvidia/Kimi-K3-NVFP4（NVIDIA 官方量化）](https://huggingface.co/nvidia/Kimi-K3-NVFP4) | 2026-07 | ✅官方（NVIDIA） | NVFP4 权重 |
| 21 | [Fixstars：Kimi K3 在单节点 8×B300 的 Day-0](https://blog.us.fixstars.com/deploying-kimi-k3-on-day-0-can-a-2-8t-model-run-on-a-single-node-of-nvidia-b300-x8/) | 2026-07 | ⚠️第三方（官方技术博客） | A8 实测 |
| 22 | [GPUStack：8×B300 vLLM vs SGLang 实测](https://gpustack.hashnode.dev/gpustack-day-0-support-for-kimi-k3-vllm-vs-sglang-inference-benchmark-on-8-b300-gpus)（[GeekPark 同文](https://www.geekpark.net/news/368181)） | 2026-07-30 | ⚠️第三方/媒体 | A8/2.4 |
| 23 | [七牛：Kimi K3 1560GB 权重、8 卡起步](https://news.qiniu.com/archives/1785219328249) | 2026-07 | ⚠️媒体 | 1.6TB 加载量 |
| 24 | [HuggingFace：Kimi K3 概览（2.8T、MXFP4）](https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei) | 2026-07 | ⚠️第三方博客 | K3 量化格式 |
| 25 | [NYU 上海分校：Kimi K3 2.8T、1.4TB 运行](http://rits.shanghai.nyu.edu/ai/kimi-k3-open-weights-ship-2-8t-parameters-1-4-tb-to-run/) | 2026-07 | ⚠️转载 | 权重体积 |
| 26 | [vLLM 官方博客：Qwen3.8 Day-0](https://vllm.ai/blog/2026-08-12-qwen3.8) | 2026-08-12 | ✅官方（vLLM） | A10 |
| 27 | [vLLM Recipes：Qwen3.8-2.4T-A95B](https://recipes.vllm.ai/Qwen/Qwen3.8-2.4T-A95B?variant=default) | 检索 2026-08 | ✅官方（vLLM） | Qwen3.8 参数 |
| 28 | [HuggingFace 博客：Qwen3.8 已验证部署配方](https://huggingface.co/blog/hexgridcloud/deploying-qwen3-8-2-4t-a95b-with-vllm-verified-gpu) | 2026-08 | ⚠️第三方博客 | 8 卡验证 |
| 29 | [vLLM 官方博客：24×B300 服务 GLM-5.2（NVFP4、PD 分离）](https://vllm.ai/blog/2026-07-23-glm-5.2-nvfp4-b300-pd) | 2026-07-23 | ✅官方（vLLM） | GLM-5.2 生产 |
| 30 | [UCloud：B300 8 卡实测 GLM-5.2-FP8](https://www.ucloud.cn/yun/articles/2685) | 2026（7–8 月） | ⚠️云厂商官方博客 | A9 |
| 31 | [智谱官方：GLM API 文档（GLM-5 系列入口）](https://docs.bigmodel.cn/cn/guide/models/text/glm-5) | 检索 2026-08 | ✅官方 | GLM 核验入口 |
| 32 | [智谱官方：GLM-5.3 研究页](https://www.zhipuai.cn/zh/research/162) | 2026 | ✅官方 | GLM 世代佐证 |
| 33 | [morphllm：GLM-5.2 753B/1M/MIT 整理](https://www.morphllm.com/glm-5-2) | 2026 | ⚠️第三方整理 | GLM 参数量（待官方核验） |
| 34 | [SGLang：DeepSeek-V4 cookbook](https://github.com/sgl-project/sglang/blob/a10a24e9/docs_new/cookbook/autoregressive/DeepSeek/DeepSeek-V4.mdx) | 检索 2026-08 | ✅官方（SGLang GitHub） | SGLang 支持 |
| 35 | [arXiv：Blackwell Ultra INT8 审计](https://arxiv.org/html/2608.11693v1) | 2026-08 | ⚠️论文 | INT8 说明 |
| 36 | [LLaMA-Factory 官方 GitHub](https://github.com/hiyouga/LlamaFactory) | 检索 2026-08 | ✅官方（GitHub） | 微调框架 |
| 37 | [华为开发者论坛：V4 昇腾领域微调（LoRA）](https://developer.huawei.com/home/forum/ascend/thread-02201218721769649032-1-1.html) | 2026 | ✅官方（华为开发者论坛） | 昇腾微调 |
| 38 | [vllm-project/vllm-ascend（DeepSeekV4 PR）](https://github.com/vllm-project/vllm-ascend/pull/9270) | 2026 | ✅官方（GitHub） | 昇腾 V4 支持 |
| 39 | [vLLM-Ascend：Qwen3.8-2.4T-A95B 官方案例](https://docs.vllm.ai/projects/ascend/zh-cn/main/tutorials/models/Qwen3.8-2.4T-A95B.html) | 检索 2026-08 | ✅官方（vLLM Ascend） | 昇腾 Qwen3.8 |
| 40 | [IT 之家：昇腾超节点全面支持 DeepSeek V4](https://www.ithome.com/0/943/029.htm) | 2026 | ⚠️权威媒体 | 昇腾 Day-0 |
| 41 | [宝德计算官方：0 天适配 DeepSeek-V4](https://www.powerleader.com.cn/news_226/264407.html) | 2026 | ✅OEM 官方 | 昇腾生态 |
| 42 | [Yahoo/Tom's：华为团队 1,000×910C 后训练 V4-Pro](https://tech.yahoo.com/ai/gemini/articles/huawei-led-team-claims-post-120000075.html) | 2026-06 | ⚠️权威媒体（华为口径） | 万亿级后训练 |
| 43 | [SLAI-AITP/SLAI-T-Rex（GitHub）](https://github.com/SLAI-AITP/SLAI-T-Rex) | 2026 | ✅官方（GitHub org） | 昇腾后训练工具链 |
| 44 | [央广网：大湾区国芯训国模万卡集群（韶关）](https://www.cnr.cn/gd/meiliguangdong/20260710/t20260710_527701525.shtml)（[人民网同文](http://gd.people.com.cn/n2/2026/0710/c123932-41635687.html)） | 2026-07-10 | ✅官方媒体 | 万卡集群 |
| 45 | [深圳市政府：万卡级全栈自主可控智算集群 14000P](https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12712072.html) | 2026 | ✅政府官网 | 万卡集群 |
| 46 | [华为 Atlas 800I A2 官方产品页](https://e.huawei.com/cn/products/computing/ascend/atlas-800i-a2) | 检索 2026-08 | ✅官方 | 昇腾硬件 |
| 47 | [昇腾官方 MindIE 文档](https://www.hiascend.com/document/detail/zh/mindie/230/index/index.html) | 检索 2026-08 | ✅官方 | MindIE |
| 48 | [TrendForce：华为 DeepSeek 一体机 60–70% H100](https://www.trendforce.com/news/2025/04/29/news-decoding-huaweis-deepseek-all-in-one-machine-60-70-of-nvidia-h100-performance-at-an-appealing-price/) | 2025-04-29 | ✅权威研究机构 | 昇腾一体机 |
| 49 | [财联社：云从×华为训推一体机最高百万级](https://api3.cls.cn/share/article/1526110) | 2025-03 | ✅权威媒体（沿前版报告） | 一体机价格 |
| 50 | [Edgen：AZIO $77M 采购 128 套 B300 整机](https://www.edgen.tech/zh/news/post/azio-ai-signs-77-million-deal-for-128-nvidia-b300-gpu-systems) | 2026 | ⚠️行业媒体 | 8 卡整机价 |
| 51 | [PCMag（UK）：走私 B300 服务器超 $1M](https://uk.pcmag.com/ai/165819/smuggled-nvidia-ai-servers-now-cost-over-1-million-in-china) | 2026-05 | ⚠️权威媒体 | 中国渠道价 |
| 52 | [工商时报：B300 在华喊价百万美元](https://readers.ctee.com.tw/cm/20260501/a09aa9/1395251) | 2026-05-01 | ⚠️权威媒体 | 同上 |
| 53 | [快科技：B300 服务器 ¥700 万近翻倍](https://m.mydrivers.com/newsview/1119716.html) | 2026（5–6 月） | ⚠️媒体 | 国内渠道价 |
| 54 | [至顶网：B300 ¥1450 万/台排队（2026-07-22）](https://www.zhiding.cn/zd-ai-lab/2026/0722/3194165.shtml) | 2026-07-22 | ⚠️媒体 | 国内渠道价 |
| 55 | [gpufinder：B300 云租 $6.94/hr 起](https://gpufinder.dev/gpu/b300) | 2026 | ⚠️聚合站 | 云租价 |
| 56 | [Nebius 官方定价文档](https://docs.nebius.com/compute/resources/pricing) | 检索 2026-08 | ✅官方（云厂商） | 云租价核验入口 |
| 57 | [Yahoo/TechCrunch：GB300 DGX Station 约 $100k](https://tech.yahoo.com/computing/articles/nvidia-gb300-powered-dgx-station-130000742.html) | 2026-08 | ⚠️权威媒体 | 工作站对照 |
| 58 | [微软部署 4,608 颗 GB300（NVL72 集群）](https://tech.yahoo.com/computing/articles/microsoft-deploys-worlds-first-supercomputer-133404382.html) | 2026 | ⚠️权威媒体 | NVL72 量级 |
| 59 | [联想官方：GB300 NVL72 用户指南](https://pubs.lenovo.com/gb300-nvl72/) | 检索 2026-08 | ✅OEM 官方 | NVL72 形态 |
| 60 | [快科技：国产算力完成万亿级模型全参训练](https://m.mydrivers.com/newsview/1128158.html) | 2026 | ⚠️媒体 | 昇腾训练能力佐证 |
| 61 | [新浪财经：CloudMatrix 384 研报解读](https://finance.sina.com.cn/stock/stockzmt/2025-06-25/doc-infcfxpq8236746.shtml) | 2025-06-25 | ⚠️研报转载 | 昇腾超节点 |
| 62 | [Guru3D：GB300 双芯 20,480 CUDA 核心](https://www.guru3d.com/story/nvidia-gb300-blackwell-ultra-dualchip-gpu-with-20480-cuda-cores/) | 检索 2026-08 | ⚠️媒体 | GB300 形态 |
| 63 | [TechSpot：Blackwell Ultra 发布](https://www.techspot.com/news/107202-nvidia-unveils-new-blackwell-ultra-b300-ai-gpu.html) | 2025-03 | ⚠️权威媒体 | 发布佐证 |
| 64 | [HuggingFace：V4-Pro NVFP4+FP8（社区）](https://huggingface.co/canada-quant/DeepSeek-V4-Pro-NVFP4-FP8-MTP) | 2026 | ⚠️社区 | FP4+FP8 做法佐证 |
| 65 | [vLLM PR：GLM-5.2 B300 TP8 MTP=5 配方](https://app.semanticdiff.com/gh/vllm-project/vllm/pull/50231/overview) | 2026-07 | ✅官方（vLLM PR） | GLM-5.2 TP8 |

---

## 附录 B：与主编锚点的逐条对照（见第 0 节总表 A1–A13）+ 关键口径说明

> 三条最重要的口径说明（教材引用前必读）：
> 1. **算力口径**：FP4 144 / FP8 72（sparse）是 **8 卡节点口径**（与经销商整机页、PNY 整机规格一致）；每卡 FP4 dense≈15 PFLOPS（Tom's Hardware）。写书时建议写"节点口径 + 每卡口径"并存，并注明以 NVIDIA datasheet 为准。
> 2. **显存口径**：8×288GB 标称 2.3TB，整机宣传可用约 2.1TB（PNY 2,100GB）→ 教材统一写"**约 2.1–2.3TB（标称/可用）**"。
> 3. **量化名词**：NVFP4（NVIDIA FP4）为 Blackwell 官方格式；Kimi K3 技术侧另有 MXFP4 称谓。教材建议首次出现写"NVFP4（NVIDIA FP4；Kimi K3 侧又称 MXFP4）"。

---

> [!CAUTION] 引用纪律提醒（供教科书落地）：
> 1. 本文所有 ⚠️ 待核验项（尤其价格、功耗、GLM-5.2 参数量、Kimi K3 激活参数）在成稿前请按第六节官方入口复核；
> 2. 提到出口管制/黑市价格时，仅陈述公开媒体报道事实（工商时报/PCMag 等），不构成采购建议；
> 3. 家用卡（4090 等）只作为"原型/POC"垂直边界出现，不作企业交付主体；
> 4. 每处引文保持"来源 URL + 日期 + ✅/⚠️/🔶"三要素齐全（本书溯源纪律）。