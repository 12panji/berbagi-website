<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Calculator</title>
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
    <h1>Date Calculator</h1>
    
    <div class="calculator-container">
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate">
        
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate">
        
        <button onclick="calculateDateDifference()">Calculate Difference</button>
        
        <div class="result">
            <p id="dateDifference"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
