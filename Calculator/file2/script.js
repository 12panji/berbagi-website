function calculate() {
    // Ambil input dari form
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);
    let interestType = document.getElementById('type').value;

    // Validasi input
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerHTML = "Masukkan angka yang valid!";
        return;
    }

    let result;

    // Hitung bunga sederhana atau bunga majemuk
    if (interestType === 'simple') {
        result = principal * (1 + (rate / 100) * time);
    } else if (interestType === 'compound') {
        result = principal * Math.pow((1 + (rate / 100)), time);
    }

    // Format hasil dalam bentuk Rupiah
    let formattedResult = formatRupiah(result.toFixed(2));

    // Tampilkan hasil
    document.getElementById('result').innerHTML = "Total Jumlah: Rp " + formattedResult;
}

// Fungsi untuk memformat angka menjadi Rupiah
function formatRupiah(angka) {
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    return ribuan.join('.').split('').reverse().join('');
}
