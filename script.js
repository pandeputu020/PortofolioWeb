// Contoh kode JavaScript sederhana
document.addEventListener('DOMContentLoaded', function() {
    // Ubah warna latar belakang header saat diklik
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        this.style.backgroundColor = '#555';
    });
});
