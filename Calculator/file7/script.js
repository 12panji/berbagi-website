function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Masukkan nilai berat dan tinggi yang valid!");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)}`;

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Gemuk';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('bmiCategory').innerText = `Kategori: ${category}`;
}
