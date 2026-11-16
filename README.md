# Klinik Site Şablonu

Estetik / plastik cerrahi / dolgu & botoks klinikleri için hazır web sitesi. Build gerekmez, tek dosyadan ayarlanır.

## Kullanım

1. Klonla: `git clone <repo> musteri-adi && cd musteri-adi && rm -rf .git`
2. `site.config.js` dosyasını müşterinin bilgileriyle doldur.
3. Logo ve fotoğrafları `assets/img/` içine koy, yollarını config'e yaz.
4. Test için: `python -m http.server 8000`
5. Klasörü Netlify, Cloudflare Pages ya da cPanel gibi bir hosta yükle.

Sadece `site.config.js` ve `assets/img/` değişir, diğer dosyalara dokunma.

## Dikkat

- Önce/sonra galerisi ve yorumlar **kapalıdır**. Sağlık reklamı kuralları nedeniyle müşteri uygunluğu doğrulamadan açma.
- Şablondaki rakamlar, hekim bilgileri ve ruhsat no örnektir. Müşterinin gerçek bilgileriyle değiştir.
