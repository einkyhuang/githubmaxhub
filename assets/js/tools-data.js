// ===== Gitmaxhub Tool Navigation Data =====
// Auto-updated daily. DO NOT manually edit between markers.
// Total tools: 55

// TOOLS_DATA_START
var TOOLS_UPDATE_DATE = '2026-05-24';

var TOOLS = [
    // ===== 开发工具 =====
    {
        name: 'VS Code',
        url: 'https://code.visualstudio.com/',
        desc: '微软出品的免费代码编辑器，插件生态极其丰富，前端/后端/全栈首选',
        category: 'dev',
        tags: ['编辑器', 'IDE', '免费'],
        icon: '💻',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'Cursor',
        url: 'https://cursor.com/',
        desc: 'AI 原生代码编辑器，内置 GPT/Claude，大幅提升编码效率',
        category: 'dev',
        tags: ['AI编程', 'IDE', '编辑器'],
        icon: '🤖',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'Warp',
        url: 'https://www.warp.dev/',
        desc: '现代化 AI 终端，智能命令补全、团队协作、分块输出',
        category: 'dev',
        tags: ['终端', 'AI', '协作'],
        icon: '⚡',
        platform: ['mac', 'linux']
    },
    {
        name: 'iTerm2',
        url: 'https://iterm2.com/',
        desc: 'macOS 最强终端模拟器，分屏、热键、自动补全，开发者标配',
        category: 'dev',
        tags: ['终端', 'macOS', '免费'],
        icon: '🖥️',
        platform: ['mac']
    },
    {
        name: 'Postman',
        url: 'https://www.postman.com/',
        desc: 'API 开发和测试平台，支持 REST/GraphQL/gRPC，团队协作',
        category: 'dev',
        tags: ['API', '测试', '协作'],
        icon: '📮',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'Docker Desktop',
        url: 'https://www.docker.com/products/docker-desktop/',
        desc: '容器化开发环境，一键搭建各种开发环境，告别环境配置地狱',
        category: 'dev',
        tags: ['容器', '环境', 'DevOps'],
        icon: '🐳',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'Homebrew',
        url: 'https://brew.sh/',
        desc: 'macOS 包管理器，一行命令安装任何开发工具',
        category: 'dev',
        tags: ['包管理', 'macOS', 'CLI'],
        icon: '🍺',
        platform: ['mac', 'linux']
    },
    {
        name: 'Tower',
        url: 'https://www.git-tower.com/',
        desc: '最漂亮的 Git 图形客户端，可视化分支管理、冲突解决',
        category: 'dev',
        tags: ['Git', 'GUI', '版本管理'],
        icon: '🏰',
        platform: ['mac', 'windows']
    },
    {
        name: 'TablePlus',
        url: 'https://tableplus.com/',
        desc: '现代数据库管理工具，支持 MySQL/PostgreSQL/SQLite/Redis 等20+种',
        category: 'dev',
        tags: ['数据库', 'GUI', '多数据库'],
        icon: '🗄️',
        platform: ['mac', 'windows', 'linux']
    },

    // ===== AI 工具 =====
    {
        name: 'ChatGPT',
        url: 'https://chatgpt.com/',
        desc: 'OpenAI 旗舰对话 AI，写作/编程/分析全能助手',
        category: 'ai',
        tags: ['对话AI', 'GPT', '全能'],
        icon: '🧠',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'Claude',
        url: 'https://claude.ai/',
        desc: 'Anthropic 出品，长上下文、深度思考、安全可靠的 AI 助手',
        category: 'ai',
        tags: ['对话AI', 'Claude', '安全'],
        icon: '🎯',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'Perplexity',
        url: 'https://www.perplexity.ai/',
        desc: 'AI 搜索引擎，实时联网 + 引用来源，学术研究的利器',
        category: 'ai',
        tags: ['搜索', '研究', '联网'],
        icon: '🔍',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'Midjourney',
        url: 'https://www.midjourney.com/',
        desc: 'AI 图像生成标杆，艺术风格出众，设计师的创作利器',
        category: 'ai',
        tags: ['图像生成', '设计', '艺术'],
        icon: '🎨',
        platform: ['web']
    },
    {
        name: 'GitHub Copilot',
        url: 'https://github.com/features/copilot',
        desc: 'GitHub 官方 AI 编程助手，IDE 内实时代码建议与生成',
        category: 'ai',
        tags: ['AI编程', '代码补全', 'IDE插件'],
        icon: '👨‍💻',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'Notion AI',
        url: 'https://www.notion.so/product/ai',
        desc: 'Notion 内置 AI，智能写作、翻译、总结，知识管理升级',
        category: 'ai',
        tags: ['AI写作', '知识管理', '协作'],
        icon: '📝',
        platform: ['web', 'mac', 'windows', 'ios', 'android']
    },
    {
        name: 'DeepL',
        url: 'https://www.deepl.com/',
        desc: '最强 AI 翻译引擎，学术/商务翻译质量碾压同类',
        category: 'ai',
        tags: ['翻译', 'NLP', '学术'],
        icon: '🌐',
        platform: ['web', 'mac', 'windows', 'ios', 'android']
    },

    // ===== 设计工具 =====
    {
        name: 'Figma',
        url: 'https://www.figma.com/',
        desc: '云端 UI/UX 设计协作平台，浏览器即开即用，实时多人协作',
        category: 'design',
        tags: ['UI设计', '协作', '云端'],
        icon: '🎭',
        platform: ['web', 'mac', 'windows']
    },
    {
        name: 'Canva',
        url: 'https://www.canva.com/',
        desc: '在线设计平台，海量模板，零基础也能做出专业设计',
        category: 'design',
        tags: ['平面设计', '模板', '免费'],
        icon: '🖼️',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'Excalidraw',
        url: 'https://excalidraw.com/',
        desc: '手绘风格白板工具，画架构图、流程图、脑图的轻量首选',
        category: 'design',
        tags: ['白板', '流程图', '开源'],
        icon: '✏️',
        platform: ['web']
    },
    {
        name: 'Remove.bg',
        url: 'https://www.remove.bg/',
        desc: '一键移除图片背景，AI 识别超精准，电商/设计必备',
        category: 'design',
        tags: ['抠图', 'AI', '图片处理'],
        icon: '✂️',
        platform: ['web']
    },
    {
        name: 'Unsplash',
        url: 'https://unsplash.com/',
        desc: '高质量免费图片素材库，商用免版权，设计师素材天堂',
        category: 'design',
        tags: ['图片素材', '免费', '商用'],
        icon: '📸',
        platform: ['web']
    },

    // ===== 效率工具 =====
    {
        name: 'Notion',
        url: 'https://www.notion.so/',
        desc: '全能笔记/知识库/项目管理，All-in-One 工作空间',
        category: 'productivity',
        tags: ['笔记', '知识管理', '协作'],
        icon: '📋',
        platform: ['web', 'mac', 'windows', 'ios', 'android']
    },
    {
        name: 'Raycast',
        url: 'https://www.raycast.com/',
        desc: 'macOS 效率神器，快捷启动/剪贴板/窗口管理/AI 合为一体',
        category: 'productivity',
        tags: ['启动器', 'macOS', 'AI'],
        icon: '⚡',
        platform: ['mac']
    },
    {
        name: 'Obsidian',
        url: 'https://obsidian.md/',
        desc: '本地 Markdown 知识库，双向链接+图谱，打造第二大脑',
        category: 'productivity',
        tags: ['笔记', '知识库', 'Markdown'],
        icon: '💎',
        platform: ['mac', 'windows', 'linux', 'ios', 'android']
    },
    {
        name: 'Arc Browser',
        url: 'https://arc.net/',
        desc: '重新定义浏览器的产品，空间管理、分屏、AI 集成',
        category: 'productivity',
        tags: ['浏览器', '创新', '分屏'],
        icon: '🌐',
        platform: ['mac', 'windows', 'ios']
    },
    {
        name: 'Todoist',
        url: 'https://todoist.com/',
        desc: '极简跨平台待办清单，自然语言输入，Karma 激励系统',
        category: 'productivity',
        tags: ['待办', 'GTD', '跨平台'],
        icon: '✅',
        platform: ['mac', 'windows', 'ios', 'android', 'web']
    },
    {
        name: '飞书',
        url: 'https://www.feishu.cn/',
        desc: '字节跳动出品，文档/表格/会议/审批一体化协作平台',
        category: 'productivity',
        tags: ['协作', '文档', 'IM'],
        icon: '🕊️',
        platform: ['mac', 'windows', 'ios', 'android', 'web']
    },

    // ===== 办公协作 =====
    {
        name: 'Slack',
        url: 'https://slack.com/',
        desc: '全球最流行的团队 IM，频道管理 + 海量集成',
        category: 'office',
        tags: ['IM', '团队', '集成'],
        icon: '💬',
        platform: ['mac', 'windows', 'linux', 'ios', 'android']
    },
    {
        name: 'Zoom',
        url: 'https://zoom.us/',
        desc: '视频会议王者，稳定高清，AI 会议纪要自动生成',
        category: 'office',
        tags: ['视频会议', '远程', 'AI'],
        icon: '📹',
        platform: ['mac', 'windows', 'ios', 'android']
    },
    {
        name: 'Loom',
        url: 'https://www.loom.com/',
        desc: '录屏即分享，异步沟通利器，告别无效会议',
        category: 'office',
        tags: ['录屏', '异步', '沟通'],
        icon: '🎬',
        platform: ['web', 'mac', 'windows']
    },
    {
        name: 'Miro',
        url: 'https://miro.com/',
        desc: '在线协作白板，远程脑暴/敏捷/设计评审的不二选择',
        category: 'office',
        tags: ['白板', '协作', '敏捷'],
        icon: '📊',
        platform: ['web', 'mac', 'windows', 'ios', 'android']
    },
    {
        name: '腾讯文档',
        url: 'https://docs.qq.com/',
        desc: '在线文档协作，微信生态深度整合，国内办公首选',
        category: 'office',
        tags: ['文档协作', '在线', '免费'],
        icon: '📄',
        platform: ['web', 'ios', 'android']
    },

    // ===== 生活娱乐 =====
    {
        name: '1Password',
        url: 'https://1password.com/',
        desc: '最佳密码管理器，自动生成/填充/同步，再也不用记密码',
        category: 'life',
        tags: ['密码管理', '安全', '跨平台'],
        icon: '🔐',
        platform: ['mac', 'windows', 'linux', 'ios', 'android']
    },
    {
        name: 'Spotify',
        url: 'https://www.spotify.com/',
        desc: '全球最大流媒体音乐平台，推荐算法精准，播客生态丰富',
        category: 'life',
        tags: ['音乐', '播客', '流媒体'],
        icon: '🎵',
        platform: ['mac', 'windows', 'ios', 'android', 'web']
    },
    {
        name: 'Flomo',
        url: 'https://flomoapp.com/',
        desc: '极简卡片笔记，像发微博一样记笔记，捕捉灵感碎片',
        category: 'life',
        tags: ['笔记', '灵感', '卡片'],
        icon: '💡',
        platform: ['web', 'ios', 'android']
    },
    {
        name: '豆瓣',
        url: 'https://www.douban.com/',
        desc: '书影音评分社区，发现好书好电影，记录精神生活',
        category: 'life',
        tags: ['书影音', '社区', '评分'],
        icon: '📚',
        platform: ['web', 'ios', 'android']
    },

    // ===== 学习工具 =====
    {
        name: 'Anki',
        url: 'https://apps.ankiweb.net/',
        desc: '间隔重复记忆神器，背单词/医学/法考，科学记忆法',
        category: 'learning',
        tags: ['记忆', '卡片', '学习'],
        icon: '🃏',
        platform: ['mac', 'windows', 'linux', 'ios', 'android']
    },
    {
        name: 'Wolfram Alpha',
        url: 'https://www.wolframalpha.com/',
        desc: '计算知识引擎，数学/物理/化学/统计一步到位',
        category: 'learning',
        tags: ['数学', '科学', '计算'],
        icon: '🔢',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        desc: '全球名校课程平台，斯坦福/耶鲁/MIT 课程在线学',
        category: 'learning',
        tags: ['在线课程', '名校', '证书'],
        icon: '🎓',
        platform: ['web', 'ios', 'android']
    },
    {
        name: 'O'Reilly',
        url: 'https://www.oreilly.com/',
        desc: '技术书籍/视频/沙盒学习平台，程序员终身学习伴侣',
        category: 'learning',
        tags: ['技术书', '视频', '编程'],
        icon: '📖',
        platform: ['web', 'ios', 'android']
    },
    {
        name: '多邻国',
        url: 'https://www.duolingo.com/',
        desc: '游戏化学语言，40+语种，日活过亿的免费语言学习 App',
        category: 'learning',
        tags: ['语言学习', '免费', '游戏化'],
        icon: '🦉',
        platform: ['web', 'ios', 'android']
    },

    // ===== 文件工具 =====
    {
        name: 'CleanMyMac',
        url: 'https://macpaw.com/cleanmymac',
        desc: 'Mac 清理优化标杆，垃圾清理/恶意软件防护/性能优化',
        category: 'file',
        tags: ['清理', '优化', 'macOS'],
        icon: '🧹',
        platform: ['mac']
    },
    {
        name: 'ImageOptim',
        url: 'https://imageoptim.com/',
        desc: '图片无损压缩，WebP/PNG/JPEG 体积缩小 60%+ 画质不降',
        category: 'file',
        tags: ['图片压缩', '免费', '开源'],
        icon: '🗜️',
        platform: ['mac']
    },
    {
        name: 'HandBrake',
        url: 'https://handbrake.fr/',
        desc: '开源视频转码工具，支持几乎所有格式互转，画质调参丰富',
        category: 'file',
        tags: ['视频转码', '开源', '免费'],
        icon: '🎞️',
        platform: ['mac', 'windows', 'linux']
    },
    {
        name: 'CloudConvert',
        url: 'https://cloudconvert.com/',
        desc: '在线文件格式转换，200+格式，PDF/Office/图片/视频全覆盖',
        category: 'file',
        tags: ['格式转换', '在线', 'PDF'],
        icon: '🔄',
        platform: ['web']
    },
    {
        name: 'Keka',
        url: 'https://www.keka.io/',
        desc: 'macOS 上最好的解压工具，RAR/7z/ZIP 通吃，界面清爽',
        category: 'file',
        tags: ['解压', 'macOS', '免费'],
        icon: '📦',
        platform: ['mac']
    },

    // ===== 额外精选 =====
    {
        name: 'Vercel',
        url: 'https://vercel.com/',
        desc: '前端部署平台，Git 推送自动部署，Next.js 官方合作',
        category: 'dev',
        tags: ['部署', '前端', 'Serverless'],
        icon: '▲',
        platform: ['web']
    },
    {
        name: 'Linear',
        url: 'https://linear.app/',
        desc: '极速项目管理工具，键盘优先、界面精致，工程师最爱',
        category: 'productivity',
        tags: ['项目管理', '敏捷', '键盘流'],
        icon: '📐',
        platform: ['web', 'mac', 'ios']
    },
    {
        name: 'V0 by Vercel',
        url: 'https://v0.dev/',
        desc: 'AI 生成前端 UI，一句话描述，直接输出 React/Tailwind 代码',
        category: 'ai',
        tags: ['UI生成', '前端', 'React'],
        icon: '🎯',
        platform: ['web']
    },
    {
        name: 'CapCut',
        url: 'https://www.capcut.com/',
        desc: '字节跳动 AI 视频剪辑，自动字幕/转场/特效，短视频利器',
        category: 'design',
        tags: ['视频剪辑', 'AI', '短视频'],
        icon: '🎬',
        platform: ['web', 'mac', 'windows', 'ios', 'android']
    }
];

var TOOL_CATEGORIES = {
    'dev': { name: '开发工具', icon: '💻', color: '#00e5ff' },
    'ai': { name: 'AI 工具', icon: '🤖', color: '#b44dff' },
    'design': { name: '设计', icon: '🎨', color: '#ff4081' },
    'productivity': { name: '效率', icon: '⚡', color: '#00e676' },
    'office': { name: '办公协作', icon: '📋', color: '#ff9100' },
    'life': { name: '生活娱乐', icon: '🎵', color: '#448aff' },
    'learning': { name: '学习', icon: '🎓', color: '#76ff03' },
    'file': { name: '文件工具', icon: '🗂️', color: '#ffea00' }
};
// TOOLS_DATA_END