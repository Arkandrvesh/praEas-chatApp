// Mengimpor modul Express untuk membuat server web
import express from 'express';

// Mengimpor modul Payload, sebuah CMS (Content Management System) untuk Node.js
import payload from 'payload';

// Mengimpor modul dotenv untuk mengelola variabel lingkungan
require('dotenv').config();

// Membuat instance Express
const app = express();

// Mengarahkan permintaan root ke panel Admin
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Fungsi untuk menginisialisasi aplikasi
const start = async () => {
  // Menginisialisasi Payload dengan konfigurasi
  await payload.init({
    secret: process.env.PAYLOAD_SECRET, // Menggunakan secret dari variabel lingkungan
    express: app, // Menggunakan Express sebagai server
    onInit: async () => {
      // Callback yang dipanggil setelah inisialisasi Payload berhasil
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Anda dapat menambahkan rute Express kustom di sini

  // Mendengarkan pada port 3100
  app.listen(3100);
}

// Memulai aplikasi
start();
