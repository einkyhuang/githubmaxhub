// ===== Gitmaxhub Tool Navigation Data =====
// Auto-updated daily. DO NOT manually edit between markers.
// Total tools: 86

// TOOLS_DATA_START
var TOOLS_UPDATE_DATE = '2026-05-28';

var FEATURED_IDS = ['chatgpt', 'claude', 'cursor', 'vscode', 'figma', 'notion', 'raycast', 'perplexity'];

var TOOLS = [
    // ========== AI 工具 ==========
    { id:'chatgpt', name:'ChatGPT', url:'https://chatgpt.com/', desc:'OpenAI 旗舰对话 AI，写作/编程/分析全能助手，GPT-5 系列模型驱动', category:'ai', tags:['对话AI','GPT','全能'], icon:'🧠', featured:true, platform:['web','ios','android'] },
    { id:'openclaw', name:'OpenClaw', url:'https://github.com/openclaw/openclaw', desc:'跨平台AI Agent框架，320k Stars登顶GitHub，支持Windows/Mac/Linux/Web/手机统一运行', category:'ai', tags:["AI Agent", "\u8de8\u5e73\u53f0", "\u591a\u7aef\u534f\u540c"], icon:'🤖', featured:true, platform:["web", "mac", "windows", "linux", "ios", "android"] },
    { id:'superpowers', name:'Superpowers', url:'https://github.com/obra/superpowers', desc:'面向AI编码Agent的TDD开发框架，215k Stars，单日新增超1.5k星', category:'ai', tags:["AI Agent", "TDD", "AI\u7f16\u7801", "\u5f00\u53d1\u65b9\u6cd5\u8bba"], icon:'🧪', featured:true, platform:["web"] },
    { id:'hermes-agent', name:'Hermes Agent', url:'https://github.com/NousResearch/hermes-agent', desc:'自适应生长的AI Agent系统，172k Stars，周增长率9.5%，持续学习自我进化', category:'ai', tags:["AI Agent", "\u81ea\u9002\u5e94", "\u81ea\u4e3bAgent"], icon:'🧠', featured:true, platform:["web"] },
    { id:'karpathy-skills', name:'Karpathy Skills', url:'https://github.com/multica-ai/andrej-karpathy-skills', desc:'前特斯拉AI总监Karpathy的Claude Skills合集，155k Stars，月增85k', category:'ai', tags:["AI\u6280\u80fd", "Claude", "\u5f00\u53d1\u65b9\u6cd5\u8bba"], icon:'🌟', featured:true, platform:["web"] },
    { id:'anthropic-skills', name:'Anthropic Skills', url:'https://github.com/anthropics/skills', desc:'Anthropic官方Agent Skills仓库，145k Stars，可复用的AI Agent能力模块集合', category:'ai', tags:["AI\u6280\u80fd", "Claude", "\u53ef\u590d\u7528"], icon:'📦', featured:true, platform:["web"] },
    { id:'open-design', name:'Open Design', url:'https://github.com/nexu-io/open-design', desc:'开源Claude Design替代品，46k Stars（月增38k），75套设计系统，支持多格式导出', category:'ai', tags:["AI\u8bbe\u8ba1", "\u539f\u578b", "\u8bbe\u8ba1\u7cfb\u7edf"], icon:'🎨', featured:true, platform:["web"] },
    { id:'trading-agents', name:'TradingAgents', url:'https://github.com/TauricResearch/TradingAgents', desc:'多Agent金融交易框架，92k Stars，数据分析+策略+风控协同决策', category:'ai', tags:["\u591a\u667a\u80fd\u4f53", "\u91d1\u878d", "\u81ea\u52a8\u5316"], icon:'📈', featured:false, platform:["web"] },
    { id:'ui-tars-desktop', name:'UI-TARS Desktop', url:'https://github.com/bytedance/UI-TARS-desktop', desc:'字节跳动多模态AI Agent桌面端，41k Stars，跨应用GUI自动化', category:'ai', tags:["\u591a\u6a21\u6001Agent", "\u5b57\u8282\u8df3\u52a8", "\u684c\u9762\u7aef"], icon:'🖱️', featured:false, platform:["mac", "windows", "linux"] },
    { id:'free-claude-code', name:'Free Claude Code', url:'https://github.com/Alishahryar1/free-claude-code', desc:'免费版Claude Code集成方案，31k Stars，终端+VSCode+Discord三入口', category:'ai', tags:["Claude Code", "\u514d\u8d39", "VSCode"], icon:'🆓', featured:false, platform:["web", "mac", "windows", "linux"] },
    { id:'vllm', name:'vLLM', url:'https://github.com/vllm-project/vllm', desc:'高吞吐量LLM推理引擎，75k Stars，PagedAttention技术，生产级模型服务', category:'ai', tags:["\u63a8\u7406\u5f15\u64ce", "\u9ad8\u541e\u5410", "\u751f\u4ea7\u7ea7"], icon:'⚡', featured:false, platform:["web"] },
    { id:'cc-switch', name:'CC Switch', url:'https://github.com/farion1231/cc-switch', desc:'跨平台桌面AI Agent管理助手，76k Stars，集成主流Agent统一管理', category:'ai', tags:["\u684c\u9762\u7aef", "Agent\u7ba1\u7406", "\u8de8\u5e73\u53f0"], icon:'🖥️', featured:false, platform:["mac", "windows", "linux"] },
    { id:'openhands', name:'OpenHands', url:'https://github.com/All-Hands-AI/OpenHands', desc:'AI驱动全栈编码Agent，67k Stars，独立完成需求到代码全流程开发', category:'ai', tags:["AI\u7f16\u7801", "\u81ea\u52a8\u5316", "\u5168\u6808"], icon:'🤲', featured:false, platform:["web"] },
    { id:'12-factor-agents', name:'12-Factor Agents', url:'https://github.com/humanlayer/12-factor-agents', desc:'生产级LLM软件构建原则，26k Stars，12要素Agent方法论', category:'ai', tags:["\u751f\u4ea7\u7ea7", "\u6700\u4f73\u5b9e\u8df5", "\u8f6f\u4ef6\u5de5\u7a0b"], icon:'🏗️', featured:false, platform:["web"] },
    { id:'deep-research', name:'Deep Research', url:'https://github.com/jina-ai/deep-research', desc:'Jina AI深度研究Agent，38k Stars，本地加密+多搜索引擎', category:'ai', tags:["\u7814\u7a76", "\u672c\u5730\u5316", "RAG"], icon:'🔬', featured:false, platform:["web"] },
    { id:'hyperframes', name:'HyperFrames', url:'https://github.com/heygen-com/hyperframes', desc:'HTML直接渲染为视频引擎，24k Stars，代码即视频，短视频创作新范式', category:'ai', tags:["\u89c6\u9891\u751f\u6210", "HTML", "HeyGen"], icon:'🎬', featured:false, platform:["web"] },
    { id:'pixelle-video', name:'Pixelle Video', url:'https://github.com/AIDC-AI/Pixelle-Video', desc:'阿里AIDC全自动短视频生成引擎，22k Stars，AI剧本+画面+配音一站式', category:'ai', tags:["\u89c6\u9891\u751f\u6210", "\u963f\u91cc", "\u81ea\u52a8\u5316"], icon:'📹', featured:false, platform:["web"] },
    { id:'goose', name:'Goose', url:'https://github.com/block/goose', desc:'Block开源AI编码Agent，26k Stars，终端原生体验，多模型后端支持', category:'ai', tags:["AI\u7f16\u7801", "Block", "\u7ec8\u7aef"], icon:'🪿', featured:false, platform:["mac", "windows", "linux"] },
    { id:'servicedock', name:'ServiceDock', url:'https://github.com/servicedock/servicedock', desc:'一站式Agentic编程后端，35k Stars，数据库+认证+存储+AI网关集成', category:'ai', tags:["\u540e\u7aef", "\u57fa\u7840\u8bbe\u65bd", "\u5168\u6808AI"], icon:'🔌', featured:false, platform:["web"] },
    { id:'agents-best-practices', name:'Agents Best Practices', url:'https://github.com/DenisSergeevitch/agents-best-practices', desc:'AI编码Agent运行时框架设计规范，41k Stars，标准化Agent行为准则', category:'ai', tags:["Agent\u5de5\u7a0b", "\u6700\u4f73\u5b9e\u8df5", "\u8fd0\u884c\u65f6"], icon:'📋', featured:false, platform:["web"] },
    { id:'codegraph', name:'CodeGraph', url:'https://github.com/colbymchenry/codegraph', desc:'预索引代码知识图谱，21k Stars，100%本地运行，减少Token消耗', category:'ai', tags:["\u77e5\u8bc6\u56fe\u8c31", "\u672c\u5730", "Token\u4f18\u5316"], icon:'🕸️', featured:false, platform:["web"] },
    { id:'claude-context', name:'Claude Context', url:'https://github.com/zilliztech/claude-context', desc:'Claude Code MCP代码搜索工具，9k Stars，全代码库上下文，语义搜索', category:'ai', tags:["MCP", "\u4ee3\u7801\u641c\u7d22", "Claude Code"], icon:'🔗', featured:false, platform:["web"] },
    { id:'hello-agents', name:'Hello Agents', url:'https://github.com/datawhalechina/hello-agents', desc:'从零构建AI智能体实践教程，51k Stars，Datawhale社区，中文AI Agent教育标杆', category:'ai', tags:["\u6559\u7a0b", "\u5b9e\u8df5", "Datawhale"], icon:'📖', featured:false, platform:["web"] },
    { id:'ai-engineering-from-scratch', name:'AI Engineering From Scratch', url:'https://github.com/rohitg00/ai-engineering-from-scratch', desc:'从零开始AI工程项目教程，16k Stars，学习+构建+交付完整闭环', category:'ai', tags:["\u6559\u7a0b", "AI\u5de5\u7a0b", "\u5b9e\u8df5"], icon:'🚀', featured:false, platform:["web"] },
    { id:'vimax', name:'ViMax', url:'https://github.com/HKUDS/ViMax', desc:'Agentic视频生成框架，9k Stars，导演+编剧+制片+生成一体化', category:'ai', tags:["\u89c6\u9891\u751f\u6210", "Agent", "\u6e2f\u5927"], icon:'🎥', featured:false, platform:["web"] },
    { id:'memvid', name:'Memvid', url:'https://github.com/memvid/memvid', desc:'AI Agent单文件内存层，14k Stars，替代复杂RAG流程，Rust高性能', category:'ai', tags:["\u5185\u5b58\u5c42", "RAG", "Rust"], icon:'💾', featured:false, platform:["web"] },
    { id:'aitoearn', name:'AiToEarn', url:'https://github.com/yikart/AiToEarn', desc:'AI驱动内容变现平台，18k Stars，创作者经济自动化，内容生产/分发/变现', category:'ai', tags:["\u5185\u5bb9\u53d8\u73b0", "\u521b\u4f5c\u8005", "AI\u9a71\u52a8"], icon:'💰', featured:false, platform:["web"] }
    { id:'claude', name:'Claude', url:'https://claude.ai/', desc:'Anthropic 出品，超长上下文 200K、深度思考、安全可靠', category:'ai', tags:['对话AI','Claude','深度思考'], icon:'🎯', featured:true, platform:['web','ios','android'] },
    { id:'perplexity', name:'Perplexity', url:'https://www.perplexity.ai/', desc:'AI 搜索引擎，实时联网+引用来源，学术研究和事实核查利器', category:'ai', tags:['搜索','研究','联网'], icon:'🔍', featured:true, platform:['web','ios','android'] },
    { id:'github-copilot', name:'GitHub Copilot', url:'https://github.com/features/copilot', desc:'GitHub 官方 AI 编程助手，IDE 内实时代码建议与生成，支持多模型切换', category:'ai', tags:['AI编程','IDE插件','代码补全'], icon:'👨‍💻', platform:['mac','windows','linux'] },
    { id:'midjourney', name:'Midjourney', url:'https://www.midjourney.com/', desc:'AI 图像生成标杆，V7 模型艺术表现力顶尖，设计师创作利器', category:'ai', tags:['图像生成','设计','艺术'], icon:'🎨', platform:['web'] },
    { id:'notion-ai', name:'Notion AI', url:'https://www.notion.so/product/ai', desc:'Notion 内置 AI，智能写作、翻译、总结、数据库分析一体化', category:'ai', tags:['AI写作','知识管理','协作'], icon:'📝', platform:['web','mac','windows','ios','android'] },
    { id:'deepl', name:'DeepL', url:'https://www.deepl.com/', desc:'最强 AI 翻译引擎，学术/商务翻译质量碾压同类，支持 30+ 语言', category:'ai', tags:['翻译','NLP','学术'], icon:'🌐', platform:['web','mac','windows','ios','android'] },
    { id:'v0', name:'V0 by Vercel', url:'https://v0.dev/', desc:'AI 生成前端 UI，一句话描述直接输出 React/Tailwind 生产级代码', category:'ai', tags:['UI生成','前端','React'], icon:'🎯', platform:['web'] },
    { id:'gemini', name:'Gemini', url:'https://gemini.google.com/', desc:'Google 多模态 AI，原生支持图片/视频/音频理解，深度融合 Google 生态', category:'ai', tags:['多模态','Google','对话AI'], icon:'🌟', platform:['web','ios','android'] },
    { id:'poe', name:'Poe', url:'https://poe.com/', desc:'Quora 出品的 AI 聚合平台，一个入口访问 ChatGPT/Claude/Gemini 等所有模型', category:'ai', tags:['聚合','多模型','机器人'], icon:'🤖', platform:['web','ios','android'] },
    { id:'suno', name:'Suno', url:'https://suno.com/', desc:'AI 音乐生成，输入歌词或描述即可生成完整歌曲，V5 音质媲美录音室', category:'ai', tags:['音乐生成','创作','AI作曲'], icon:'🎵', platform:['web','ios','android'] },
    { id:'runway', name:'Runway', url:'https://runwayml.com/', desc:'AI 视频生成与编辑，Gen-4 模型，文字/图片生成高质量视频', category:'ai', tags:['视频生成','创意','AI视频'], icon:'🎬', platform:['web','ios'] },
    { id:'ollama', name:'Ollama', url:'https://ollama.com/', desc:'本地大模型运行工具，一键下载运行 Llama/Mistral/Gemma/DeepSeek，175k+ Stars', category:'ai', tags:['本地LLM','模型运行','开源'], icon:'🦙', platform:['mac','windows','linux'] },
    { id:'langflow', name:'Langflow', url:'https://www.langflow.org/', desc:'可视化 AI 工作流构建平台，拖拽搭建 Agent 应用，152k+ Stars', category:'ai', tags:['工作流','低代码','可视化'], icon:'🔷', platform:['web'] },
    { id:'dify', name:'Dify', url:'https://dify.ai/', desc:'生产级 Agent 工作流平台，Prompt 编排+RAG+Agent 一站式方案，145k+ Stars', category:'ai', tags:['Agent','RAG','工作流'], icon:'🚀', platform:['web'] },
    { id:'comfyui', name:'ComfyUI', url:'https://www.comfy.org/', desc:'节点式 AI 图像生成工作流引擎，精准控制 SD 模型，110k+ Stars', category:'ai', tags:['图像生成','工作流','SD'], icon:'🧩', platform:['mac','windows','linux'] },
    { id:'open-webui', name:'Open WebUI', url:'https://openwebui.com/', desc:'类 ChatGPT 自托管聊天界面，支持 Ollama 和 OpenAI API，140k+ Stars', category:'ai', tags:['自托管','聊天','开源'], icon:'💬', platform:['web'] },
    { id:'firecrawl', name:'Firecrawl', url:'https://www.firecrawl.dev/', desc:'网页转 LLM 友好 Markdown，RAG 场景必备，94k+ Stars', category:'ai', tags:['网页抓取','RAG','Markdown'], icon:'🔥', platform:['web'] },

    // ========== 开发工具 ==========
    { id:'vscode', name:'VS Code', url:'https://code.visualstudio.com/', desc:'微软免费代码编辑器，插件生态最丰富，前端/后端/全栈开发首选', category:'dev', tags:['编辑器','IDE','免费'], icon:'💻', featured:true, platform:['mac','windows','linux'] },
    { id:'cursor', name:'Cursor', url:'https://cursor.com/', desc:'AI 原生代码编辑器，内置 GPT/Claude，Tab 补全颠覆编码体验', category:'dev', tags:['AI编程','IDE','编辑器'], icon:'🖱️', featured:true, platform:['mac','windows','linux'] },
    { id:'warp', name:'Warp', url:'https://www.warp.dev/', desc:'现代化 AI 终端，智能命令补全、Agent Mode、团队协作共享', category:'dev', tags:['终端','AI','协作'], icon:'⚡', platform:['mac','linux'] },
    { id:'iterm2', name:'iTerm2', url:'https://iterm2.com/', desc:'macOS 最强终端模拟器，分屏/热键/AI 插件，开发者标配', category:'dev', tags:['终端','macOS','免费'], icon:'🖥️', platform:['mac'] },
    { id:'postman', name:'Postman', url:'https://www.postman.com/', desc:'API 开发测试平台，REST/GraphQL/gRPC/WebSocket 全覆盖', category:'dev', tags:['API','测试','协作'], icon:'📮', platform:['mac','windows','linux'] },
    { id:'docker', name:'Docker Desktop', url:'https://www.docker.com/products/docker-desktop/', desc:'容器化开发环境，一键搭建各种环境，告别「我机器上能跑」', category:'dev', tags:['容器','环境','DevOps'], icon:'🐳', platform:['mac','windows','linux'] },
    { id:'homebrew', name:'Homebrew', url:'https://brew.sh/', desc:'macOS 包管理器，一行命令安装任何开发工具，开发者装机第一步', category:'dev', tags:['包管理','macOS','CLI'], icon:'🍺', platform:['mac','linux'] },
    { id:'tower', name:'Tower', url:'https://www.git-tower.com/', desc:'最漂亮的 Git 图形客户端，可视化分支管理、冲突解决、历史追溯', category:'dev', tags:['Git','GUI','版本管理'], icon:'🏰', platform:['mac','windows'] },
    { id:'tableplus', name:'TablePlus', url:'https://tableplus.com/', desc:'现代数据库管理工具，支持 MySQL/PG/SQLite/Redis/Mongo 等 20+ 种', category:'dev', tags:['数据库','GUI','多数据库'], icon:'🗄️', platform:['mac','windows','linux'] },
    { id:'vercel', name:'Vercel', url:'https://vercel.com/', desc:'前端部署平台，Git 推送自动部署，Next.js 官方合作，边缘函数全球加速', category:'dev', tags:['部署','前端','Serverless'], icon:'▲', platform:['web'] },
    { id:'orbstack', name:'Orbstack', url:'https://orbstack.dev/', desc:'macOS 上最快的 Docker 替代，秒启动、低内存、原生 Apple Silicon', category:'dev', tags:['Docker','macOS','轻量'], icon:'🔮', platform:['mac'] },

    // ========== 效率工具 ==========
    { id:'notion', name:'Notion', url:'https://www.notion.so/', desc:'全能笔记/知识库/项目管理/数据库，All-in-One 工作空间', category:'productivity', tags:['笔记','知识管理','协作'], icon:'📋', featured:true, platform:['web','mac','windows','ios','android'] },
    { id:'raycast', name:'Raycast', url:'https://www.raycast.com/', desc:'macOS 效率神器，快捷启动/剪贴板/窗口管理/AI/翻译合为一体', category:'productivity', tags:['启动器','macOS','AI'], icon:'⚡', featured:true, platform:['mac'] },
    { id:'obsidian', name:'Obsidian', url:'https://obsidian.md/', desc:'本地 Markdown 知识库，双向链接+知识图谱，打造第二大脑', category:'productivity', tags:['笔记','知识库','Markdown'], icon:'💎', platform:['mac','windows','linux','ios','android'] },
    { id:'arc', name:'Arc Browser', url:'https://arc.net/', desc:'重新定义浏览器，空间管理/分屏/Boost/AI 集成，体验远超 Chrome', category:'productivity', tags:['浏览器','创新','分屏'], icon:'🌐', platform:['mac','windows','ios'] },
    { id:'todoist', name:'Todoist', url:'https://todoist.com/', desc:'极简跨平台待办清单，自然语言输入 + Karma 激励，GTD 利器', category:'productivity', tags:['待办','GTD','跨平台'], icon:'✅', platform:['mac','windows','ios','android','web'] },
    { id:'feishu', name:'飞书', url:'https://www.feishu.cn/', desc:'字节出品，文档/表格/多维表格/会议/审批一体化，国内协作首选', category:'productivity', tags:['协作','文档','IM'], icon:'🕊️', platform:['mac','windows','ios','android','web'] },
    { id:'linear', name:'Linear', url:'https://linear.app/', desc:'极速项目管理，键盘优先、界面精致，工程师最爱的 Issue Tracker', category:'productivity', tags:['项目管理','敏捷','键盘流'], icon:'📐', platform:['web','mac','ios'] },
    { id:'alfred', name:'Alfred', url:'https://www.alfredapp.com/', desc:'macOS 经典效率启动器，Workflow 自动化、剪贴板、代码片段', category:'productivity', tags:['启动器','macOS','自动化'], icon:'🎩', platform:['mac'] },
    { id:'readwise', name:'Readwise', url:'https://readwise.io/', desc:'阅读高亮聚合器，自动同步 Kindle/Instapaper/Twitter 标注到笔记工具', category:'productivity', tags:['阅读','标注','知识管理'], icon:'📑', platform:['web','ios','android'] },
    { id:'cleanshot', name:'CleanShot X', url:'https://cleanshot.com/', desc:'macOS 最强截图录屏工具，标注/滚动截图/OCR/GIF 一气呵成', category:'productivity', tags:['截图','录屏','macOS'], icon:'📸', platform:['mac'] },

    // ========== 设计创意 ==========
    { id:'figma', name:'Figma', url:'https://www.figma.com/', desc:'云端 UI/UX 设计协作平台，浏览器即用，实时多人协作+Dev Mode', category:'design', tags:['UI设计','协作','云端'], icon:'🎭', featured:true, platform:['web','mac','windows'] },
    { id:'canva', name:'Canva', url:'https://www.canva.com/', desc:'在线设计平台，百万模板+AI 生图，零基础也能做出专业设计', category:'design', tags:['平面设计','模板','AI'], icon:'🖼️', platform:['web','ios','android'] },
    { id:'excalidraw', name:'Excalidraw', url:'https://excalidraw.com/', desc:'手绘风格白板，画架构图/流程图/脑图首选，开源可自部署', category:'design', tags:['白板','流程图','开源'], icon:'✏️', platform:['web'] },
    { id:'removebg', name:'Remove.bg', url:'https://www.remove.bg/', desc:'一键 AI 移除图片背景，识别精准到发丝，电商/设计必备', category:'design', tags:['抠图','AI','图片处理'], icon:'✂️', platform:['web'] },
    { id:'unsplash', name:'Unsplash', url:'https://unsplash.com/', desc:'高质量免费图片素材库，300万+ 商用免版权图片，设计素材天堂', category:'design', tags:['图片素材','免费','商用'], icon:'📸', platform:['web'] },
    { id:'capcut', name:'CapCut 剪映', url:'https://www.capcut.com/', desc:'字节 AI 视频剪辑，自动字幕/转场/特效/AI 调色，短视频利器', category:'design', tags:['视频剪辑','AI','短视频'], icon:'🎬', platform:['web','mac','windows','ios','android'] },
    { id:'spline', name:'Spline', url:'https://spline.design/', desc:'浏览器端 3D 设计工具，实时协作+AI 材质+一键导出到网页', category:'design', tags:['3D设计','协作','WebGL'], icon:'🔮', platform:['web','mac','windows'] },
    { id:'photopea', name:'Photopea', url:'https://www.photopea.com/', desc:'免费在线 Photoshop 替代，PSD/Sketch/XD 全兼容，浏览器即用', category:'design', tags:['图片编辑','PSD','在线'], icon:'🖌️', platform:['web'] },
    { id:'dribbble', name:'Dribbble', url:'https://dribbble.com/', desc:'全球设计师作品社区，UI/插画/品牌/动效灵感，寻找设计参考首选', category:'design', tags:['设计社区','灵感','作品集'], icon:'🏀', platform:['web','ios'] },

    // ========== 办公协作 ==========
    { id:'slack', name:'Slack', url:'https://slack.com/', desc:'全球团队 IM 标杆，频道管理+海量集成+AI 摘要，远程协作核心', category:'office', tags:['IM','团队','集成'], icon:'💬', platform:['mac','windows','linux','ios','android'] },
    { id:'zoom', name:'Zoom', url:'https://zoom.us/', desc:'视频会议王者，AI 会议纪要+实时翻译+虚拟背景，稳定可靠', category:'office', tags:['视频会议','远程','AI'], icon:'📹', platform:['mac','windows','ios','android'] },
    { id:'loom', name:'Loom', url:'https://www.loom.com/', desc:'录屏即分享，异步沟通利器，AI 自动生成标题和章节', category:'office', tags:['录屏','异步','沟通'], icon:'🎥', platform:['web','mac','windows'] },
    { id:'miro', name:'Miro', url:'https://miro.com/', desc:'在线协作白板，远程脑暴/敏捷/设计评审，AI 一键生成思维导图', category:'office', tags:['白板','协作','敏捷'], icon:'📊', platform:['web','mac','windows','ios','android'] },
    { id:'tencent-docs', name:'腾讯文档', url:'https://docs.qq.com/', desc:'在线文档协作，微信/QQ 深度整合，国内办公首选', category:'office', tags:['文档协作','在线','免费'], icon:'📄', platform:['web','ios','android'] },
    { id:'notion-cal', name:'Notion Calendar', url:'https://www.notion.so/product/calendar', desc:'Notion 日历，整合工作日程+会议+任务，一键时间规划', category:'office', tags:['日历','日程','时间管理'], icon:'📅', platform:['web','mac','windows','ios','android'] },
    { id:'grammarly', name:'Grammarly', url:'https://www.grammarly.com/', desc:'AI 写作助手，英文语法检查+语气优化+风格建议，商务写作必备', category:'office', tags:['写作','语法','英文'], icon:'✍️', platform:['web','mac','windows','ios','android'] },
    { id:'tldraw', name:'tldraw', url:'https://www.tldraw.com/', desc:'极简在线白板，无限画布+手绘风格，即开即用无需注册', category:'office', tags:['白板','绘图','轻量'], icon:'🎨', platform:['web'] },

    // ========== 生活娱乐 ==========
    { id:'1password', name:'1Password', url:'https://1password.com/', desc:'最佳密码管理器，自动生成/填充/同步，Passkey 加持告别密码记忆', category:'life', tags:['密码管理','安全','跨平台'], icon:'🔐', platform:['mac','windows','linux','ios','android'] },
    { id:'spotify', name:'Spotify', url:'https://www.spotify.com/', desc:'全球最大流媒体音乐平台，AI DJ + 精准推荐，播客生态丰富', category:'life', tags:['音乐','播客','流媒体'], icon:'🎵', platform:['mac','windows','ios','android','web'] },
    { id:'flomo', name:'Flomo', url:'https://flomoapp.com/', desc:'极简卡片笔记，像发微博一样记笔记，捕捉碎片灵感无压力', category:'life', tags:['笔记','灵感','卡片'], icon:'💡', platform:['web','ios','android'] },
    { id:'douban', name:'豆瓣', url:'https://www.douban.com/', desc:'书影音评分社区，发现好书好电影，记录精神生活轨迹', category:'life', tags:['书影音','社区','评分'], icon:'📚', platform:['web','ios','android'] },
    { id:'dayone', name:'Day One', url:'https://dayoneapp.com/', desc:'最美日记应用，自动记录位置/天气/步数，加密+Markdown+多端同步', category:'life', tags:['日记','写作','隐私'], icon:'📔', platform:['mac','ios','android'] },
    { id:'cron-cal', name:'Cron', url:'https://cron.com/', desc:'极速日历应用，键盘操作+多时区+自然语言创建，现为 Notion Calendar', category:'life', tags:['日历','时间管理','极速'], icon:'⏰', platform:['mac','windows','ios','web'] },

    // ========== 学习成长 ==========
    { id:'anki', name:'Anki', url:'https://apps.ankiweb.net/', desc:'间隔重复记忆神器，背单词/医学/法考/编程，科学记忆法+海量共享牌组', category:'learning', tags:['记忆','卡片','学习'], icon:'🃏', platform:['mac','windows','linux','ios','android'] },
    { id:'coursera', name:'Coursera', url:'https://www.coursera.org/', desc:'全球名校课程平台，斯坦福/耶鲁/MIT 课程在线学+拿证书', category:'learning', tags:['在线课程','名校','证书'], icon:'🎓', platform:['web','ios','android'] },
    { id:'duolingo', name:'多邻国', url:'https://www.duolingo.com/', desc:'游戏化学语言，40+ 语种免费学，日活过亿的绿色小鸟', category:'learning', tags:['语言学习','免费','游戏化'], icon:'🦉', platform:['web','ios','android'] },
    { id:'oreilly', name:"O'Reilly Learning", url:'https://www.oreilly.com/', desc:'技术书籍/视频/沙盒/认证一体化学习平台，程序员终身学习伴侣', category:'learning', tags:['技术书','视频','编程'], icon:'📖', platform:['web','ios','android'] },
    { id:'wolfram', name:'Wolfram Alpha', url:'https://www.wolframalpha.com/', desc:'计算知识引擎，数学/物理/化学/统计一步到位，学生科研神器', category:'learning', tags:['数学','科学','计算'], icon:'🔢', platform:['web','ios','android'] },
    { id:'khan', name:'Khan Academy', url:'https://www.khanacademy.org/', desc:'免费教育平台，数学/科学/编程/人文，K-12 到大学全部免费', category:'learning', tags:['免费教育','全科','视频'], icon:'🏫', platform:['web','ios','android'] },
    { id:'notebooklm', name:'NotebookLM', url:'https://notebooklm.google.com/', desc:'Google AI 笔记研究工具，上传资料自动生成摘要/问答/播客', category:'learning', tags:['AI研究','笔记','Google'], icon:'🔬', platform:['web'] },

    // ========== 文件工具 ==========
    { id:'cleanmymac', name:'CleanMyMac', url:'https://macpaw.com/cleanmymac', desc:'Mac 清理优化标杆，垃圾清理/恶意软件防护/性能监控一键搞定', category:'file', tags:['清理','优化','macOS'], icon:'🧹', platform:['mac'] },
    { id:'imageoptim', name:'ImageOptim', url:'https://imageoptim.com/', desc:'图片无损压缩，WebP/PNG/JPEG 体积缩小 60%+ 画质不降', category:'file', tags:['图片压缩','免费','开源'], icon:'🗜️', platform:['mac'] },
    { id:'handbrake', name:'HandBrake', url:'https://handbrake.fr/', desc:'开源视频转码工具，支持几乎所有格式互转，画质调参丰富', category:'file', tags:['视频转码','开源','免费'], icon:'🎞️', platform:['mac','windows','linux'] },
    { id:'cloudconvert', name:'CloudConvert', url:'https://cloudconvert.com/', desc:'在线文件格式转换，200+ 格式，PDF/Office/图片/视频全覆盖', category:'file', tags:['格式转换','在线','PDF'], icon:'🔄', platform:['web'] },
    { id:'keka', name:'Keka', url:'https://www.keka.io/', desc:'macOS 最好用的解压工具，RAR/7z/ZIP/TAR 通吃，界面清爽', category:'file', tags:['解压','压缩','macOS'], icon:'📦', platform:['mac'] },
    { id:'dropover', name:'Dropover', url:'https://dropoverapp.com/', desc:'macOS 拖拽暂存架，拖文件悬停即创建临时收纳区，多文件操作神器', category:'file', tags:['文件管理','拖拽','macOS'], icon:'📂', platform:['mac'] },
    { id:'maccy', name:'Maccy', url:'https://maccy.app/', desc:'轻量开源剪贴板管理器，⌘+Shift+C 呼出历史，纯文本/图片全支持', category:'file', tags:['剪贴板','开源','macOS'], icon:'📋', platform:['mac'] },
    { id:'sendanywhere', name:'Send Anywhere', url:'https://send-anywhere.com/', desc:'跨平台文件传输，6 位密钥直传，无需登录、不限速、端到端加密', category:'file', tags:['文件传输','跨平台','加密'], icon:'📤', platform:['web','mac','windows','ios','android'] }
];

var TOOL_CATEGORIES = [
    { key:'ai', name:'AI 工具', icon:'🤖', desc:'人工智能对话、搜索、创作、编程助手', color:'#b44dff' },
    { key:'dev', name:'开发工具', icon:'💻', desc:'编辑器、终端、数据库、DevOps、部署', color:'#00e5ff' },
    { key:'productivity', name:'效率工具', icon:'⚡', desc:'笔记、启动器、浏览器、待办、自动化', color:'#00e676' },
    { key:'design', name:'设计创意', icon:'🎨', desc:'UI 设计、图像处理、视频剪辑、3D 建模', color:'#ff4081' },
    { key:'office', name:'办公协作', icon:'💼', desc:'IM、视频会议、文档协作、白板、日历', color:'#ff9100' },
    { key:'life', name:'生活娱乐', icon:'🌈', desc:'音乐、日记、密码管理、书影音', color:'#448aff' },
    { key:'learning', name:'学习成长', icon:'🎓', desc:'在线课程、语言学习、记忆训练、研究辅助', color:'#76ff03' },
    { key:'file', name:'文件工具', icon:'🗂️', desc:'压缩解压、格式转换、清理优化、文件传输', color:'#ffea00' }
];
// TOOLS_DATA_END