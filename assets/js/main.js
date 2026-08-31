/* =========================================================================
   Catering Firdaus — site behaviour (vanilla JS, no dependencies)
   ========================================================================= */
(function () {
  "use strict";

  var LANGS = ["bg", "en", "tr", "ar"];
  var STORAGE_KEY = "firdaus-lang";
  var currentLang = detectInitialLang();
  var currentCategory = window.MENU_DATA.categories[0];
  var currentDay = window.WEEKLY_MENU.days[0];

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage unavailable */ }
    return "bg";
  }

  function t(lang, path) {
    var node = window.SITE_I18N[lang];
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (!node) return "";
      node = node[parts[i]];
    }
    return typeof node === "string" ? node : "";
  }

  function formatPrice(value) {
    return value.toFixed(2).replace(".", ",") + " €";
  }

  /* ---------------------------- phone rendering ---------------------------- */
  function phoneIcon() {
    return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5c0-1 1-2 2-2h2l2 5-2 2c1 3 3 5 6 6l2-2 5 2v2c0 1-1 2-2 2-9 0-15-6-15-15z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  }

  function renderPhoneList(container, variant) {
    if (!container) return;
    var footer = variant === "footer";
    container.innerHTML = window.SITE_DATA.phones.map(function (num) {
      return '<a class="phone-row' + (footer ? " phone-row-footer" : "") + '" href="tel:' + num + '">' +
        (footer ? "" : phoneIcon()) + "<span>" + num + "</span></a>";
    }).join("");
  }

  function renderHeroPhone() {
    var el = document.getElementById("heroPhoneNumber");
    if (el) el.textContent = window.SITE_DATA.phones[0];
    var link = document.getElementById("heroPhoneLink");
    if (link) link.setAttribute("href", "tel:" + window.SITE_DATA.phones[0]);
  }

  /* ---------------------------- main menu render ---------------------------- */
  function renderMenuTabs(lang) {
    var tabs = document.getElementById("menuTabs");
    tabs.innerHTML = window.MENU_DATA.categories.map(function (cat) {
      var active = cat === currentCategory ? " is-active" : "";
      var label = t(lang, "menuSection.categories." + cat);
      return '<button type="button" class="menu-tab' + active + '" role="tab" aria-selected="' + (cat === currentCategory) + '" data-cat="' + cat + '">' + label + "</button>";
    }).join("");

    Array.prototype.forEach.call(tabs.querySelectorAll(".menu-tab"), function (btn) {
      btn.addEventListener("click", function () {
        currentCategory = btn.getAttribute("data-cat");
        renderMenuTabs(currentLang);
        renderMenuPanels(currentLang);
        updateMenuPhoto();
      });
    });
  }

  function updateMenuPhoto() {
    var img = document.getElementById("menuPhoto");
    var placeholder = document.getElementById("menuPhotoPlaceholder");
    if (!img) return;
    placeholder.classList.remove("show");
    img.style.display = "";
    img.setAttribute("src", "assets/img/food-" + currentCategory + ".jpg");
  }

  function renderMenuPanels(lang) {
    var panels = document.getElementById("menuPanels");
    var items = window.MENU_DATA.items[currentCategory] || [];
    var priceLabel = t(lang, "menuSection.priceLabel");
    panels.innerHTML = items.map(function (item) {
      var name = item.name[lang] || item.name.bg;
      var weight = item.weight ? '<span class="menu-row-weight">' + item.weight + "</span>" : "";
      return (
        '<div class="menu-row">' +
        '<div class="menu-row-label"><span class="menu-row-name">' + name + "</span>" + weight + "</div>" +
        '<span class="menu-row-dots" aria-hidden="true"></span>' +
        '<span class="menu-row-price" aria-label="' + priceLabel + '">' + formatPrice(item.price) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------- weekly menu render ---------------------------- */
  function renderWeekTabs(lang) {
    var tabs = document.getElementById("weekTabs");
    var w = window.WEEKLY_MENU;
    tabs.innerHTML = w.days.map(function (dayKey) {
      var active = dayKey === currentDay ? " is-active" : "";
      var label = t(lang, "weeklySection.days." + dayKey);
      return '<button type="button" class="menu-tab' + active + '" role="tab" aria-selected="' + (dayKey === currentDay) + '" data-day="' + dayKey + '">' + label + "</button>";
    }).join("");

    Array.prototype.forEach.call(tabs.querySelectorAll(".menu-tab"), function (btn) {
      btn.addEventListener("click", function () {
        currentDay = btn.getAttribute("data-day");
        renderWeekTabs(currentLang);
        renderWeekPanel(currentLang);
      });
    });
  }

  function weeklyGroup(lang, heading, list) {
    if (!list || !list.length) return "";
    return (
      '<div class="weekly-group">' +
      '<p class="weekly-group-title">' + heading + "</p>" +
      list.map(function (i) {
        var name = i.name[lang] || i.name.bg;
        return (
          '<div class="menu-row">' +
          '<div class="menu-row-label"><span class="menu-row-name">' + name + "</span></div>" +
          '<span class="menu-row-dots" aria-hidden="true"></span>' +
          '<span class="menu-row-price">' + formatPrice(i.price) + "</span>" +
          "</div>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderWeekPanel(lang) {
    var panel = document.getElementById("weeklyPanel");
    var w = window.WEEKLY_MENU;
    var day = w.data[currentDay];
    var bread = day.bread;
    panel.innerHTML =
      weeklyGroup(lang, t(lang, "weeklySection.soups"), day.soups) +
      weeklyGroup(lang, t(lang, "weeklySection.mains"), day.mains) +
      weeklyGroup(lang, t(lang, "weeklySection.desserts"), day.desserts) +
      '<div class="weekly-bread"><p class="weekly-group-title">' + t(lang, "weeklySection.bread") + '</p>' +
      '<div class="menu-row"><div class="menu-row-label"><span class="menu-row-name">' +
      (bread.name[lang] || bread.name.bg) + '</span></div><span class="menu-row-dots" aria-hidden="true"></span>' +
      '<span class="menu-row-price">' + formatPrice(bread.price) + "</span></div></div>";
  }

  /* ---------------------------- why-choose-us render (top 3 only) ---------------------------- */
  function renderWhy(lang) {
    var grid = document.getElementById("whyGrid");
    var items = window.SITE_I18N[lang].why.items.slice(0, 3);
    grid.innerHTML = items.map(function (item, idx) {
      return (
        '<div class="why-card">' +
        '<span class="why-num">0' + (idx + 1) + "</span>" +
        "<h3>" + item.title + "</h3>" +
        "<p>" + item.text + "</p>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------- parties & events ---------------------------- */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function eventTypes(lang) {
    var ev = window.SITE_I18N[lang].events;
    return (ev && ev.types) || [];
  }

  function renderEventTypes(lang) {
    var list = document.getElementById("eventsTypes");
    var types = eventTypes(lang);

    if (list) {
      list.innerHTML = types.map(function (item) {
        return '<li class="events-type"><span class="dot"></span>' + esc(item.label) + "</li>";
      }).join("");
    }

    var select = document.getElementById("ev-type");
    if (select) {
      // keep whatever the visitor already picked when the language changes
      var chosen = select.value;
      select.innerHTML =
        '<option value="">' + esc(t(lang, "events.form.typePlaceholder")) + "</option>" +
        types.map(function (item) {
          return '<option value="' + esc(item.key) + '">' + esc(item.label) + "</option>";
        }).join("");
      if (chosen) select.value = chosen;
    }
  }

  /* The site has no backend, so an enquiry cannot be posted anywhere. Instead
     the form composes the message and hands it to the channels the business
     already runs on: a phone call, an SMS, or the clipboard. */
  var lastInquiry = null;

  function eventTypeLabel(lang, key) {
    var found = null;
    eventTypes(lang).forEach(function (item) { if (item.key === key) found = item.label; });
    return found || key;
  }

  function buildSummary(lang, data) {
    var f = "events.form.";
    var lines = [t(lang, f + "summaryTitle")];
    lines.push(t(lang, f + "name") + ": " + data.name);
    lines.push(t(lang, f + "phone") + ": " + data.phone);
    lines.push(t(lang, f + "type") + ": " + eventTypeLabel(lang, data.type));
    if (data.date) lines.push(t(lang, f + "date") + ": " + data.date);
    if (data.guests) lines.push(t(lang, f + "guests") + ": " + data.guests);
    if (data.notes) lines.push(t(lang, f + "notes") + ": " + data.notes);
    return lines.join("\n");
  }

  function setFieldError(input, message) {
    var box = document.getElementById("err-" + input.id);
    input.classList.toggle("has-error", !!message);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (!box) return;
    box.textContent = message || "";
    box.hidden = !message;
  }

  function validPhone(value) {
    return /^[+()\d][\d\s().-]{5,}$/.test(value.trim());
  }

  function refreshSummary(lang) {
    var out = document.getElementById("eventSummary");
    if (!out || !lastInquiry) return;
    var text = buildSummary(lang, lastInquiry);
    out.textContent = text;

    var phone = window.SITE_DATA.phones[0];
    var call = document.getElementById("eventCallBtn");
    var sms = document.getElementById("eventSmsBtn");
    if (call) call.setAttribute("href", "tel:" + phone);
    // "?&body=" is the form both iOS and Android accept
    if (sms) sms.setAttribute("href", "sms:" + phone + "?&body=" + encodeURIComponent(text));
  }

  function bindEventForm() {
    var form = document.getElementById("eventForm");
    if (!form) return;

    var success = document.getElementById("eventFormSuccess");
    var copyBtn = document.getElementById("eventCopyBtn");
    var resetBtn = document.getElementById("eventResetBtn");

    var required = ["ev-name", "ev-phone", "ev-type"];
    required.forEach(function (id) {
      var input = document.getElementById(id);
      if (!input) return;
      // clear the error as soon as the visitor starts putting it right
      input.addEventListener("input", function () { setFieldError(input, ""); });
      input.addEventListener("change", function () { setFieldError(input, ""); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstInvalid = null;
      required.forEach(function (id) {
        var input = document.getElementById(id);
        if (!input) return;
        var value = input.value.trim();
        var message = "";
        if (!value) message = t(currentLang, "events.form.required");
        else if (id === "ev-phone" && !validPhone(value)) message = t(currentLang, "events.form.invalidPhone");
        setFieldError(input, message);
        if (message && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) { firstInvalid.focus(); return; }

      lastInquiry = {
        name: document.getElementById("ev-name").value.trim(),
        phone: document.getElementById("ev-phone").value.trim(),
        type: document.getElementById("ev-type").value,
        date: document.getElementById("ev-date").value,
        guests: document.getElementById("ev-guests").value,
        notes: document.getElementById("ev-notes").value.trim()
      };

      refreshSummary(currentLang);
      form.hidden = true;
      success.hidden = false;
      success.setAttribute("tabindex", "-1");
      // focus without the browser's own scroll, then scroll properly — that
      // route honours scroll-padding-top, so the fixed header stays clear
      success.focus({ preventScroll: true });
      success.scrollIntoView({ block: "start", behavior: "smooth" });
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var text = document.getElementById("eventSummary").textContent;
        var label = copyBtn.querySelector("span");
        var done = function () {
          label.textContent = t(currentLang, "events.form.copied");
          setTimeout(function () { label.textContent = t(currentLang, "events.form.copy"); }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallbackCopy);
        } else {
          fallbackCopy();
        }
        function fallbackCopy() {
          var area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          try { document.execCommand("copy"); done(); } catch (err) { /* nothing else to try */ }
          document.body.removeChild(area);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        renderEventTypes(currentLang);
        required.forEach(function (id) {
          var input = document.getElementById(id);
          if (input) setFieldError(input, "");
        });
        lastInquiry = null;
        success.hidden = true;
        form.hidden = false;
        document.getElementById("ev-name").focus();
      });
    }
  }

  /* ---------------------------- static text apply ---------------------------- */
  function applyStaticText(lang) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var val = t(lang, el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });
    applyAttr(lang, "data-i18n-placeholder", "placeholder");
    applyAttr(lang, "data-i18n-alt", "alt");
  }

  /* Same lookup as data-i18n, but writes an attribute instead of the text —
     needed for placeholders and alt text, which have no text node. */
  function applyAttr(lang, dataAttr, target) {
    Array.prototype.forEach.call(document.querySelectorAll("[" + dataAttr + "]"), function (el) {
      var val = t(lang, el.getAttribute(dataAttr));
      if (val) el.setAttribute(target, val);
    });
  }

  function applyMeta(lang) {
    var title = t(lang, "seo.title");
    var desc = t(lang, "seo.description");
    if (title) document.title = title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && desc) ogDesc.setAttribute("content", desc);
  }

  /* ---------------------------- language switching ---------------------------- */
  function setLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "bg";
    currentLang = lang;
    var meta = window.SITE_I18N[lang]._meta;

    document.documentElement.setAttribute("lang", meta.htmlLang);
    document.documentElement.setAttribute("dir", meta.dir);
    document.body.classList.toggle("is-rtl", meta.dir === "rtl");

    applyStaticText(lang);
    applyMeta(lang);
    renderWhy(lang);
    renderMenuTabs(lang);
    renderMenuPanels(lang);
    renderWeekTabs(lang);
    renderWeekPanel(lang);
    renderEventTypes(lang);
    refreshSummary(lang);

    var codeEl = document.getElementById("langToggleCode");
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    Array.prototype.forEach.call(document.querySelectorAll("#langMenu li"), function (li) {
      li.classList.toggle("is-active", li.getAttribute("data-lang") === lang);
    });
    Array.prototype.forEach.call(document.querySelectorAll("#footerLangs button"), function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function renderFooterLangs() {
    var wrap = document.getElementById("footerLangs");
    wrap.innerHTML = LANGS.map(function (l) {
      return '<button type="button" data-lang-btn="' + l + '">' + window.SITE_I18N[l]._meta.label + "</button>";
    }).join("");
    Array.prototype.forEach.call(wrap.querySelectorAll("button"), function (btn) {
      btn.addEventListener("click", function () { setLanguage(btn.getAttribute("data-lang-btn")); });
    });
  }

  function bindLangMenu() {
    var toggle = document.getElementById("langToggle");
    var menu = document.getElementById("langMenu");

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });

    Array.prototype.forEach.call(menu.querySelectorAll("[data-lang-btn]"), function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang-btn"));
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------- mobile nav ---------------------------- */
  function bindMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("main-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.classList.toggle("nav-open", open);
    });
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  /* ---------------------------- scroll reveal + sticky header ---------------------------- */
  function bindScrollEffects() {
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

      Array.prototype.forEach.call(
        document.querySelectorAll(".reveal"),
        function (el) { observer.observe(el); }
      );
    }
  }

  /* ---------------------------- init ---------------------------- */
  function init() {
    document.getElementById("year").textContent = new Date().getFullYear();
    renderHeroPhone();
    updateMenuPhoto();
    renderPhoneList(document.getElementById("contactPhones"), "contact");
    renderPhoneList(document.getElementById("footerPhones"), "footer");

    renderFooterLangs();
    bindLangMenu();
    bindMobileNav();
    bindEventForm();

    setLanguage(currentLang);

    bindScrollEffects();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
