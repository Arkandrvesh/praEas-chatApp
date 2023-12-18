// Import modul CollectionConfig dari 'payload/types'
import { CollectionConfig } from 'payload/types'

// Konfigurasi untuk koleksi 'accounts'
const Accounts: CollectionConfig = {
  // 'slug' digunakan sebagai identifikasi unik untuk koleksi ini
  slug: 'accounts',
  
  // 'auth: true' menandakan bahwa koleksi ini memerlukan otentikasi pengguna
  auth: true,
  
  // Konfigurasi admin untuk antarmuka pengguna admin
  admin: {
    // 'useAsTitle' menentukan bidang yang akan digunakan sebagai judul di antarmuka admin
    useAsTitle: 'email',
  },
  
  // Daftar bidang-bidang yang akan ada dalam koleksi ini
  fields: [
    // Bidang default 'email' ditambahkan otomatis oleh Payload
    // Anda dapat menambahkan bidang lain sesuai kebutuhan
    
    {
        // Nama bidang, dalam hal ini "Username"
        name: "Username",
        
        // Jenis bidang, dalam hal ini "text" untuk teks atau string
        type: "text"
    },
    {
        // Nama bidang, dalam hal ini "Umur"
        name: "Umur",
        
        // Jenis bidang, dalam hal ini "number" untuk angka
        type: "number"
    }
  ],
}

// Ekspor konfigurasi koleksi 'accounts'
export default Accounts
