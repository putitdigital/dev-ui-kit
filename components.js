export function loadFooter(id,UI_CONFIG) {
    const footer = document.getElementById(id);
    if (!footer || !UI_CONFIG?.footer) return;

    const { year, projectName, tagline,divider, author, socials } = UI_CONFIG.footer;

        // Generate social links dynamically
        const socialHTML = socials.map(social => 
            `
                <a href="${social.url}" target="_blank" class="footer-social-link" title="${social.name}">
                    <i class="${social.icon}"></i>
                </a>
            `
        ).join("");

        footer.classList.add("main-footer");
    
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-text-wrapper">
                        <p class="footer-text">
                            <span class="footer-copyright">© ${year} ${projectName}</span>
                            <span class="footer-divider">${divider}</span>
                            <span class="footer-built">${tagline}</span>
                        </p>
                        <p class="footer-author">
                            <span class="footer-by-text">by</span>
                            <a class="footer-author-link" href="${author.link}" target="_blank">${author.name}</a>
                        </p>
                    </div>
                    <div class="footer-social">
                        ${socialHTML}
                    </div>
                </div>
            </div>
        `;
}
export function loadHeader(id,UI_CONFIG) {
    const header = document.getElementById(id);
    if (!header || !UI_CONFIG?.header) return;

    const { logo, links,toggleNav } = UI_CONFIG.header;

    const navLinks = links.map(link => `
        <li><a href="${link.url}">${link.name}</a></li>
    `).join("");
    header.classList.add("navbar");   
    header.classList.add("navbar-inverse");
    header.classList.add("navbar-fixed-top");
    header.classList.add("bs-docs-nav");
    header.innerHTML = `
        <div class="header-container">
            <div class = "navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">${logo}</a>
            </div>
            <nav class="collapse navbar-collapse bs-navbar-collapse" role=navigation>
                <ul class="nav navbar-nav navbar-right">
                    ${navLinks}
                </ul>
            </nav>
        </div>
    `;
}
export function loadCards(id,UI_CONFIG) {
    const container = document.getElementById(id);
    if (!container || !UI_CONFIG?.cards?.projects) return;

    const cardsHTML = UI_CONFIG.cards.projects.map(card => `
        <div class="card">
            <img src="${card.image}" alt="${card.title}" />
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <a href="${card.link}">View</a>
        </div>
    `).join("");

    container.innerHTML = cardsHTML;
}