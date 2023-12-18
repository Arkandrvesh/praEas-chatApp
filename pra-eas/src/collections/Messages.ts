// Import modul 'CollectionConfig' dari 'payload/types'
import { CollectionConfig } from 'payload/types'

// Mendefinisikan konfigurasi untuk koleksi 'Messages'
const Messages: CollectionConfig = {
  // 'slug' adalah singkatan dari "slugify" dan digunakan untuk membuat URL ramah SEO
  slug: 'messages',
  
  // 'fields' adalah array yang berisi definisi setiap kolom (field) dalam koleksi 'Messages'
  fields: [
    // Setiap field memiliki objek konfigurasi yang menyatakan nama dan tipe datanya

    // Field pertama: Nama_Channel (tipe data: text)
    {
        name: "Nama_Channel",
        type: "text"
    },
    
    // Field kedua: Pesan (tipe data: text)
    {
        name: "Pesan",
        type: "text"
    }
  ],
}

// Ekspor konfigurasi 'Messages' untuk digunakan dalam aplikasi
export default Messages
