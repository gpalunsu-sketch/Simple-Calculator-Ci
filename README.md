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
├── calculator.js
├── calculator.test.js
├── package.json
├── package-lock.json
└── README.md
```

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
1. Pipeline berhasil dengan seluruh enam pengujian lolos.
2. Pipeline mengalami kegagalan karena nilai yang diharapkan pada pengujian penjumlahan diubah dari `15` menjadi `100`.
3. Kesalahan diperbaiki dengan mengembalikan nilai yang diharapkan menjadi `15`, sehingga seluruh enam pengujian kembali berhasil.

## Repository
GitHub: https://github.com/gpalunsu-sketch/Simple-Calculator-Ci
