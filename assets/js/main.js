/* Siteyi site.config.js'ten üretir. Müşteriye özel değişiklik için bu dosyaya dokunmayın. */
(function () {
  "use strict";
  var C = window.SITE_CONFIG;
  if (!C) { console.error("site.config.js bulunamadı"); return; }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var on = function (k) { return C.sections && C.sections[k] !== false; };
  var digits = function (s) { return String(s || "").replace(/\D/g, ""); };
  var waLink = function (msg) {
    var n = digits(C.contact.whatsapp);
    return n ? "https://wa.me/" + n + "?text=" + encodeURIComponent(msg || C.contact.whatsappMessage || "") : "";
  };

  /* ---------- Tema ---------- */
  var T = C.theme || {}, r = document.documentElement.style;
  [["primary", "--primary"], ["primaryDark", "--primary-dark"], ["accent", "--accent"], ["bg", "--bg"],
   ["surface", "--surface"], ["text", "--text"], ["muted", "--muted"], ["radius", "--radius"],
   ["fontHeading", "--font-heading"], ["fontBody", "--font-body"]].forEach(function (p) {
    if (T[p[0]]) r.setProperty(p[1], T[p[0]]);
  });
  if (T.googleFonts) {
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = T.googleFonts; document.head.appendChild(l);
  }

  /* ---------- Head / SEO ---------- */
  var S = C.seo || {};
  document.documentElement.lang = (C.brand && C.brand.lang) || "tr";
  document.title = S.title || C.brand.name;
  var setMeta = function (attr, key, val) {
    if (!val) return;
    var m = $('meta[' + attr + '="' + key + '"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, key); document.head.appendChild(m); }
    m.setAttribute("content", val);
  };
  setMeta("name", "description", S.description);
  setMeta("property", "og:title", S.title);
  setMeta("property", "og:description", S.description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", S.url);
  setMeta("property", "og:image", S.ogImage);
  setMeta("name", "theme-color", T.primary);
  if (C.brand.favicon) {
    var ic = document.createElement("link"); ic.rel = "icon"; ic.href = C.brand.favicon; document.head.appendChild(ic);
  }
  if (S.url) { var cn = document.createElement("link"); cn.rel = "canonical"; cn.href = S.url; document.head.appendChild(cn); }

  var ld = {
    "@context": "https://schema.org",
    "@type": (S.business && S.business.type) || "MedicalBusiness",
    name: C.brand.name, url: S.url, telephone: C.contact.phone, email: C.contact.email,
    address: C.contact.address, description: S.description,
  };
  if (S.business && S.business.priceRange) ld.priceRange = S.business.priceRange;
  if (S.business && S.business.geo && S.business.geo.lat)
    ld.geo = { "@type": "GeoCoordinates", latitude: S.business.geo.lat, longitude: S.business.geo.lng };
  var ldEl = document.createElement("script"); ldEl.type = "application/ld+json";
  ldEl.textContent = JSON.stringify(ld); document.head.appendChild(ldEl);

  /* ---------- Header ---------- */
  var nav = [];
  if (on("treatments")) nav.push(["Uygulamalar", "#uygulamalar"]);
  if (on("process")) nav.push(["Süreç", "#surec"]);
  if (on("doctors")) nav.push(["Hekimlerimiz", "#hekimler"]);
  if (on("gallery") && (C.gallery.items || []).length) nav.push(["Galeri", "#galeri"]);
  if (on("faq")) nav.push(["SSS", "#sss"]);
  if (on("contact")) nav.push(["İletişim", "#iletisim"]);

  var logo = C.brand.logoImage
    ? '<img src="' + esc(C.brand.logoImage) + '" alt="' + esc(C.brand.name) + '">'
    : esc(C.brand.logoText || C.brand.name);
  $("#header").innerHTML =
    '<div class="container bar"><a class="logo" href="#">' + logo + "</a>" +
    '<button class="menu-btn" aria-label="Menü" aria-expanded="false">☰</button>' +
    '<nav class="nav" id="nav">' +
    nav.map(function (n) { return '<a href="' + n[1] + '">' + esc(n[0]) + "</a>"; }).join("") +
    (on("contact") ? '<a class="btn" style="color:#fff" href="#iletisim">Randevu</a>' : "") +
    "</nav></div>";
  var mb = $(".menu-btn"), nv = $("#nav");
  mb.addEventListener("click", function () { var o = nv.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
  nv.addEventListener("click", function (e) { if (e.target.tagName === "A") nv.classList.remove("open"); });

  /* ---------- Bölümler ---------- */
  var H = C.hero || {}, html = "";

  html += '<section class="hero' + (H.image ? " has-img" : "") + '"' +
    (H.image ? ' style="background-image:linear-gradient(rgba(30,20,16,.55),rgba(30,20,16,.55)),url(\'' + esc(H.image) + '\')"' : "") +
    '><div class="container"><div class="inner">' +
    (H.eyebrow ? '<div class="eyebrow">' + esc(H.eyebrow) + "</div>" : "") +
    "<h1>" + esc(H.title) + "</h1><p class=\"lead\">" + esc(H.subtitle) + "</p>" +
    '<div class="actions">' +
    (H.primaryCta ? '<a class="btn" href="' + esc(H.primaryCta.href) + '">' + esc(H.primaryCta.label) + "</a>" : "") +
    (H.secondaryCta ? '<a class="btn ghost" href="' + esc(H.secondaryCta.href) + '">' + esc(H.secondaryCta.label) + "</a>" : "") +
    "</div></div></div></section>";

  if (on("trust") && (C.trust || []).length) {
    html += '<div class="trust"><div class="container grid">' +
      C.trust.map(function (t) { return "<div><strong>" + esc(t.value) + "</strong><span>" + esc(t.label) + "</span></div>"; }).join("") +
      "</div></div>";
  }

  if (on("treatments") && C.treatments) {
    var items = C.treatments.items || [];
    var cats = [];
    items.forEach(function (i) { if (i.category && cats.indexOf(i.category) < 0) cats.push(i.category); });
    html += '<section id="uygulamalar"><div class="container"><h2>' + esc(C.treatments.title) + "</h2>" +
      '<p class="section-sub">' + esc(C.treatments.subtitle) + "</p>" +
      (cats.length > 1
        ? '<div class="filters"><button class="chip active" data-cat="">Tümü</button>' +
          cats.map(function (c) { return '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("") + "</div>"
        : "") +
      '<div class="cards" id="tCards">' +
      items.map(function (i, idx) {
        return '<article class="card" data-cat="' + esc(i.category) + '"><span class="tag">' + esc(i.category) + "</span><h3>" +
          esc(i.name) + "</h3><p>" + esc(i.short) + '</p><button class="link" data-t="' + idx + '">Detaylar →</button></article>';
      }).join("") + "</div></div></section>";
  }

  if (on("process") && C.process) {
    html += '<section id="surec" style="background:var(--surface)"><div class="container"><h2>' + esc(C.process.title) +
      '</h2><div class="steps">' +
      C.process.steps.map(function (s) { return '<div class="step"><h3>' + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"; }).join("") +
      "</div></div></section>";
  }

  if (on("doctors") && C.doctors && (C.doctors.items || []).length) {
    html += '<section id="hekimler"><div class="container"><h2>' + esc(C.doctors.title) + '</h2><div class="cards">' +
      C.doctors.items.map(function (d) {
        var initials = String(d.name).replace(/^(Uzm\.|Dr\.|Op\.|Prof\.|Doç\.|\s)+/gi, "").trim().charAt(0);
        return '<div class="card doc">' +
          (d.photo ? '<img class="avatar" src="' + esc(d.photo) + '" alt="' + esc(d.name) + '">' : '<div class="avatar">' + esc(initials) + "</div>") +
          "<div><h3>" + esc(d.name) + "</h3><p><em>" + esc(d.title) + "</em></p><p>" + esc(d.bio) + "</p></div></div>";
      }).join("") + "</div></div></section>";
  }

  if (on("gallery") && C.gallery && (C.gallery.items || []).length) {
    html += '<section id="galeri" style="background:var(--surface)"><div class="container"><h2>' + esc(C.gallery.title) + '</h2><div class="gal">' +
      C.gallery.items.map(function (g) {
        return '<figure><div class="pair"><img loading="lazy" src="' + esc(g.before) + '" alt="Önce"><img loading="lazy" src="' +
          esc(g.after) + '" alt="Sonra"></div><figcaption>' + esc(g.caption) + "</figcaption></figure>";
      }).join("") + "</div></div></section>";
  }

  if (on("testimonials") && C.testimonials && (C.testimonials.items || []).length) {
    html += '<section><div class="container"><h2>' + esc(C.testimonials.title) + '</h2><div class="cards">' +
      C.testimonials.items.map(function (t) {
        return '<div class="card"><blockquote><p>“' + esc(t.text) + "”</p><footer>— " + esc(t.name) + "</footer></blockquote></div>";
      }).join("") + "</div></div></section>";
  }

  if (on("faq") && C.faq && (C.faq.items || []).length) {
    html += '<section id="sss"><div class="container" style="max-width:780px"><h2>' + esc(C.faq.title) + "</h2>" +
      C.faq.items.map(function (f) { return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>"; }).join("") +
      "</div></section>";
    var faqLd = document.createElement("script"); faqLd.type = "application/ld+json";
    faqLd.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: C.faq.items.map(function (f) {
        return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } };
      }),
    });
    document.head.appendChild(faqLd);
  }

  var K = C.contact || {};
  if (on("contact")) {
    var treatOpts = (C.treatments.items || []).map(function (i) { return "<option>" + esc(i.name) + "</option>"; }).join("");
    html += '<section id="iletisim" style="background:var(--surface)"><div class="container"><h2>Randevu & İletişim</h2><div class="contact-grid"><div>' +
      '<form id="contactForm" novalidate>' +
      '<label>Ad Soyad<input name="name" required autocomplete="name"></label>' +
      '<label>Telefon<input name="phone" type="tel" required autocomplete="tel"></label>' +
      '<label>İlgilendiğiniz uygulama<select name="treatment"><option value="">Seçiniz</option>' + treatOpts + "<option>Diğer</option></select></label>" +
      '<label>Mesajınız<textarea name="message" rows="3"></textarea></label>' +
      '<label class="check"><input type="checkbox" name="kvkk" required><span>Kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum' +
      (C.legal && C.legal.kvkkUrl ? ' (<a href="' + esc(C.legal.kvkkUrl) + '" target="_blank" rel="noopener">Aydınlatma metni</a>)' : "") + ".</span></label>" +
      '<button class="btn" type="submit">Gönder</button><p class="form-msg" id="formMsg" role="status"></p></form></div><div>' +
      "<p><strong>Telefon:</strong> <a href=\"tel:" + esc(digits(K.phone) ? "+" + digits(K.phone) : "") + '">' + esc(K.phone) + "</a></p>" +
      (K.email ? '<p><strong>E-posta:</strong> <a href="mailto:' + esc(K.email) + '">' + esc(K.email) + "</a></p>" : "") +
      "<p><strong>Adres:</strong> " + esc(K.address) + "</p>" +
      '<table class="hours">' + (K.hours || []).map(function (h) { return "<tr><td>" + esc(h[0]) + "</td><td>" + esc(h[1]) + "</td></tr>"; }).join("") + "</table>" +
      (K.mapEmbedUrl ? '<iframe class="map" loading="lazy" title="Harita" src="' + esc(K.mapEmbedUrl) + '"></iframe>' : "") +
      "</div></div></div></section>";
  }

  $("#app").innerHTML = html;

  /* ---------- Footer ---------- */
  var soc = K.social || {}, socHtml = Object.keys(soc).filter(function (k) { return soc[k]; })
    .map(function (k) { return '<a href="' + esc(soc[k]) + '" target="_blank" rel="noopener">' + esc(k.charAt(0).toUpperCase() + k.slice(1)) + "</a>"; }).join("");
  $("#footer").innerHTML = '<div class="container"><strong style="color:#fff">' + esc(C.brand.name) + "</strong>" +
    (socHtml ? '<div class="social">' + socHtml + "</div>" : "") +
    '<p class="note">' + esc(C.legal && C.legal.footerNote) + "</p>" +
    "<p>" + esc(C.legal && C.legal.license) + " · © " + new Date().getFullYear() + " " + esc(C.brand.name) + "</p></div>";

  /* ---------- WhatsApp sabit buton ---------- */
  var wa = waLink();
  if (wa) { var w = $("#waFloat"); w.href = wa; w.hidden = false; }

  /* ---------- Uygulama filtre + modal ---------- */
  var filters = $(".filters");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      filters.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c === b); });
      document.querySelectorAll("#tCards .card").forEach(function (c) {
        c.hidden = !!b.dataset.cat && c.dataset.cat !== b.dataset.cat;
      });
    });
  }
  var modal = $("#modal");
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button.link[data-t]");
    if (b) {
      var t = C.treatments.items[+b.dataset.t];
      modal.innerHTML = '<button class="close" aria-label="Kapat">×</button><h3>' + esc(t.name) + "</h3><p>" + esc(t.details) + "</p><dl>" +
        (t.duration ? "<dt>Süre</dt><dd>" + esc(t.duration) + "</dd>" : "") +
        (t.recovery ? "<dt>İyileşme</dt><dd>" + esc(t.recovery) + "</dd>" : "") + "</dl>" +
        '<a class="btn" href="' + esc(waLink("Merhaba, " + t.name + " hakkında bilgi almak istiyorum.") || "#iletisim") + '" target="_blank" rel="noopener">Bu uygulama için bilgi al</a>';
      modal.showModal();
    } else if (e.target.closest("#modal .close") || e.target === modal) { modal.close(); }
  });

  /* ---------- Form ---------- */
  var form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = $("#formMsg"), d = new FormData(form);
      if (!d.get("name").trim() || digits(d.get("phone")).length < 10 || !form.kvkk.checked) {
        msg.textContent = "Lütfen adınızı, geçerli bir telefon numarasını girin ve onay kutusunu işaretleyin."; return;
      }
      if (K.formMode === "endpoint" && K.formEndpoint) {
        msg.textContent = "Gönderiliyor…";
        fetch(K.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
          .then(function (res) { if (!res.ok) throw 0; msg.textContent = "Teşekkürler, en kısa sürede dönüş yapacağız."; form.reset(); })
          .catch(function () { msg.textContent = "Gönderilemedi. Lütfen telefonla ulaşın."; });
      } else {
        var text = "Merhaba, ben " + d.get("name") + ".\nTelefon: " + d.get("phone") +
          (d.get("treatment") ? "\nUygulama: " + d.get("treatment") : "") + (d.get("message") ? "\nMesaj: " + d.get("message") : "");
        var link = waLink(text);
        if (link) window.open(link, "_blank", "noopener"); else msg.textContent = "WhatsApp numarası tanımlı değil.";
      }
    });
  }

  /* ---------- Analitik + çerez (yalnızca onayla yüklenir) ---------- */
  var A = C.analytics || {};
  function loadAnalytics() {
    if (A.ga4) {
      var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(A.ga4);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date()); window.gtag("config", A.ga4);
    }
  }
  if (A.ga4) {
    var consent = null; try { consent = localStorage.getItem("cookie-consent"); } catch (e) {}
    if (consent === "yes") loadAnalytics();
    else if (consent !== "no" && C.legal && C.legal.cookieBanner) {
      var cb = document.createElement("div"); cb.className = "cookie";
      cb.innerHTML = '<p>Siteyi geliştirmek için çerezler kullanıyoruz.</p><button class="btn" data-c="yes">Kabul et</button> <button class="btn ghost" data-c="no">Reddet</button>';
      document.body.appendChild(cb);
      cb.addEventListener("click", function (e) {
        var v = e.target.dataset.c; if (!v) return;
        try { localStorage.setItem("cookie-consent", v); } catch (x) {}
        if (v === "yes") loadAnalytics(); cb.remove();
      });
    }
  }
})();
