import axios from "axios";

// Membuat instance Axios dengan konfigurasi default
const axiosInstance = axios.create({
  baseURL: `http://ent-api.test/api`, // URL dasar yang digunakan untuk setiap permintaan
  timeout: 5000, // Batas waktu permintaan dalam milidetik
  headers: {
    "Content-Type": "application/json",
    // Anda dapat menambahkan header umum lainnya di sini
  },
});
// Menambahkan CSRF Token ke dalam instance Axios
const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");
axiosInstance.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

export default axiosInstance;
