<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator BMI</title>
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
    <div class="calculator">
        <h1>Kalkulator Berat Badan Ideal (BMI)</h1>

        <label for="weight">Berat Badan (kg):</label>
        <input type="number" id="weight" placeholder="Masukkan berat badan Anda" required>
        
        <label for="height">Tinggi Badan (cm):</label>
        <input type="number" id="height" placeholder="Masukkan tinggi badan Anda" required>

        <button onclick="calculateBMI()">Hitung BMI</button>

        <div class="result">
            <h2 id="bmiResult">BMI: -</h2>
            <h2 id="bmiCategory">Kategori: -</h2>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
