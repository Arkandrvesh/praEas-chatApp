// Mengimpor CollectionConfig dari modul 'payload/types'
import { CollectionConfig } from 'payload/types'

// Mendefinisikan konfigurasi untuk koleksi 'Channels'
const Channels: CollectionConfig = {
  // 'slug' adalah singkatan dari "slugified". Digunakan dalam URL dan sebagai identifikasi unik.
  slug: 'channels',

  // Konfigurasi untuk tampilan admin
  admin: {
    // Menggunakan nilai dari properti 'id' sebagai judul untuk setiap item di admin
    useAsTitle: 'id',
  },

  // Konfigurasi akses untuk koleksi ini
  access: {
    // Memungkinkan akses baca untuk semua pengguna
    read: () => true,
  },

  // Daftar kolom atau bidang yang akan disertakan dalam setiap item koleksi
  fields: [
    // 'Nama_Channel' adalah nama bidang yang akan disimpan di dalam koleksi
    {
      name: "Nama_Channel",
      // Tipe bidang adalah teks, yang berarti itu akan menyimpan teks atau string
      type: "text"
    }
    // Anda dapat menambahkan bidang lain sesuai kebutuhan
  ],
}

// Ekspor konfigurasi koleksi untuk digunakan di tempat lain
export default Channels
