// Import module 'path' dari Node.js
import path from 'path';

// Import beberapa modul dari Payload CMS dan modul-modul terkait
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

// Import definisi koleksi-koleksi (collections) dari file terpisah
import Users from './collections/Users';
import Accounts from './collections/Accounts';
import Channels from './collections/Channel';
import Messages from './collections/Messages';

// Ekspor konfigurasi dari Payload CMS menggunakan fungsi buildConfig
export default buildConfig({
  // Konfigurasi bagian admin
  admin: {
    // Menggunakan koleksi Users untuk manajemen pengguna admin
    user: Users.slug,
    // Menggunakan webpackBundler untuk menangani bundling (pembungkusan) kode
    bundler: webpackBundler(),
  },
  // Konfigurasi untuk editor teks kaya (rich text editor) menggunakan Slate
  editor: slateEditor({}),
  // Konfigurasi CORS untuk mengizinkan akses dari http://localhost:8080
  cors: ['http://localhost:8080'],
  // Konfigurasi CSRF untuk mengizinkan akses dari http://localhost:8080
  csrf: ['http://localhost:8080'],
  // Daftar koleksi-koleksi yang akan digunakan dalam CMS
  collections: [
    Users, 
    Accounts,
    Channels,
    Messages
  ],
  // Konfigurasi TypeScript untuk menghasilkan file output payload-types.ts
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  // Konfigurasi GraphQL untuk menghasilkan file output generated-schema.graphql
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  // Menggunakan plugin payloadCloud untuk integrasi dengan layanan cloud
  plugins: [payloadCloud()],
  // Konfigurasi database menggunakan adapter MongoDB
  db: mongooseAdapter({
    // Menggunakan URL database dari variabel lingkungan DATABASE_URI
    url: process.env.DATABASE_URI,
  }),
});
