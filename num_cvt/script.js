function convert() {
    const operation = document.getElementById('operationSelect').value;
    const numberInput = document.getElementById('numberInput').value;
    const resultParagraph = document.getElementById('result');
    
    let result;
    
    switch(operation) {
        case 'binaryToDecimal':
            result = parseInt(numberInput, 2);
            break;
        case 'decimalToBinary':
            result = decimalToBase(numberInput, 2);
            break;
        case 'binaryToOctal':
            result = baseToBase(numberInput, 2, 8);
            break;
        case 'octalToBinary':
            result = baseToBase(numberInput, 8, 2);
            break;
        case 'binaryToHex':
            result = baseToBase(numberInput, 2, 16);
            break;
        case 'hexToBinary':
            result = baseToBase(numberInput, 16, 2);
            break;
        case 'octalToHex':
            result = baseToBase(numberInput, 8, 16);
            break;
        case 'hexToOctal':
            result = baseToBase(numberInput, 16, 8);
            break;
        case 'decimalToHex':
            result = decimalToBase(numberInput, 16);
            break;
        case 'hexToDecimal':
            result = parseInt(numberInput, 16);
            break;
        case 'decimalToOctal':
            result = decimalToBase(numberInput, 8);
            break;
        case 'octalToDecimal':
            result = parseInt(numberInput, 8);
            break;
        default:
            result = 'Invalid operation';
    }

    resultParagraph.textContent = result;
}

function decimalToBase(decimalNumber, base) {
    return (decimalNumber >>> 0).toString(base);
}

function baseToBase(number, fromBase, toBase) {
    return parseInt(number, fromBase).toString(toBase);
}