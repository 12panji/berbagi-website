<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Keuangan</title>
    <link rel="stylesheet" href="style.css">
</head>
<header>
        <nav>
            <ul>
                <li><a href="../app/index.php">Home</a></li>
            </ul>
        </nav>
    </header>
<body>
    <div class="container">
        <h1>Kalkulator Keuangan</h1>

        <div class="calculator">
            <label for="principal">Jumlah Pokok (Rp):</label>
            <input type="number" id="principal" placeholder="Masukkan jumlah pokok">

            <label for="rate">Suku Bunga (%):</label>
            <input type="number" id="rate" placeholder="Masukkan suku bunga">

            <label for="time">Waktu (Tahun):</label>
            <input type="number" id="time" placeholder="Masukkan waktu dalam tahun">

            <label for="type">Jenis Bunga:</label>
            <select id="type">
                <option value="simple">Bunga Sederhana</option>
                <option value="compound">Bunga Majemuk</option>
            </select>

            <button onclick="calculate()">Hitung</button>

            <div class="result">
                <h2>Hasil:</h2>
                <p id="result"></p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
