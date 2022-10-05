(function (w, d, t) {
  _ml = w._ml || {};
  _ml.eid = "68399";
  vtid = 107413;
  var s, cd, g, a;
  s = d.getElementsByTagName(t)[0];
  cd = new Date();
  g = d.createElement(t);
  g.async = 1;
  g.src = "https://ml314.com/tag.aspx?" + cd.getDate() + cd.getMonth();
  a = d.createElement(t);
  a.async = 1;
  a.src = "https://code.visitor-track.com/VisitorTrack2.js";
  s.parentNode.insertBefore(g, s);
  s.parentNode.insertBefore(a, s);
})(window, document, "script");
// -------------------------------//
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "AW-953894691");
// -------------------------------//
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "1888287491560804");
fbq("track", "PageView");
// -------------------------------//
!(function (e, t, n, s, u, a) {
  e.twq ||
    ((s = e.twq =
      function () {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
      }),
    (s.version = "1.1"),
    (s.queue = []),
    (u = t.createElement(n)),
    (u.async = !0),
    (u.src = "//static.ads-twitter.com/uwt.js"),
    (a = t.getElementsByTagName(n)[0]),
    a.parentNode.insertBefore(u, a));
})(window, document, "script");
// Insert Twitter Pixel ID and Standard Event data below
twq("init", "o91gn");
twq("track", "PageView");
// -------------------------------//
(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 1884184, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
// -------------------------------//
adroll_adv_id = "WGCB4JL4VVBAZFZZTTU7PJ";
adroll_pix_id = "X2MCJYTYTVEVTJ4HSHKJVL";
adroll_version = "2.0";

(function (w, d, e, o, a) {
  w.__adroll_loaded = true;
  w.adroll = w.adroll || [];
  w.adroll.f = ["setProperties", "identify", "track"];
  var roundtripUrl =
    "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
  for (a = 0; a < w.adroll.f.length; a++) {
    w.adroll[w.adroll.f[a]] =
      w.adroll[w.adroll.f[a]] ||
      (function (n) {
        return function () {
          w.adroll.push([n, arguments]);
        };
      })(w.adroll.f[a]);
  }

  e = d.createElement("script");
  o = d.getElementsByTagName("script")[0];
  e.async = 1;
  e.src = roundtripUrl;
  o.parentNode.insertBefore(e, o);
})(window, document);
adroll.track("pageView");
// -------------------------------//
{
  /* <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"pagePostType":"frontpage","pagePostType2":"single-page","pagePostAuthor":"Rodrigo Salles"};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false"></script> */
}
// -------------------------------//
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "//www.googletagmanager.com/gtm." + "js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-TP59ZL8");
// -------------------------------//
{
  _linkedin_partner_id = "977562";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);

  (function (l) {
    if (!l) {
      window.lintrk = function (a, b) {
        window.lintrk.q.push([a, b]);
      };
      window.lintrk.q = [];
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);
}

// -------------------------------//

// -------------------------------//
(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    var noItemMsg = "Load more button hidden because no more item to load";

    //wrapper 1

    // Append the Load More Button
    $("#comments").append(
      '<a href="#" class="btn loadMoreBtn" id="loadMore"><span class="loadMoreBtn-label">Load more comments</span></a>'
    );

    // add some delay
    jQuery(window).load(function () {
      setTimeout(function () {
        // Show the initial visible items
        $("ol.comment-list li").hide().slice(0, 3).show();
      }, 500);
    });

    // Calculate the hidden items
    $(document)
      .find("#comments .ald-count")
      .text($("ol.comment-list li:hidden").length);

    // Button Click Trigger
    $("#comments")
      .find("#loadMore")
      .on("click", function (e) {
        e.preventDefault();

        // Show the hidden items
        $("ol.comment-list li:hidden").slice(0, 3).slideDown();

        // Hide if no more to load
        if ($("ol.comment-list li:hidden").length == 0) {
          $(this).fadeOut("slow");
        }

        // ReCalculate the hidden items
        $(document)
          .find("#comments .ald-count")
          .text($("ol.comment-list li:hidden").length);
      });

    // Hide on initial if no div to show
    if ($("ol.comment-list li:hidden").length == 0) {
      $("#comments").find("#loadMore").fadeOut("slow");
      console.log(noItemMsg);
    }

    // end wrapper 1

    //wrapper 2
    // end wrapper 2

    // wrapper 3
    // end wrapper 3

    //wraper 4
    // end wrapper 4

    //wrapper 5
    // end wrapper 5

    //wrapper 6
    // end wrapper 6
  });
})(jQuery);

// -------------------------------//
piAId = "263752";
piCId = "";
piHostname = "gxp-experts.usdm.com";

(function () {
  function async_load() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src =
      ("https:" == document.location.protocol ? "https://" : "http://") +
      piHostname +
      "/pd.js";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(s, c);
  }
  if (window.attachEvent) {
    window.attachEvent("onload", async_load);
  } else {
    window.addEventListener("load", async_load, false);
  }
})();
// -------------------------------//
wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });
// -------------------------------//
(function (domain, translations) {
  var localeData =
    translations.locale_data[domain] || translations.locale_data.messages;
  localeData[""].domain = domain;
  wp.i18n.setLocaleData(localeData, domain);
})("elementor-pro", { locale_data: { messages: { "": {} } } });

// -------------------------------//
var elementorNotesConfig = {
  route: {
    title: "Compliance Simplified | USDM Life Sciences",
    url: "/?p=84",
    note_url_pattern:
      "https://usdm.com/wp/wp-admin/admin.php?page=elementor-pro-notes-proxy&note-id={{NOTE_ID}}",
    post_id: 84,
    is_elementor_library: false,
  },
  direction: "ltr",
  is_debug: false,
  current_user_can: { create: true, create_users: true },
  urls: {
    admin_url_create_user: "https://usdm.com/wp/wp-admin/user-new.php",
    avatar_defaults: {
      24: "https://secure.gravatar.com/avatar/?s=24&d=mm&r=g",
      48: "https://secure.gravatar.com/avatar/?s=48&d=mm&r=g",
      96: "https://secure.gravatar.com/avatar/?s=96&d=mm&r=g",
    },
  },
};
// -------------------------------//
var ald_params = {
  nonce: "fba50842b4",
  ajax_url: "https://usdm.com/wp/wp-admin/admin-ajax.php",
};
// -------------------------------//
var wpcf7 = {
  api: { root: "https://usdm.com/wp-json/", namespace: "contact-form-7/v1" },
  cached: "1",
};
// -------------------------------//
var localize = {
  ajaxurl: "https://usdm.com/wp/wp-admin/admin-ajax.php",
  nonce: "e07411fb9b",
  i18n: { added: "Added ", compare: "Compare", loading: "Loading..." },
  page_permalink: "https://usdm.com/",
};
// -------------------------------//
var jetMenuPublicSettings = {
  version: "2.1.7",
  ajaxUrl: "https://usdm.com/wp/wp-admin/admin-ajax.php",
  isMobile: "false",
  templateApiUrl: "https://usdm.com/wp-json/jet-menu-api/v1/elementor-template",
  menuItemsApiUrl: "https://usdm.com/wp-json/jet-menu-api/v1/get-menu-items",
  restNonce: "feac863f45",
  devMode: "true",
  wpmlLanguageCode: "",
  menuSettings: {
    jetMenuRollUp: "false",
    jetMenuMouseleaveDelay: "0",
    jetMenuMegaWidthType: "container",
    jetMenuMegaWidthSelector: "",
    jetMenuMegaOpenSubType: "hover",
    jetMenuMegaAjax: "false",
  },
};
var CxCollectedCSS = {
  type: "text/css",
  title: "cx-collected-dynamic-style",
  css: ".jet-menu .jet-menu-item .top-level-link .jet-menu-icon {align-self:center; }.jet-menu  {justify-content:flex-end !important; }.jet-menu ul.jet-sub-menu {min-width:200px; }.jet-mobile-menu-single .jet-menu-icon {-webkit-align-self:center; align-self:center; }.jet-mobile-menu-single .jet-menu-badge {-webkit-align-self:flex-start; align-self:flex-start; }",
};
// -------------------------------//
function CxCSSCollector() {
  "use strict";
  var t,
    e = window.CxCollectedCSS;
  void 0 !== e &&
    ((t = document.createElement("style")).setAttribute("title", e.title),
    t.setAttribute("type", e.type),
    (t.textContent = e.css),
    document.head.appendChild(t));
}
CxCSSCollector();
// -------------------------------//
var wpApiSettings = {
  root: "https://usdm.com/wp-json/",
  nonce: "feac863f45",
  versionString: "wp/v2/",
};
// -------------------------------//
(function (domain, translations) {
  var localeData =
    translations.locale_data[domain] || translations.locale_data.messages;
  localeData[""].domain = domain;
  wp.i18n.setLocaleData(localeData, domain);
})("elementor", { locale_data: { messages: { "": {} } } });
// -------------------------------//
// ------------CONFIG OBJECT-------------------//
var elementorCommonConfig = {
  version: "3.6.5",
  isRTL: false,
  isDebug: false,
  isElementorDebug: false,
  activeModules: ["ajax", "finder", "connect", "event-tracker"],
  experimentalFeatures: {
    e_dom_optimization: true,
    e_optimized_css_loading: true,
    a11y_improvements: true,
    e_import_export: true,
    additional_custom_breakpoints: true,
    e_hidden_wordpress_widgets: true,
    theme_builder_v2: true,
    "hello-theme-header-footer": true,
    "landing-pages": true,
    "elements-color-picker": true,
    "favorite-widgets": true,
    "admin-top-bar": true,
    "page-transitions": true,
    notes: true,
    "form-submissions": true,
    e_scroll_snap: true,
  },
  urls: {
    assets: "https://usdm.com/app/plugins/elementor/assets/",
    rest: "https://usdm.com/wp-json/",
  },
  filesUpload: { unfilteredFiles: true },
  library_connect: {
    is_connected: false,
    subscription_plans: {
      0: { label: null, promotion_url: null, color: null },
      1: {
        label: "Pro",
        promotion_url:
          "https://elementor.com/pro/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro&utm_term=helloelementor",
        color: "#92003B",
      },
      20: {
        label: "Expert",
        promotion_url:
          "https://elementor.com/pro/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=goexpert&utm_term=helloelementor",
        color: "#010051",
      },
    },
    base_access_level: 0,
    current_access_level: 0,
  },
  ajax: {
    url: "https://usdm.com/wp/wp-admin/admin-ajax.php",
    nonce: "5134441371",
  },
  finder: {
    data: {
      edit: { title: "Edit", dynamic: true, name: "edit" },
      general: {
        title: "General",
        dynamic: false,
        items: {
          "saved-templates": {
            title: "Saved Templates",
            icon: "library-save",
            url: "https://usdm.com/wp/wp-admin/edit.php?post_type=elementor_library&tabs_group=library",
            keywords: ["template", "section", "page", "library"],
          },
          "system-info": {
            title: "System Info",
            icon: "info-circle-o",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-system-info",
            keywords: ["system", "info", "environment", "elementor"],
          },
          "role-manager": {
            title: "Role Manager",
            icon: "person",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-role-manager",
            keywords: ["role", "manager", "user", "elementor"],
          },
          "knowledge-base": {
            title: "Knowledge Base",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=go_knowledge_base_site",
            keywords: ["help", "knowledge", "docs", "elementor"],
          },
          "theme-builder": {
            title: "Theme Builder",
            icon: "library-save",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-app&ver=3.6.5#/site-editor",
            keywords: [
              "template",
              "header",
              "footer",
              "single",
              "archive",
              "search",
              "404",
              "library",
            ],
          },
          "kit-library": {
            title: "Kit Library",
            icon: "kit-parts",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-app&ver=3.6.5#/kit-library",
            keywords: [
              "kit library",
              "kit",
              "library",
              "site parts",
              "parts",
              "assets",
              "templates",
            ],
          },
          popups: {
            title: "Popups",
            icon: "library-save",
            url: "https://usdm.com/wp/wp-admin/edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup",
            keywords: ["template", "popup", "library"],
          },
        },
        name: "general",
      },
      create: {
        title: "Create",
        dynamic: false,
        items: {
          page: {
            title: "Add New Page Template",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=page&_wpnonce=395f8d7b41",
            keywords: [
              "Add New Page Template",
              "post",
              "page",
              "template",
              "new",
              "create",
            ],
          },
          "wp-post": {
            title: "Add New Post",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?action=elementor_new_post&post_type=post&template_type=wp-post&_wpnonce=395f8d7b41",
            keywords: [
              "Add New Post",
              "post",
              "page",
              "template",
              "new",
              "create",
            ],
          },
          "wp-page": {
            title: "Add New Page",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?action=elementor_new_post&post_type=page&template_type=wp-page&_wpnonce=395f8d7b41",
            keywords: [
              "Add New Page",
              "post",
              "page",
              "template",
              "new",
              "create",
            ],
          },
          "landing-page": {
            title: "Add New Landing Page",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?action=elementor_new_post&post_type=e-landing-page&template_type=landing-page&_wpnonce=395f8d7b41#library",
            keywords: [
              "Add New Landing Page",
              "post",
              "page",
              "template",
              "new",
              "create",
            ],
          },
          "jet-menu": {
            title: "Add New Mega Menu Item",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?action=elementor_new_post&post_type=jet-menu&_wpnonce=395f8d7b41",
            keywords: [
              "Add New Mega Menu Item",
              "post",
              "page",
              "template",
              "new",
              "create",
            ],
          },
          popups: {
            title: "Add New Popup",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup#add_new",
            keywords: ["template", "theme", "popup", "new", "create"],
          },
          "theme-template": {
            title: "Add New Theme Template",
            icon: "plus-circle-o",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-app&ver=3.6.5#/site-editor/add-new",
            keywords: ["template", "theme", "new", "create"],
          },
        },
        name: "create",
      },
      site: {
        title: "Site",
        dynamic: false,
        items: {
          homepage: {
            title: "Homepage",
            url: "https://usdm.com",
            icon: "home-heart",
            keywords: ["home", "page"],
          },
          "wordpress-dashboard": {
            title: "Dashboard",
            icon: "dashboard",
            url: "https://usdm.com/wp/wp-admin/",
            keywords: ["dashboard", "wordpress"],
          },
          "wordpress-menus": {
            title: "Menus",
            icon: "wordpress",
            url: "https://usdm.com/wp/wp-admin/nav-menus.php",
            keywords: ["menu", "wordpress"],
          },
          "wordpress-themes": {
            title: "Themes",
            icon: "wordpress",
            url: "https://usdm.com/wp/wp-admin/themes.php",
            keywords: ["themes", "wordpress"],
          },
          "wordpress-customizer": {
            title: "Customizer",
            icon: "wordpress",
            url: "https://usdm.com/wp/wp-admin/customize.php",
            keywords: ["customizer", "wordpress"],
          },
          "wordpress-plugins": {
            title: "Plugins",
            icon: "wordpress",
            url: "https://usdm.com/wp/wp-admin/plugins.php",
            keywords: ["plugins", "wordpress"],
          },
          "wordpress-users": {
            title: "Users",
            icon: "wordpress",
            url: "https://usdm.com/wp/wp-admin/users.php",
            keywords: ["users", "profile", "wordpress"],
          },
        },
        name: "site",
      },
      settings: {
        title: "Settings",
        dynamic: false,
        items: {
          "general-settings": {
            title: "General Settings",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor",
            keywords: ["general", "settings", "elementor"],
          },
          advanced: {
            title: "Advanced",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor#tab-advanced",
            keywords: ["advanced", "settings", "elementor"],
          },
          experiments: {
            title: "Experiments",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor#tab-experiments",
            keywords: ["settings", "elementor", "experiments"],
          },
          "custom-fonts": {
            title: "Custom Fonts",
            icon: "typography",
            url: "https://usdm.com/wp/wp-admin/edit.php?post_type=elementor_font",
            keywords: ["custom", "fonts", "elementor"],
          },
          "custom-icons": {
            title: "Custom Icons",
            icon: "favorite",
            url: "https://usdm.com/wp/wp-admin/edit.php?post_type=elementor_icons",
            keywords: ["custom", "icons", "elementor"],
          },
        },
        name: "settings",
      },
      tools: {
        title: "Tools",
        dynamic: false,
        items: {
          tools: {
            title: "Tools",
            icon: "tools",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-tools",
            keywords: [
              "tools",
              "regenerate css",
              "safe mode",
              "debug bar",
              "sync library",
              "elementor",
            ],
          },
          "replace-url": {
            title: "Replace URL",
            icon: "tools",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-tools#tab-replace_url",
            keywords: ["tools", "replace url", "domain", "elementor"],
          },
          "maintenance-mode": {
            title: "Maintenance Mode",
            icon: "tools",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-tools#tab-maintenance_mode",
            keywords: ["tools", "maintenance", "coming soon", "elementor"],
          },
          "import-export": {
            title: "Import Export",
            icon: "import-export",
            url: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-tools#tab-import-export-kit",
            keywords: ["tools", "import export", "import", "export", "kit"],
          },
        },
        name: "tools",
      },
    },
  },
  connect: [],
  "event-tracker": { isUserDataShared: false },
};
// ----------cONFIG END----------------//
//---------------------------------//
//----------cONFIG OBJ 2 AJAX----------------//
var usdmVars = {
  ajaxURL: "https://usdm.com/wp/wp-admin/admin-ajax.php",
  usdmNonce: "81e89d9911",
  apiUrl: "https://users-api.usdm.com/",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6InVzZG0td2ViIiwiY3JlYXRlZEF0IjoiMjAyMS0xMS0wOFQxOTo0MToyOC4zMzdaIiwiaWF0IjoxNjM2NDAwNDg4LCJleHAiOjEwMjc2NDAwNDg4fQ.ZYBMoNKnwpkO35m7nVlgOAILrSwOlPS9dyQNSwgmF7M",
  pardotSignUpFormHandler:
    "https://gxp-experts.usdm.com/l/262752/2021-12-16/4tycks",
  pardotLoginFormHandler:
    "https://gxp-experts.usdm.com/l/262752/2021-12-17/4vhhgd",
  usdmSiteDomain: "usdm.com",
};
// ----------cONFIG OBJ 2 END----------------//
//---------------------------------//
(function (domain, translations) {
  var localeData =
    translations.locale_data[domain] || translations.locale_data.messages;
  localeData[""].domain = domain;
  wp.i18n.setLocaleData(localeData, domain);
})("elementor-pro", { locale_data: { messages: { "": {} } } });
//--------------------------//
//----------cONFIG OBJ 3 AJAX----------------//
var ElementorProFrontendConfig = {
  ajaxurl: "https://usdm.com/wp/wp-admin/admin-ajax.php",
  nonce: "d70f75edc1",
  urls: {
    assets: "https://usdm.com/app/plugins/elementor-pro/assets/",
    rest: "https://usdm.com/wp-json/",
  },
  shareButtonsNetworks: {
    facebook: { title: "Facebook", has_counter: true },
    twitter: { title: "Twitter" },
    linkedin: { title: "LinkedIn", has_counter: true },
    pinterest: { title: "Pinterest", has_counter: true },
    reddit: { title: "Reddit", has_counter: true },
    vk: { title: "VK", has_counter: true },
    odnoklassniki: { title: "OK", has_counter: true },
    tumblr: { title: "Tumblr" },
    digg: { title: "Digg" },
    skype: { title: "Skype" },
    stumbleupon: { title: "StumbleUpon", has_counter: true },
    mix: { title: "Mix" },
    telegram: { title: "Telegram" },
    pocket: { title: "Pocket", has_counter: true },
    xing: { title: "XING", has_counter: true },
    whatsapp: { title: "WhatsApp" },
    email: { title: "Email" },
    print: { title: "Print" },
  },
  facebook_sdk: { lang: "en_US", app_id: "" },
  lottie: {
    defaultAnimationUrl:
      "https://usdm.com/app/plugins/elementor-pro/modules/lottie/assets/animations/default.json",
  },
};
// ----------cONFIG OBJ 3 END----------------//
//---------------------------------//
//----------cONFIG OBJ 4 AJAX----------------//
var elementorFrontendConfig = {
  environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
  i18n: {
    shareOnFacebook: "Share on Facebook",
    shareOnTwitter: "Share on Twitter",
    pinIt: "Pin it",
    download: "Download",
    downloadImage: "Download image",
    fullscreen: "Fullscreen",
    zoom: "Zoom",
    share: "Share",
    playVideo: "Play Video",
    previous: "Previous",
    next: "Next",
    close: "Close",
  },
  is_rtl: false,
  breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
  responsive: {
    breakpoints: {
      mobile: {
        label: "Mobile",
        value: 767,
        default_value: 767,
        direction: "max",
        is_enabled: true,
      },
      mobile_extra: {
        label: "Mobile Extra",
        value: 880,
        default_value: 880,
        direction: "max",
        is_enabled: false,
      },
      tablet: {
        label: "Tablet",
        value: 1024,
        default_value: 1024,
        direction: "max",
        is_enabled: true,
      },
      tablet_extra: {
        label: "Tablet Extra",
        value: 1200,
        default_value: 1200,
        direction: "max",
        is_enabled: false,
      },
      laptop: {
        label: "Laptop",
        value: 1366,
        default_value: 1366,
        direction: "max",
        is_enabled: false,
      },
      widescreen: {
        label: "Widescreen",
        value: 2400,
        default_value: 2400,
        direction: "min",
        is_enabled: false,
      },
    },
  },
  version: "3.6.5",
  is_static: false,
  experimentalFeatures: {
    e_dom_optimization: true,
    e_optimized_css_loading: true,
    a11y_improvements: true,
    e_import_export: true,
    additional_custom_breakpoints: true,
    e_hidden_wordpress_widgets: true,
    theme_builder_v2: true,
    "hello-theme-header-footer": true,
    "landing-pages": true,
    "elements-color-picker": true,
    "favorite-widgets": true,
    "admin-top-bar": true,
    "page-transitions": true,
    notes: true,
    "form-submissions": true,
    e_scroll_snap: true,
  },
  urls: { assets: "https://usdm.com/app/plugins/elementor/assets/" },
  settings: { page: [], editorPreferences: [] },
  kit: {
    active_breakpoints: ["viewport_mobile", "viewport_tablet"],
    global_image_lightbox: "yes",
    lightbox_enable_counter: "yes",
    lightbox_enable_fullscreen: "yes",
    lightbox_enable_zoom: "yes",
    lightbox_enable_share: "yes",
    lightbox_title_src: "title",
    lightbox_description_src: "description",
    hello_header_logo_type: "logo",
    hello_header_menu_layout: "horizontal",
  },
  post: {
    id: 84,
    title: "Compliance%20Simplified%20%7C%20USDM%20Life%20Sciences",
    excerpt:
      "USDM Life Sciences is a premier consulting company with deep experience assisting regulated life sciences companies with their GxP technologies and business processes in accelerating growth.",
    featuredImage: false,
  },
  user: { roles: ["administrator"] },
};
// ----------cONFIG OBJ 4 END----------------//
//---------------------------------//
//----------cONFIG OBJ 5----------------//
var elementorAdminBarConfig = {
  elementor_edit_page: {
    id: "elementor_edit_page",
    title: "Edit with Elementor",
    href: "https://usdm.com/wp/wp-admin/post.php?post=84&action=elementor",
    children: {
      23: {
        id: "elementor_edit_doc_23",
        title: "Header (Primary)",
        sub_title: "Header",
        href: "https://usdm.com/wp/wp-admin/post.php?post=23&action=elementor",
      },
      4379: {
        id: "elementor_edit_doc_4379",
        title: "mega-item-1298",
        sub_title: "Post",
        href: "https://usdm.com/wp/wp-admin/post.php?post=4379&action=elementor",
      },
      22356: {
        id: "elementor_edit_doc_22356",
        title: "mega-item-6692",
        sub_title: "Post",
        href: "https://usdm.com/wp/wp-admin/post.php?post=22356&action=elementor",
      },
      410: {
        id: "elementor_edit_doc_410",
        title: "Home Page - Tab Content 01",
        sub_title: "Section",
        href: "https://usdm.com/wp/wp-admin/post.php?post=410&action=elementor",
      },
      2890: {
        id: "elementor_edit_doc_2890",
        title: "Home Page - Tab Content 02",
        sub_title: "Section",
        href: "https://usdm.com/wp/wp-admin/post.php?post=2890&action=elementor",
      },
      2898: {
        id: "elementor_edit_doc_2898",
        title: "Home Page - Tab Content 03",
        sub_title: "Section",
        href: "https://usdm.com/wp/wp-admin/post.php?post=2898&action=elementor",
      },
      1104: {
        id: "elementor_edit_doc_1104",
        title: "Resources",
        sub_title: "Loop",
        href: "https://usdm.com/wp/wp-admin/post.php?post=1104&action=elementor",
      },
      831: {
        id: "elementor_edit_doc_831",
        title: "Footer",
        sub_title: "Footer",
        href: "https://usdm.com/wp/wp-admin/post.php?post=831&action=elementor",
      },
      6950: {
        id: "elementor_edit_doc_6950",
        title: "Home Page - Video",
        sub_title: "Popup",
        href: "https://usdm.com/wp/wp-admin/post.php?post=6950&action=elementor",
      },
      22357: {
        id: "elementor_site_settings",
        title: "Site Settings",
        sub_title: "Site",
        href: "https://usdm.com/wp/wp-admin/post.php?post=84&action=elementor#e:run:panel/global/open",
        class: "elementor-site-settings",
        parent_class: "elementor-second-section",
      },
      22358: {
        id: "elementor_app_site_editor",
        title: "Theme Builder",
        sub_title: "Site",
        href: "https://usdm.com/wp/wp-admin/admin.php?page=elementor-app&ver=3.6.5#/site-editor",
        class: "elementor-app-link",
        parent_class: "elementor-second-section",
      },
    },
  },
};

// ----------cONFIG OBJ 5 END----------------//
//---------------------------------//
(function () {
  var request,
    b = document.body,
    c = "className",
    cs = "customize-support",
    rcs = new RegExp("(^|\\s+)(no-)?" + cs + "(\\s+|$)");

  request = true;

  b[c] = b[c].replace(rcs, " ");
  // The customizer requires postMessage and CORS (if the site is cross domain).
  b[c] += (window.postMessage && request ? " " : " no-") + cs;
})();

//--------------------------//
