/* ==========================================================
   FRAMEWORK TANGÍVEL
   ========================================================== */

const ORDER = [
    "cabecalho", "banner", "sobre", "galeria", "contato", "rodape"
];

const PAGE_KEYS = {
    banda: ["inicio", "shows", "musicas", "contato"],
    lanche: ["inicio", "cardapio", "promocoes", "contato"],
    pet: ["inicio", "servicos", "adocao", "contato"],
    portfolio: ["inicio", "projetos", "sobre", "contato"],
    academia: ["inicio", "planos", "modalidades", "contato"],
    games: ["inicio", "jogos", "torneios", "contato"],
    default: ["inicio", "sobre", "contato"]
};

const COMPONENTS = {
    cabecalho: {
        icon: "🧩",
        render: theme => `
      <header class="site-header" data-component="cabecalho">
        <div class="site-logo">${theme.emoji} ${theme.nome}</div>
        <nav class="site-nav" aria-label="Navegação principal">
          ${getPageNavigation(theme)}
        </nav>
        <div class="header-toggles"></div>
      </header>
    `
    },
    banner: {
        icon: "🚀",
        render: theme => `
      <section class="site-banner" data-component="banner">
        <div class="emoji">${theme.emoji}</div>
        <h1>${theme.titulo}</h1>
        <p>${theme.subtitulo}</p>
        <a href="#" data-home-action>${theme.cta}</a>
      </section>
    `
    },
    sobre: {
        icon: "💡",
        render: theme => `
      <section class="site-about" data-component="sobre">
        <h2>Sobre</h2>
        <p>${theme.sobre}</p>
      </section>
    `
    },
    galeria: {
        icon: "🖼️",
        render: theme => `
      <section class="site-gallery" data-component="galeria">
        <h2>Galeria</h2>
        <div class="gallery-grid">
          ${theme.galeria.map(item => `
            <div class="gallery-item">${item}</div>
          `).join("")}
        </div>
      </section>
    `
    },
    contato: {
        icon: "📬",
        render: theme => `
      <section class="site-contact" data-component="contato">
        <h2>${theme.contatoTitulo}</h2>
        <input placeholder="Seu nome">
        <input type="email" placeholder="Seu e-mail">
        <textarea rows="4" placeholder="Sua mensagem"></textarea>
        <button type="button">Enviar mensagem</button>
      </section>
    `
    },
    rodape: {
        icon: "📌",
        render: theme => `
      <footer class="site-footer" data-component="rodape">
        ${theme.emoji} ${theme.nome}
        © ${new Date().getFullYear()}
        — Montado com peças tangíveis
      </footer>
    `
    }
};

const THEMES = {
    banda: {
        icon: "🎸",
        nome: "Os Ecos do Rock",
        emoji: "🎸",
        primary: "#e11d48",
        secondary: "#7c1d3a",
        background: "#0f0f14",
        text: "#f4f4f5",
        card: "#1a1a22",
        menu: ["Início", "Shows", "Músicas", "Contato"],
        titulo: "Ao vivo, alto e sem filtro",
        subtitulo: "A banda que faz o chão tremer. Confira a agenda de shows.",
        cta: "Ver próximos shows",
        sobre: "Nascemos numa garagem e hoje levamos o rock para palcos de todo o país. Guitarras, suor e muita energia.",
        galeria: ["🎤", "🥁", "🎸", "🎧", "🎶", "🔥"],
        contatoTitulo: "Contrate a banda"
    },
    lanche: {
        icon: "🍔",
        nome: "Burger Tangível",
        emoji: "🍔",
        primary: "#f59e0b",
        secondary: "#b45309",
        background: "#fffaf0",
        text: "#2b1a07",
        card: "#fff1d6",
        menu: ["Início", "Cardápio", "Promoções", "Contato"],
        titulo: "O burger que você monta com a mão",
        subtitulo: "Pão macio, carne suculenta e molho da casa.",
        cta: "Peça agora",
        sobre: "Há 10 anos servimos lanches artesanais feitos na hora, com ingredientes frescos e muito carinho.",
        galeria: ["🍔", "🍟", "🥤", "🌭", "🥓", "🍕"],
        contatoTitulo: "Faça seu pedido"
    },
    pet: {
        icon: "🐾",
        nome: "Amigo Pet",
        emoji: "🐾",
        primary: "#10b981",
        secondary: "#0f766e",
        background: "#f2fdf8",
        text: "#073b2e",
        card: "#dcf7ec",
        menu: ["Início", "Serviços", "Adoção", "Contato"],
        titulo: "Cuidado de verdade para quem você ama",
        subtitulo: "Banho, tosa, veterinário e muito carinho.",
        cta: "Agendar visita",
        sobre: "Somos apaixonados por animais e oferecemos cuidado completo para o seu melhor amigo.",
        galeria: ["🐶", "🐱", "🐰", "🦜", "🐹", "🐢"],
        contatoTitulo: "Agende um horário"
    },
    portfolio: {
        icon: "💼",
        nome: "Portfólio Criativo",
        emoji: "💼",
        primary: "#6366f1",
        secondary: "#312e81",
        background: "#f8f9ff",
        text: "#1e1b4b",
        card: "#e8eaff",
        menu: ["Início", "Projetos", "Sobre", "Contato"],
        titulo: "Design e código com propósito",
        subtitulo: "Projetos digitais que contam boas histórias.",
        cta: "Ver projetos",
        sobre: "Profissional multidisciplinar com foco em experiências digitais acessíveis, bonitas e funcionais.",
        galeria: ["🎨", "💻", "📱", "🧠", "🚀", "✨"],
        contatoTitulo: "Vamos conversar?"
    },
    academia: {
        icon: "💪",
        nome: "Ritmo Fit",
        emoji: "💪",
        primary: "#a3e635",
        secondary: "#4d7c0f",
        background: "#0a0a0a",
        text: "#f5f5f5",
        card: "#171717",
        menu: ["Início", "Planos", "Modalidades", "Contato"],
        titulo: "Treine até o limite, sem desculpas",
        subtitulo: "Equipamentos novos, professores presentes e resultado de verdade.",
        cta: "Agendar aula grátis",
        sobre: "Mais de 8 anos ajudando pessoas a ganhar força, saúde e disposição, em qualquer nível de experiência.",
        galeria: ["🏋️", "🥊", "🧘", "🚴", "🥗", "⏱️"],
        contatoTitulo: "Comece hoje"
    },
    games: {
        icon: "🎮",
        nome: "Pixel Arena",
        emoji: "🎮",
        primary: "#22d3ee",
        secondary: "#7c3aed",
        background: "#0b0720",
        text: "#f1f5f9",
        card: "#1a1238",
        menu: ["Início", "Jogos", "Torneios", "Contato"],
        titulo: "Jogue, compita e suba de nível",
        subtitulo: "A arena gamer com máquinas potentes, campeonatos e muita resenha.",
        cta: "Reservar máquina",
        sobre: "Somos uma comunidade de jogadores que se reúne para competir, aprender e se divertir juntos.",
        galeria: ["🎮", "🕹️", "🖥️", "🎧", "🏆", "👾"],
        contatoTitulo: "Reserve seu lugar"
    }
};

const DEFAULT_THEME = {
    nome: "Meu Site",
    emoji: "🌐",
    primary: "#3b82f6",
    secondary: "#1e3a8a",
    background: "#ffffff",
    text: "#111827",
    card: "#f1f5f9",
    menu: ["Início", "Sobre", "Contato"],
    titulo: "Bem-vindo ao seu site tangível",
    subtitulo: "Cada peça QR escaneada vira uma parte real da página.",
    cta: "Saiba mais",
    sobre: "Este site está sendo montado peça por peça através de QR Codes.",
    galeria: ["🌟", "📷", "🎯", "🧩", "💡", "🔧"],
    contatoTitulo: "Fale conosco"
};

const THEME_PAGES = {
    banda: { },
    lanche: { },
    pet: { },
    portfolio: { },
    default: { },
    academia: { },
    games: { }
};

const state = {
    theme: null,
    mounted: new Set(),
    toggles: new Set(),
    rerenders: 0,
    codeTab: "html",
    activePage: "inicio"
};

const $ = id => document.getElementById(id);
const site = $("site");

let personalizer = null;

function currentTheme() { return state.theme ? THEMES[state.theme] : DEFAULT_THEME; }
function currentThemeKey() { return state.theme || "default"; }
function currentPageKeys() { return PAGE_KEYS[currentThemeKey()] || PAGE_KEYS.default; }
function getPageData(pageKey) { return THEME_PAGES[currentThemeKey()]?.[pageKey] || THEME_PAGES.default?.[pageKey] || null; }
function getPageLabel(pageKey) { return currentTheme().menu?.[currentPageKeys().indexOf(pageKey)] || pageKey; }

function getPageNavigation(theme) {
    return currentPageKeys().map((pageKey, index) => {
        const active = pageKey === state.activePage;
        return `<a href="#" data-site-page="${pageKey}" class="${active ? "active" : ""}" aria-current="${active ? "page" : "false"}">${theme.menu?.[index] || getPageLabel(pageKey)}</a>`;
    }).join("");
}

function renderPageCards(cards = []) {
    return cards.map(card => `
    <article class="site-page-card">
      <span class="site-page-card-tag">${card.tag}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
      <a href="#" class="site-page-card-link">Saiba mais <span>↗</span></a>
    </article>
  `).join("");
}

function renderPageForm() {
    return `
    <form class="site-page-form" data-page-form>
      <label>Nome<input name="nome" placeholder="Seu nome" required></label>
      <label>E-mail<input name="email" type="email" placeholder="seuemail@exemplo.com" required></label>
      <label>Mensagem<textarea name="mensagem" rows="5" placeholder="Como podemos ajudar?" required></textarea></label>
      <button type="submit">Enviar mensagem</button>
      <p class="site-form-feedback" data-form-feedback></p>
    </form>
  `;
}

function renderPageView(pageKey) {
    const page = getPageData(pageKey);
    if (!page) {
        return `
      <section class="site-page-view" data-page-view data-page="${pageKey}">
        <div class="site-page-inner">
          <span class="site-page-eyebrow">PÁGINA</span>
          <h1>${getPageLabel(pageKey)}</h1>
          <p>Conteúdo desta página ainda não foi configurado.</p>
        </div>
      </section>
    `;
    }
    return `
    <section class="site-page-view" data-page-view data-page="${pageKey}">
      <div class="site-page-inner">
        <span class="site-page-eyebrow">${page.eyebrow}</span>
        <h1>${page.title}</h1>
        <p class="site-page-description">${page.description}</p>
        ${page.form ? renderPageForm() : `<div class="site-page-grid">${renderPageCards(page.cards)}</div>`}
      </div>
    </section>
  `;
}

function updateActiveNavigation(pageKey) {
    site.querySelectorAll("[data-site-page]").forEach(link => {
        const active = link.dataset.sitePage === pageKey;
        link.classList.toggle("active", active);
        link.setAttribute("aria-current", active ? "page" : "false");
    });
}

function showMountedHome() {
    site.querySelectorAll("[data-component]").forEach(element => { element.hidden = false; });
    site.querySelector("[data-page-view]")?.remove();
}

function showInternalPage(pageKey) {
    site.querySelectorAll("[data-component]").forEach(element => {
        element.hidden = !["cabecalho", "rodape"].includes(element.dataset.component);
    });
    $("empty")?.remove();
    const oldView = site.querySelector("[data-page-view]");
    const newView = htmlToElement(renderPageView(pageKey));
    const footer = site.querySelector('[data-component="rodape"]');
    if (oldView) {
        oldView.replaceWith(newView);
    } else {
        site.insertBefore(newView, footer);
    }
}

function navigateToPage(pageKey = "inicio", shouldScroll = true) {
    state.activePage = currentPageKeys().includes(pageKey) ? pageKey : "inicio";
    if (state.activePage === "inicio") {
        showMountedHome();
        if (!state.mounted.size) renderEmpty();
    } else {
        showInternalPage(state.activePage);
    }
    updateActiveNavigation(state.activePage);
    personalizer?.reapply();
    if (shouldScroll) $("stage")?.scrollTo({ top: 0, behavior: "smooth" });
    log(`Navegação: página ${state.activePage}.`, "ok");
}

function log(message, type = "") {
    const container = $("log");
    if (!container) return;
    const line = document.createElement("div");
    line.className = `logline ${type}`;
    line.textContent = `[${new Date().toLocaleTimeString("pt-BR")}] ${message}`;
    container.appendChild(line);
    container.scrollTop = container.scrollHeight;
}

function toast(message) {
    if (!$("toast")) return;
    $("toast").textContent = message;
    $("toast").classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { $("toast").classList.remove("show"); }, 2400);
}

function applyTheme() {
    const theme = currentTheme();
    site.dataset.theme = currentThemeKey();
    site.style.setProperty("--site-primary", theme.primary);
    site.style.setProperty("--site-secondary", theme.secondary);
    site.style.setProperty("--site-bg", theme.background);
    site.style.setProperty("--site-text", theme.text);
    site.style.setProperty("--site-card", theme.card);
    $("themeLabel").textContent = `Tema: ${state.theme || "Não definido"}`;
}

function htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

function renderEmpty() {
    site.innerHTML = `
    <div class="empty" id="empty">
      <div>
        <div style="font-size:48px">📦</div>
        <h2>Seu site está vazio</h2>
        <button class="btn primary" id="quickStart">Inserir cabeçalho e banner</button>
      </div>
    </div>
  `;
    $("quickStart").onclick = () => { mountComponent("cabecalho"); mountComponent("banner"); };
}

function renderHeaderToggles() {
    const container = site.querySelector('.header-toggles');
    if (!container) return;
    
    container.innerHTML = '';
    const iconDark = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const iconContrast = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20z"></path></svg>`;
    
    if (state.toggles.has('escuro')) {
        container.innerHTML += `<button type="button" class="btn-minimal-toggle" onclick="document.body.classList.toggle('dark-mode')" title="Alternar Modo Escuro">${iconDark}</button>`;
    }
    if (state.toggles.has('contraste')) {
        container.innerHTML += `<button type="button" class="btn-minimal-toggle" onclick="document.body.classList.toggle('high-contrast')" title="Alternar Alto Contraste">${iconContrast}</button>`;
    }
}

function addSiteToggle(type) {
    state.toggles.add(type);
    renderHeaderToggles();
}

function mountComponent(name) {
    if (!COMPONENTS[name]) return;
    if (state.mounted.has(name)) { log(`A peça peca-${name} já está montada.`, "warn"); return; }
    $("empty")?.remove();
    const element = htmlToElement(COMPONENTS[name].render(currentTheme()));
    const index = ORDER.indexOf(name);
    const next = ORDER.slice(index + 1).find(key => state.mounted.has(key));
    let reference = next ? site.querySelector(`[data-component="${next}"]`) : null;
    
    if (name === "cabecalho" && state.activePage !== "inicio") { reference = site.firstElementChild; }
    
    site.insertBefore(element, reference);
    state.mounted.add(name);
    state.rerenders++;
    
    if (state.activePage !== "inicio" && !["cabecalho", "rodape"].includes(name)) {
        element.hidden = true;
    }
    if (state.activePage !== "inicio") {
        navigateToPage(state.activePage, false);
    } else {
        personalizer?.reapply();
    }
    
    if (name === "cabecalho") renderHeaderToggles();

    log(`Peça peca-${name} montada na posição ${index + 1}.`, "ok");
    updateDevTools();
    if (!element.hidden) { element.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
}

function setTheme(name) {
    if (!THEMES[name]) { log(`Tema não cadastrado: ${name}`, "warn"); return; }
    if (state.theme === name) { log(`O tema tema-${name} já está aplicado.`, "warn"); return; }
    personalizer?.restoreInline();
    state.theme = name;
    applyTheme();
    ORDER.filter(key => state.mounted.has(key)).forEach(key => {
        const element = site.querySelector(`[data-component="${key}"]`);
        if (element) {
            element.replaceWith(htmlToElement(COMPONENTS[key].render(currentTheme())));
            state.rerenders++;
        }
    });
    
    renderHeaderToggles();

    if (!currentPageKeys().includes(state.activePage)) { state.activePage = "inicio"; }
    navigateToPage(state.activePage, false);
    updateDevTools();
    log(`Tema tema-${name} aplicado.`, "ok");
    toast(`Tema "${THEMES[name].nome}" aplicado.`);
}

function updateDevTools() {
    const mounted = ORDER.filter(key => state.mounted.has(key));
    $("renderCount").textContent = `Re-renders: ${state.rerenders}`;
    $("activeCount").textContent = `${mounted.length} ativos`;
    $("tree").innerHTML = mounted.length
        ? mounted.map(key => `
        <div class="node">
          <${key}>
          <span class="muted">tema=${state.theme || "padrão"}</span>
        </div>
      `).join("")
        : `<span class="muted">Nenhum componente montado.</span>`;
    document.querySelectorAll("[data-component-card]").forEach(card => {
        card.classList.toggle("used", state.mounted.has(card.dataset.componentCard));
    });
    document.querySelectorAll("[data-theme-card]").forEach(card => {
        card.classList.toggle("used", state.theme === card.dataset.themeCard);
    });
}

function resetSite() {
    personalizer?.clear();
    window.resetBlockConfig?.();
    state.theme = null;
    state.mounted.clear();
    state.toggles.clear();
    state.rerenders = 0;
    state.activePage = "inicio";
    applyTheme();
    renderEmpty();
    updateDevTools();
    if ($("stage")) $("stage").scrollTop = 0;
    log("Site resetado.");
}

/* ==========================================================
   RECONHECIMENTO DE QR CODES E ESTADOS GLOBAIS
   ========================================================== */

const THEME_ALIASES = {
    banda: ["banda", "band", "rock"],
    lanche: ["lanche", "burger", "hamburguer", "food"],
    pet: ["pet", "animal", "animais"],
    portfolio: ["portfolio", "portifolio", "portfolios", "portifolios", "folio"],
    academia: ["academia", "gym", "fitness", "fit"],
    games: ["games", "game", "jogos", "jogo", "gamer", "esports"]
};

const COMPONENT_ALIASES = {
    cabecalho: ["cabecalho", "header", "topo"],
    banner: ["banner", "hero"],
    sobre: ["sobre", "about"],
    galeria: ["galeria", "gallery"],
    contato: ["contato", "contact"],
    rodape: ["rodape", "footer"]
};

const STATE_ALIASES = {
    escuro: ["escuro", "dark", "noite"],
    contraste: ["contraste", "acessibilidade", "daltonico"],
    mobile: ["mobile", "responsivo", "celular"],
    desktop: ["desktop", "pc", "monitor"]
};

const THEME_PREFIXES = ["tema", "theme"];
const COMPONENT_PREFIXES = ["peca", "pecas", "componente", "component", "piece"];
const STATE_PREFIXES = ["estado", "modo", "state"];

function normalizeQrText(value) {
    return String(value ?? "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function resolveAlias(table, value, allowPrefix) {
    if (!value) return null;
    for (const [key, aliases] of Object.entries(table)) {
        if (key === value || aliases.includes(value)) return key;
    }
    if (allowPrefix && value.length >= 3) {
        for (const [key, aliases] of Object.entries(table)) {
            if ([key, ...aliases].some(alias => alias.startsWith(value))) return key;
        }
    }
    return null;
}

function parsePayload(raw) {
    let text = String(raw ?? "");
    try {
        const parsed = JSON.parse(text);
        if (parsed && typeof parsed === "object") {
            text += " " + Object.entries(parsed).map(([key, value]) => `${key}:${value}`).join(" ");
        }
    } catch {}

    const normalized = normalizeQrText(text);
    const regex = /([a-z]+)\s*[:=\-_\/ ]\s*([a-z0-9]+)/g;
    let match;

    while ((match = regex.exec(normalized)) !== null) {
        const [, prefix, value] = match;
        if (THEME_PREFIXES.includes(prefix)) {
            const key = resolveAlias(THEME_ALIASES, value, true);
            if (key) return { type: "theme", key };
        }
        if (COMPONENT_PREFIXES.includes(prefix)) {
            const key = resolveAlias(COMPONENT_ALIASES, value, true);
            if (key) return { type: "component", key };
        }
        if (STATE_PREFIXES.includes(prefix)) {
            const key = resolveAlias(STATE_ALIASES, value, true);
            if (key) return { type: "state", key };
        }
    }

    const words = normalized.match(/[a-z0-9]+/g) || [];
    for (const word of words) {
        const key = resolveAlias(THEME_ALIASES, word, false);
        if (key) return { type: "theme", key };
    }
    for (const word of words) {
        const key = resolveAlias(COMPONENT_ALIASES, word, false);
        if (key) return { type: "component", key };
    }

    const compact = normalized.replace(/[^a-z0-9]/g, "");
    if (compact.includes("portfolio") || compact.includes("portifolio")) {
        return { type: "theme", key: "portfolio" };
    }
    return null;
}

function handlePayload(raw, source = "QR") {
    log(`${source} leu: "${String(raw).slice(0, 200)}"`);
    const result = parsePayload(raw);

    if (!result) {
        log("Conteúdo lido, mas não reconhecido como peça ou tema.", "warn");
        toast("QR lido, mas não reconhecido.");
        return false;
    }

    if (result.type === "state") {
        if (result.key === "mobile") {
            $("mobileButton").click();
            toast("Modo Responsivo Ativado");
        } else if (result.key === "desktop") {
            $("desktopButton").click();
            toast("Modo Desktop Ativado");
        } else if (result.key === "escuro") {
            document.body.classList.add("dark-mode");
            addSiteToggle("escuro");
            toast("Modo Escuro Ativado no Cabeçalho");
        } else if (result.key === "contraste") {
            document.body.classList.add("high-contrast");
            addSiteToggle("contraste");
            toast("Alto Contraste Ativado no Cabeçalho");
        }
        return true;
    }

    log(`Reconhecido como ${result.type === "theme" ? "tema" : "peça"}: ${result.key}`);

    if (result.type === "theme") {
        setTheme(result.key);
    } else {
        mountComponent(result.key);
    }
    return true;
}

function buildCards() {
    $("componentCards").innerHTML = ORDER.map(key => `
    <button class="card" data-component-card="${key}">
      <span class="icon">${COMPONENTS[key].icon}</span>
      <span class="label">peca-${key}</span>
    </button>
  `).join("");

    $("themeCards").innerHTML = Object.keys(THEMES).map(key => `
    <button class="card" data-theme-card="${key}">
      <span class="icon">${THEMES[key].icon}</span>
      <span class="label">tema-${key}</span>
    </button>
  `).join("");

    document.querySelectorAll("[data-component-card]").forEach(card => {
        card.onclick = () => handlePayload(`peca:${card.dataset.componentCard}`, "Simulação");
    });
    document.querySelectorAll("[data-theme-card]").forEach(card => {
        card.onclick = () => handlePayload(`tema:${card.dataset.themeCard}`, "Simulação");
    });
}

/* ==========================================================
   INTERAÇÃO DA PRÉVIA E CÓDIGO GERADO
   ========================================================== */

site.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;
    const pageLink = event.target.closest("[data-site-page]");
    if (pageLink) { event.preventDefault(); navigateToPage(pageLink.dataset.sitePage); return; }
    if (event.target.closest("[data-home-action]")) { event.preventDefault(); navigateToPage("inicio"); return; }
    if (event.target.closest(".site-page-card-link")) { event.preventDefault(); toast("Este conteúdo está sendo preparado."); return; }
    if (event.target.closest('.site-contact button[type="button"]')) { event.preventDefault(); toast("Mensagem enviada."); }
});

site.addEventListener("submit", event => {
    const form = event.target.closest("[data-page-form]");
    if (!form) return;
    event.preventDefault();
    const feedback = form.querySelector("[data-form-feedback]");
    if (feedback) { feedback.textContent = "Mensagem enviada com sucesso."; feedback.classList.add("show"); }
    form.reset();
    toast("Mensagem enviada.");
});

function generatedHTML() {
    const names = ORDER.filter(key => state.mounted.has(key));
    if (!names.length) return "<!-- Nenhuma peça foi montada. -->";
    
    const parts = names.map(key => {
        const element = htmlToElement(COMPONENTS[key].render(currentTheme()));
        window.applyBlockConfig?.(key, element);
        if (key === "cabecalho") {
            const container = element.querySelector('.header-toggles');
            if (container) {
                container.innerHTML = '';
                const iconDark = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
                const iconContrast = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20z"></path></svg>`;
                if (state.toggles.has('escuro')) container.innerHTML += `<button type="button" class="btn-minimal-toggle" onclick="document.body.classList.toggle('dark-mode')" title="Alternar Modo Escuro">${iconDark}</button>`;
                if (state.toggles.has('contraste')) container.innerHTML += `<button type="button" class="btn-minimal-toggle" onclick="document.body.classList.toggle('high-contrast')" title="Alternar Alto Contraste">${iconContrast}</button>`;
            }
        }
        return element.outerHTML;
    });
    return `
<!-- HTML do site montado -->
<!-- Tema: ${state.theme || "padrão"} -->
<main class="site" data-theme="${currentThemeKey()}">
${parts.join("\n\n")}
</main>
  `.trim();
}

function generatedCSS() {
    const theme = currentTheme();
    const base = `
/* CSS do site montado */
:root {
  --site-primary: ${theme.primary};
  --site-secondary: ${theme.secondary};
  --site-bg: ${theme.background};
  --site-text: ${theme.text};
  --site-card: ${theme.card};
}
* { box-sizing: border-box; }
body { margin: 0; color: var(--site-text); font-family: system-ui, sans-serif; background: var(--site-bg); }
[hidden] { display: none !important; }
.site { min-height: 100vh; color: var(--site-text); background: var(--site-bg); }
.site-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 28px; background: var(--site-card); }
.site-logo { color: var(--site-primary); font-weight: 850; }
.site-nav { display: flex; gap: 8px; }
.site-nav a { padding: 8px 12px; border-radius: 8px; color: var(--site-text); text-decoration: none; }
.site-nav a:hover, .site-nav a.active { color: var(--site-primary); background: color-mix(in srgb, var(--site-primary) 12%, transparent); }
.site-banner { padding: 70px 26px; color: white; text-align: center; background: linear-gradient(135deg, var(--site-primary), var(--site-secondary)); }
.site-banner h1 { font-size: clamp(26px, 4vw, 42px); }
.site-banner p { line-height: 1.6; }
.site-banner a { display: inline-block; padding: 10px 19px; border-radius: 30px; color: var(--site-primary); text-decoration: none; background: white; }
.site-about, .site-contact { max-width: 760px; margin: auto; padding: 42px 28px; }
.site-about p { line-height: 1.8; }
.site-gallery { padding: 38px 28px; background: var(--site-card); }
.gallery-grid { max-width: 760px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px auto; }
.gallery-item { aspect-ratio: 1; display: grid; place-items: center; border-radius: 14px; font-size: 40px; background: linear-gradient(135deg, var(--site-primary), var(--site-secondary)); overflow: hidden;}
.site-footer { padding: 22px; color: white; text-align: center; background: var(--site-primary); }
.site-page-view { min-height: 530px; padding: 72px 8%; }
.site-page-inner { width: min(100%, 980px); margin: 0 auto; }
.site-page-eyebrow, .site-page-card-tag { color: var(--site-primary); font-size: 12px; font-weight: 800; letter-spacing: .08em; }
.site-page-description { margin-bottom: 30px; line-height: 1.7; }
.site-page-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.site-page-card { min-height: 220px; padding: 24px; border-radius: 16px; background: var(--site-card); }
.site-page-card h3 { margin: 12px 0; }
.site-page-card p { line-height: 1.6; }
.site-page-card-link { color: var(--site-primary); font-weight: 800; text-decoration: none; }
.site-page-form { display: grid; gap: 16px; max-width: 650px; }
.site-page-form label { display: grid; gap: 8px; }
.site-contact input, .site-contact textarea, .site-page-form input, .site-page-form textarea { display: block; width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid var(--site-secondary); border-radius: 8px; color: var(--site-text); background: var(--site-card); font: inherit; }
.site-contact button, .site-page-form button { padding: 12px 20px; border: 0; border-radius: 8px; color: white; background: var(--site-primary); font: inherit; cursor: pointer; }
.site-form-feedback { display: none; }
.site-form-feedback.show { display: block; }

/* Botões Minimalistas de Estado no Cabeçalho */
.header-toggles { display: flex; align-items: center; gap: 8px; margin-left: 12px; }
.btn-minimal-toggle { background: transparent; border: none; font-size: 22px; cursor: pointer; opacity: 0.8; transition: transform 0.2s, opacity 0.2s; padding: 4px; border-radius: 50%; color: inherit; }
.btn-minimal-toggle:hover { opacity: 1; transform: scale(1.15); }

@media (max-width: 650px) { 
    .site-nav { display: none; } 
    .gallery-grid, .site-page-grid { grid-template-columns: repeat(2, 1fr); } 
    .header-toggles { justify-content: center; margin-left: 0; margin-top: 10px; }
}
@media (max-width: 420px) { .site-page-grid { grid-template-columns: 1fr; } }
  `.trim();
    const custom = personalizer?.exportCSS() || "";
    return custom ? base + "\n\n/* Cores personalizadas */\n\n" + custom : base;
}

function refreshCode() {
    $("codeEditor").value = state.codeTab === "html" ? generatedHTML() : generatedCSS();
    $("codeStatus").textContent = `${state.codeTab.toUpperCase()} — ${state.mounted.size} componente(s) montado(s).`;
}

function download(filename, content, type) {
    const url = URL.createObjectURL(new Blob([content], { type: `${type};charset=utf-8` }));
    const link = document.createElement("a");
    link.href = url; link.download = filename;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$("codeButton").onclick = () => { personalizer?.close(); refreshCode(); $("codeModal").classList.add("open"); };
$("closeModal").onclick = () => { $("codeModal").classList.remove("open"); };
$("codeModal").onclick = event => { if (event.target === $("codeModal")) $("codeModal").classList.remove("open"); };
$("copyCode").onclick = async () => {
    refreshCode();
    try { await navigator.clipboard.writeText($("codeEditor").value); toast("Código copiado."); } 
    catch { $("codeEditor").select(); const copied = document.execCommand("copy"); toast(copied ? "Código copiado." : "Selecione e copie."); }
};
$("downloadHtml").onclick = () => { download("site-montado.html", generatedHTML(), "text/html"); };
$("downloadCss").onclick = () => { download("site-montado.css", generatedCSS(), "text/css"); };

// MODIFICAÇÃO: Botão Extrair Site Completo (HTML + CSS)
if ($("extractSiteBtn")) {
    $("extractSiteBtn").onclick = () => {
        const finalHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${currentTheme().nome} - Site Tangível</title>
  <style>
${generatedCSS()}
  </style>
</head>
<body style="margin: 0; padding: 0;">
${generatedHTML()}
  <script>
    // Scripts embutidos para interatividade básica no site exportado
    document.querySelectorAll('.btn-minimal-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.title.includes('Escuro')) document.body.classList.toggle('dark-mode');
            if (this.title.includes('Contraste')) document.body.classList.toggle('high-contrast');
        });
    });
  </script>
</body>
</html>`;
        download("meu-site-tangivel.html", finalHTML, "text/html");
        toast("Site completo extraído com sucesso!");
    };
}

document.querySelectorAll(".tab").forEach(tab => {
    tab.onclick = () => {
        document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
        tab.classList.add("active"); state.codeTab = tab.dataset.tab; refreshCode();
    };
});

$("desktopButton").onclick = () => { site.classList.remove("mobile"); $("desktopButton").classList.add("active"); $("mobileButton").classList.remove("active"); };
$("mobileButton").onclick = () => { site.classList.add("mobile"); $("mobileButton").classList.add("active"); $("desktopButton").classList.remove("active"); };
$("resetButton").onclick = resetSite;
$("clearLog").onclick = () => $("log").replaceChildren();
document.addEventListener("keydown", event => { if (event.key === "Escape") { $("codeModal").classList.remove("open"); personalizer?.close(); } });

/* ==========================================================
   PERSONALIZADOR DE CORES (MANTIDO DO ORIGINAL)
   ========================================================== */
function createPersonalizer() {
    if ($("tangibleColorPanel")) { console.error("Remova o personalizador antigo antes de usar esta versão."); return null; }
    let button = $("tangibleCustomizeButton");
    if (!button) { button = document.createElement("button"); button.id = "tangibleCustomizeButton"; button.className = "btn"; button.textContent = "🎨 Personalizar"; }
    $("resetButton").before(button);
    button.type = "button"; button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-controls", "tangibleColorPanel");

    const changes = new Map(); const originals = new Map();
    let opened = false, selecting = false, hovered = null, selection = null, outlineFrame = 0, reapplyFrame = 0;

    const uiStyle = document.createElement("style");
    uiStyle.textContent = `
    #tangibleColorPanel { position: fixed; right: 18px; bottom: 18px; z-index: 10000; width: min(380px, calc(100vw - 36px)); max-height: calc(100vh - 36px); overflow: auto; padding: 16px; border: 1px solid #475569; border-radius: 12px; color: #f8fafc; background: #0f172a; box-shadow: 0 18px 60px #0009; font: 13px/1.5 system-ui, sans-serif; box-sizing: border-box; }
    #tangibleColorPanel *, #tangibleColorOutline { box-sizing: border-box; }
    #tangibleColorPanel[hidden], #tangibleColorOutline[hidden] { display: none !important; }
    #tangibleColorPanel .tcp-header { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 12px; }
    #tangibleColorPanel .tcp-note { color: #94a3b8; font-size: 12px; overflow-wrap: anywhere; }
    #tangibleColorPanel .tcp-field { display: grid; gap: 7px; margin: 14px 0; }
    #tangibleColorPanel .tcp-row { display: flex; align-items: center; gap: 8px; }
    #tangibleColorPanel select, #tangibleColorPanel input[type="text"] { width: 100%; min-width: 0; padding: 10px; border: 1px solid #475569; border-radius: 7px; color: #f8fafc; background: #1e293b; font: inherit; }
    #tangibleColorPanel input[type="color"] { width: 48px; height: 40px; flex: 0 0 48px; padding: 3px; border: 1px solid #475569; border-radius: 7px; background: #1e293b; cursor: pointer; }
    #tangibleColorPanel button { padding: 9px 12px; border: 1px solid #475569; border-radius: 7px; color: #f8fafc; background: #1e293b; font: inherit; cursor: pointer; }
    #tangibleColorPanel #tcpApply { border-color: #2563eb; background: #2563eb; }
    #tangibleColorPanel .tcp-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
    #tangibleColorPanel :disabled { opacity: .45; cursor: not-allowed; }
    #tangibleColorMessage { min-height: 20px; margin-bottom: 0; color: #67e8f9; overflow-wrap: anywhere; }
    #tangibleColorOutline { position: fixed; z-index: 9999; pointer-events: none; border: 2px solid #22d3ee; border-radius: 3px; }
    #tangibleColorOutline span { position: absolute; left: 0; top: 0; max-width: 280px; padding: 3px 6px; color: #082f49; background: #22d3ee; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 11px/1.4 monospace; }
    #site.tcp-selecting, #site.tcp-selecting * { cursor: crosshair !important; }
  `;
    document.head.appendChild(uiStyle);
    const customStyle = document.createElement("style"); customStyle.id = "tangibleCustomColors"; document.head.appendChild(customStyle);

    const panel = document.createElement("section"); panel.id = "tangibleColorPanel"; panel.hidden = true; panel.setAttribute("aria-label", "Personalizar cores");
    panel.innerHTML = `
    <div class="tcp-header"><strong>🎨 Personalizar cores</strong><button type="button" id="tcpClose">Fechar ×</button></div>
    <p class="tcp-note">Selecione um elemento como no inspetor do navegador. As alterações ficam separadas por tema.</p>
    <button type="button" id="tcpSelect">⌖ Selecionar elemento</button>
    <p class="tcp-note" id="tcpSelected">Nenhum elemento selecionado.</p>
    <button type="button" id="tcpParent">↑ Selecionar elemento pai</button>
    <label class="tcp-field">Propriedade
      <select id="tcpProperty"><option value="color">Cor do texto</option><option value="background">Cor do fundo</option><option value="border-color">Cor da borda</option></select>
    </label>
    <div class="tcp-field"><label for="tcpValue">Cor</label>
      <div class="tcp-row"><input type="color" id="tcpPicker" value="#ffffff"><input type="text" id="tcpValue" value="#ffffff" placeholder="#dc09cb" spellcheck="false"></div>
    </div>
    <p class="tcp-note">Aceita HEX, RGB, HSL, nomes de cores e transparent. Fundo substitui gradientes por uma cor sólida. Cor da borda não cria uma borda nova.</p>
    <div class="tcp-actions"><button type="button" id="tcpApply">Aplicar cor</button><button type="button" id="tcpRestore">Restaurar elemento</button></div>
    <p id="tangibleColorMessage" role="status" aria-live="polite"></p>
  `;
    document.body.appendChild(panel);

    const outline = document.createElement("div"); outline.id = "tangibleColorOutline"; outline.hidden = true; outline.setAttribute("aria-hidden", "true");
    const outlineLabel = document.createElement("span"); outline.appendChild(outlineLabel); document.body.appendChild(outline);
    const propertyInput = $("tcpProperty"), valueInput = $("tcpValue"), picker = $("tcpPicker");

    function message(text) { $("tangibleColorMessage").textContent = text; }
    function describe(element) { return element.localName + Array.from(element.classList).filter(name => name !== "tcp-selecting").slice(0, 3).map(name => "." + name).join(""); }
    function segment(element) { const siblings = Array.from(element.parentElement.children).filter(child => child.localName === element.localName); return `${element.localName}:nth-of-type(${siblings.indexOf(element) + 1})`; }
    function pathFor(element) {
        if (element === site) return "";
        const anchor = element.closest("[data-component], [data-page-view]");
        const parts = []; let cursor = element;
        if (anchor && site.contains(anchor)) {
            while (cursor !== anchor) { parts.unshift(segment(cursor)); cursor = cursor.parentElement; }
            const anchorSelector = anchor.hasAttribute("data-component") ? `[data-component="${CSS.escape(anchor.dataset.component)}"]` : anchor.hasAttribute("data-page") ? `[data-page-view][data-page="${CSS.escape(anchor.dataset.page)}"]` : "[data-page-view]";
            return " > " + [anchorSelector, ...parts].join(" > ");
        }
        while (cursor && cursor !== site) { parts.unshift(segment(cursor)); cursor = cursor.parentElement; }
        return " > " + parts.join(" > ");
    }
    function selectorFor(record, exporting = false) { return `${exporting ? ".site" : "#site"}[data-theme="${CSS.escape(record.theme)}"]${record.path}`; }
    function selectedElement() { if (!selection || selection.theme !== currentThemeKey()) return null; const selector = selectorFor(selection); return site.matches(selector) ? site : site.querySelector(selector); }
    function visible(element) { return Boolean(element && element.isConnected && element.getClientRects().length); }
    function declarationsFor(colors) {
        const declarations = {};
        for (const [property, value] of Object.entries(colors)) {
            if (property === "background") { declarations["background-color"] = value; declarations["background-image"] = "none"; } 
            else if (property === "border-color") { for (const side of ["top", "right", "bottom", "left"]) declarations[`border-${side}-color`] = value; } 
            else { declarations[property] = value; }
        }
        return declarations;
    }
    function renderRules(exporting = false) {
        return Array.from(changes.values()).map(record => {
            const lines = Object.entries(declarationsFor(record.colors)).map(([property, value]) => `  ${property}: ${value} !important;`);
            return `${selectorFor(record, exporting)} {\n${lines.join("\n")}\n}`;
        }).join("\n\n");
    }
    function restoreInline() { for (const [element, originalStyle] of originals) { if (originalStyle === null) element.removeAttribute("style"); else element.setAttribute("style", originalStyle); } originals.clear(); }
    function reapply() {
        restoreInline(); customStyle.textContent = renderRules();
        for (const record of changes.values()) {
            if (record.theme !== currentThemeKey()) continue;
            const selector = selectorFor(record); const elements = [];
            if (site.matches(selector)) elements.push(site);
            elements.push(...site.querySelectorAll(selector));
            for (const element of elements) {
                if (!originals.has(element)) originals.set(element, element.getAttribute("style"));
                for (const [property, value] of Object.entries(declarationsFor(record.colors))) element.style.setProperty(property, value, "important");
            }
        }
        updateControls(); scheduleOutline();
    }
    function updateControls() {
        const element = selectedElement(); const disabled = selecting || !visible(element);
        propertyInput.disabled = disabled; valueInput.disabled = disabled; picker.disabled = disabled;
        $("tcpApply").disabled = disabled; $("tcpRestore").disabled = disabled; $("tcpParent").disabled = disabled || element === site;
    }
    function updateOutline() {
        const element = selecting ? hovered : selectedElement();
        if (!opened || !visible(element) || $("codeModal")?.classList.contains("open")) { outline.hidden = true; return; }
        const rect = element.getBoundingClientRect(), stageRect = $("stage").getBoundingClientRect();
        const left = Math.max(rect.left, stageRect.left, 0), top = Math.max(rect.top, stageRect.top, 0);
        const right = Math.min(rect.right, stageRect.right, window.innerWidth), bottom = Math.min(rect.bottom, stageRect.bottom, window.innerHeight);
        if (right <= left || bottom <= top) { outline.hidden = true; return; }
        outline.hidden = false; outline.style.left = left + "px"; outline.style.top = top + "px";
        outline.style.width = (right - left) + "px"; outline.style.height = (bottom - top) + "px"; outlineLabel.textContent = describe(element);
    }
    function scheduleOutline() { if (outlineFrame) return; outlineFrame = requestAnimationFrame(() => { outlineFrame = 0; updateOutline(); }); }
    function toHex(value) {
        const match = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
        if (!match) return "#ffffff";
        return "#" + match.slice(1, 4).map(channel => Math.max(0, Math.min(255, Math.round(Number(channel)))).toString(16).padStart(2, "0")).join("");
    }
    function loadColor() {
        const element = selectedElement(); if (!element) return;
        const computed = getComputedStyle(element);
        const value = propertyInput.value === "background" ? computed.backgroundColor : propertyInput.value === "border-color" ? computed.borderTopColor : computed.color;
        valueInput.value = value; picker.value = toHex(value);
    }
    function normalizeColor(raw) {
        const value = String(raw).trim();
        if (!value || /[;{}]/.test(value) || /\b(?:var|env)\s*\(/i.test(value) || /^(?:inherit|initial|unset|revert|revert-layer|currentcolor)$/i.test(value)) return null;
        const probe = document.createElement("span"); probe.style.setProperty("color", value); return probe.style.getPropertyValue("color") || null;
    }
    function setSelecting(value) { selecting = value; site.classList.toggle("tcp-selecting", value); updateControls(); }
    function selectElement(element) {
        selection = { theme: currentThemeKey(), path: pathFor(element) }; hovered = null; setSelecting(false);
        $("tcpSelect").textContent = "⌖ Selecionar outro elemento"; $("tcpSelected").textContent = "Selecionado: " + describe(element);
        message("Escolha a propriedade e clique em Aplicar cor."); loadColor(); updateControls(); updateOutline();
    }
    function startSelection() { hovered = null; setSelecting(true); $("tcpSelect").textContent = "⌖ Clique no elemento do site"; message("Clique diretamente no texto, botão ou área desejada."); updateOutline(); }
    function close() { opened = false; hovered = null; setSelecting(false); panel.hidden = true; outline.hidden = true; button.classList.remove("active"); button.setAttribute("aria-expanded", "false"); }

    button.addEventListener("click", () => { if (opened) { close(); return; } opened = true; panel.hidden = false; button.classList.add("active"); button.setAttribute("aria-expanded", "true"); startSelection(); });
    $("tcpClose").addEventListener("click", close); $("tcpSelect").addEventListener("click", startSelection);
    $("tcpParent").addEventListener("click", () => { const element = selectedElement(); const parent = element?.parentElement; if (parent && (parent === site || site.contains(parent))) selectElement(parent); });
    document.addEventListener("pointermove", event => { if (!opened || !selecting) return; hovered = event.target instanceof Element && site.contains(event.target) ? event.target : null; scheduleOutline(); }, true);
    document.addEventListener("click", event => { if (!opened || !selecting || !(event.target instanceof Element) || !site.contains(event.target)) return; event.preventDefault(); event.stopImmediatePropagation(); selectElement(event.target); }, true);
    propertyInput.addEventListener("change", loadColor); picker.addEventListener("input", () => { valueInput.value = picker.value; });
    function updateCodeIfOpen() { if ($("codeModal").classList.contains("open")) refreshCode(); }
    function applyColor() {
        const element = selectedElement(); if (!selection || !visible(element)) { message("Selecione um elemento visível primeiro."); return; }
        const color = normalizeColor(valueInput.value); if (!color) { message("Cor inválida."); return; }
        const property = propertyInput.value; if (!["color", "background", "border-color"].includes(property)) { message("Propriedade inválida."); return; }
        const key = JSON.stringify(selection); const record = changes.get(key) || { theme: selection.theme, path: selection.path, colors: {} };
        record.colors[property] = color; changes.set(key, record); reapply(); loadColor(); updateCodeIfOpen();
        message("Cor aplicada com sucesso!");
    }
    $("tcpApply").addEventListener("click", applyColor);
    valueInput.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); applyColor(); } });
    $("tcpRestore").addEventListener("click", () => { if (!selection) return; changes.delete(JSON.stringify(selection)); reapply(); loadColor(); updateCodeIfOpen(); message("Cores originais restauradas."); });
    function clear() { changes.clear(); restoreInline(); customStyle.textContent = ""; selection = null; $("tcpSelected").textContent = "Nenhum elemento selecionado."; message(""); close(); }
    window.addEventListener("resize", scheduleOutline); document.addEventListener("scroll", scheduleOutline, true);
    const observer = new MutationObserver(() => {
        if (reapplyFrame) return;
        reapplyFrame = requestAnimationFrame(() => {
            reapplyFrame = 0; reapply(); if (!opened || !selection) return;
            const element = selectedElement(); $("tcpSelected").textContent = visible(element) ? "Selecionado: " + describe(element) : "Elemento não visível.";
        });
    });
    observer.observe(site, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-theme", "hidden", "class"] });
    updateControls();
    return { reapply, restoreInline, clear, close, exportCSS: () => renderRules(true) };
}

/* ==========================================================
   SCANNER
   ========================================================== */

const video = $("video");
const canvas = $("canvas");
const ctx = canvas?.getContext("2d", { willReadFrequently: true });
let lastPayload = "", lastReadAt = 0, scannerFrame = 0, scannerStream = null;

async function startScanner() {
    if (typeof jsQR === "undefined") { $("scannerStatus").textContent = "Leitor QR indisponível"; log("A biblioteca jsQR não carregou.", "warn"); return; }
    if (!navigator.mediaDevices?.getUserMedia || !video || !ctx) { $("scannerStatus").textContent = "Câmera indisponível"; return; }
    try {
        scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
        video.srcObject = scannerStream; await video.play();
        $("scannerStatus").textContent = "Aproxime o QR Code"; log("Câmera ativada.");
        scannerFrame = requestAnimationFrame(scanFrame);
    } catch (error) {
        scannerStream?.getTracks().forEach(track => track.stop()); scannerStream = null;
        $("scannerStatus").textContent = "Câmera bloqueada"; log("Câmera não disponível.", "warn");
    }
}

function scanFrame() {
    try {
        if (video.readyState >= video.HAVE_ENOUGH_DATA && video.videoWidth) {
            const scale = Math.min(1, 640 / video.videoWidth);
            canvas.width = Math.floor(video.videoWidth * scale); canvas.height = Math.floor(video.videoHeight * scale);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(image.data, image.width, image.height, { inversionAttempts: "attemptBoth" });
            if (code?.data) {
                const now = Date.now();
                if (code.data !== lastPayload || now - lastReadAt > 1800) {
                    lastPayload = code.data; lastReadAt = now;
                    $("scanner").classList.add("hit"); $("scannerStatus").textContent = "QR Code detectado";
                    handlePayload(code.data, "QR");
                    setTimeout(() => { $("scanner").classList.remove("hit"); $("scannerStatus").textContent = "Aproxime o QR Code"; }, 1200);
                }
            }
        }
    } catch (error) {}
    scannerFrame = requestAnimationFrame(scanFrame);
}
window.addEventListener("pagehide", () => { cancelAnimationFrame(scannerFrame); scannerStream?.getTracks().forEach(track => track.stop()); });

/* ==========================================================
   CONFIGURAÇÃO AVANÇADA DE CADA BLOCO E SELEÇÃO DE IMAGENS 
   ========================================================== */
(() => {
    const BLOCK_NAMES = {
        cabecalho: "Cabeçalho", banner: "Banner", sobre: "Sobre",
        galeria: "Galeria", contato: "Contato", rodape: "Rodapé"
    };

    const TEXT_FIELDS = {
        cabecalho: [["Logo", ".site-logo"]],
        banner: [["Título", "h1"], ["Subtítulo", "p"], ["Botão", "a"], ["Imagem/Emoji", ".emoji"]],
        sobre: [["Título", "h2"], ["Texto", "p"]],
        galeria: [
            ["Título", "h2"],
            ["Item 1 (URL/Emoji)", ".gallery-item:nth-child(1)"],
            ["Item 2 (URL/Emoji)", ".gallery-item:nth-child(2)"],
            ["Item 3 (URL/Emoji)", ".gallery-item:nth-child(3)"]
        ],
        contato: [["Título", "h2"], ["Botão", "button"]],
        rodape: [["Texto", null]]
    };

    const THEME_FOLDERS = {
        banda: { dir: "Banda", prefix: "Banda", max: 29 },
        lanche: { dir: "Lanches", prefix: "Lanches", max: 35 },
        pet: { dir: "Pets", prefix: "Pets", max: 26 },
        portfolio: { dir: "Portfolio", prefix: "Portfolio", max: 12 },
        academia: { dir: "Academia", prefix: "Academia", max: 8 },
        games: { dir: "Jogo", prefix: "Jogo", max: 10 }
    };

    const TEXT_TARGETS = "h1,h2,h3,p,.site-logo,.site-nav a";
    const ACCENT_TARGETS = "a[data-home-action],button";

    let config = {};
    const layer = document.createElement("div"); layer.id = "blockTools"; document.body.appendChild(layer);
    const panel = document.createElement("div"); panel.id = "blockPanel"; panel.hidden = true; document.body.appendChild(panel);
    let openKey = null; const buttons = {};

    function blockConfig(key, create) {
        const theme = currentThemeKey();
        if (!config[theme]) { if (!create) return null; config[theme] = {}; }
        if (!config[theme][key] && create) {
            config[theme][key] = { texts: {}, padding: {}, align: "", hideMenu: false, extraLinks: "" };
            if (key === "galeria") {
                config[theme][key].galeriaItems = [...currentTheme().galeria];
            }
        }
        return config[theme][key] || null;
    }

    function applyBlockConfig(key, element) {
        const cfg = blockConfig(key, false);
        if (!cfg || !element) return;

        // Formatação (Cores)
        if (cfg.bg) element.style.background = cfg.bg;
        if (cfg.color) {
            element.style.color = cfg.color;
            element.querySelectorAll(TEXT_TARGETS).forEach(node => node.style.color = cfg.color);
        }
        if (cfg.accent) {
            element.querySelectorAll(ACCENT_TARGETS).forEach(node => node.style.background = cfg.accent);
        }
        
        // Espaçamentos
        if (cfg.padding) {
            if (cfg.padding.top) element.style.paddingTop = cfg.padding.top + "px";
            if (cfg.padding.bottom) element.style.paddingBottom = cfg.padding.bottom + "px";
            if (cfg.padding.left) element.style.paddingLeft = cfg.padding.left + "px";
            if (cfg.padding.right) element.style.paddingRight = cfg.padding.right + "px";
        }
        
        // Alinhamento
        if (cfg.align) {
            element.style.textAlign = cfg.align;
            const grid = element.querySelector('.gallery-grid');
            if (grid) grid.style.justifyContent = cfg.align === 'center' ? 'center' : (cfg.align === 'right' ? 'end' : 'start');
        }

        // Textos normais e Imagens soltas (Banner)
        (TEXT_FIELDS[key] || []).forEach(([label, selector]) => {
            const value = cfg.texts[label];
            if (value === undefined) return;
            const target = selector ? element.querySelector(selector) : element;
            if (target) {
                if ((label.includes("URL") || label.includes("Imagem") || label.includes("Item")) && 
                    (value.toLowerCase().includes(".png") || value.toLowerCase().includes(".jpg") || value.startsWith("http") || value.startsWith("data:image"))) {
                    
                    if (target.classList.contains("emoji")) {
                        target.innerHTML = `<img src="${value}" style="height:140px; width:auto; max-width:100%; object-fit:contain; display:block; margin:0 auto; background:transparent;">`;
                    } else {
                        target.innerHTML = `<img src="${value}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block; background:transparent;">`;
                    }
                    target.style.background = "transparent";
                } else {
                    target.textContent = value;
                }
            }
        });

        // Itens dinâmicos da Galeria
        if (key === "galeria" && cfg.galeriaItems) {
            const grid = element.querySelector('.gallery-grid');
            if (grid) {
                grid.innerHTML = cfg.galeriaItems.map(val => `<div class="gallery-item" style="transition:0.3s;"></div>`).join("");
                const items = grid.querySelectorAll('.gallery-item');
                cfg.galeriaItems.forEach((val, i) => {
                    const target = items[i];
                    if ((val.toLowerCase().includes(".png") || val.toLowerCase().includes(".jpg") || val.startsWith("http") || val.startsWith("data:image"))) {
                        target.innerHTML = `<img src="${val}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit; display:block; background:transparent;">`;
                        target.style.background = "transparent";
                    } else {
                        target.textContent = val;
                        target.style.background = ""; 
                    }
                });
            }
        }
        
        // Controle de links no Cabeçalho
        if (key === "cabecalho") {
            const nav = element.querySelector(".site-nav");
            if (nav) {
                nav.querySelectorAll("a:not(.extra-link)").forEach(link => link.style.display = cfg.hideMenu ? "none" : "");
                nav.querySelectorAll(".extra-link").forEach(el => el.remove());
                if (cfg.extraLinks) {
                    cfg.extraLinks.split(",").map(s => s.trim()).filter(Boolean).forEach(linkText => {
                        const a = document.createElement("a");
                        a.href = "#"; a.className = "extra-link"; a.textContent = linkText;
                        if (cfg.color) a.style.color = cfg.color;
                        nav.appendChild(a);
                    });
                }
            }
        }
    }

    function blockElement(key) { return site.querySelector(`[data-component="${key}"]`); }

    function restoreBlock(key) {
        const theme = currentThemeKey();
        if (config[theme]) delete config[theme][key];
        const old = blockElement(key);
        if (!old) return;
        const fresh = htmlToElement(COMPONENTS[key].render(currentTheme()));
        fresh.hidden = old.hidden;
        old.replaceWith(fresh);
        if (key === "cabecalho") renderHeaderToggles();
    }

    function currentValues(key, element) {
        const cfg = blockConfig(key, false) || { texts: {} };
        const style = getComputedStyle(element);
        const accentNode = element.querySelector(ACCENT_TARGETS);
        const toHex = (value) => {
            const m = String(value).match(/rgba?\(([^)]+)\)/);
            if (!m) return "#ffffff";
            const [r, g, b, a = 1] = m[1].split(",").map(Number);
            if (a === 0) return "#ffffff";
            return "#" + [r, g, b].map(n => Math.round(n).toString(16).padStart(2, "0")).join("");
        };
        return {
            bg: cfg.bg || toHex(style.backgroundColor),
            color: cfg.color || toHex(style.color),
            accent: cfg.accent || (accentNode ? toHex(getComputedStyle(accentNode).backgroundColor) : "#3b82f6")
        };
    }

    function textValue(key, element, label, selector) {
        const cfg = blockConfig(key, false);
        if (cfg && cfg.texts[label] !== undefined) return cfg.texts[label];
        const target = selector ? element.querySelector(selector) : element;
        if (!target) return "";
        const img = target.querySelector("img");
        return img ? decodeURI(img.getAttribute("src")) : target.textContent.trim().replace(/\s+/g, " ");
    }

    function escapeAttr(value) { return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }

    function openPanel(key) {
        const element = blockElement(key);
        if (!element) return;
        openKey = key;
        const fields = TEXT_FIELDS[key] || [];
        const values = currentValues(key, element);
        const cfg = blockConfig(key, false) || { padding: {} };

        // Função utilitária para gerar o HTML do seletor de imagens locais
        function generateImagePicker(val, inputSelectorAttr) {
            const themeKey = currentThemeKey();
            const folderData = THEME_FOLDERS[themeKey];
            if (!folderData) {
                return `<div style="padding: 10px; font-size: 11px; color: #9ca3af; background: #1f2328; border: 1px dashed #4b5563; border-radius: 6px; margin-top: 6px; text-align: center;">⚠️ Escaneie um <strong>Tema</strong> para ver as imagens locais.</div>`;
            }
            let thumbs = "";
            for (let j = 1; j <= folderData.max; j++) {
                
                // ALTERAÇÃO PRINCIPAL AQUI: REMOVIDO O "imagens-framework/"
                const rawPath = `${folderData.dir}/${folderData.prefix} (${j}).png`;
                const src = encodeURI(rawPath);
                
                const isSelected = (val === src || val === rawPath);
                thumbs += `
                <div style="position:relative; width:100%; aspect-ratio:1;">
                  <img src="${src}" class="image-picker-thumb" ${inputSelectorAttr} data-src="${src}" 
                       style="width:100%; height:100%; object-fit:cover; border-radius:4px; cursor:pointer; border:2px solid ${isSelected ? '#34d399' : 'transparent'}; background:#2b2f36;" 
                       onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YjU1NjMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm88L3RleHQ+PC9zdmc+'">
                </div>`;
            }
            return `<div class="image-picker-grid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:6px; max-height:160px; overflow-y:auto; padding:6px; background:#1f2328; border:1px solid #4b5563; border-radius:6px; margin-top:6px;">${thumbs}</div>`;
        }

        // Linhas de texto normais (e a imagem solta do banner)
        const textRows = fields.map(([label, selector], i) => {
            const isMedia = label.includes("URL") || label.includes("Imagem") || label.includes("Item");
            const val = escapeAttr(textValue(key, element, label, selector));
            if (isMedia) {
                const mediaPickerHtml = generateImagePicker(val, `data-target="${i}"`);
                return `
                  <label style="display:flex; flex-direction:column; gap:4px; margin-bottom:12px;">
                    <span style="font-size: 10px; color:#9ca3af; font-weight:bold;">${label}</span>
                    <input type="text" data-text="${i}" value="${val}" style="width:100%; padding:7px; border:1px solid #4b5563; border-radius:8px; background:#1f2328; color:#f3f4f6;" placeholder="URL, caminho ou Emoji">
                    ${mediaPickerHtml}
                  </label>`;
            }
            return `<label class="bp-row"><span>${label}</span><input type="text" data-text="${i}" value="${val}"></label>`;
        }).join("");

        // Linhas Dinâmicas da Galeria
        let galeriaRows = "";
        if (key === "galeria") {
            const items = cfg.galeriaItems || currentTheme().galeria;
            galeriaRows = `<div class="bp-title" style="margin-top:16px;">Itens da Galeria (${items.length})</div>` + items.map((val, i) => {
                const safeVal = escapeAttr(val);
                const mediaPickerHtml = generateImagePicker(val, `data-galeria-target="${i}"`);
                return `
                <div class="bp-galeria-item" style="margin-bottom:12px; padding:8px; border:1px solid #4b5563; border-radius:8px; background:#1f2328;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                      <span style="font-size:10px; color:#9ca3af; font-weight:bold;">Item ${i + 1} (Imagem/Emoji)</span>
                      <button type="button" class="btn-remove-item" data-index="${i}" style="background:transparent; border:none; color:#ef4444; cursor:pointer; font-size:14px; padding:0;">🗑️</button>
                    </div>
                    <input type="text" class="galeria-item-input" data-index="${i}" value="${safeVal}" style="width:100%; padding:7px; border:1px solid #4b5563; border-radius:6px; background:#2b2f36; color:#f3f4f6; margin-bottom:6px;" placeholder="Caminho, URL ou Emoji">
                    ${mediaPickerHtml}
                </div>`;
            }).join("") + `<button type="button" id="btnAddGaleriaItem" style="width:100%; padding:8px; margin-bottom:12px; border:1px dashed #4b5563; border-radius:8px; background:transparent; color:#34d399; cursor:pointer; font-weight:bold;">+ Adicionar Item</button>`;
        }

        const colorRow = (name, label) => `
      <label class="bp-row bp-color">
        <span>${label}</span>
        <input type="color" data-color="${name}" value="${values[name]}">
      </label>`;

        panel.innerHTML = `
      <div class="bp-head">
        <strong>⚙️ Bloco · ${BLOCK_NAMES[key]}</strong>
        <button type="button" class="bp-close" aria-label="Fechar">×</button>
      </div>
      
      ${textRows ? `<div class="bp-title">Conteúdo & Textos</div>${textRows}` : ""}
      ${galeriaRows}
      
      ${key === "cabecalho" ? `
      <div class="bp-title">Menu</div>
      <label class="bp-row">
        <span>Ocultar links originais</span>
        <input type="checkbox" data-hide-menu ${cfg.hideMenu ? "checked" : ""} style="width:auto; margin-left:auto;">
      </label>
      <label class="bp-row">
        <span>Novos Links (vírgula)</span>
        <input type="text" data-extra placeholder="Ex: Loja, Blog" value="${cfg.extraLinks || ''}">
      </label>` : ""}
      
      <div class="bp-title">Formatação e Espaçamento</div>
      <label class="bp-row" style="margin-bottom: 8px;">
        <span>Alinhamento</span>
        <select data-align style="width:100%; padding: 6px; background: #1f2328; color: white; border-radius: 6px; border: 1px solid #4b5563;">
          <option value="" ${!cfg.align ? "selected" : ""}>Padrão</option>
          <option value="left" ${cfg.align === "left" ? "selected" : ""}>Esquerda</option>
          <option value="center" ${cfg.align === "center" ? "selected" : ""}>Centro</option>
          <option value="right" ${cfg.align === "right" ? "selected" : ""}>Direita</option>
        </select>
      </label>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
         <label class="bp-row" style="margin:0;"><span>Cima</span><input type="number" data-pad="top" value="${cfg.padding?.top || ''}" placeholder="px"></label>
         <label class="bp-row" style="margin:0;"><span>Baixo</span><input type="number" data-pad="bottom" value="${cfg.padding?.bottom || ''}" placeholder="px"></label>
         <label class="bp-row" style="margin:0;"><span>Esq.</span><input type="number" data-pad="left" value="${cfg.padding?.left || ''}" placeholder="px"></label>
         <label class="bp-row" style="margin:0;"><span>Dir.</span><input type="number" data-pad="right" value="${cfg.padding?.right || ''}" placeholder="px"></label>
      </div>

      <div class="bp-title">Cores Universais</div>
      ${colorRow("bg", "Fundo")}
      ${colorRow("color", "Texto")}
      ${colorRow("accent", "Botões")}
      <button type="button" class="bp-restore">↺ Restaurar bloco</button>
    `;

        panel.hidden = false; positionPanel();
        panel.querySelector(".bp-close").onclick = closePanel;
        panel.querySelector(".bp-restore").onclick = () => { restoreBlock(key); closePanel(); };

        // Adicionar / Remover Itens Dinâmicos (GALERIA)
        if (key === "galeria") {
            panel.querySelector("#btnAddGaleriaItem").addEventListener("click", () => {
                const c = blockConfig(key, true);
                if (!c.galeriaItems) c.galeriaItems = [...currentTheme().galeria];
                c.galeriaItems.push("📷");
                applyBlockConfig(key, blockElement(key));
                const st = panel.scrollTop; openPanel(key); panel.scrollTop = st;
            });

            panel.querySelectorAll(".btn-remove-item").forEach(btn => {
                btn.addEventListener("click", () => {
                    const idx = Number(btn.dataset.index);
                    const c = blockConfig(key, true);
                    if (!c.galeriaItems) c.galeriaItems = [...currentTheme().galeria];
                    c.galeriaItems.splice(idx, 1);
                    applyBlockConfig(key, blockElement(key));
                    const st = panel.scrollTop; openPanel(key); panel.scrollTop = st;
                });
            });

            panel.querySelectorAll(".galeria-item-input").forEach(input => {
                input.addEventListener("input", () => {
                    const idx = Number(input.dataset.index);
                    const c = blockConfig(key, true);
                    if (!c.galeriaItems) c.galeriaItems = [...currentTheme().galeria];
                    c.galeriaItems[idx] = input.value;
                    applyBlockConfig(key, blockElement(key));
                });
            });
        }

        // Clicks nas miniaturas de imagens
        panel.querySelectorAll(".image-picker-thumb").forEach(thumb => {
            thumb.addEventListener("click", () => {
                let input;
                if (thumb.hasAttribute("data-target")) {
                    input = panel.querySelector(`input[data-text="${thumb.dataset.target}"]`);
                } else if (thumb.hasAttribute("data-galeria-target")) {
                    input = panel.querySelector(`input.galeria-item-input[data-index="${thumb.dataset.galeriaTarget}"]`);
                }
                
                if (input) {
                    input.value = thumb.dataset.src;
                    input.dispatchEvent(new Event("input"));
                    thumb.closest('.image-picker-grid').querySelectorAll('.image-picker-thumb').forEach(t => t.style.borderColor = 'transparent');
                    thumb.style.borderColor = '#34d399';
                }
            });
        });

        // Eventos padrões
        panel.querySelectorAll("[data-text]").forEach(input => {
            if (input.classList.contains("galeria-item-input")) return;
            input.addEventListener("input", () => {
                blockConfig(key, true).texts[TEXT_FIELDS[key][Number(input.dataset.text)][0]] = input.value; applyBlockConfig(key, blockElement(key));
            });
        });
        panel.querySelectorAll("[data-color]").forEach(input => input.addEventListener("input", () => {
            blockConfig(key, true)[input.dataset.color] = input.value; applyBlockConfig(key, blockElement(key));
        }));
        panel.querySelectorAll("[data-pad]").forEach(input => input.addEventListener("input", () => {
            blockConfig(key, true).padding[input.dataset.pad] = input.value; applyBlockConfig(key, blockElement(key));
        }));
        panel.querySelector("[data-align]")?.addEventListener("change", e => {
            blockConfig(key, true).align = e.target.value; applyBlockConfig(key, blockElement(key));
        });
        if (key === "cabecalho") {
            panel.querySelector("[data-hide-menu]")?.addEventListener("change", e => {
                blockConfig(key, true).hideMenu = e.target.checked; applyBlockConfig(key, blockElement(key));
            });
            panel.querySelector("[data-extra]")?.addEventListener("input", e => {
                blockConfig(key, true).extraLinks = e.target.value; applyBlockConfig(key, blockElement(key));
            });
        }
    }

    function closePanel() { panel.hidden = true; openKey = null; }

    function positionPanel() {
        if (panel.hidden || !openKey) return;
        const button = buttons[openKey];
        if (!button || button.hidden) { closePanel(); return; }
        const b = button.getBoundingClientRect();
        const w = panel.offsetWidth;
        const h = panel.offsetHeight;
        let x = b.right - w; let y = b.bottom + 8;
        if (y + h > innerHeight - 8) y = Math.max(8, b.top - h - 8);
        x = Math.min(Math.max(8, x), innerWidth - w - 8);
        panel.style.left = x + "px"; panel.style.top = y + "px";
    }

    const HOT_IDS = ["centralToggle", "logToggle", "themeToggle"];
    const SIZE = 28;
    function overlaps(a, b) { return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top; }

    function layout() {
        const hot = HOT_IDS.map(id => document.getElementById(id)?.getBoundingClientRect()).filter(Boolean);
        Object.keys(BLOCK_NAMES).forEach(key => {
            const element = blockElement(key); let button = buttons[key];
            if (!element || element.hidden) { if (button) button.hidden = true; return; }
            if (!button) {
                button = document.createElement("button"); button.type = "button"; button.className = "block-hot"; button.textContent = "⚙️"; button.title = "Configurar " + BLOCK_NAMES[key];
                button.addEventListener("click", () => { if (openKey === key) closePanel(); else openPanel(key); });
                layer.appendChild(button); buttons[key] = button;
            }
            const r = element.getBoundingClientRect();
            if (r.height < 10 || r.bottom < 0 || r.top > innerHeight) { button.hidden = true; return; }
            button.hidden = false;
            let x = r.right - SIZE - 6; let y = Math.min(Math.max(r.top, 0) + 6, r.bottom - SIZE - 6);
            hot.forEach(h => { const box = { left: x, right: x + SIZE, top: y, bottom: y + SIZE }; if (overlaps(box, h)) x = h.left - SIZE - 6; });
            button.style.left = x + "px"; button.style.top = y + "px";
        });
        positionPanel();
    }

    let frame = 0;
    function schedule() { if (!frame) frame = requestAnimationFrame(() => { frame = 0; layout(); }); }
    function reapplyAll() { 
        site.querySelectorAll("[data-component]").forEach(element => applyBlockConfig(element.dataset.component, element)); 
        renderHeaderToggles();
    }

    new MutationObserver(() => { reapplyAll(); schedule(); }).observe(site, { childList: true });
    new MutationObserver(schedule).observe(site, { attributes: true, attributeFilter: ["hidden", "class"], subtree: true });
    $("stage").addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("pointerup", () => setTimeout(schedule, 100));
    document.addEventListener("pointerdown", event => { if (panel.hidden) return; if (panel.contains(event.target) || event.target.closest(".block-hot")) return; closePanel(); }, true);
    document.addEventListener("keydown", event => { if (event.key === "Escape") closePanel(); });

    window.applyBlockConfig = applyBlockConfig;
    window.resetBlockConfig = () => { config = {}; closePanel(); };
    schedule();
})();

/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

buildCards();
applyTheme();
renderEmpty();
updateDevTools();

personalizer = createPersonalizer();

log("Framework Tangível pronto.");
log("Personalizador de cores carregado.");
log("Aguardando QR Codes.");

startScanner();
