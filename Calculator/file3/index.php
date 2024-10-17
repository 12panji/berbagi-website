<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Fisika</title>
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
        <h1>Kalkulator Fisika</h1>

        <div class="calculator">
            <label for="mass">Massa (kg):</label>
            <input type="number" id="mass" placeholder="Masukkan massa">

            <label for="velocity">Kecepatan (m/s):</label>
            <input type="number" id="velocity" placeholder="Masukkan kecepatan">

            <label for="distance">Jarak (meter):</label>
            <input type="number" id="distance" placeholder="Masukkan jarak">

            <label for="costPerJoule">Biaya Energi per Joule (Rp):</label>
            <input type="number" id="costPerJoule" placeholder="Masukkan biaya per joule">

            <button onclick="calculate()">Hitung Energi</button>

            <div class="result">
                <h2>Hasil:</h2>
                <p id="result"></p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
