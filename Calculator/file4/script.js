function calculateDateDifference() {
    // Ambil tanggal dari input
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    // Validasi apakah tanggal sudah dipilih
    if (!startDate || !endDate) {
        document.getElementById('dateDifference').innerText = 'Please select both dates.';
        return;
    }

    // Hitung perbedaan waktu dalam milidetik
    const timeDifference = Math.abs(endDate - startDate);

    // Konversi perbedaan waktu ke dalam hari, bulan, dan tahun
    const oneDay = 24 * 60 * 60 * 1000;
    const dayDifference = Math.ceil(timeDifference / oneDay);

    // Tampilkan hasil
    document.getElementById('dateDifference').innerText = `Difference: ${dayDifference} day(s)`;
}
