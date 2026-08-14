(function () {
    "use strict";

    const scriptElement = document.currentScript
        || Array.from(document.scripts).find((script) => /\/site\.js(?:[?#]|$)/.test(script.src));
    const siteRoot = new URL("../", scriptElement?.src || window.location.href);

    function siteUrl(path) {
        return new URL(path, siteRoot).href;
    }

    function renderHeader() {
        const target = document.getElementById("site-header");
        if (!target) {
            return;
        }

        target.innerHTML = `
            <header class="site-header">
                <nav class="site-navbar navbar navbar-expand-lg" data-i18n-aria-label="nav_label" aria-label="主导航">
                    <div class="container-fluid site-navbar-inner">
                        <a class="site-brand navbar-brand" href="${siteUrl("index.html")}">Modded MITE</a>
                        <button class="site-nav-toggle navbar-toggler" type="button" aria-controls="primary-navigation"
                            aria-expanded="false" data-i18n-aria-label="nav_toggle" aria-label="展开或收起导航">
                            <span class="navbar-toggler-icon" aria-hidden="true"></span>
                        </button>
                        <div class="site-navigation" id="primary-navigation">
                            <div class="site-nav-links navbar-nav">
                                <a href="${siteUrl("index.html")}" class="site-nav-link nav-link" data-i18n="nav_home">首页</a>
                                <a href="${siteUrl("pages/resource.html")}" class="site-nav-link nav-link" data-i18n="nav_resources">资源</a>
                                <a href="${siteUrl("pages/docs-navigation.html")}" class="site-nav-link nav-link" data-i18n="nav_tutorials">教程</a>
                                <a href="${siteUrl("pages/development.html")}" class="site-nav-link nav-link"
                                    data-section="development" data-i18n="nav_development">开发</a>
                                <a href="${siteUrl("pages/contact.html")}" class="site-nav-link nav-link" data-i18n="nav_about">关于</a>
                            </div>
                            <div class="language-switcher" role="group" data-i18n-aria-label="language_label" aria-label="切换语言">
                                <button class="language-btn" type="button" data-lang="zh">简体中文</button>
                                <button class="language-btn" type="button" data-lang="en">English</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>`;
    }

    function renderFooter() {
        const target = document.getElementById("site-footer");
        if (!target) {
            return;
        }

        target.innerHTML = `
            <footer class="site-footer">
                <nav class="site-container footer-links" data-i18n-aria-label="footer_label" aria-label="社区链接">
                    <a href="https://github.com/MinecraftIsTooEasy" data-i18n="github_org">GitHub 组织</a>
                    <span data-i18n="qq_group">QQ 群：661223990</span>
                    <a href="https://github.com/MinecraftIsTooEasy/MinecraftIsTooEasy.github.io"
                        data-i18n="site_source">网站源码</a>
                </nav>
            </footer>`;
    }

    function normalizedPage(url) {
        const parsed = new URL(url, window.location.href);
        let pathname = parsed.pathname.replace(/\\/g, "/");
        if (pathname.endsWith("/")) {
            pathname += "index.html";
        }
        return `${parsed.protocol}//${parsed.host}${pathname}`;
    }

    function setActiveNavigation() {
        const currentPage = normalizedPage(window.location.href);
        const currentPath = new URL(window.location.href).pathname.replace(/\\/g, "/");
        const docsPath = new URL("pages/docs/", siteRoot).pathname.replace(/\\/g, "/");

        document.querySelectorAll(".site-nav-link").forEach((link) => {
            const isDocumentPage = link.dataset.section === "development" && currentPath.startsWith(docsPath);
            const isCurrent = normalizedPage(link.href) === currentPage || isDocumentPage;
            link.classList.toggle("active", isCurrent);
            if (isCurrent) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function bindNavigationToggle() {
        const toggle = document.querySelector(".site-nav-toggle");
        const menu = document.getElementById("primary-navigation");
        if (!toggle || !menu) {
            return;
        }

        toggle.addEventListener("click", () => {
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            menu.classList.toggle("is-open", !expanded);
        });
    }

    let pageAnimated = false;

    function animatePage() {
        if (pageAnimated || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        pageAnimated = true;
        window.gsap.from(".site-main > *", {
            y: 12,
            opacity: 0,
            duration: 0.35,
            stagger: 0.035,
            ease: "power1.out",
            clearProps: "transform,opacity"
        });
    }

    let resolveReady;
    const ready = new Promise((resolve) => {
        resolveReady = resolve;
    });

    function initialize() {
        renderHeader();
        renderFooter();
        window.I18n?.apply(document);
        setActiveNavigation();
        bindNavigationToggle();
        animatePage();
        document.body.classList.add("site-ready");
        document.dispatchEvent(new CustomEvent("site:ready"));
        resolveReady();
    }

    window.Site = {
        initialize,
        ready,
        root: siteRoot.href,
        url: siteUrl
    };

    document.addEventListener("DOMContentLoaded", initialize, { once: true });
    window.addEventListener("load", animatePage, { once: true });
}());
