<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hours Calculator</title>
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
        <h1>Hours Calculator</h1>
        <label for="startTime">Start Time:</label>
        <input type="time" id="startTime">
        <br>
        <label for="endTime">End Time:</label>
        <input type="time" id="endTime">
        <br>
        <button onclick="calculateHours()">Calculate Hours</button>
        <h2 id="result"></h2>
    </div>

    <script src="script.js"></script>
</body>
</html>
