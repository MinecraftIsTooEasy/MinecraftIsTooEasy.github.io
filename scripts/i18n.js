(function () {
  "use strict";

  const supportedLanguages = ["zh", "en"];
  const translations = {
    zh: {
      site_title: "Modded MITE",
      nav_label: "主导航",
      nav_toggle: "展开或收起导航",
      nav_home: "首页",
      nav_resources: "资源",
      nav_tutorials: "教程",
      nav_development: "开发",
      nav_about: "关于",
      language_label: "切换语言",
      skip_to_content: "跳到主要内容",
      component_load_error: "页面公共区域加载失败，请刷新后重试。",
      page_title_home: "Modded MITE",
      page_description_home: "Modded MITE 社区的模组、资源与开发文档入口。",
      what_is_modded_mite: "什么是 Modded MITE",
      what_is_modded_mite_desc:
        "Modded MITE 通常指安装了以 FishModLoader 为主的模组加载器的 MITE 实例，也可以指围绕 MITE 模组开发、文档和社区维护形成的协作社区。",
      community_invite:
        "模组开发、网站维护、文档编写和社区运营都需要贡献者。可通过关于页面中的渠道联系我们。",
      quick_nav: "快速导航",
      mod_intro: "模组介绍",
      resource_download: "资源下载",
      old_mod_intro: "历史模组目录",
      what_is_fml: "了解 FishModLoader",
      friendly_links: "友情链接",
      mod_wiki: "模组百科",
      goblin_tech: "地精科技站",
      wensc_home: "Wensc 的主页",
      fml_unofficial: "FishModLoader 非官方站",
      half_drop: "半滴的 MITE 网站",
      github_org: "GitHub 组织",
      qq_group: "QQ 群：661223990",
      site_source: "网站源码",
      footer_label: "社区链接",
      page_title_resources: "资源 - Modded MITE",
      page_description_resources: "MITE 资源包、模组目录与社区资源整合下载。",
      resources_heading: "资源",
      resource_packs: "资源包",
      resource_pack_desc_html:
        'MITE 默认识别名为 <strong>MITE Resource Pack 1.6.4</strong> 的文件夹或 ZIP。安装 <a href="https://github.com/MinecraftIsTooEasy/BetterGameSetting">Better Game Setting</a> 后可以在游戏内自由切换资源包。',
      download_resource_pack: "若游戏缺少资源包，可从以下地址下载：",
      mite_translated_pack_proxy: "MITE 新译原版资源包（CDN）",
      mite_translated_pack_direct: "MITE 新译原版资源包（直链）",
      resource_pack_usage: "查看资源包安装方法",
      mods: "模组",
      mods_desc_html:
        '绝大多数 MITE 模组通过 <a href="https://github.com/XiaoYuOvO/FishModLoader">FishModLoader</a> 加载，简称 FML。',
      fml3_mods_intro: "FML3+ 模组目录",
      current_catalog: "当前推荐目录",
      archived_catalog: "站内历史目录",
      fml1_mods_intro: "FML1 模组说明",
      resource_bundles: "资源整合",
      password_note: "下列网盘的密码（提取码）均为 mite。",
      new_bundle_main: "新资源整合主链接（123 云盘）",
      new_bundle_lite: "新资源整合精简版（Google Drive）",
      goblin_backup: "地精科技站资源备份（huang1111 云盘）",
      page_title_tutorials: "教程 - Modded MITE",
      page_description_tutorials: "Modded MITE 使用教程与开发入门导航。",
      tutorials_index: "教程索引",
      player_guides: "玩家指南",
      resource_pack_guide_desc: "安装和切换 MITE 资源包。",
      fml_guide_desc: "了解 FML1 与 FML3 的区别。",
      developer_guides: "开发入门",
      fml3_setup_desc: "配置 Java 17、IDEA 和 FML3 开发环境。",
      dev_docs_desc: "浏览 ManyLib、锈铁核心等开发文档。",
      page_title_development: "开发文档 - Modded MITE",
      page_description_development:
        "FishModLoader、ManyLib 与锈铁核心开发文档。",
      development_index: "开发文档",
      document_list: "文档列表",
      document_content: "文档内容",
      select_doc: "选择一篇文档开始阅读。",
      loading: "正在加载…",
      document_error: "文档加载失败，请稍后重试。",
      document_chinese_only: "文档正文目前仅提供中文。",
      copy_code: "复制代码",
      copied: "已复制",
      fml1_env_setup: "FML1 环境搭建",
      fml3_env_setup: "FML3 环境搭建",
      manylib_docs: "ManyLib 开发文档",
      ric_docs: "锈铁核心开发文档",
      page_title_fml: "FishModLoader 介绍 - Modded MITE",
      page_description_fml: "FishModLoader 版本差异与开发环境说明。",
      fml_intro_html:
        'MITE 模组通过 <a href="https://github.com/XiaoYuOvO/FishModLoader">FishModLoader</a> 加载，简称 FML。3.0.0 之前采用较接近 Forge 的开发方式，3.0.0 起重构为更接近 Fabric 的加载器。',
      fml_comparison: "版本对比",
      fml_version: "版本",
      mappings: "映射",
      dev_environment: "开发环境",
      api_count: "接口数量",
      compatibility: "兼容性",
      large_mods: "大型模组",
      small_mods: "小型模组",
      community: "社区状态",
      self_mapping: "自研",
      exported_classes: "导出类",
      forge_mapping: "Forge 映射",
      loom_environment: "Loom 环境",
      few: "少",
      many: "多",
      poor: "较差",
      good: "较好",
      legacy: "历史生态",
      active: "持续发展",
      fml_recommendation:
        "新项目应优先选择 FML3。需要开发指导时，可通过关于页面联系社区。",
      page_title_fml3: "FML3 模组目录 - Modded MITE",
      page_description_fml3: "社区维护的 FML3 模组历史目录。",
      fml3_heading: "FML3 模组目录",
      fml3_notice:
        "此表是站内历史目录；最新整理结果请以社区维护的在线目录为准。点击列标题可按该列排序。",
      mod_table_caption: "FML3 模组及其前置、运行端与项目链接",
      mod_name_en: "英文名",
      mod_name_zh: "中文名",
      dependencies: "前置需求",
      side: "运行端",
      summary: "简介",
      project_link: "链接",
      sort_column: "排序",
      page_title_fml1: "FML1 模组说明 - Modded MITE",
      page_description_fml1: "FML1 历史模组生态与迁移建议。",
      fml1_heading: "FML1 模组说明",
      fml1_archive:
        "FML1 是旧版加载器生态，现有项目可能仍依赖它，但新开发工作建议使用 FML3。旧模组资料尚未形成完整站内目录。",
      fml1_next_html:
        '可先查看 <a href="about-fml.html">FML 版本对比</a>，或前往 <a href="https://www.kdocs.cn/l/cabc4n66CYbJ">社区模组目录</a> 查找现有项目。',
      page_title_pack_usage: "资源包安装 - Modded MITE",
      page_description_pack_usage:
        "MITE 原版及 Better Game Setting 环境下的资源包安装步骤。",
      pack_usage_heading: "资源包安装方法",
      without_bgs: "未安装 Better Game Setting",
      with_bgs: "已安装 Better Game Setting",
      pack_step_extensions:
        "确认系统已显示文件扩展名，避免把文件误命名为 .zip.zip。",
      pack_step_download: "下载所需资源包。",
      pack_step_rename: "将资源包重命名为 MITE Resource Pack 1.6.4.zip。",
      pack_step_move:
        "把 ZIP 放入 MITE 游戏目录的 .minecraft/resourcepacks/ 文件夹。",
      pack_step_launch: "启动 MITE；能够正常进入游戏即表示安装成功。",
      pack_step_bgs_move:
        "把下载的 ZIP 直接放入 .minecraft/resourcepacks/ 文件夹，无需重命名。",
      pack_step_bgs_select:
        "启动游戏，在“游戏设置 → 资源包”中选择刚放入的资源包。",
      page_title_contact: "关于社区 - Modded MITE",
      page_description_contact: "Modded MITE 社区的联系渠道与协作入口。",
      contact_heading: "关于 Modded MITE 社区",
      contact_intro:
        "社区由 MITE 玩家和开发者共同维护，主要工作包括模组开发、兼容测试、资源整理与文档维护。",
      contact_channels: "联系与参与",
      contact_github: "在 GitHub 查看项目、提交问题或参与开发。",
      contact_qq: "加入 QQ 群 661223990，咨询游戏、模组和开发问题。",
      contact_contribute:
        "提交网站改进时，请附上清晰的复现步骤、来源链接或内容依据。",
      template_heading: "页面标题",
      template_content: "页面内容",
      page_title_404: "页面未找到 - Modded MITE",
      not_found_message: "没有找到请求的页面，它可能已移动或删除。",
      return_home: "返回首页",
    },
    en: {
      site_title: "Modded MITE",
      nav_label: "Primary navigation",
      nav_toggle: "Expand or collapse navigation",
      nav_home: "Home",
      nav_resources: "Resources",
      nav_tutorials: "Tutorials",
      nav_development: "Development",
      nav_about: "About",
      language_label: "Change language",
      skip_to_content: "Skip to main content",
      component_load_error:
        "A shared page component failed to load. Please refresh and try again.",
      page_title_home: "Modded MITE",
      page_description_home:
        "Mods, resources, and development documentation from the Modded MITE community.",
      what_is_modded_mite: "What is Modded MITE?",
      what_is_modded_mite_desc:
        "Modded MITE usually means a MITE installation using a mod loader, primarily FishModLoader. It also refers to the community that collaborates on MITE mods, documentation, and maintenance.",
      community_invite:
        "Contributors are welcome across mod development, website maintenance, documentation, and community operations. See the About page for contact channels.",
      quick_nav: "Quick navigation",
      mod_intro: "Mod catalog",
      resource_download: "Resource downloads",
      old_mod_intro: "Historical mod catalog",
      what_is_fml: "About FishModLoader",
      friendly_links: "Community links",
      mod_wiki: "MC Mod Wiki",
      goblin_tech: "Goblin Tech Station",
      wensc_home: "Wensc's homepage",
      fml_unofficial: "Unofficial FishModLoader site",
      half_drop: "Half Drop's MITE site",
      github_org: "GitHub organization",
      qq_group: "QQ group: 661223990",
      site_source: "Website source",
      footer_label: "Community links",
      page_title_resources: "Resources - Modded MITE",
      page_description_resources:
        "MITE resource packs, mod catalogs, and community bundles.",
      resources_heading: "Resources",
      resource_packs: "Resource packs",
      resource_pack_desc_html:
        'MITE normally recognizes a folder or ZIP named <strong>MITE Resource Pack 1.6.4</strong>. With <a href="https://github.com/MinecraftIsTooEasy/BetterGameSetting">Better Game Setting</a>, packs can be switched in game.',
      download_resource_pack:
        "Download a pack below if your game is missing one:",
      mite_translated_pack_proxy: "MITE translated vanilla pack (CDN)",
      mite_translated_pack_direct: "MITE translated vanilla pack (direct)",
      resource_pack_usage: "Read the installation guide",
      mods: "Mods",
      mods_desc_html:
        'Most MITE mods are loaded with <a href="https://github.com/XiaoYuOvO/FishModLoader">FishModLoader</a>, commonly shortened to FML.',
      fml3_mods_intro: "FML3+ mod catalogs",
      current_catalog: "Current catalog",
      archived_catalog: "Historical on-site catalog",
      fml1_mods_intro: "FML1 mod notes",
      resource_bundles: "Resource bundles",
      password_note: "The password for the following cloud drives is mite.",
      new_bundle_main: "Main resource bundle (123 Cloud Drive)",
      new_bundle_lite: "Lite resource bundle (Google Drive)",
      goblin_backup: "Goblin Tech Station backup (huang1111 Cloud Drive)",
      page_title_tutorials: "Tutorials - Modded MITE",
      page_description_tutorials:
        "Player tutorials and development entry points for Modded MITE.",
      tutorials_index: "Tutorial index",
      player_guides: "Player guides",
      resource_pack_guide_desc: "Install and switch MITE resource packs.",
      fml_guide_desc: "Understand the differences between FML1 and FML3.",
      developer_guides: "Development guides",
      fml3_setup_desc:
        "Set up Java 17, IDEA, and an FML3 development environment.",
      dev_docs_desc:
        "Browse development references for ManyLib, Rusted Iron Core, and more.",
      page_title_development: "Development docs - Modded MITE",
      page_description_development:
        "Development documentation for FishModLoader, ManyLib, and Rusted Iron Core.",
      development_index: "Development documentation",
      document_list: "Documents",
      document_content: "Document content",
      select_doc: "Select a document to begin reading.",
      loading: "Loading…",
      document_error: "The document could not be loaded. Please try again.",
      document_chinese_only:
        "The document body is currently available in Chinese only.",
      copy_code: "Copy code",
      copied: "Copied",
      fml1_env_setup: "FML1 environment setup",
      fml3_env_setup: "FML3 environment setup",
      manylib_docs: "ManyLib development docs",
      ric_docs: "Rusted Iron Core development docs",
      page_title_fml: "About FishModLoader - Modded MITE",
      page_description_fml:
        "FishModLoader versions and development environment comparison.",
      fml_intro_html:
        'MITE mods are loaded through <a href="https://github.com/XiaoYuOvO/FishModLoader">FishModLoader</a>, or FML. Versions before 3.0.0 used a Forge-like development model; version 3.0.0 introduced a loader closer to Fabric.',
      fml_comparison: "Version comparison",
      fml_version: "Version",
      mappings: "Mappings",
      dev_environment: "Development environment",
      api_count: "API surface",
      compatibility: "Compatibility",
      large_mods: "Large mods",
      small_mods: "Small mods",
      community: "Community status",
      self_mapping: "Custom",
      exported_classes: "Exported classes",
      forge_mapping: "Forge mappings",
      loom_environment: "Loom environment",
      few: "Few",
      many: "Many",
      poor: "Limited",
      good: "Good",
      legacy: "Legacy ecosystem",
      active: "Active development",
      fml_recommendation:
        "New projects should prefer FML3. Contact the community through the About page for development guidance.",
      page_title_fml3: "FML3 mod catalog - Modded MITE",
      page_description_fml3:
        "A community-maintained historical catalog of FML3 mods.",
      fml3_heading: "FML3 mod catalog",
      fml3_notice:
        "This table is a historical on-site catalog. Refer to the community-maintained online catalog for the latest list. Select a column heading to sort it.",
      mod_table_caption:
        "FML3 mods with dependencies, runtime side, and project links",
      mod_name_en: "English name",
      mod_name_zh: "Chinese name",
      dependencies: "Dependencies",
      side: "Side",
      summary: "Summary",
      project_link: "Link",
      sort_column: "Sort",
      page_title_fml1: "FML1 mod notes - Modded MITE",
      page_description_fml1:
        "Legacy FML1 mod ecosystem and migration guidance.",
      fml1_heading: "FML1 mod notes",
      fml1_archive:
        "FML1 is the legacy loader ecosystem. Existing projects may still depend on it, but new development should use FML3. A complete on-site catalog of legacy mods is not yet available.",
      fml1_next_html:
        'Start with the <a href="about-fml.html">FML version comparison</a>, or search the <a href="https://www.kdocs.cn/l/cabc4n66CYbJ">community mod catalog</a> for existing projects.',
      page_title_pack_usage: "Resource pack installation - Modded MITE",
      page_description_pack_usage:
        "Install MITE resource packs with or without Better Game Setting.",
      pack_usage_heading: "Resource pack installation",
      without_bgs: "Without Better Game Setting",
      with_bgs: "With Better Game Setting",
      pack_step_extensions:
        "Make sure file extensions are visible so the pack is not accidentally named .zip.zip.",
      pack_step_download: "Download the resource pack you need.",
      pack_step_rename: "Rename it to MITE Resource Pack 1.6.4.zip.",
      pack_step_move:
        "Move the ZIP into .minecraft/resourcepacks/ inside the MITE game directory.",
      pack_step_launch:
        "Launch MITE. Reaching the game successfully confirms the installation.",
      pack_step_bgs_move:
        "Move the downloaded ZIP directly into .minecraft/resourcepacks/ without renaming it.",
      pack_step_bgs_select:
        "Launch the game and select the pack under Game Settings → Resource Packs.",
      page_title_contact: "About the community - Modded MITE",
      page_description_contact:
        "Contact channels and contribution entry points for the Modded MITE community.",
      contact_heading: "About the Modded MITE community",
      contact_intro:
        "The community is maintained by MITE players and developers working on mods, compatibility testing, resource curation, and documentation.",
      contact_channels: "Contact and contribute",
      contact_github:
        "Browse projects, report issues, or contribute through GitHub.",
      contact_qq:
        "Join QQ group 661223990 for game, mod, and development questions.",
      contact_contribute:
        "When proposing a website change, include clear reproduction steps, source links, or supporting evidence.",
      template_heading: "Page title",
      template_content: "Page content",
      page_title_404: "Page not found - Modded MITE",
      not_found_message:
        "The requested page could not be found. It may have moved or been removed.",
      return_home: "Return home",
    },
  };

  function loadLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (supportedLanguages.includes(requested)) {
      return requested;
    }

    try {
      const saved = localStorage.getItem("language");
      return supportedLanguages.includes(saved) ? saved : "zh";
    } catch (error) {
      return "zh";
    }
  }

  let currentLanguage = loadLanguage();

  function translate(key) {
    return translations[currentLanguage]?.[key] ?? translations.zh[key] ?? key;
  }

  function updateFileLinks(root) {
    if (window.location.protocol !== "file:") {
      return;
    }

    root.querySelectorAll("a[href]").forEach((link) => {
      const target = new URL(link.href, window.location.href);
      if (target.protocol === "file:" && /\.html$/i.test(target.pathname)) {
        target.searchParams.set("lang", currentLanguage);
        link.href = target.href;
      }
    });
  }

  function apply(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n);
    });
    root.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = translate(element.dataset.i18nHtml);
    });
    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute(
        "aria-label",
        translate(element.dataset.i18nAriaLabel),
      );
    });
    root.querySelectorAll("[data-i18n-content]").forEach((element) => {
      element.setAttribute("content", translate(element.dataset.i18nContent));
    });

    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.querySelectorAll(".language-btn").forEach((button) => {
      const active = button.dataset.lang === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateFileLinks(root);
  }

  function switchLanguage(language) {
    if (!supportedLanguages.includes(language)) {
      return;
    }

    currentLanguage = language;
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      // The selection remains active for this page when storage is unavailable.
    }

    apply(document);
    document.dispatchEvent(
      new CustomEvent("languagechange", {
        detail: { language },
      }),
    );
  }

  window.I18n = {
    apply,
    get language() {
      return currentLanguage;
    },
    switchLanguage,
    translate,
  };
  window.switchLanguage = switchLanguage;

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".language-btn");
    if (button?.dataset.lang) {
      switchLanguage(button.dataset.lang);
    }
  });

  document.addEventListener("DOMContentLoaded", () => apply(document), {
    once: true,
  });
})();
