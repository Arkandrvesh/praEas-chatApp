// Import modul CollectionConfig dari package 'payload/types'
import { CollectionConfig } from 'payload/types'

// Definisikan konfigurasi untuk koleksi 'users'
const Users: CollectionConfig = {
  // 'slug' digunakan untuk menentukan identifikasi unik untuk koleksi ini
  slug: 'users',

  // 'auth: true' menandakan bahwa koleksi ini memerlukan autentikasi pengguna
  auth: true,

  // Konfigurasi untuk antarmuka admin
  admin: {
    // 'useAsTitle: 'email'' menunjukkan bahwa field 'email' akan digunakan sebagai judul
    useAsTitle: 'email',
  },

  // Definisikan field-field yang akan ada dalam koleksi 'users'
  fields: [
    // Field 'email' sudah ditambahkan secara default oleh Payload
    // Anda dapat menambahkan field-field tambahan sesuai kebutuhan
  ],
}

// Ekspor konfigurasi 'users' untuk digunakan dalam aplikasi
export default Users
