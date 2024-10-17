<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Calculator</title>
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
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="deleteLast()">DEL</button>
            <button onclick="appendCharacter('0')">0</button>
            <button onclick="appendCharacter('1')">1</button>

            <button onclick="appendCharacter('+')">+</button>
            <button onclick="appendCharacter('-')">-</button>
            <button onclick="appendCharacter('*')">*</button>
            <button onclick="appendCharacter('/')">/</button>

            <button onclick="calculate()">=</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
