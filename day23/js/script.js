var isOpen = false ;
var number1 = '';
var number2 = '';
var operator = '';
var result1 = '';
function toggle() {
    isOpen = !isOpen;
    document.getElementById('result').value = isOpen ? "Đã bật máy tính" : "";
    number1 = isOpen ? number1 : "";
    number2 = isOpen ? number2 : "";
    operator = isOpen ? operator : "";
}

function changeInput(number) {
    if (isOpen) {
        number1 = (operator === "") ? (number1 + number) : number1;
        number2 = (operator === "") ? number2 : number2 + number;
        document.getElementById('result').value = (operator === "") ? number1 : number1 + operator + number2;
    }
}

function selectOperator(op) {
    if (isOpen && number1 !== "") {
        operator = op;
        document.getElementById('result').value = number1 + operator;
    }
}

function handleResult() {
    if (operator !== '') {

        if (operator === '+') {
            let result = parseInt(number1) + parseInt(number2);
            result1 = result.toString();
            document.getElementById('result').value = result;
        } else if (operator === '-') {
            let result = parseInt(number1) - parseInt(number2);
            result1 = result.toString();
            document.getElementById('result').value = result;
        } else if (operator === '*') {
            let result = parseInt(number1) * parseInt(number2);
            result1 = result.toString();
            document.getElementById('result').value = result;
        } else if (operator === '/' && number2 !== 0) {
            let result = parseInt(number1) / parseInt(number2);
            result1 = result.toString();
            document.getElementById('result').value = result;
        }
    } 
    if (result1 !== '') {
        number1 = result1;
        number2 = '';
        operator = '';
    }
}

function handleDel() {
    
    if (operator === '') {
        number1 = number1.substring(0, number1.length - 1);
        document.getElementById('result').value = number1;
    } else if (operator !== '' && number2 === '') {
        operator = '';
        document.getElementById('result').value = number1;
    } else if (number2 !== '') {
        number2 = number2.substring(0, number2.length - 1);
        document.getElementById('result').value = number1 + operator + number2;
    } else { 

    }
}


