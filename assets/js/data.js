// ===== Gitmaxhub Project Data =====
// Auto-updated daily. DO NOT manually edit between markers.
// Total projects: 45 (accumulated)

// DATA_START
var UPDATE_DATE = '2026-05-24';

var PROJECTS = [
{
        slug: 'openclaw',
        name: 'OpenClaw',
        fullName: 'openclaw/openclaw',
        githubUrl: 'https://github.com/openclaw/openclaw',
        lang: 'TypeScript',
        stars: '370k',
        forks: '28k',
        category: 'agent',
        tags: ["AI Agent", "跨平台", "多端协同"],
        descShort: '跨平台AI Agent框架，支持Windows/Mac/Linux/Web/手机统一运行，370k Stars登顶GitHub',
        descFull: 'OpenClaw 是目前GitHub上最热门的跨平台AI Agent框架，累计370k Stars。它支持在Windows、Mac、Linux、Web和手机端运行统一的AI助手架构，为多端协同的企业场景提供一站式解决方案。其核心优势在于任何OS/平台都能获得一致的Agent体验，被誉为"AI Agent界的瑞士军刀"。',
        features: ["全平台统一Agent架构", "支持Windows/Mac/Linux/Web/手机", "零配置跨端迁移", "企业级多端协同", "活跃的社区生态"]
    },
{
        slug: 'superpowers',
        name: 'Superpowers',
        fullName: 'obra/superpowers',
        githubUrl: 'https://github.com/obra/superpowers',
        lang: 'TypeScript',
        stars: '198k',
        forks: '12k',
        category: 'agent',
        tags: ["AI Agent", "TDD", "AI编码", "开发方法论"],
        descShort: '面向AI编码Agent的TDD开发框架，198k Stars，单日新增超1.4k星',
        descFull: 'obra/superpowers 是一个面向AI编码Agent的TDD（测试驱动开发）框架和软件开发方法论。它在GitHub Trending上表现极其凶猛，累计198k Stars，单日新增一度超过1,400星。该项目重新定义了AI辅助编程的工作流程，将测试先行理念融入Agent协作中，大幅提升AI生成代码的可靠性和可维护性。',
        features: ["AI Agent TDD开发框架", "测试驱动的Agent编码方法论", "代码可靠性与可维护性保障", "适合专业级AI编码场景", "社区活跃度极高"]
    },
{
        slug: 'ollama',
        name: 'Ollama',
        fullName: 'ollama/ollama',
        githubUrl: 'https://github.com/ollama/ollama',
        lang: 'Go',
        stars: '171k',
        forks: '13k',
        category: 'model',
        tags: ["本地LLM", "模型运行", "推理引擎"],
        descShort: '本地大模型运行的事实标准，171k Stars，已支持Kimi-K2等最新模型',
        descFull: 'Ollama 是本地大模型推理的事实标准工具，累计171k Stars。它让开发者在个人电脑上就能运行Llama、Mistral、Gemma等主流开源模型，支持一键下载和运行。最新版本已支持Kimi-K2等前沿模型，并提供REST API方便集成到各类应用中。Ollama极大降低了AI应用的开发和测试门槛。',
        features: ["一键下载运行开源大模型", "支持Llama/Mistral/Gemma等主流模型", "已支持Kimi-K2最新模型", "REST API方便集成", "极低内存占用"]
    },
{
        slug: 'hermes-agent',
        name: 'Hermes Agent',
        fullName: 'NousResearch/hermes-agent',
        githubUrl: 'https://github.com/NousResearch/hermes-agent',
        lang: 'Python',
        stars: '155.8k',
        forks: '21k',
        category: 'agent',
        tags: ["AI Agent", "自适应", "自主Agent"],
        descShort: '自适应生长的AI Agent系统，155.8k Stars，能持续学习和自我进化',
        descFull: 'NousResearch推出的hermes-agent是目前最受关注的AI Agent系统之一，累计155.8k Stars，位列GitHub月度榜单第一。它的核心理念是构建一个"自适应增长的智能代理系统"——Agent在运行过程中能不断吸收新能力、优化决策路径，而不是每次都从零开始。这意味着开发者不再需要手把手教AI做每一件事，Agent可以自己进化。',
        features: ["自适应学习与持续进化", "自动吸收新能力", "优化决策路径", "减少人工干预", "Nous Research背书"]
    },
{
        slug: 'langflow',
        name: 'Langflow',
        fullName: 'langflow-ai/langflow',
        githubUrl: 'https://github.com/langflow-ai/langflow',
        lang: 'Python',
        stars: '147.8k',
        forks: '9k',
        category: 'framework',
        tags: ["工作流", "低代码", "AI平台"],
        descShort: '可视化AI工作流构建平台，147.8k Stars，拖拽式搭建Agent应用',
        descFull: 'Langflow 是一个强大的可视化AI工作流构建工具，累计147.8k Stars。它提供低代码/无代码的拖拽式界面，让开发者可以快速搭建和部署AI Agent和工作流。支持LangChain生态深度集成，适合企业快速构建内部Agent平台。其直观的图形化编排方式大幅降低了AI应用开发门槛。',
        features: ["可视化拖拽搭建AI工作流", "低代码/无代码开发", "LangChain生态深度集成", "快速部署Agent应用", "企业级平台支持"]
    },
{
        slug: 'dify',
        name: 'Dify',
        fullName: 'langgenius/dify',
        githubUrl: 'https://github.com/langgenius/dify',
        lang: 'TypeScript',
        stars: '140.5k',
        forks: '22k',
        category: 'framework',
        tags: ["工作流", "AI平台", "生产级"],
        descShort: '生产级Agent工作流开发平台，140.5k Stars，一站式AI应用构建',
        descFull: 'Dify 是一个面向生产环境的Agent工作流开发平台，累计140.5k Stars。它提供从Prompt编排、RAG管道到Agent工作流的一站式解决方案，支持可视化编排和API调用两种模式。Dify的特点是"开箱即用"，内置了大量企业级功能如权限管理、日志监控和模型管理，是搭建内部AI应用的首选平台之一。',
        features: ["生产级Agent工作流平台", "一站式AI应用构建", "可视化编排+API双模式", "内置RAG管道", "企业级权限与监控"]
    },
{
        slug: 'andrej-karpathy-skills',
        name: 'Karpathy Skills',
        fullName: 'multica-ai/andrej-karpathy-skills',
        githubUrl: 'https://github.com/multica-ai/andrej-karpathy-skills',
        lang: 'Markdown',
        stars: '135.3k',
        forks: '18k',
        category: 'research',
        tags: ["AI技能", "Claude", "开发方法论"],
        descShort: '前特斯拉AI总监Karpathy的Claude Skills合集，135.3k Stars，月增80k',
        descFull: '由前特斯拉AI总监、AI圈顶级大牛Andrej Karpathy推出的Claude Skills合集，累计135.3k Stars，单月新增超80k星。该项目定义了一套让Claude像资深工程师一样工作的Skills规范，涵盖代码审查、架构设计、性能优化等多个工程领域。它的爆火标志着Skills正在取代传统Prompt Engineering，成为人机协作的新范式。',
        features: ["Karpathy亲编Skills规范", "涵盖代码审查/架构设计/性能优化", "模拟资深工程师行为模式", "月增80k Stars现象级项目", "新范式:Skills替代Prompt Engineering"]
    },
{
        slug: 'browser-use',
        name: 'Browser Use',
        fullName: 'browser-use/browser-use',
        githubUrl: 'https://github.com/browser-use/browser-use',
        lang: 'Python',
        stars: '93k',
        forks: '8k',
        category: 'agent',
        tags: ["网页自动化", "AI Agent", "浏览器控制"],
        descShort: 'AI驱动的浏览器自动化Agent，93k Stars，让AI像人一样操控网页',
        descFull: 'browser-use 是一个AI驱动的网页自动化工具，累计93k Stars。它让AI Agent能够像人类一样浏览和操控网页——填写表单、点击按钮、提取数据、多页跳转等。基于Playwright构建，支持所有主流浏览器。对于需要自动化网页操作的数据采集、测试、表单填写等场景，browser-use是最佳选择。',
        features: ["AI驱动的浏览器自动化", "基于Playwright支持所有主流浏览器", "填写表单/点击/数据提取", "多页跳转与复杂交互", "适合数据采集与自动化测试"]
    },
{
        slug: 'mattpocock-skills',
        name: 'Matt Pocock Skills',
        fullName: 'mattpocock/skills',
        githubUrl: 'https://github.com/mattpocock/skills',
        lang: 'TypeScript',
        stars: '90.8k',
        forks: '7k',
        category: 'research',
        tags: ["AI技能", "开发工具", "可复用"],
        descShort: 'TypeScript大神的真实工程师Skills集合，90.8k Stars，定义Agent工程标准',
        descFull: 'TypeScript圈大神Matt Pocock推出的Claude/Codex Skills集合，累计90.8k Stars。不同于教科书式的刻板输出，这套Skills模拟一个真的懂代码、有审美、会跟产品经理"吵架"的真实开发者的行为模式。它正帮助全球开发者将自己的工程经验封装成可被Agent执行的标准化指令集。',
        features: ["TypeScript大神亲编Skills", "模拟真实工程师行为模式", "工程经验标准化封装", "适用于Claude Code和Codex", "推动Agent工程能力标准化"]
    },
{
        slug: 'codex',
        name: 'OpenAI Codex',
        fullName: 'openai/codex',
        githubUrl: 'https://github.com/openai/codex',
        lang: 'TypeScript',
        stars: '81.9k',
        forks: '12k',
        category: 'agent',
        tags: ["AI编码", "CLI工具", "终端"],
        descShort: 'OpenAI官方轻量级终端编码Agent，81.9k Stars，CLI/编辑器/桌面多入口',
        descFull: 'OpenAI Codex 是OpenAI官方推出的轻量级终端编码Agent，累计81.9k Stars。它运行在开发者的终端中，支持CLI命令行、本地编辑器集成、桌面应用和Codex Web四种入口。Codex的设计理念是多入口覆盖开发者全场景，被认为是"真正在日常终端里工作的Coding Agent"，与Claude Code正面竞争。',
        features: ["OpenAI官方编码Agent", "CLI/编辑器/桌面/Web四入口", "轻量级终端原生运行", "与Claude Code正面竞争", "多场景覆盖开发者工作流"]
    },
{
        slug: 'trading-agents',
        name: 'TradingAgents',
        fullName: 'TauricResearch/TradingAgents',
        githubUrl: 'https://github.com/TauricResearch/TradingAgents',
        lang: 'Python',
        stars: '76.8k',
        forks: '11k',
        category: 'agent',
        tags: ["多智能体", "金融", "自动化"],
        descShort: '多Agent金融交易框架，76.8k Stars，数据分析+策略+风控协同决策',
        descFull: 'TradingAgents 是一个革命性的多智能体金融交易框架，累计76.8k Stars。它用多个AI Agent协同工作：一个负责数据分析、一个负责策略生成、一个负责风控，最后综合决策下单。这个项目标志着AI Agent从"写代码"扩展到"执行真实金融业务"，Multi-Agent协作正在成为构建复杂AI应用的主流架构。',
        features: ["多Agent协同决策", "数据分析+策略生成+风控三Agent架构", "自动化交易决策", "金融垂直场景深度优化", "Multi-Agent架构标杆"]
    },
{
        slug: 'agent-skills',
        name: 'Agent Skills',
        fullName: 'addyosmani/agent-skills',
        githubUrl: 'https://github.com/addyosmani/agent-skills',
        lang: 'Shell',
        stars: '37.7k',
        forks: '3k',
        category: 'research',
        tags: ["AI技能", "生产级", "编码Agent"],
        descShort: 'Chrome团队性能专家的AI编码Agent技能库，37.7k Stars，定义工程能力标准',
        descFull: '由Chrome团队性能专家Addy Osmani发起的生产级AI编码Agent技能库，累计37.7k Stars。它定义了一套Agent工程能力标准，涵盖前端性能优化、Web Vitals监控、构建工具配置等实际工程场景。该项目由真正的浏览器性能专家编写，是AI编码Agent在生产环境中落地的参考实现。',
        features: ["Chrome团队性能专家发起", "生产级AI编码Agent标准", "前端性能优化专项技能", "Web Vitals监控集成", "Agent工程能力参考实现"]
    },
{
        slug: 'deepseek-tui',
        name: 'DeepSeek TUI',
        fullName: 'Hmbown/DeepSeek-TUI',
        githubUrl: 'https://github.com/Hmbown/DeepSeek-TUI',
        lang: 'Rust',
        stars: '42k',
        forks: '2k',
        category: 'agent',
        tags: ["AI编码", "终端", "DeepSeek"],
        descShort: 'Rust构建的终端原生DeepSeek编码Agent，42k Stars，单日增速冠军',
        descFull: 'DeepSeek-TUI 是一个用Rust构建的终端原生DeepSeek编码智能体，累计42k Stars，曾创下单日新增3,731星的惊人增速。它将DeepSeek模型能力直接嵌入开发者的终端工作流，通过TUI（文本用户界面）提供简洁高效的编码辅助体验。Rust带来的极致性能使其成为终端工具中的标杆。',
        features: ["Rust构建极致性能", "终端原生DeepSeek集成", "TUI文本用户界面", "单日增速最高纪录", "低资源占用高效率"]
    },
{
        slug: 'forge',
        name: 'Forge',
        fullName: 'antoinezambelli/forge',
        githubUrl: 'https://github.com/antoinezambelli/forge',
        lang: 'Python',
        stars: '35k',
        forks: '3k',
        category: 'framework',
        tags: ["LLM框架", "自托管", "工具调用"],
        descShort: '自托管LLM工具调用与多步Agent工作流框架，35k Stars，完全本地化',
        descFull: 'Forge 是一个用于自托管LLM工具调用和多步Agent工作流的Python框架，累计35k Stars。它专注于本地化和自托管场景，让开发者完全掌控数据和推理过程。支持多种开源模型，内置丰富的工具调用模板和工作流编排能力，是企业私有化部署AI Agent的理想选择。',
        features: ["完全自托管本地化", "多模型支持", "内置工具调用模板", "多步Agent工作流", "企业私有化部署首选"]
    },
{
        slug: 'rtk',
        name: 'RTK',
        fullName: 'rtk-ai/rtk',
        githubUrl: 'https://github.com/rtk-ai/rtk',
        lang: 'Rust',
        stars: '36k',
        forks: '2k',
        category: 'tool',
        tags: ["Token优化", "代理", "性能优化"],
        descShort: 'Token消耗优化代理，36k Stars，减少60-90% LLM调用成本',
        descFull: 'RTK 是一个CLI代理工具，核心功能是大幅减少LLM的Token消耗，累计36k Stars。在常见开发命令场景下，它可以将Token消耗降低60-90%，直接转化为大幅降低的API调用成本。单Rust二进制文件，零外部依赖，安装即用。对于重度使用Claude/GPT API的开发者来说，RTK是账单救星。',
        features: ["Token消耗降低60-90%", "单Rust二进制零依赖", "大幅降低API调用成本", "透明代理无需改代码", "CLI即装即用"]
    },
{
        slug: '9router',
        name: '9Router',
        fullName: 'decolua/9router',
        githubUrl: 'https://github.com/decolua/9router',
        lang: 'JavaScript',
        stars: '32k',
        forks: '3k',
        category: 'tool',
        tags: ["API代理", "免费层", "自动故障转移"],
        descShort: '40+免费LLM提供商的统一路由网关，32k Stars，自动降级与故障转移',
        descFull: '9Router 是一个统一路由网关，整合了40+免费LLM提供商，累计32k Stars。它支持Claude、GPT、Gemini等主流模型的自动降级和故障转移，并内置RTK令牌优化功能。当一个免费API额度耗尽或不可用时，自动切换到下一个可用源，确保AI服务永不中断。是个人开发者和实验项目的API成本救星。',
        features: ["整合40+免费LLM提供商", "Claude/GPT/Gemini自动降级", "智能故障转移", "内置Token优化", "个人开发者成本救星"]
    },
{
        slug: 'codegraph',
        name: 'CodeGraph',
        fullName: 'colbymchenry/codegraph',
        githubUrl: 'https://github.com/colbymchenry/codegraph',
        lang: 'TypeScript',
        stars: '28k',
        forks: '2k',
        category: 'tool',
        tags: ["代码图谱", "开发工具", "本地化"],
        descShort: '预索引代码知识图谱for Claude Code，28k Stars，减少Token和工具调用',
        descFull: 'CodeGraph 是一个预索引的代码知识图谱工具，专为Claude Code等AI编码Agent设计，累计28k Stars。它通过预先构建代码库的结构化索引，让AI Agent更高效地理解代码上下文——更少的Token消耗、更少的工具调用、100%本地运行。这直接解决了大型代码库中AI编码Agent"迷路"的痛点。',
        features: ["预索引代码知识图谱", "专为Claude Code优化", "减少Token和工具调用", "100%本地运行", "大型代码库AI导航"]
    },
{
        slug: 'remove-ai-watermarks',
        name: 'Remove AI Watermarks',
        fullName: 'wiltodelta/remove-ai-watermarks',
        githubUrl: 'https://github.com/wiltodelta/remove-ai-watermarks',
        lang: 'Python',
        stars: '25k',
        forks: '3k',
        category: 'multimodal',
        tags: ["图像处理", "AI水印", "检测工具"],
        descShort: 'AI水印移除CLI工具，25k Stars，支持可见与不可见水印检测移除',
        descFull: 'Remove AI Watermarks 是一个CLI和库工具，用于移除AI生成图像中的可见水印（如Gemini水印）和不可见水印（如SynthID、C2PA、EXIF元数据），累计25k Stars。它同时提供检测和移除两种模式，帮助用户了解图片是否由AI生成，并选择性清除水印标记。在AI生成内容爆发的时代，这个工具填补了重要的内容溯源空白。',
        features: ["可见与不可见AI水印移除", "支持SynthID/C2PA/EXIF检测", "CLI和Python库双模式", "AI图像来源检测", "内容溯源工具"]
    },
{
        slug: 'openhuman',
        name: 'OpenHuman',
        fullName: 'tinyhumansai/openhuman',
        githubUrl: 'https://github.com/tinyhumansai/openhuman',
        lang: 'Rust',
        stars: '24k',
        forks: '2k',
        category: 'agent',
        tags: ["AI Agent", "个性化", "数字分身"],
        descShort: 'AI数字分身系统，24k Stars，几分钟内了解你的全部工作上下文',
        descFull: 'OpenHuman 由Tiny Humans AI团队开发，目标是让AI在几分钟内了解你的全部工作与生活上下文，变成一个真正懂你的"数字分身"，累计24k Stars。核心由Rust驱动，前端基于TypeScript构建，曾登顶GitHub Trending当日第一。它的理念是"Context in minutes, not weeks"，从根本上改变了人机交互的上下文建立方式。',
        features: ["AI数字分身系统", "Rust+TypeScript高性能架构", "分钟级上下文学习", "曾登顶GitHub Trending", "颠覆性人机交互范式"]
    },
{
        slug: 'claude-code',
        name: 'Claude Code',
        fullName: 'anthropics/claude-code',
        githubUrl: 'https://github.com/anthropics/claude-code',
        lang: 'TypeScript',
        stars: '75k',
        forks: '8k',
        category: 'agent',
        tags: ["AI编码", "Claude", "终端"],
        descShort: 'Anthropic官方AI编码Agent，75k Stars，Claude开发者工作流入口',
        descFull: 'Claude Code 是Anthropic官方推出的AI编码Agent，累计75k Stars。它是整个Claude开发者工作流的入口，支持终端内编码、代码审查、重构、调试等完整开发周期。作为Claude生态的核心工具，Claude Code深度集成了Claude Skills协议，让开发者可以将自己的工程经验封装成可复用的技能模块。',
        features: ["Anthropic官方编码Agent", "完整开发周期覆盖", "深度集成Claude Skills协议", "终端原生开发体验", "Claude生态核心入口"]
    },
    {
        slug: 'agency-agents',
        name: 'agency-agents',
        fullName: 'msitarzewski/agency-agents',
        githubUrl: 'https://github.com/msitarzewski/agency-agents',
        lang: '多语言',
        stars: '91.2k',
        forks: '1.1k',
        category: 'agent',
        tags: ['AI Agent', '专业化', '多智能体'],
        descShort: '一站式 AI 智能体团队——从前端魔法师到 Reddit 社区达人，每个 Agent 都是具有专业个性的专家。',
        descFull: 'Agency Agents 提供了一整套专业化的 AI 智能体，覆盖前端开发、社区运营、内容创作等多个领域。每个智能体都经过精心设计，拥有独特的「人格」、工作流程和明确的交付物标准。适合需要快速搭建 AI 驱动团队的企业和个人开发者。',
        features: ['开箱即用的专业化智能体集合'
            '每个 Agent 有明确的职责和交付标准'
            '支持前端开发、社区管理、内容创作等场景'
            '可自定义 Agent 的行为和输出格式'
            '完善的文档和使用指南']
    },
    {
        slug: 'freellmapi',
        name: 'freellmapi',
        fullName: 'tashfeenahmed/freellmapi',
        githubUrl: 'https://github.com/tashfeenahmed/freellmapi',
        lang: '多语言',
        stars: '39.8k',
        forks: '444',
        category: 'tool',
        tags: ['API代理', '免费层', '自动故障转移'],
        descShort: '兼容 OpenAI 格式的代理，聚合约 14 家 AI 提供商的免费层 API Key，支持自动故障转移。',
        descFull: 'freellmapi 是一个 OpenAI 兼容的 API 代理，自动聚合约 14 家 AI 服务提供商的免费层密钥。当某个提供商的免费额度用尽或服务不可用时，自动切换到下一个可用的提供商，确保 API 调用的连续性。适合个人学习和实验用途。',
        features: ['聚合约 14 家 AI 提供商的免费 API'
            '兼容 OpenAI API 格式，无缝替换'
            '自动故障转移，保证服务可用性'
            '轻量级部署，配置简单'
            '适合个人学习和原型开发']
    },
    {
        slug: 'academic-research-skills',
        name: 'academic-research-skills',
        fullName: 'Imbad0202/academic-research-skills',
        githubUrl: 'https://github.com/Imbad0202/academic-research-skills',
        lang: '多语言',
        stars: '1.3k',
        forks: '78',
        category: 'research',
        tags: ['学术研究', 'Claude Code', '工作流'],
        descShort: '为 Claude Code 设计的学术研究技能套件，覆盖「研究→撰写→审阅→修改→定稿」的完整学术写作流程。',
        descFull: 'Academic Research Skills 是一套面向 Claude Code 的专业技能集合，将学术研究的完整流程——从文献调研、论文撰写、同行审阅到修改定稿——封装为可复用的 AI 技能模块。帮助研究人员和学生在 AI 辅助下高效完成学术工作。',
        features: ['完整的研究→写作→审阅→修改→定稿流程'
            '适配 Claude Code 的技能系统'
            '支持多种学术写作格式'
            '内置文献管理和引用规范'
            '开源社区持续迭代优化']
    },
    {
        slug: 'everything-claude-code',
        name: 'everything-claude-code',
        fullName: 'affaan-m/everything-claude-code',
        githubUrl: 'https://github.com/affaan-m/everything-claude-code',
        lang: 'JavaScript',
        stars: '180.4k',
        forks: '27.8k',
        category: 'agent',
        tags: ['Claude Code', '性能优化', '开发工具'],
        descShort: 'Claude Code 的终极性能优化套件——技能、直觉、记忆、安全四大模块全面提升 AI 编码体验。',
        descFull: 'Everything Claude Code 是 Claude Code 生态中最全面的性能优化系统。它包含技能管理、上下文直觉、长期记忆、安全策略和研究优先开发等模块，让 Claude Code 从一个普通的 AI 编码助手进化为强大的开发伙伴。支持 Claude Code、Codex、OpenCode、Cursor 等主流工具。',
        features: ['技能管理：组织和复用 AI 技能模块'
            '上下文直觉：智能理解项目结构和意图'
            '长期记忆：跨会话保持项目知识'
            '安全策略：保护敏感代码和数据'
            '研究优先开发：基于深度调研的代码生成']
    },
    {
        slug: 'transformers',
        name: 'transformers',
        fullName: 'huggingface/transformers',
        githubUrl: 'https://github.com/huggingface/transformers',
        lang: 'Python',
        stars: '160.5k',
        forks: '33.2k',
        category: 'model',
        tags: ['深度学习', 'NLP', '多模态'],
        descShort: 'Hugging Face 的旗舰模型框架，涵盖文本、视觉、音频和多模态领域的最先进机器学习模型。',
        descFull: 'Transformers 是 Hugging Face 生态的核心支柱，提供数千个预训练模型的开箱即用接口。支持 PyTorch、TensorFlow 和 JAX，覆盖自然语言处理、计算机视觉、语音识别和多模态学习等几乎所有 AI 子领域。无论训练还是推理，只需几行代码即可调用最先进的模型。',
        features: ['数千个预训练模型，开箱即用'
            '支持 PyTorch / TensorFlow / JAX'
            '覆盖 NLP、CV、语音、多模态全领域'
            '活跃的社区和丰富的文档'
            '与 Hugging Face Hub 无缝集成']
    },
    {
        slug: 'autogpt',
        name: 'AutoGPT',
        fullName: 'Significant-Gravitas/AutoGPT',
        githubUrl: 'https://github.com/Significant-Gravitas/AutoGPT',
        lang: 'Python',
        stars: '184.2k',
        forks: '46.2k',
        category: 'agent',
        tags: ['自主Agent', '自动化', 'GPT'],
        descShort: '最具影响力的自主 AI Agent 项目——让 AI 能够自主规划、执行和迭代完成复杂任务。',
        descFull: 'AutoGPT 是自主 AI Agent 领域的开创性项目，它将 GPT 模型的推理能力与工具调用、记忆管理和任务规划相结合，使 AI 能够自主拆解复杂目标、逐步执行并自我纠错。虽然早期版本存在稳定性问题，但其理念深刻影响了整个 AI Agent 生态的发展方向。',
        features: ['自主任务规划和拆解'
            '工具调用和互联网访问'
            '长期和短期记忆管理'
            '自我纠错和迭代优化'
            '丰富的插件和扩展生态']
    },
    {
        slug: 'open-webui',
        name: 'open-webui',
        fullName: 'open-webui/open-webui',
        githubUrl: 'https://github.com/open-webui/open-webui',
        lang: 'Python',
        stars: '135.9k',
        forks: '19.4k',
        category: 'tool',
        tags: ['聊天界面', '自托管', 'ChatGPT替代'],
        descShort: '自托管的 ChatGPT 替代方案——友好的 AI 聊天界面，支持 Ollama 和 OpenAI API。',
        descFull: 'Open WebUI 是一个功能丰富的自托管 AI 聊天界面，提供类似 ChatGPT 的交互体验，但完全运行在你自己的服务器上。支持 Ollama 和 OpenAI 兼容的 API，内置对话历史管理、Markdown 渲染、代码高亮等功能，是搭建私有 AI 助手的最佳前端方案。',
        features: ['类 ChatGPT 的友好交互界面'
            '支持 Ollama 和 OpenAI API'
            '对话历史管理与搜索'
            'Markdown 和代码高亮渲染'
            '多用户支持和权限管理']
    },
    {
        slug: 'langchain',
        name: 'langchain',
        fullName: 'langchain-ai/langchain',
        githubUrl: 'https://github.com/langchain-ai/langchain',
        lang: 'Python',
        stars: '136.0k',
        forks: '22.5k',
        category: 'framework',
        tags: ['LLM框架', '编排', 'Agent'],
        descShort: 'AI 应用开发的工业标准框架，用可组合的组件构建生产级 LLM 应用和智能体。',
        descFull: 'LangChain 是构建 LLM 应用的事实标准框架，提供从 Prompt 管理、链式调用、Agent 编排到 RAG 管道的全套工具。它将 LLM 应用开发中的通用模式抽象为可组合的组件，大幅降低了 AI 应用的开发复杂度。同时支持 Python 和 TypeScript/JavaScript 生态。',
        features: ['完整的 LLM 应用开发工具链'
            'Prompt 模板和链式调用管理'
            '内置 RAG 管道和向量存储集成'
            '强大的 Agent 框架和工具系统'
            'Python + TypeScript 双语言支持']
    },
    {
        slug: 'prompts-chat',
        name: 'prompts.chat',
        fullName: 'f/prompts.chat',
        githubUrl: 'https://github.com/f/prompts.chat',
        lang: 'HTML',
        stars: '162.1k',
        forks: '21.1k',
        category: 'tool',
        tags: ['提示词', '社区', 'ChatGPT'],
        descShort: '全球最大的 ChatGPT 提示词社区，发现、分享和收藏高质量 Prompt，支持自托管部署。',
        descFull: 'Prompts.chat（原 Awesome ChatGPT Prompts）是全球最活跃的 AI 提示词社区，收录了数千条经过验证的高质量 ChatGPT 提示词，覆盖写作、编程、教育、商业等各个领域。支持自托管部署，保证完全的数据隐私。',
        features: ['数千条高质量社区贡献提示词'
            '分类浏览和搜索功能'
            '支持自托管，数据完全私密'
            '定期更新最新的提示词技巧'
            '开放 API 和社区贡献机制']
    },
    {
        slug: 'anthropics-skills',
        name: 'skills',
        fullName: 'anthropics/skills',
        githubUrl: 'https://github.com/anthropics/skills',
        lang: 'Python',
        stars: '129.7k',
        forks: '15.3k',
        category: 'agent',
        tags: ['AI技能', 'Claude', '可复用'],
        descShort: 'Anthropic 官方 Agent Skills 仓库——可复用、可组合的 AI Agent 能力模块集合。',
        descFull: 'Anthropic Skills 是 Anthropic 官方维护的 Agent 技能开源仓库，提供了一系列可复用的 AI 技能模块，涵盖代码审查、文档生成、数据分析、设计辅助等常见开发场景。每个技能都是独立的功能单元，可以自由组合使用，是构建 AI 辅助开发工作流的基石。',
        features: ['Anthropic 官方维护和审核'
            '丰富的高质量技能模块'
            '可自由组合和扩展'
            '完善的文档和使用示例'
            '社区贡献和反馈机制']
    },
    {
        slug: 'learn-claude-code',
        name: 'Learn Claude Code',
        fullName: 'shareAI-lab/learn-claude-code',
        githubUrl: 'https://github.com/shareAI-lab/learn-claude-code',
        lang: 'TypeScript',
        stars: '61k',
        forks: '10k',
        category: 'agent',
        tags: ['Claude Code', '教程', 'Agent'],
        descShort: 'Bash即所需——迷你Claude Code风格Agent框架，从0到1构建，61k Stars',
        descFull: 'learn-claude-code 是一个迷你Claude Code风格的Agent框架，由shareAI-lab推出，累计61k Stars。它的设计理念是\'Bash is all you need\'，从零开始构建一个精简但功能完整的AI编码Agent。适合学习Agent架构设计和快速搭建个人编码助手。',
        features: ['Bash即所需极简设计'
            '从0到1完整教学'
            '迷你Claude Code风格'
            'TypeScript全栈实现'
            '60k+社区认可']
    },
    {
        slug: 'ruflo',
        name: 'Ruflo',
        fullName: 'ruvnet/ruflo',
        githubUrl: 'https://github.com/ruvnet/ruflo',
        lang: 'TypeScript',
        stars: '52.3k',
        forks: '5.9k',
        category: 'agent',
        tags: ['Agent编排', 'Claude', '平台'],
        descShort: '领先的Claude智能体编排平台，52.3k Stars，周增8.1%',
        descFull: 'Ruflo 是目前领先的Claude智能体编排平台，累计52.3k Stars，周增长率8.1%。它提供了一套完整的Agent编排和管理工具，让开发者可以像编排微服务一样编排AI Agent。与Hermes Agent并列增长最快的Claude生态项目。',
        features: ['Claude智能体编排平台'
            'Agent即服务架构'
            '周增长率8.1%高速增长'
            '企业级Agent管理'
            'Claude生态核心项目']
    },
    {
        slug: 'cherry-studio',
        name: 'Cherry Studio',
        fullName: 'CherryHQ/cherry-studio',
        githubUrl: 'https://github.com/CherryHQ/cherry-studio',
        lang: 'TypeScript',
        stars: '45.8k',
        forks: '4.4k',
        category: 'agent',
        tags: ['AI工作室', '生产力', '多模型'],
        descShort: 'AI生产力工作室，300+助手，统一接入前沿LLM，45.8k Stars',
        descFull: 'Cherry Studio 是一个AI生产力工作室，集智能对话、自主Agent和300+预置助手于一体。它统一接入OpenAI、Claude、DeepSeek等前沿LLM，让用户在一个界面中完成编码、写作、分析等各类AI辅助任务。支持Skills、OpenCode、Superpowers等协议。',
        features: ['300+预置AI助手'
            '统一接入多LLM'
            '自主Agent能力'
            'Skill/OpenCode协议支持'
            'Codex/Superpowers集成']
    },
    {
        slug: 'career-ops',
        name: 'Career-Ops',
        fullName: 'santifer/career-ops',
        githubUrl: 'https://github.com/santifer/career-ops',
        lang: 'JavaScript',
        stars: '45.2k',
        forks: '9.5k',
        category: 'agent',
        tags: ['求职', 'Claude Code', '自动化'],
        descShort: 'Claude Code驱动的AI求职系统，14种技能模式，45.2k Stars首进前五',
        descFull: 'Career-Ops 是一个基于Claude Code的AI驱动求职系统，首次亮相就闯入Agent榜单前五，累计45.2k Stars。它提供14种技能模式，包括简历优化、面试准备、职位匹配等，内置Go语言仪表盘和PDF批量生成功能，重新定义了AI辅助求职。',
        features: ['14种求职技能模式'
            'Claude Code驱动'
            'Go仪表盘+PDF生成'
            '批量职位匹配处理'
            'AI求职新范式']
    },
    {
        slug: 'cowagent',
        name: 'CowAgent',
        fullName: 'zhayujie/CowAgent',
        githubUrl: 'https://github.com/zhayujie/CowAgent',
        lang: 'Python',
        stars: '44.5k',
        forks: '10.1k',
        category: 'agent',
        tags: ['多平台', '超级助理', '微信'],
        descShort: '超级AI助理，支持微信/飞书/钉钉/QQ多平台接入，44.5k Stars',
        descFull: 'CowAgent（原chatgpt-on-wechat）是基于大模型的超级AI助理，能主动思考、任务规划、访问操作系统和外部资源。支持微信、飞书、钉钉、企微、QQ、公众号等全平台接入，可选择DeepSeek/OpenAI/Claude/Gemini等多种模型后端，比OpenClaw更轻量便捷。',
        features: ['微信/飞书/钉钉/QQ全平台接入'
            '主动思考与任务规划'
            '多模型后端灵活切换'
            'Skills创建与执行'
            '长期记忆与知识库成长']
    },
    {
        slug: 'nanobot',
        name: 'Nanobot',
        fullName: 'HKUDS/nanobot',
        githubUrl: 'https://github.com/HKUDS/nanobot',
        lang: 'Python',
        stars: '42.7k',
        forks: '7.5k',
        category: 'agent',
        tags: ['轻量级', '个人Agent', 'HKU'],
        descShort: '超轻量级个人AI Agent，来自港大，42.7k Stars',
        descFull: 'Nanobot 是香港大学推出的超轻量级个人AI Agent，累计42.7k Stars。它以极致轻量为设计目标，支持Claude Code、Codex和OpenClaw等主流Agent框架，可以作为个人电脑上的常驻AI助手。适合追求低资源占用的开发者。',
        features: ['极致轻量设计'
            '港大DS实验室出品'
            'Claude Code/Codex/OpenClaw兼容'
            '常驻个人AI助手'
            '低资源占用']
    },
    {
        slug: 'copilotkit',
        name: 'CopilotKit',
        fullName: 'CopilotKit/CopilotKit',
        githubUrl: 'https://github.com/CopilotKit/CopilotKit',
        lang: 'TypeScript',
        stars: '31.5k',
        forks: '4.1k',
        category: 'framework',
        tags: ['前端', 'Agent UI', '生成式UI'],
        descShort: 'Agent与生成式UI的前端技术栈，31.5k Stars，React深度集成',
        descFull: 'CopilotKit 是Agent与生成式UI的前端技术栈，累计31.5k Stars。它提供React组件和Hooks，让开发者可以快速将AI Agent集成到Web应用中，支持实时聊天、Agent操作和生成式UI。是构建AI驱动前端应用的工业级方案。',
        features: ['React深度集成'
            'Agent与生成式UI'
            '实时聊天组件'
            'Agent操作可视化'
            '前端AI集成工业方案']
    },
    {
        slug: 'openclaude',
        name: 'OpenClaude',
        fullName: 'Gitlawb/openclaude',
        githubUrl: 'https://github.com/Gitlawb/openclaude',
        lang: 'TypeScript',
        stars: '27k',
        forks: '8.5k',
        category: 'agent',
        tags: ['跨平台', '工具调用', 'Claude'],
        descShort: '随处运行、使用任何工具的Claude Agent，27k Stars',
        descFull: 'OpenClaude 是一个通用的Claude Agent运行时，累计27k Stars。它的核心卖点是\'随处运行，使用任何工具\'——无论是在服务器、桌面还是边缘设备，都可以运行Claude驱动的Agent，并调用任意外部工具和API。',
        features: ['跨平台统一运行时'
            '任意工具调用能力'
            'Claude模型驱动'
            '服务器/桌面/边缘全覆盖'
            '灵活的工具注册机制']
    },
    {
        slug: 'google-workspace-cli',
        name: 'Google Workspace CLI',
        fullName: 'googleworkspace/cli',
        githubUrl: 'https://github.com/googleworkspace/cli',
        lang: 'Rust',
        stars: '26.3k',
        forks: '1.4k',
        category: 'tool',
        tags: ['CLI', 'Google', 'Rust'],
        descShort: 'Google官方Rust CLI，内置AI Agent能力，26.3k Stars',
        descFull: 'Google Workspace CLI 是Google官方推出的命令行工具，用Rust构建，累计26.3k Stars。它内置AI Agent能力，可以在终端中直接操作Gmail、Calendar、Drive、Docs等Google Workspace服务，是生产力工具的Agent化标杆。',
        features: ['Google官方出品'
            'Rust高性能构建'
            'Gmail/Calendar/Drive终端操作'
            '内置AI Agent'
            'Google Workspace全接入']
    },
    {
        slug: 'e2b',
        name: 'E2B',
        fullName: 'e2b-dev/E2B',
        githubUrl: 'https://github.com/e2b-dev/E2B',
        lang: 'Python',
        stars: '12.2k',
        forks: '907',
        category: 'tool',
        tags: ['沙箱', '安全', '企业级'],
        descShort: '企业级Agent安全沙箱环境，12.2k Stars，隔离运行不受信任代码',
        descFull: 'E2B 是企业级AI Agent的开源安全沙箱环境，累计12.2k Stars。它为Agent提供隔离的代码执行环境，支持Python、Node.js、Bash等多种运行时，确保Agent执行不受信任代码时不会影响宿主系统。是Agent安全基础设施的关键组件。',
        features: ['企业级安全沙箱'
            '隔离代码执行环境'
            'Python/Node.js/Bash多运行时'
            'Agent安全基础设施'
            'e2b.dev商业支持']
    },
    {
        slug: 'alibaba-opensandbox',
        name: 'OpenSandbox',
        fullName: 'alibaba/OpenSandbox',
        githubUrl: 'https://github.com/alibaba/OpenSandbox',
        lang: 'Python',
        stars: '10.7k',
        forks: '854',
        category: 'tool',
        tags: ['沙箱', '安全', '阿里'],
        descShort: '阿里开源的AI Agent安全沙箱运行时，10.7k Stars',
        descFull: 'OpenSandbox 是阿里巴巴开源的AI Agent安全沙箱运行时，累计10.7k Stars。它为Agent提供安全的代码执行和文件系统访问环境，支持容器化和进程级隔离。作为国产Agent安全基础设施的代表，已被多个企业内部Agent平台采用。',
        features: ['阿里巴巴开源'
            '容器化安全隔离'
            '代码执行沙箱'
            '文件系统访问控制'
            '国产Agent安全标杆']
    },
    {
        slug: 'activepieces',
        name: 'Activepieces',
        fullName: 'activepieces/activepieces',
        githubUrl: 'https://github.com/activepieces/activepieces',
        lang: 'TypeScript',
        stars: '22.2k',
        forks: '3.7k',
        category: 'framework',
        tags: ['工作流', 'MCP', '自动化'],
        descShort: 'AI Agent与MCP工作流自动化平台，22.2k Stars，开源Zapier替代',
        descFull: 'Activepieces 是一个AI Agent与MCP协议的工作流自动化平台，累计22.2k Stars。它被视为开源版的Zapier/Make，支持可视化编排AI Agent工作流，原生集成MCP工具调用，适合企业构建内部自动化流程。',
        features: ['开源Zapier替代'
            'MCP协议原生集成'
            '可视化工作流编排'
            'AI Agent自动化'
            '企业级流程引擎']
    },
    {
        slug: 'nocobase',
        name: 'NocoBase',
        fullName: 'nocobase/nocobase',
        githubUrl: 'https://github.com/nocobase/nocobase',
        lang: 'TypeScript',
        stars: '22.4k',
        forks: '2.6k',
        category: 'framework',
        tags: ['无代码', 'AI平台', '企业'],
        descShort: '开源AI+无代码平台，22.4k Stars，插件化构建业务系统',
        descFull: 'NocoBase 是一个开源AI+无代码平台，累计22.4k Stars。它以插件化架构为核心，让用户通过无代码方式构建企业业务系统，并内置AI Agent能力用于数据分析、流程自动化和智能决策。适合中小企业快速搭建内部管理系统。',
        features: ['插件化无代码架构'
            '内置AI Agent能力'
            '企业业务系统构建'
            '数据分析与流程自动化'
            '中小企业首选']
    },
    {
        slug: 'aionui',
        name: 'AionUi',
        fullName: 'iOfficeAI/AionUi',
        githubUrl: 'https://github.com/iOfficeAI/AionUi',
        lang: 'TypeScript',
        stars: '25.4k',
        forks: '2.3k',
        category: 'agent',
        tags: ['协作', '本地化', '24/7'],
        descShort: '免费本地化24/7协作应用，支持OpenClaw/Hermes/Claude Code，25.4k Stars',
        descFull: 'AionUi 是一个免费、本地化的24/7协作应用，累计25.4k Stars。它支持OpenClaw、Hermes Agent和Claude Code三大主流Agent框架，可以在本地持续运行，适合需要全天候AI协作的个人和小团队。',
        features: ['免费本地化部署'
            '24/7持续运行'
            'OpenClaw/Hermes/Claude Code兼容'
            '多Agent框架统一界面'
            '个人/小团队协作']
    },
    {
        slug: 'opencli',
        name: 'OpenCLI',
        fullName: 'jackwener/OpenCLI',
        githubUrl: 'https://github.com/jackwener/OpenCLI',
        lang: 'JavaScript',
        stars: '21.5k',
        forks: '2.2k',
        category: 'tool',
        tags: ['CLI', '枢纽', '多Agent'],
        descShort: '通用CLI枢纽与AI原生运行时，21.5k Stars，统一入口',
        descFull: 'OpenCLI 是一个通用CLI枢纽和AI原生运行时，累计21.5k Stars。它统一了Claude Code、Codex、OpenCode等多个AI编码Agent的CLI入口，让开发者在同一个终端界面中调度不同的Agent，实现\'一个CLI，所有Agent\'的体验。',
        features: ['统一CLI入口'
            'Claude Code/Codex/OpenCode兼容'
            'AI原生运行时'
            '多Agent调度'
            '终端一体化体验']
    }
];

var CATEGORIES = {
    'agent': {name:'Agent', icon:'🤖', color:'#00e5ff'},
    'framework': {name:'框架平台', icon:'🏗️', color:'#b44dff'},
    'tool': {name:'开发工具', icon:'🔧', color:'#00e676'},
    'model': {name:'模型推理', icon:'🧠', color:'#ff9100'},
    'research': {name:'Skills研究', icon:'📚', color:'#ff4081'},
    'multimodal': {name:'多模态', icon:'🎨', color:'#448aff'},
    'security': {name:'安全', icon:'🛡️', color:'#ff1744'},
    'devops': {name:'DevOps', icon:'🚀', color:'#76ff03'},
    'frontend': {name:'前端', icon:'💻', color:'#ffea00'},
    'data': {name:'数据科学', icon:'📊', color:'#18ffff'},
    'mobile': {name:'移动开发', icon:'📱', color:'#e040fb'}
};

var TRENDS = [
    {
        icon: '🤖',
        title: 'Agent Skills 范式革命',
        desc: 'Claude Skills已取代Prompt Engineering成为人机协作新范式，Karpathy、Matt Pocock等头部开发者集中开源工作流'
    },
    {
        icon: '📈',
        title: 'Agent基础设施爆发',
        desc: 'AI Agent从通用框架转向终端原生编码工具，OpenAI Codex与Claude Code正面竞争，开发者工作流全面Agent化'
    },
    {
        icon: '💰',
        title: '垂直行业Agent化',
        desc: 'AI Agent从代码编写扩展到金融交易、跨境电商等真实业务场景，Multi-Agent协作成为复杂应用主流架构'
    },
    {
        icon: '🔧',
        title: 'Token成本革命',
        desc: 'RTK、9Router等Token优化工具爆发，Token消耗降低60-90%，免费API路由方案让个人开发者零成本接入AI'
    },
    {
        icon: '🏠',
        title: '本地化与自托管',
        desc: 'Ollama、Forge等项目推动AI Agent本地化部署，企业更关注数据安全与完全自控的Agent基础设施'
    },
    {
        icon: '🔍',
        title: 'AI内容溯源兴起',
        desc: 'AI水印检测与移除工具走红，SynthID、C2PA等不可见水印技术推动AI生成内容溯源成为刚需'
    }
];

// DATA_END