# Jalinan: Aplikasi Etnik Malaysia

Jalinan ialah prototaip aplikasi mudah alih untuk mengenali etnik di Malaysia: bahasa, agama, perayaan, pakaian tradisional, makanan, seni dan fakta menarik. Nama "Jalinan" diambil daripada benang yang terjalin dalam kain tenun, sesuai dengan corak kain setiap etnik yang menjadi identiti visual aplikasi ini.

Aplikasi ini dibina sebagai **PWA (Progressive Web App)**. Ia boleh dibuka di pelayar telefon, dipasang ke skrin utama seperti aplikasi biasa, dan berfungsi tanpa internet selepas dibuka kali pertama.

## Ciri-ciri

| Tab | Fungsi |
| --- | --- |
| **Teroka** | Senarai 14 etnik dengan carian (nama, makanan, tempat) dan penapis wilayah: Semenanjung, Sabah, Sarawak. Turut dipaparkan komposisi warganegara daripada Banci 2020. |
| **Halaman etnik** | Ringkasan, bahasa, agama, lokasi, ucapan salam, perayaan, pakaian, makanan, seni budaya, seni bina dan fakta menarik. Ada butang **Simpan** dan ruang **Nota saya**. |
| **Perayaan** | Kalendar perayaan mengikut bulan, dengan penapis etnik. Bulan semasa ditanda "Kini". |
| **Kuiz** | 10 soalan rawak yang dijana daripada data, dengan penerangan selepas setiap jawapan. Markah terbaik disimpan. |
| **Nota** | Senarai etnik yang disimpan dan semua nota peribadi. |

Etnik yang dimuatkan: Melayu, Cina, India, Iban, Bidayuh, Melanau, Orang Ulu, Kadazan-Dusun, Bajau, Murut, Orang Asli, Baba Nyonya, Portugis-Kristang dan Siam.

Aplikasi menyokong mod cerah dan gelap mengikut tetapan telefon.

## Cara jalankan

Tiada pemasangan atau proses *build* diperlukan. Jalankan pelayan web ringkas di folder projek:

```bash
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000` di pelayar. Untuk menguji di telefon dalam rangkaian Wi-Fi yang sama, buka `http://<alamat-IP-komputer>:8000`.

> Membuka `index.html` terus (melalui `file://`) juga berfungsi, tetapi mod luar talian dan pemasangan hanya aktif apabila dihoskan melalui `http://localhost` atau `https://`.

## Pasang di telefon

1. Hoskan projek di mana-mana hos statik HTTPS, contohnya **GitHub Pages** (Settings → Pages → pilih cabang dan folder `/`).
2. Buka pautan tersebut di telefon.
3. **Android (Chrome):** menu ⋮ → *Tambah ke skrin utama* / *Pasang aplikasi*.
   **iPhone (Safari):** butang Kongsi → *Tambah ke Skrin Utama*.

## Jadikan APK untuk Play Store

Dua cara yang tidak memerlukan penulisan semula kod:

- **PWABuilder** (paling mudah): masukkan URL aplikasi yang telah dihoskan di [pwabuilder.com](https://www.pwabuilder.com). Ia menjana pakej Android (TWA) yang boleh dimuat naik ke Google Play.
- **Capacitor**: bungkus folder ini sebagai aplikasi Android/iOS asli.
  ```bash
  npm init -y
  npm install @capacitor/core @capacitor/cli @capacitor/android
  npx cap init Jalinan my.jalinan.app --web-dir .
  npx cap add android
  npx cap open android   # bina APK dalam Android Studio
  ```

## Struktur projek

```
index.html            Rangka aplikasi (bar atas, kandungan, bar tab)
css/style.css         Gaya, token warna cerah/gelap dan corak kain CSS
js/data.js            Data etnik, perayaan dan statistik
js/app.js             Penghala, paparan setiap tab, kuiz dan storan nota
manifest.webmanifest  Maklumat pemasangan PWA
sw.js                 Pekerja servis untuk mod luar talian
icons/                Ikon aplikasi (SVG dan PNG)
```

## Tambah atau ubah etnik

Semua kandungan berada dalam `js/data.js`. Untuk menambah etnik baharu, salin satu objek dalam `window.ETNIK` dan ubah medannya:

- `id`: pengenal unik tanpa ruang, contohnya `'lun-bawang'`
- `wilayah`: satu atau lebih daripada `'semenanjung'`, `'sabah'`, `'sarawak'`
- `warna` dan `corak`: warna kain dan jenis corak (`songket`, `zigzag`, `kotak`, `titik`, `ombak`, `manik`, `jalur`)
- `ikon`: ciri yang hanya milik etnik ini. Kuiz menggunakannya untuk soalan "Etnik manakah yang terkenal dengan…"
- `pakaian`, `makanan`, `seni`, `rumah`, `salam`: pilihan. Bahagian yang kosong tidak dipaparkan.

Perayaan baharu ditambah dalam `window.PERAYAAN` dengan senarai `etnik` yang menyambutnya.

Selepas mengubah fail, tukar nombor versi `CACHE` dalam `sw.js` (contohnya `jalinan-v2`) supaya telefon yang sudah memasang aplikasi menerima kemas kini.

## Cadangan pembangunan seterusnya

- Gambar sebenar pakaian, makanan dan rumah tradisional (dengan kebenaran hak cipta)
- Audio sebutan ucapan salam oleh penutur asli
- Peta interaktif taburan etnik mengikut negeri
- Lebih banyak etnik: Lun Bawang, Kelabit, Penan, Iranun, Rungus, Sikh Punjabi, Chetti Melaka dan lain-lain
- Versi dwibahasa (Bahasa Melayu dan Inggeris)
- Pangkalan data dalam talian (contohnya Firebase) supaya kandungan boleh dikemas kini tanpa mengubah kod

## Penafian kandungan

Kandungan disediakan untuk tujuan pendidikan dan diringkaskan daripada pengetahuan umum. Amalan budaya berbeza mengikut kawasan, keluarga dan subetnik. Sebelum digunakan dalam tugasan atau penerbitan, sahkan fakta dengan sumber rasmi seperti Jabatan Perangkaan Malaysia, JAKOA, Jabatan Muzium Malaysia dan muzium negeri, atau terus dengan komuniti berkenaan.

Statistik penduduk: *Banci Penduduk dan Perumahan Malaysia 2020*, Jabatan Perangkaan Malaysia.
