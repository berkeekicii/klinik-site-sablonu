/**
 * ============================================================
 *  TEK DOSYADAN ENTEGRASYON — müşteriye özel her şey burada.
 *  index.html / style.css / main.js dosyalarına dokunmaya gerek yok.
 *  Bir bölümü gizlemek için: sections.<bölüm> = false
 * ============================================================
 */
window.SITE_CONFIG = {
  // ---------- Marka ----------
  brand: {
    name: "Klinik Adı",
    tagline: "Doğal görünüm, güvenli sonuç",
    logoText: "Klinik Adı",          // logo görseli yoksa yazı logosu
    logoImage: "",                   // örn: "assets/img/logo.svg" (doluysa yazı yerine kullanılır)
    favicon: "assets/img/favicon.svg",
    lang: "tr",
  },

  // ---------- Tema (renkler / yazı tipi) ----------
  theme: {
    primary: "#8a6a5a",      // ana renk (butonlar, vurgular)
    primaryDark: "#6e5144",
    accent: "#d9b8a6",       // yumuşak vurgu
    bg: "#fbf8f6",
    surface: "#ffffff",
    text: "#2b2523",
    muted: "#7a6f6a",
    radius: "16px",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFonts:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap",
  },

  // ---------- Bölümleri aç/kapat ----------
  sections: {
    trust: true,
    treatments: true,
    process: true,
    doctors: true,
    gallery: false,       // ÖNCE hukuki durumu kontrol edin (README > Mevzuat notu)
    testimonials: false,  // yalnızca GERÇEK ve izinli yorumlarla açın
    faq: true,
    contact: true,
  },

  // ---------- İletişim ----------
  contact: {
    phone: "+90 500 000 00 00",
    whatsapp: "905000000000",        // başında + ve boşluk olmadan
    whatsappMessage: "Merhaba, randevu / bilgi almak istiyorum.",
    email: "info@ornek-klinik.com",
    address: "Örnek Mah. Örnek Cad. No:1, Mersin",
    mapEmbedUrl: "",                 // Google Maps > Paylaş > Haritayı yerleştir > src değeri
    hours: [
      ["Pazartesi – Cuma", "09:00 – 19:00"],
      ["Cumartesi", "10:00 – 16:00"],
      ["Pazar", "Kapalı"],
    ],
    social: {
      instagram: "",
      facebook: "",
      youtube: "",
      tiktok: "",
    },
    // Form gönderimi: "whatsapp" (formu WhatsApp mesajına çevirir) | "endpoint" (Formspree vb.)
    formMode: "whatsapp",
    formEndpoint: "",                // formMode "endpoint" ise örn: https://formspree.io/f/xxxxx
  },

  // ---------- Hero ----------
  hero: {
    eyebrow: "Medikal Estetik Merkezi",
    title: "Kendinizi en iyi hissettiğiniz haline kavuşun",
    subtitle:
      "Uzman hekim kadromuzla botoks, dolgu ve yüz estetiği uygulamalarında kişiye özel, doğal sonuçlar.",
    primaryCta: { label: "Ücretsiz Ön Görüşme", href: "#iletisim" },
    secondaryCta: { label: "Uygulamaları İncele", href: "#uygulamalar" },
    image: "",                       // örn: "assets/img/hero.jpg" (boşsa degrade arka plan)
  },

  // ---------- Güven göstergeleri (rakamları müşteriden alın, uydurmayın) ----------
  trust: [
    { value: "10+", label: "Yıllık deneyim" },
    { value: "5.000+", label: "Uygulama" },
    { value: "Sağlık Bakanlığı", label: "Onaylı merkez" },
    { value: "Tek kullanımlık", label: "Steril ekipman" },
  ],

  // ---------- Uygulamalar ----------
  treatments: {
    title: "Uygulamalarımız",
    subtitle: "Her uygulama, ön muayene ve kişiye özel planlama ile başlar.",
    items: [
      {
        category: "Yüz",
        name: "Botoks",
        short: "Mimik çizgilerini yumuşatan, doğal görünümü koruyan uygulama.",
        details:
          "Alın, kaş arası ve göz çevresi çizgileri için uygulanır. Süre ve etki, kişiye göre değişir. Uygunluk muayenede belirlenir.",
        duration: "15–30 dk",
        recovery: "Gündelik hayata dönüş hemen",
      },
      {
        category: "Yüz",
        name: "Dudak Dolgusu",
        short: "Oran ve hacmi dengeleyen hyaluronik asit uygulaması.",
        details:
          "Dudak çizgisi ve hacim, yüz oranlarına göre planlanır. Kullanılan ürün ve miktar muayenede netleşir.",
        duration: "30–45 dk",
        recovery: "Hafif şişlik görülebilir",
      },
      {
        category: "Yüz",
        name: "Yanak & Çene Hattı Dolgusu",
        short: "Yüz hatlarını destekleyen ve dengeleyen dolgu uygulaması.",
        details: "Hacim kaybı ve asimetri için kişiye özel planlama yapılır.",
        duration: "30–60 dk",
        recovery: "Hafif kızarıklık/şişlik olabilir",
      },
      {
        category: "Cilt",
        name: "Cilt Gençleştirme",
        short: "Mezoterapi, PRP ve cilt kalitesini artırmaya yönelik uygulamalar.",
        details: "Cilt tipine göre uygun yöntem muayenede belirlenir.",
        duration: "30–45 dk",
        recovery: "Kısa süreli kızarıklık",
      },
      {
        category: "Cerrahi",
        name: "Burun Estetiği",
        short: "Yüz oranlarına uygun, işlevi gözeten cerrahi planlama.",
        details:
          "Cerrahi işlemler ameliyathane koşullarında, uzman hekim tarafından yapılır. Detaylar muayene sonrası paylaşılır.",
        duration: "Muayenede belirlenir",
        recovery: "Muayenede belirlenir",
      },
      {
        category: "Cerrahi",
        name: "Göz Kapağı Estetiği",
        short: "Yorgun görünümü azaltmaya yönelik cerrahi uygulama.",
        details: "Uygunluk ve teknik, muayenede değerlendirilir.",
        duration: "Muayenede belirlenir",
        recovery: "Muayenede belirlenir",
      },
    ],
  },

  // ---------- Süreç ----------
  process: {
    title: "Nasıl ilerliyoruz?",
    steps: [
      { title: "Ön görüşme", text: "Beklentilerinizi dinler, size uygun seçenekleri anlatırız." },
      { title: "Muayene & planlama", text: "Hekim muayenesi sonrası kişiye özel plan hazırlanır." },
      { title: "Uygulama", text: "Steril ortamda, hekim tarafından uygulanır." },
      { title: "Takip", text: "İşlem sonrası kontrol ve bakım önerileri paylaşılır." },
    ],
  },

  // ---------- Hekimler ----------
  doctors: {
    title: "Hekimlerimiz",
    items: [
      {
        name: "Uzm. Dr. Ad Soyad",
        title: "Plastik, Rekonstrüktif ve Estetik Cerrah",
        bio: "Kısa özgeçmiş buraya. Eğitim, üyelikler ve ilgi alanları.",
        photo: "",                   // örn: "assets/img/dr-ad.jpg"
      },
    ],
  },

  // ---------- Önce/Sonra (varsayılan kapalı) ----------
  gallery: {
    title: "Galeri",
    items: [
      // { before: "assets/img/b1.jpg", after: "assets/img/a1.jpg", caption: "İşlem adı" },
    ],
  },

  // ---------- Yorumlar (varsayılan kapalı; yalnızca gerçek yorumlar) ----------
  testimonials: {
    title: "Danışan yorumları",
    items: [
      // { name: "A. K.", text: "Gerçek ve izinli yorum." },
    ],
  },

  // ---------- SSS ----------
  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        q: "İlk görüşme ücretli mi?",
        a: "Ön bilgilendirme görüşmesi ücretsizdir. Muayene ücreti hakkında bilgi için bizi arayın.",
      },
      {
        q: "Uygulamalar acı verir mi?",
        a: "Uygulamaya göre değişir; konfor için gerekli önlemler alınır.",
      },
      {
        q: "Sonuçlar ne kadar sürer?",
        a: "Süre uygulamaya ve kişiye göre değişir. Hekiminiz muayenede size net bilgi verir.",
      },
      {
        q: "Hamilelikte uygulama yapılır mı?",
        a: "Hamilelik ve emzirme döneminde estetik uygulamalar önerilmez. Ayrıntıları hekiminizle konuşun.",
      },
    ],
  },

  // ---------- SEO ----------
  seo: {
    title: "Klinik Adı | Medikal Estetik, Botoks ve Dolgu — Mersin",
    description:
      "Mersin'de botoks, dolgu ve yüz estetiği. Uzman hekim kadrosu ile kişiye özel planlama. Ücretsiz ön görüşme için arayın.",
    url: "https://www.ornek-klinik.com",
    ogImage: "",
    // Yerel işletme şeması (JSON-LD) için
    business: { type: "MedicalBusiness", priceRange: "₺₺", geo: { lat: "", lng: "" } },
  },

  // ---------- Yasal ----------
  legal: {
    footerNote:
      "Bu sitedeki bilgiler genel bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Her uygulama hekim muayenesi sonrası planlanır.",
    kvkkUrl: "",                     // KVKK aydınlatma metni sayfası
    cookieBanner: false,             // analitik/çerez eklenirse true yapın
    license: "Sağlık Bakanlığı ruhsat no: ______",
  },

  // ---------- Analitik (opsiyonel) ----------
  analytics: {
    ga4: "",                         // örn: "G-XXXXXXXXXX" (çerez onayından sonra yüklenir)
  },
};
