// ===== DevPulse - Main App =====

// ===== Home Page =====
function initHome(){
    document.getElementById("updateTime").textContent = "更新: "+UPDATE_DATE;
    document.getElementById("footerDate").textContent = UPDATE_DATE;
    renderStats();
    renderProjects();
    renderTrends();
}

function renderStats(){
    document.getElementById("statTotal").textContent = PROJECTS.length;
    let totalStars = 0;
    PROJECTS.forEach(p=>{
        const s = parseFloat(p.stars.replace("k",""));
        totalStars += isNaN(s)?0:s;
    });
    document.getElementById("statStars").textContent = (totalStars/1000).toFixed(1)+"M";
    const cats = new Set(PROJECTS.map(p=>p.category));
    document.getElementById("statCats").textContent = cats.size;
}

let currentFilter = "all";

function setFilter(cat){
    currentFilter = cat;
    document.querySelectorAll(".filter-pill").forEach(b=>b.classList.remove("active"));
    const btn = document.querySelector(`[data-category="${cat}"]`);
    if(btn) btn.classList.add("active");
    renderProjects();
}

function renderProjects(){
    const query = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
    let filtered = PROJECTS;
    if(currentFilter !== "all"){
        filtered = filtered.filter(p=>p.category===currentFilter);
    }
    if(query){
        filtered = filtered.filter(p=>
            p.name.toLowerCase().includes(query)||
            p.fullName.toLowerCase().includes(query)||
            p.descShort.toLowerCase().includes(query)||
            p.lang.toLowerCase().includes(query)||
            p.tags.some(t=>t.toLowerCase().includes(query))
        );
    }
    document.getElementById("resultCount").textContent = filtered.length+" 个项目";
    const grid = document.getElementById("projectsGrid");
    const empty = document.getElementById("emptyState");
    if(!grid) return;
    if(filtered.length===0){
        grid.innerHTML="";
        if(empty) empty.style.display="block";
        return;
    }
    if(empty) empty.style.display="none";

    grid.innerHTML = filtered.map(p=>{
        const tagClsMap = {
            "AI Agent":"tag-agent","自托管":"tag-agent","工作流":"tag-framework","多智能体":"tag-agent",
            "专业化":"tag-agent","Token优化":"tag-tool","代理":"tag-tool","CLI工具":"tag-tool",
            "API代理":"tag-tool","免费层":"tag-tool","自动故障转移":"tag-tool",
            "学术研究":"tag-research","Claude Code":"tag-research",
            "AI技能":"tag-agent","开发方法论":"tag-agent","智能体框架":"tag-agent",
            "性能优化":"tag-tool","开发工具":"tag-tool",
            "深度学习":"tag-model","NLP":"tag-model","多模态":"tag-multimodal",
            "图像处理":"tag-multimodal","AI水印":"tag-multimodal","检测工具":"tag-tool",
            "可视化":"tag-framework","低代码":"tag-framework",
            "生产级":"tag-framework","AI平台":"tag-framework",
            "自适应":"tag-agent","个性化":"tag-agent",
            "自主Agent":"tag-agent","自动化":"tag-agent","GPT":"tag-model",
            "本地LLM":"tag-model","模型运行":"tag-model","推理引擎":"tag-model",
            "聊天界面":"tag-tool","自托管":"tag-tool","ChatGPT替代":"tag-tool",
            "LLM框架":"tag-framework","编排":"tag-framework",
            "提示词":"tag-tool","社区":"tag-tool",
            "代码图谱":"tag-tool","本地化":"tag-tool",
            "Agent":"tag-agent","Framework":"tag-framework","Skills":"tag-agent",
            "可复用":"tag-agent","Claude":"tag-research",
            "Platform":"tag-framework","Workflow":"tag-framework"
        };
        return `
        <a href="project.html?slug=${p.slug}" class="project-card">
            <div class="card-header">
                <span class="card-title" title="${p.fullName}">${p.fullName}</span>
                <span class="card-lang">${p.lang}</span>
            </div>
            <p class="card-desc">${p.descShort}</p>
            <div class="card-tags">
                ${p.tags.map(t=>`<span class="card-tag ${tagClsMap[t]||'tag-agent'}">${t}</span>`).join("")}
            </div>
            <div class="card-footer">
                <div class="card-stats">
                    <span>⭐ ${p.stars}</span>
                    <span>🍴 ${p.forks}</span>
                </div>
                <span class="card-arrow">→</span>
            </div>
        </a>`;
    }).join("");
}

function renderTrends(){
    const grid = document.getElementById("trendsGrid");
    if(!grid) return;
    grid.innerHTML = TRENDS.map(t=>`
        <div class="trend-card">
            <div class="trend-icon">${t.icon}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
        </div>
    `).join("");
}

// ===== Detail Page =====
function initDetail(){
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const project = PROJECTS.find(p=>p.slug===slug);

    var updateEl = document.getElementById("updateTime");
    if(updateEl) updateEl.textContent = "更新: "+UPDATE_DATE;

    if(!project){
        document.getElementById("detailContent").innerHTML = `
            <div class="empty-state">
                <div class="icon">🔍</div>
                <p>未找到该项目，请返回首页查看完整列表。</p>
                <a href="index.html" class="btn btn-primary" style="margin-top:20px">返回首页</a>
            </div>`;
        return;
    }

    document.title = project.fullName + " - DevPulse";
    document.getElementById("detailTitle").textContent = project.name;
    document.getElementById("detailBreadcrumb").textContent = project.name;
    document.getElementById("detailFullname").textContent = project.fullName;
    document.getElementById("detailStars").textContent = "⭐ "+project.stars;
    document.getElementById("detailForks").textContent = "🍴 "+project.forks;
    document.getElementById("detailLang").textContent = project.lang;

    const tagClsMap = {
        "AI Agent":"tag-agent","自托管":"tag-agent","工作流":"tag-framework","多智能体":"tag-agent",
        "专业化":"tag-agent","Token优化":"tag-tool","代理":"tag-tool","CLI工具":"tag-tool",
        "API代理":"tag-tool","免费层":"tag-tool","自动故障转移":"tag-tool",
        "学术研究":"tag-research","Claude Code":"tag-research",
        "AI技能":"tag-agent","开发方法论":"tag-agent","智能体框架":"tag-agent",
        "性能优化":"tag-tool","开发工具":"tag-tool",
        "深度学习":"tag-model","NLP":"tag-model","多模态":"tag-multimodal",
        "图像处理":"tag-multimodal","AI水印":"tag-multimodal","检测工具":"tag-tool",
        "可视化":"tag-framework","低代码":"tag-framework",
        "生产级":"tag-framework","AI平台":"tag-framework",
        "自适应":"tag-agent","个性化":"tag-agent",
        "自主Agent":"tag-agent","自动化":"tag-agent","GPT":"tag-model",
        "本地LLM":"tag-model","模型运行":"tag-model","推理引擎":"tag-model",
        "聊天界面":"tag-tool","自托管":"tag-tool","ChatGPT替代":"tag-tool",
        "LLM框架":"tag-framework","编排":"tag-framework",
        "提示词":"tag-tool","社区":"tag-tool",
        "代码图谱":"tag-tool","本地化":"tag-tool",
        "Agent":"tag-agent","Framework":"tag-framework","Skills":"tag-agent",
        "可复用":"tag-agent","Claude":"tag-research",
        "Platform":"tag-framework","Workflow":"tag-framework"
    };

    document.getElementById("detailTags").innerHTML = project.tags.map(t=>
        `<span class="card-tag ${tagClsMap[t]||'tag-agent'}">${t}</span>`
    ).join("");

    document.getElementById("detailDesc").textContent = project.descFull;
    document.getElementById("detailFeatures").innerHTML = project.features.map(f=>
        `<li>${f}</li>`
    ).join("");

    document.getElementById("detailLinks").innerHTML = `
        <a href="${project.githubUrl}" target="_blank" class="btn btn-primary">在 GitHub 上查看 →</a>
        <a href="index.html" class="btn btn-outline">← 返回首页</a>
    `;
}

// ===== Init on DOM ready =====
document.addEventListener("DOMContentLoaded",()=>{
    if(document.getElementById("projectsGrid")){
        initHome();
    }
    if(document.getElementById("detailContent")){
        initDetail();
    }
});