# Simple Calculator CI

## Deskripsi Proyek
Simple Calculator CI merupakan proyek aplikasi kalkulator sederhana yang dibuat menggunakan JavaScript dan Node.js. Aplikasi ini menyediakan empat operasi matematika dasar, yaitu penjumlahan, pengurangan, perkalian, dan pembagian.

Proyek ini menerapkan **Continuous Integration (CI)** menggunakan GitHub Actions untuk menjalankan pengujian secara otomatis setiap kali terjadi *push* atau *pull request* pada branch `main`.

## Fitur Aplikasi
- `add()` untuk melakukan penjumlahan.
- `subtract()` untuk melakukan pengurangan.
- `multiply()` untuk melakukan perkalian.
- `divide()` untuk melakukan pembagian.
- Validasi input agar hanya menerima angka.
- Penanganan kesalahan pembagian dengan nol.

## Teknologi yang Digunakan
- JavaScript
- Node.js
- Node.js Test Runner
- Git dan GitHub
- GitHub Actions

## Struktur Proyek
```text
Simple-Calculator-Ci/
├── .github/
│   └── workflows/
│       └── ci.yml
├── Pengumpulan Tugas Pipeline CI/
│   ├── Screenshot/
│   │   ├── 01-Pipeline-Berhasil.png
│   │   ├── 02-Pipeline-Gagal.png
│   │   └── 03-Pipeline-Perbaikan.png
│   ├── Ringkasan-Error.txt
│   └── Tautan_Tugas.txt
├── calculator.js
├── calculator.test.js
├── package.json
├── package-lock.json
└── README.md
```

## Cara Kerja Aplikasi

File `calculator.js` berisi empat fungsi (`add`, `subtract`, `multiply`, `divide`) yang masing-masing menerima dua angka. Sebelum menghitung, setiap fungsi memeriksa input melalui fungsi bantu `cekAngka()`. Jika input bukan angka, program melempar error "Input harus berupa angka". Pada `divide()`, pembagian dengan nol ditolak dengan error "Tidak bisa membagi dengan nol".

Keempat fungsi diekspor menggunakan `module.exports` agar dapat dipakai oleh `calculator.test.js`. Selain itu, `calculator.js` dapat dijalankan langsung dari terminal, misalnya `node calculator.js add 10 5` yang menghasilkan `Hasil: 15`.

## Cara Menjalankan Aplikasi

1. Pastikan Node.js sudah terpasang.
2. Buka terminal pada folder proyek.
3. Jalankan perintah berikut untuk menjalankan operasi kalkulator:

```bash
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

## Cara Menjalankan Pengujian

Jalankan perintah berikut pada terminal:

```bash
npm install
npm test
```

Pengujian dilakukan menggunakan Node.js Test Runner untuk memeriksa empat operasi matematika, pembagian dengan nol, dan input yang tidak valid.

## Continuous Integration

Proyek ini menggunakan GitHub Actions dengan konfigurasi pada file `.github/workflows/ci.yml`.

Pipeline dijalankan secara otomatis ketika terjadi:
- `push` pada branch `main`.
- `pull_request` menuju branch `main`.

Tahapan CI Pipeline:
1. Checkout Repository.
2. Setup Node.js versi 20.
3. Install Dependencies.
4. Run Tests.

## Hasil Pengujian

Pengujian dilakukan dalam tiga kondisi:
1. Pipeline berhasil dengan seluruh enam pengujian awal lolos.
2. Pipeline mengalami kegagalan karena nilai yang diharapkan pada pengujian penjumlahan diubah dari `15` menjadi `100`.
3. Kesalahan diperbaiki dengan mengembalikan nilai yang diharapkan menjadi `15`, sehingga seluruh pengujian kembali berhasil.

Setelah itu, pengujian ditambah lima kasus baru (hasil negatif, perkalian dengan nol, hasil desimal, serta pemeriksaan pesan error untuk pembagian dengan nol dan input bukan angka). Total menjadi 11 pengujian dan seluruhnya lolos di pipeline.

## Pembagian Peran

| Anggota | Peran utama | Kontribusi |
|---|---|---|
| Putri Alma (Anggota 1) | Pengembangan aplikasi dan pengelolaan kode | Membuat `calculator.js` (empat operasi, validasi input, penanganan pembagian dengan nol), menyiapkan struktur proyek, menambahkan lima pengujian tambahan, dan menulis penjelasan cara kerja aplikasi pada README. |
| Graselia (Anggota 2) | Pengujian dan otomatisasi CI | Membuat repository, `calculator.test.js`, workflow `.github/workflows/ci.yml`, simulasi kegagalan pipeline, perbaikan, dan dokumentasi error. |

Kedua anggota bersama-sama memeriksa hasil pipeline, menyusun ringkasan error, dan melengkapi README.

## Repository
GitHub: https://github.com/gpalunsu-sketch/Simple-Calculator-Ci