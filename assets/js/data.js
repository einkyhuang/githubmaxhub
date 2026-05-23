// ===== DevPulse Project Data =====
// Auto-updated daily. DO NOT manually edit between markers.

// DATA_START
const PROJECTS = [
    {
        slug:"forge",
        name:"forge",
        fullName:"antoinezambelli/forge",
        githubUrl:"https://github.com/antoinezambelli/forge",
        lang:"Python",
        stars:"60.6k",
        forks:"332",
        category:"agent",
        tags:["AI Agent","自托管","工作流"],
        descShort:"本地部署的 LLM 工具调用与多步智能体工作流框架，让你在自己的服务器上构建强大的 AI 代理。",
        descFull:"Forge 是一个纯 Python 框架，专为自托管 LLM 工具调用和多步骤智能体工作流设计。它允许开发者在自己的基础设施上构建、测试和部署 AI 代理，无需依赖第三方云服务。支持主流的 LLM 后端，提供完整的工具注册、调用链编排和状态管理能力。",
        features:[
            "完全本地部署，数据不出域",
            "支持多步骤智能体工作流编排",
            "灵活的 LLM 后端适配（Ollama、OpenAI 等）",
            "内置工具注册与调用链管理",
            "轻量级设计，易于集成到现有项目"
        ]
    },
    {
        slug:"agency-agents",
        name:"agency-agents",
        fullName:"msitarzewski/agency-agents",
        githubUrl:"https://github.com/msitarzewski/agency-agents",
        lang:"多语言",
        stars:"91.2k",
        forks:"1.1k",
        category:"agent",
        tags:["AI Agent","专业化","多智能体"],
        descShort:"一站式 AI 智能体团队——从前端魔法师到 Reddit 社区达人，每个 Agent 都是具有专业个性的专家。",
        descFull:"Agency Agents 提供了一整套专业化的 AI 智能体，覆盖前端开发、社区运营、内容创作等多个领域。每个智能体都经过精心设计，拥有独特的「人格」、工作流程和明确的交付物标准。适合需要快速搭建 AI 驱动团队的企业和个人开发者。",
        features:[
            "开箱即用的专业化智能体集合",
            "每个 Agent 有明确的职责和交付标准",
            "支持前端开发、社区管理、内容创作等场景",
            "可自定义 Agent 的行为和输出格式",
            "完善的文档和使用指南"
        ]
    },
    {
        slug:"rtk",
        name:"rtk",
        fullName:"rtk-ai/rtk",
        githubUrl:"https://github.com/rtk-ai/rtk",
        lang:"Rust",
        stars:"80.6k",
        forks:"639",
        category:"tool",
        tags:["Token优化","代理","CLI工具"],
        descShort:"大幅降低 LLM Token 消耗的 CLI 代理工具，在常见开发命令上可节省 60%-90% 的 Token 用量。",
        descFull:"rtk 是一个用 Rust 编写的高性能 CLI 代理，通过智能缓存和请求优化，在常见开发场景中将 LLM 的 Token 消耗降低 60% 到 90%。单个二进制文件，零外部依赖，可在任何环境中快速部署，是 AI 编码助手的理想搭档。",
        features:[
            "Token 消耗降低 60%-90%",
            "单 Rust 二进制，零依赖",
            "智能缓存常用开发命令的响应",
            "与 Claude Code、Cursor 等工具无缝集成",
            "开源透明，可审计代码"
        ]
    },
    {
        slug:"freellmapi",
        name:"freellmapi",
        fullName:"tashfeenahmed/freellmapi",
        githubUrl:"https://github.com/tashfeenahmed/freellmapi",
        lang:"多语言",
        stars:"39.8k",
        forks:"444",
        category:"tool",
        tags:["API代理","免费层","自动故障转移"],
        descShort:"兼容 OpenAI 格式的代理，聚合约 14 家 AI 提供商的免费层 API Key，支持自动故障转移。",
        descFull:"freellmapi 是一个 OpenAI 兼容的 API 代理，自动聚合约 14 家 AI 服务提供商的免费层密钥。当某个提供商的免费额度用尽或服务不可用时，自动切换到下一个可用的提供商，确保 API 调用的连续性。适合个人学习和实验用途。",
        features:[
            "聚合约 14 家 AI 提供商的免费 API",
            "兼容 OpenAI API 格式，无缝替换",
            "自动故障转移，保证服务可用性",
            "轻量级部署，配置简单",
            "适合个人学习和原型开发"
        ]
    },
    {
        slug:"academic-research-skills",
        name:"academic-research-skills",
        fullName:"Imbad0202/academic-research-skills",
        githubUrl:"https://github.com/Imbad0202/academic-research-skills",
        lang:"多语言",
        stars:"1.3k",
        forks:"78",
        category:"research",
        tags:["学术研究","Claude Code","工作流"],
        descShort:"为 Claude Code 设计的学术研究技能套件，覆盖「研究→撰写→审阅→修改→定稿」的完整学术写作流程。",
        descFull:"Academic Research Skills 是一套面向 Claude Code 的专业技能集合，将学术研究的完整流程——从文献调研、论文撰写、同行审阅到修改定稿——封装为可复用的 AI 技能模块。帮助研究人员和学生在 AI 辅助下高效完成学术工作。",
        features:[
            "完整的研究→写作→审阅→修改→定稿流程",
            "适配 Claude Code 的技能系统",
            "支持多种学术写作格式",
            "内置文献管理和引用规范",
            "开源社区持续迭代优化"
        ]
    },
    {
        slug:"superpowers",
        name:"superpowers",
        fullName:"obra/superpowers",
        githubUrl:"https://github.com/obra/superpowers",
        lang:"多语言",
        stars:"1.2k",
        forks:"104",
        category:"agent",
        tags:["AI技能","开发方法论","智能体框架"],
        descShort:"一套行之有效的智能体技能框架与软件开发方法论，让 AI 辅助开发更加高效和可控。",
        descFull:"Superpowers 提供了一套经过实践验证的智能体技能框架和软件开发方法论。它不仅仅是代码工具，更是一套思考方式——教开发者如何与 AI 协作，如何将复杂开发任务拆解为 AI 可执行的子任务，从而大幅提升开发效率和代码质量。",
        features:[
            "成熟的智能体技能框架",
            "AI 辅助软件开发的最佳实践",
            "任务拆解与 AI 协作方法论",
            "适用于多种 AI 编码助手",
            "社区驱动的技能库生态"
        ]
    },
    {
        slug:"everything-claude-code",
        name:"everything-claude-code",
        fullName:"affaan-m/everything-claude-code",
        githubUrl:"https://github.com/affaan-m/everything-claude-code",
        lang:"JavaScript",
        stars:"180.4k",
        forks:"27.8k",
        category:"agent",
        tags:["Claude Code","性能优化","开发工具"],
        descShort:"Claude Code 的终极性能优化套件——技能、直觉、记忆、安全四大模块全面提升 AI 编码体验。",
        descFull:"Everything Claude Code 是 Claude Code 生态中最全面的性能优化系统。它包含技能管理、上下文直觉、长期记忆、安全策略和研究优先开发等模块，让 Claude Code 从一个普通的 AI 编码助手进化为强大的开发伙伴。支持 Claude Code、Codex、OpenCode、Cursor 等主流工具。",
        features:[
            "技能管理：组织和复用 AI 技能模块",
            "上下文直觉：智能理解项目结构和意图",
            "长期记忆：跨会话保持项目知识",
            "安全策略：保护敏感代码和数据",
            "研究优先开发：基于深度调研的代码生成"
        ]
    },
    {
        slug:"transformers",
        name:"transformers",
        fullName:"huggingface/transformers",
        githubUrl:"https://github.com/huggingface/transformers",
        lang:"Python",
        stars:"160.5k",
        forks:"33.2k",
        category:"model",
        tags:["深度学习","NLP","多模态"],
        descShort:"Hugging Face 的旗舰模型框架，涵盖文本、视觉、音频和多模态领域的最先进机器学习模型。",
        descFull:"Transformers 是 Hugging Face 生态的核心支柱，提供数千个预训练模型的开箱即用接口。支持 PyTorch、TensorFlow 和 JAX，覆盖自然语言处理、计算机视觉、语音识别和多模态学习等几乎所有 AI 子领域。无论训练还是推理，只需几行代码即可调用最先进的模型。",
        features:[
            "数千个预训练模型，开箱即用",
            "支持 PyTorch / TensorFlow / JAX",
            "覆盖 NLP、CV、语音、多模态全领域",
            "活跃的社区和丰富的文档",
            "与 Hugging Face Hub 无缝集成"
        ]
    },
    {
        slug:"remove-ai-watermarks",
        name:"remove-ai-watermarks",
        fullName:"wiltodelta/remove-ai-watermarks",
        githubUrl:"https://github.com/wiltodelta/remove-ai-watermarks",
        lang:"多语言",
        stars:"55.7k",
        forks:"525",
        category:"multimodal",
        tags:["图像处理","AI水印","检测工具"],
        descShort:"移除 AI 生成图片中可见（Gemini）和不可见水印（SynthID、C2PA、EXIF）的命令行工具与库。",
        descFull:"remove-ai-watermarks 是一个专业的 AI 水印检测与移除工具，支持处理 Google Gemini 生成的可见水印，以及 SynthID、C2PA、EXIF 等隐蔽的数字水印。提供命令行工具和 Python 库两种使用方式，适合需要批量处理 AI 生成图像的研究人员和内容创作者。",
        features:[
            "支持可见水印（Gemini）和隐藏水印（SynthID 等）",
            "命令行和 Python 库双模式",
            "批量处理大量图片",
            "支持 C2PA 和 EXIF 元数据清除",
            "持续跟踪最新的 AI 水印技术"
        ]
    },
    {
        slug:"langflow",
        name:"langflow",
        fullName:"langflow-ai/langflow",
        githubUrl:"https://github.com/langflow-ai/langflow",
        lang:"Python",
        stars:"147.8k",
        forks:"8.9k",
        category:"framework",
        tags:["可视化","工作流","低代码"],
        descShort:"可视化构建和部署 AI 智能体与工作流的强大工具，拖拽式操作让 AI 开发变得直观简单。",
        descFull:"Langflow 是一个基于可视化界面的 AI 工作流构建平台。通过拖拽组件和连线的方式，开发者无需编写大量代码即可构建复杂的 AI 智能体流水线。支持接入多种 LLM、向量数据库和外部工具，内置模板市场可快速启动项目，适合从原型验证到生产部署的全流程。",
        features:[
            "可视化拖拽构建 AI 工作流",
            "丰富的组件市场（LLM、向量库、工具等）",
            "一键部署到生产环境",
            "支持自定义组件开发",
            "活跃的中文社区支持"
        ]
    },
    {
        slug:"dify",
        name:"dify",
        fullName:"langgenius/dify",
        githubUrl:"https://github.com/langgenius/dify",
        lang:"TypeScript",
        stars:"140.5k",
        forks:"22.0k",
        category:"framework",
        tags:["生产级","AI平台","工作流"],
        descShort:"生产就绪的 AI 应用开发平台，从原型到上线一站式搞定智能体工作流的构建与运营。",
        descFull:"Dify 是新一代 AI 应用开发平台，提供从 Prompt 编排、RAG 管道到 Agent 框架的完整工具链。支持可视化编排工作流、对接多种 LLM 模型、内置运营监控面板，帮助企业快速将 AI 能力落地为可运营的应用产品。已被众多企业用于客服、知识库、数据分析等场景。",
        features:[
            "可视化 Prompt 编排和调试",
            "内置 RAG 管道（向量检索+重排序）",
            "多 LLM 模型统一接入",
            "运营监控面板和日志分析",
            "企业级权限管理和团队协作"
        ]
    },
    {
        slug:"hermes-agent",
        name:"hermes-agent",
        fullName:"NousResearch/hermes-agent",
        githubUrl:"https://github.com/NousResearch/hermes-agent",
        lang:"Python",
        stars:"137.3k",
        forks:"21.1k",
        category:"agent",
        tags:["自适应","个性化","智能体"],
        descShort:"「与你一同成长的智能体」——来自 Nous Research 的自适应个性化 AI Agent 框架。",
        descFull:"Hermes Agent 是 Nous Research 推出的自适应 AI 智能体框架，核心理念是「智能体随着用户的使用不断成长」。它能够学习用户的偏好、习惯和工作模式，逐步进化为高度个性化的 AI 伙伴。框架设计灵活，支持多种 LLM 后端和工具集成。",
        features:[
            "自适应学习用户偏好和习惯",
            "长期记忆与上下文保持",
            "多 LLM 后端灵活切换",
            "丰富的工具调用和插件系统",
            "Nous Research 持续更新和维护"
        ]
    },
    {
        slug:"autogpt",
        name:"AutoGPT",
        fullName:"Significant-Gravitas/AutoGPT",
        githubUrl:"https://github.com/Significant-Gravitas/AutoGPT",
        lang:"Python",
        stars:"184.2k",
        forks:"46.2k",
        category:"agent",
        tags:["自主Agent","自动化","GPT"],
        descShort:"最具影响力的自主 AI Agent 项目——让 AI 能够自主规划、执行和迭代完成复杂任务。",
        descFull:"AutoGPT 是自主 AI Agent 领域的开创性项目，它将 GPT 模型的推理能力与工具调用、记忆管理和任务规划相结合，使 AI 能够自主拆解复杂目标、逐步执行并自我纠错。虽然早期版本存在稳定性问题，但其理念深刻影响了整个 AI Agent 生态的发展方向。",
        features:[
            "自主任务规划和拆解",
            "工具调用和互联网访问",
            "长期和短期记忆管理",
            "自我纠错和迭代优化",
            "丰富的插件和扩展生态"
        ]
    },
    {
        slug:"ollama",
        name:"ollama",
        fullName:"ollama/ollama",
        githubUrl:"https://github.com/ollama/ollama",
        lang:"Go",
        stars:"171.3k",
        forks:"16.1k",
        category:"model",
        tags:["本地LLM","模型运行","推理引擎"],
        descShort:"一键在本地运行 Kimi-K2.5、DeepSeek、Qwen、Gemma 等大模型，让 AI 推理触手可及。",
        descFull:"Ollama 是目前最流行的本地 LLM 运行工具，让任何人都能在自己的电脑上轻松运行各种开源大语言模型。支持 macOS、Linux 和 Windows，提供简洁的 CLI 和 REST API，内置模型管理和量化优化，是实现本地 AI 私有化的首选方案。",
        features:[
            "一键下载和运行主流开源模型",
            "支持 macOS / Linux / Windows 全平台",
            "内置模型量化和显存优化",
            "REST API 兼容 OpenAI 格式",
            "活跃的模型库和社区生态"
        ]
    },
    {
        slug:"open-webui",
        name:"open-webui",
        fullName:"open-webui/open-webui",
        githubUrl:"https://github.com/open-webui/open-webui",
        lang:"Python",
        stars:"135.9k",
        forks:"19.4k",
        category:"tool",
        tags:["聊天界面","自托管","ChatGPT替代"],
        descShort:"自托管的 ChatGPT 替代方案——友好的 AI 聊天界面，支持 Ollama 和 OpenAI API。",
        descFull:"Open WebUI 是一个功能丰富的自托管 AI 聊天界面，提供类似 ChatGPT 的交互体验，但完全运行在你自己的服务器上。支持 Ollama 和 OpenAI 兼容的 API，内置对话历史管理、Markdown 渲染、代码高亮等功能，是搭建私有 AI 助手的最佳前端方案。",
        features:[
            "类 ChatGPT 的友好交互界面",
            "支持 Ollama 和 OpenAI API",
            "对话历史管理与搜索",
            "Markdown 和代码高亮渲染",
            "多用户支持和权限管理"
        ]
    },
    {
        slug:"langchain",
        name:"langchain",
        fullName:"langchain-ai/langchain",
        githubUrl:"https://github.com/langchain-ai/langchain",
        lang:"Python",
        stars:"136.0k",
        forks:"22.5k",
        category:"framework",
        tags:["LLM框架","编排","Agent"],
        descShort:"AI 应用开发的工业标准框架，用可组合的组件构建生产级 LLM 应用和智能体。",
        descFull:"LangChain 是构建 LLM 应用的事实标准框架，提供从 Prompt 管理、链式调用、Agent 编排到 RAG 管道的全套工具。它将 LLM 应用开发中的通用模式抽象为可组合的组件，大幅降低了 AI 应用的开发复杂度。同时支持 Python 和 TypeScript/JavaScript 生态。",
        features:[
            "完整的 LLM 应用开发工具链",
            "Prompt 模板和链式调用管理",
            "内置 RAG 管道和向量存储集成",
            "强大的 Agent 框架和工具系统",
            "Python + TypeScript 双语言支持"
        ]
    },
    {
        slug:"prompts-chat",
        name:"prompts.chat",
        fullName:"f/prompts.chat",
        githubUrl:"https://github.com/f/prompts.chat",
        lang:"HTML",
        stars:"162.1k",
        forks:"21.1k",
        category:"tool",
        tags:["提示词","社区","ChatGPT"],
        descShort:"全球最大的 ChatGPT 提示词社区，发现、分享和收藏高质量 Prompt，支持自托管部署。",
        descFull:"Prompts.chat（原 Awesome ChatGPT Prompts）是全球最活跃的 AI 提示词社区，收录了数千条经过验证的高质量 ChatGPT 提示词，覆盖写作、编程、教育、商业等各个领域。支持自托管部署，保证完全的数据隐私。",
        features:[
            "数千条高质量社区贡献提示词",
            "分类浏览和搜索功能",
            "支持自托管，数据完全私密",
            "定期更新最新的提示词技巧",
            "开放 API 和社区贡献机制"
        ]
    },
    {
        slug:"anthropics-skills",
        name:"skills",
        fullName:"anthropics/skills",
        githubUrl:"https://github.com/anthropics/skills",
        lang:"Python",
        stars:"129.7k",
        forks:"15.3k",
        category:"agent",
        tags:["AI技能","Claude","可复用"],
        descShort:"Anthropic 官方 Agent Skills 仓库——可复用、可组合的 AI Agent 能力模块集合。",
        descFull:"Anthropic Skills 是 Anthropic 官方维护的 Agent 技能开源仓库，提供了一系列可复用的 AI 技能模块，涵盖代码审查、文档生成、数据分析、设计辅助等常见开发场景。每个技能都是独立的功能单元，可以自由组合使用，是构建 AI 辅助开发工作流的基石。",
        features:[
            "Anthropic 官方维护和审核",
            "丰富的高质量技能模块",
            "可自由组合和扩展",
            "完善的文档和使用示例",
            "社区贡献和反馈机制"
        ]
    },
    {
        slug:"codegraph",
        name:"codegraph",
        fullName:"colbymchenry/codegraph",
        githubUrl:"https://github.com/colbymchenry/codegraph",
        lang:"多语言",
        stars:"1.7k",
        forks:"90",
        category:"tool",
        tags:["代码图谱","Claude Code","本地化"],
        descShort:"为 Claude Code 构建的预索引代码知识图谱——更少 Token、更少工具调用、完全本地运行。",
        descFull:"CodeGraph 为 Claude Code 提供了预构建的代码知识图谱能力。通过对项目代码进行预索引，它让 AI 编码助手无需反复扫描文件就能理解代码结构，大幅减少 Token 消耗和工具调用次数。完全本地运行，保障代码隐私，是大型项目 AI 辅助开发的利器。",
        features:[
            "预索引项目代码结构",
            "大幅降低 Token 使用量",
            "减少重复的工具调用",
            "100% 本地运行，代码不出域",
            "支持大型项目高效分析"
        ]
    }
];
// DATA_END

const UPDATE_DATE = "2026-05-23";

const CATEGORIES = {
    all:{label:"全部",slug:"all"},
    agent:{label:"AI Agent",slug:"agent"},
    framework:{label:"框架",slug:"framework"},
    tool:{label:"工具",slug:"tool"},
    model:{label:"模型",slug:"model"},
    research:{label:"研究",slug:"research"},
    multimodal:{label:"多模态",slug:"multimodal"}
};

const TRENDS = [
    {icon:"🤖",title:"AI Agent 生态爆发",desc:"forge、agency-agents、hermes-agent 等项目标志着自托管智能体框架进入成熟期，Agent 即服务（AaaS）成为新范式。"},
    {icon:"⚡",title:"成本优化成刚需",desc:"rtk 可降低 60-90% Token 消耗，freellmapi 聚合 14 家免费 API——开发者对 LLM 成本敏感度持续上升。"},
    {icon:"🔬",title:"垂直领域深度应用",desc:"学术研究、图像水印检测等专业场景 AI 工具快速涌现，AI 从通用走向专精。"},
    {icon:"🌏",title:"中国开源力量崛起",desc:"Dify、LangFlow、Open-WebUI 等国产项目在 GitHub 上表现亮眼，AI 平台化趋势明显。"},
    {icon:"🦀",title:"Rust 进入 AI 基建",desc:"高性能 AI 基础设施工具开始采用 Rust 开发，预示着从 Python 向系统语言的迁移趋势。"},
    {icon:"🧩",title:"Skills 生态成熟",desc:"Anthropic Skills、Superpowers 等项目推动 AI 技能标准化，可复用 Agent 能力模块成为主流。"}
];