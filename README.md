# meatfish.biz.id

Landing page statis berbahasa Indonesia untuk informasi kemitraan Meatfish, program usaha frozen food, dan pasokan B2B.

## Struktur
- `index.html`: konten landing page, metadata SEO, canonical, Open Graph, dan schema Organization/WebSite.
- `assets/style.css`: tampilan responsif.
- `assets/main.js`: navigasi mobile dan formulir yang menyiapkan pesan WhatsApp.
- `robots.txt` dan `sitemap.xml`: instruksi crawler dan URL kanonis.
- `CNAME`: domain khusus yang dimaksudkan untuk GitHub Pages.

## Menjalankan secara lokal
Dari folder repositori, jalankan:
```powershell
python -m http.server 8080
```
Lalu buka `http://localhost:8080`.

## Deployment dan domain
Repositori memiliki GitHub Actions workflow di `.github/workflows/static.yml` yang deploy isi repositori ke GitHub Pages saat ada push ke `main`. Pastikan Pages sudah aktif, domain khusus dikonfigurasi pada pengaturan Pages, DNS domain diarahkan ke GitHub Pages, dan HTTPS aktif. File `CNAME` tidak mengubah DNS registrar secara otomatis.

## Sebelum publikasi final
- Konfirmasi kontak WhatsApp kemitraan yang dipakai pada formulir.
- Konfirmasi isi, harga, syarat, dan ketersediaan paket kemitraan dari tim resmi.
- Pastikan kepemilikan domain dan DNS; validasi HTTPS setelah deployment selesai.
- Pastikan properti Google Search Console sudah diverifikasi, kemudian kirim sitemap `https://meatfish.biz.id/sitemap.xml`.
- Ganti ilustrasi emoji dengan foto produk/gerai berlisensi bila tersedia.

Informasi paket dapat berubah, sehingga situs ini mengarahkan pengunjung ke halaman resmi untuk ketentuan terbaru.
