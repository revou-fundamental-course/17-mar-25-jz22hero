// Menunggu dokumen dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function () {
    const inputSisi = document.getElementById("sisi");
    const btnHitung = document.getElementById("btn-hitung");
    const btnReset = document.getElementById("btn-reset");
    const hasilDiv = document.getElementById("hasil");

    // Fungsi untuk menghitung luas dan keliling persegi
    function hitung() {
        const sisi = parseFloat(inputSisi.value);

        // Validasi input (harus angka positif)
        if (isNaN(sisi) || sisi <= 0) {
            hasilDiv.innerHTML = `<p style="color: red;">Masukkan angka yang valid!</p>`;
            return;
        }

        const luas = sisi * sisi;
        const keliling = 4 * sisi;

        // Menampilkan hasil dengan animasi
        hasilDiv.innerHTML = `
            <p><strong>Luas:</strong> ${luas} cm²</p>
            <p><strong>Keliling:</strong> ${keliling} cm</p>
        `;
        hasilDiv.style.opacity = "0";
        setTimeout(() => (hasilDiv.style.opacity = "1"), 200);
    }

    // Fungsi untuk mereset input dan hasil
    function reset() {
        inputSisi.value = "";
        hasilDiv.innerHTML = "";
    }

    // Event listener untuk tombol hitung
    btnHitung.addEventListener("click", hitung);

    // Event listener untuk tombol reset
    btnReset.addEventListener("click", reset);
});
