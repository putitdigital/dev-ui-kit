const footerHTML = `
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-text-wrapper">
                <p class="footer-text">
                    <span class="footer-copyright">© 2026 Developer Portfolio</span>
                    <span class="footer-divider">•</span>
                    <span class="footer-built">Built with passion and code</span>
                </p>
                <p class="footer-author">
                    <span class="footer-by-text" data-text-en="by" data-text-ar="بواسطة">by</span>
                    <a href="https://putitdigital.co.za/" target="_blank" rel="noopener noreferrer" class="footer-author-link">
                        <span>Put It Digital</span>
                    </a>
                </p>
            </div>
            <div class="footer-social">
                <a href="https://www.linkedin.com/in/sithembiso-sangweni-07b935113" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/putitdigital" class="footer-social-link" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
`;

// Inject into footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("content-left-social-right");
    if (footer) {
        footer.classList.add("main-footer"); // keep your class
        footer.innerHTML = footerHTML;
    }
});