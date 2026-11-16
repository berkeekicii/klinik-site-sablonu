# Klinik Site Şablonu

Estetik / plastik cerrahi / dolgu & botoks merkezleri için bağımlılıksız (build gerektirmeyen), tek dosyadan yapılandırılan web sitesi iskeleti.

## Yeni müşteriye entegrasyon (≈15 dk)

1. Repoyu kopyalayın: `git clone <repo> musteri-adi && cd musteri-adi && rm -rf .git`
2. `site.config.js` dosyasını açın ve doldurun: marka, renkler, telefon/WhatsApp, uygulamalar, hekimler, SSS, SEO.
3. Görselleri `assets/img/` içine koyun, yollarını config'e yazın (logo, hero, hekim fotoğrafı).
4. Yerelde görmek için: `python -m http.server 8000` (veya dosyayı tarayıcıda açın).
5. Yayınlama: klasörü olduğu gibi herhangi bir statik hosta yükleyin (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel).
6. `robots.txt` içindeki sitemap satırını ve `seo.url` alanını canlı alan adıyla güncelleyin.

`index.html`, `style.css`, `main.js` dosyalarını müşteri başına değiştirmeniz gerekmez.

## Neler var?
Hero, güven göstergeleri, filtrelenebilir uygulama kartları + detay penceresi, süreç, hekimler, SSS, iletişim formu (WhatsApp veya Formspree), harita, sabit WhatsApp butonu, JSON-LD (yerel işletme + SSS), çerez onayı (GA4 yalnızca onayla yüklenir). Mobil uyumlu.

## Bölüm açma/kapama
`sections` altında `false` yapmanız yeterli. **Önce/sonra galerisi ve yorumlar varsayılan kapalıdır.**

## Mevzuat notu
Türkiye'de sağlık hizmeti tanıtım/reklamı kurallara tabidir (ör. önce/sonra görselleri, hasta yorumu, fiyat/indirim vurgusu, "en iyi" gibi üstünlük iddiaları kısıtlanabilir). Galeriyi veya yorumları açmadan önce müşterinin güncel Sağlık Bakanlığı mevzuatına uygunluğunu doğrulayın; güven göstergesi rakamlarını ve ruhsat bilgisini müşteriden alın. Şablondaki metinler yer tutucudur.

## Sınırlar
İçerik JavaScript ile üretilir; Google çoğunlukla işler ama gelişmiş SEO için ileride önceden üretilmiş (pre-render) statik çıktı eklenebilir. Çok dilli destek yoktur.
