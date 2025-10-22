# 🚀 Petakan.ai - Simulator Strategi Bisnis

> Lihat Untung-Ruginya, Sebelum Kamu Menjalankan Strateginya.

![Header Petakan.ai](https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/5b6a1a383615c433ee8165fc4d0317bd0daaa46f/HEADER%2520BARU%2520(1).png?raw=true)

**Petakan.ai** adalah sebuah simulator bisnis interaktif yang dirancang untuk membantu pemilik usaha, pemasar, dan *brand* (khususnya di pasar e-commerce Indonesia) untuk memvalidasi ide dan strategi mereka.

Alih-alih membuang waktu dan modal, pengguna dapat memasukkan berbagai variabel bisnis—seperti harga, HPP, dan strategi pemasaran—dan mendapatkan proyeksi untung-rugi serta rencana aksi instan yang didukung oleh AI.

**[Lihat Versi Live (Demo) ➔ petakanai.vercel.app](https://petakanai.vercel.app)**

---

## 🎯 Masalah yang Dipecahkan

Pasar e-commerce Indonesia sangat dinamis dan kompetitif. Banyak bisnis menghadapi tantangan karena:
* Terjebak dalam persaingan harga yang ketat tanpa menghitung profitabilitas jangka panjang.
* Mengalokasikan anggaran pemasaran (misalnya untuk KOL atau Iklan) secara kurang efisien.
* Kesulitan untuk tetap terinformasi mengenai dinamika pasar terbaru (seperti pergeseran platform).
* Merasa sulit untuk menghitung metrik penting seperti **BEP (Break-Even Point)**, **LTV (Customer Lifetime Value)**, dan **ROAS (Return on Ad Spend)** secara akurat.

---

## ✨ Fitur Unggulan

Inti dari aplikasi ini adalah serangkaian modul interaktif yang saling terhubung, memungkinkan pengguna menguji asumsi mereka secara *real-time*.

### 1. Data Bisnis & Strategi
Pengguna memasukkan data kualitatif dasar tentang bisnis mereka:
* **Nama Produk/Bisnis**: Identitas dasar dari apa yang akan dijual.
* **Target Pasar Utama**: Segmentasi audiens yang dituju.
* **Model Margin**: Pilihan strategi antara **"Untung Tipis" (Pejuang Volume)** atau **"Untung Tebal" (Pejuang Kualitas)**.
* **Kekuatan Brand**: Pilihan antara **"Baru Mulai"** atau **"Sudah Kuat"** untuk menyesuaikan estimasi konversi.

### 2. Laboratorium Strategi (Kalkulator Interaktif)
Ini adalah inti dari mesin simulasi, di mana setiap input akan langsung memperbarui metrik di modul lain.
* **Kalkulator Harga & Biaya**:
    * **Harga Jual**: Harga produk ke pelanggan.
    * **Modal Produk (HPP)**: Biaya bahan baku dan produksi per unit.
    * **Biaya Lain (%)**: Biaya variabel seperti admin marketplace, packaging, dan *payment gateway*.
* **Biaya & Target Operasional**:
    * **Biaya Tetap / Bulan**: Gaji, sewa, dan biaya operasional bulanan lainnya.
    * **Target Jual / Bulan**: Jumlah unit yang ditargetkan untuk dijual.
* **Estimasi Profitabilitas Real-time**:
    * **Laba/Unit (Non-Iklan)**: Menampilkan profit bersih per produk secara instan.
    * **BEP (Unit)**: Menghitung jumlah unit minimum yang harus terjual untuk balik modal.

### 3. Alokasi Pemasaran Strategis
Pengguna dapat memilih dan mengalokasikan anggaran pemasaran mereka.
* **Pilih Strategi Aktif**:
    * Video Content & Ads
    * KOL & Afiliasi
    * Promosi & Diskon
    * Kanal Lainnya (SEO, Ads, dll.)
* **Pilih Pendekatan Bujet**:
    * **Budget-Based**: Tentukan total anggaran pemasaran bulanan di awal.
    * **CAC-Based**: Tentukan target Biaya Akuisisi per Pelanggan (CAC), dan biarkan sistem menghitung total anggaran yang dibutuhkan.
* **Visualisasi Alokasi**: *Donut chart* interaktif yang membagi anggaran berdasarkan strategi yang dipilih.

### 4. Analisis AI ("Petakan Sekarang")
Setelah semua data dimasukkan, menekan tombol **"Petakan Sekarang"** akan mengirim semua variabel ke backend AI untuk dianalisis. AI akan menghasilkan laporan komprehensif yang berisi:
* **Proyeksi Keuangan**: Simulasi Laporan Laba Rugi (P&L) dan Arus Kas (Cash Flow).
* **Metrik Kinerja Kunci**: Estimasi **ROAS** berdasarkan alokasi bujet.
* **Vonis Strategis**: Kesimpulan dan rekomendasi tingkat tinggi dari AI.
* **Rencana Aksi Taktis**: Langkah-langkah praktis yang disarankan (rekomendasi platform, konten, dan monetisasi).

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

Proyek ini dibangun menggunakan *tech stack* modern untuk pengalaman pengguna yang cepat dan responsif:

* **Framework**: **Next.js** (App Router)
* **Bahasa**: **TypeScript**
* **Styling**: **Tailwind CSS**
* **Komponen UI**: **Shadcn/ui**
* **Deployment**: **Vercel**
* **Backend AI**: **Firebase Functions** (atau *serverless function* lain) untuk menangani *request* ke API Generative AI.
* **Data Fetching**: **SWR** / **React Query** (diasumsikan untuk menangani *state* AI dan data).

---

## 🚀 Instalasi & Menjalankan Lokal

Untuk menjalankan proyek ini di komputer Anda:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/Fortotest/petakanai.git](https://github.com/Fortotest/petakanai.git)
    cd petakanai
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Siapkan Environment Variables**
    Proyek ini membutuhkan API Key untuk berfungsi (kemungkinan untuk Firebase/AI).
    ```bash
    # Salin file contoh .env
    cp .env.example .env.local
    ```
    Buka `.env.local` dan isi semua *key* yang diperlukan.

4.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

5.  **Buka Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 👤 Credits

Dibuat dan dikembangkan oleh **Rizky Fadil**.
* **GitHub**: [@Fortotest](https://github.com/Fortotest)
  
Laporan dan data yang disajikan disusun berdasarkan analisis dan proyeksi dari data publik yang tersedia dan ditujukan sebagai alat bantu strategis.
