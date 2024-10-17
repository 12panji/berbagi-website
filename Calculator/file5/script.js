function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function calculate() {
    const display = document.getElementById('display').value;
    
    // Split input into two binary numbers and operator
    const binaryRegex = /^([01]+)([\+\-\*\/])([01]+)$/;
    const matches = display.match(binaryRegex);
    
    if (matches) {
        const num1 = parseInt(matches[1], 2);
        const operator = matches[2];
        const num2 = parseInt(matches[3], 2);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Error';
                } else {
                    result = Math.floor(num1 / num2);  // Division in binary should return an integer
                }
                break;
            default:
                result = 'Error';
        }

        // Convert result back to binary
        if (result !== 'Error') {
            document.getElementById('display').value = result.toString(2);
        } else {
            document.getElementById('display').value = result;
        }
    } else {
        document.getElementById('display').value = 'Error';
    }
}
