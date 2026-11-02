# Portfolio Muhammad Satria Nurulloh (DevTria)

Website portofolio modern yang dibangun menggunakan **HTML5 Semantic**, **CSS3 Custom Properties & Modern Layout (Grid/Flexbox)**, serta **Vanilla JavaScript** tanpa dependensi framework eksternal.

---

## 🌟 Fitur Utama

1. **Dual Themes: Biru Gelap (Dark Blue) & Terang (Light)**
   - **Tema Biru Gelap (*Default*)**: Nuansa deep oceanic navy (`#070d1e`) dengan aksen cyan glow (`#38bdf8`) dan glassmorphism card.
   - **Tema Terang**: Bersih, tajam, dan profesional dengan latar putih/slate (`#f8fafc`) dan aksen cobalt blue (`#2563eb`).
   - Tombol toggle di navbar dengan transisi halus dan penyimpanan otomatis preferensi di `localStorage`.
   - Shortcut keyboard: `Alt + T` untuk beralih tema dengan cepat.

2. **Dual Profile Photo Showcase**
   - Menampilkan kedua foto profil dari postingan Instagram:
     - [Postingan Instagram 1](https://www.instagram.com/p/DfPTfozBvj5/)
     - [Postingan Instagram 2](https://www.instagram.com/p/DfPTj8yBC-v/)
   - Tombol interaktif untuk beralih antara "Foto 1" dan "Foto 2".
   - Klik kartu foto untuk membuka tampilan modal resolusi penuh + link langsung ke postingan Instagram asli.
   - Floating tech chip badges (`PHP 8+`, `Laravel 11`, `MySQL`).

3. **Struktur Konten Sesuai GitHub Profile (`devtria/devtria`)**
   - **Hero Section**: Status *"Terbuka untuk Freelance, Full-Time & Part-Time"*, efek teks ketik dinamis peran developer, dan mindset developer:
     > *"Critical Thinker — fokus pada perancangan logika yang solid dan solusi nyata yang berdampak langsung pada kelancaran operasional bisnis."*
   - **Tentang Saya (About)**: Pendekatan *research-driven development*, eksplorasi dokumentasi resmi, filosofi kode bersih, dan quote ikonik:
     > *"Code is like humor. When you have to explain it, it’s bad."*
   - **Tech Stack & Keahlian**:
     - *Backend & Bahasa*: PHP 8+, Laravel 11, Eloquent ORM, RESTful API, MVC Pattern.
     - *Database & Modeling*: MySQL, Relational Database Modeling, Normalisasi (1NF, 2NF, 3NF), Schema Optimization.
     - *Frontend, Mobile & Tools*: HTML5 Semantic, Modern CSS3, Vanilla JS, Dart & Flutter, Git/GitHub, Postman.
   - **Proyek Unggulan (Featured Project)**:
     - **Sistem Manajemen Antrian Servis HP** (PHP, Laravel 11, MySQL): Breakdown mendalam mengenai tantangan operasional lapangan dan solusi rekayasa normalisasi database.
     - Proyek-proyek pendukung dari GitHub DevTria (Aplikasi Kasir Dart, Validasi Peminjaman Buku, PHP Modular CRUD, dsb).

4. **Informasi Kontak Lengkap & Terintegrasi**
   - **WhatsApp**: `088976064734` (Direct Chat & tombol salin nomor).
   - **Email**: `satria.nurulloh.creative.@gmail.com` (Direct Mailto & tombol salin alamat).
   - **GitHub**: `github.com/devtria`
   - **Instagram**: `@devtria249`
   - **YouTube**: `@DevTria`
   - **Interactive Quick Message Form**: Mengirim pesan langsung via formulir ke WhatsApp (otomatis terformat) atau aplikasi Email klien.

---

## 📁 Struktur Berkas

```
Portfolio-DevTria/
├── index.html              # Struktur semantic HTML5 utama
├── css/
│   └── style.css           # Styling lengkap, variabel tema, animasi, dan responsif
├── js/
│   ├── theme.js            # Manajemen tema Terang & Biru Gelap + localStorage
│   └── main.js             # Typing effect, switch foto profil, form WA/email, modal, toast
├── assets/
│   └── images/
│       ├── profile-1.jpg   # Foto profil 1 (dari postingan Instagram pertama)
│       └── profile-2.jpg   # Foto profil 2 (dari postingan Instagram kedua)
└── README.md               # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

Website ini sepenuhnya statis (Vanilla HTML/CSS/JS) sehingga dapat dijalankan dengan berbagai cara:

### Cara 1: Buka Langsung di Browser
Cukup klik ganda berkas `index.html` di File Explorer, atau seret ke browser favorit Anda (Chrome, Edge, Firefox, Safari).

### Cara 2: Menjalankan dengan Local Web Server (Opsional)
Jika Anda ingin menjalankannya melalui web server lokal:

Menggunakan PHP (karena sudah terpasang di sistem Anda):
```powershell
php -S localhost:8000
```
Lalu buka browser di `http://localhost:8000`.

