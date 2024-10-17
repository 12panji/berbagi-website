function calculate() {
    // Ambil input dari form
    let mass = parseFloat(document.getElementById('mass').value);
    let velocity = parseFloat(document.getElementById('velocity').value);
    let distance = parseFloat(document.getElementById('distance').value);
    let costPerJoule = parseFloat(document.getElementById('costPerJoule').value);

    // Validasi input
    if (isNaN(mass) || isNaN(velocity) || isNaN(distance) || isNaN(costPerJoule)) {
        document.getElementById('result').innerHTML = "Masukkan angka yang valid!";
        return;
    }

    // Hitung Energi Kinetik (E = 1/2 * m * v^2)
    let kineticEnergy = 0.5 * mass * Math.pow(velocity, 2);

    // Hitung Usaha (W = F * d, dimana F = m * g, g = 9.8 m/s^2)
    let force = mass * 9.8;
    let work = force * distance;

    // Hitung biaya energi (misalnya untuk menghitung energi kinetik yang dibutuhkan)
    let energyCost = kineticEnergy * costPerJoule;

    // Format hasil dalam bentuk Rupiah
    let formattedCost = formatRupiah(energyCost.toFixed(2));

    // Tampilkan hasil
    document.getElementById('result').innerHTML = 
        "Energi Kinetik: " + kineticEnergy.toFixed(2) + " Joule<br>" +
        "Usaha: " + work.toFixed(2) + " Joule<br>" +
        "Biaya Energi: Rp " + formattedCost;
}

// Fungsi untuk memformat angka menjadi Rupiah
function formatRupiah(angka) {
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    return ribuan.join('.').split('').reverse().join('');
}
