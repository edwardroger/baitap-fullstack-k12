var isOpen = false ;
// var value = '';
var number1 = '';
var number2 = '';
var operator = '';
var result1 = '';
function toggle() {
    isOpen = !isOpen
    if (isOpen) {
        document.getElementById('result').value = "Đã bật máy tính";
    } else {
        document.getElementById('result').value = ""
        number1 = '';
        number2 = '';
        operator = '';
    }
}

function changeInput(number) {
    if (isOpen) {
        if (operator === '') {
            number1 += number;
            // value = number1;
            document.getElementById('result').value = number1;  
        } else {
            number2 += number;
            // value = number1 + operator + number2;
            document.getElementById('result').value = number1 + operator + number2;
        }
    }
}

function selectOperator(op) {
    if (isOpen) {
        operator = op;
        // value = number1 + operator;
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
        } else if (operator === '/') {
            let result = parseInt(number1) / parseInt(number2);
            result1 = result.toString();
            document.getElementById('result').value = result;
        }
    } 
    if (result1 !== '') {
        number1 = result1;
        number2 = '';
    }
}

function handleDel() {
    if (operator === '') {
        var newvalue = number1.substring(0, number1.length - 1);
        number1 = newvalue;
        document.getElementById('result').value = newvalue;
    } else if (operator !== '' && number2 === '') {
        operator = '';
        document.getElementById('result').value = number1;
    } else if (number2 !== '') {
        var newnumber2 = number2.substring(0, number2.length - 1);
        number2 = newnumber2;
        document.getElementById('result').value = number1 + operator + number2;
    }
}


