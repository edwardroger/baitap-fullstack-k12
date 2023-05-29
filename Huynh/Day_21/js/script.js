var isOpen = false;
var number1 = '';
var number2 = '';
var operator = '';
var result = '';

function variableDefault() {
    number1 = '';
    number2 = '';
    operator = '';
}

function play() {
    isOpen = ! isOpen;
    if (isOpen) {
        document.getElementById('result').value = 'Đã bật máy tính';
        setTimeout(toggle, 500);
    } else {
        document.getElementById('result').value = 'Đã tắt';
        setTimeout(toggle, 1000);
    }
}

function toggle() {
    if (isOpen) {
        document.getElementById('result').value = 'Nhập phép tính bạn muốn';
    } else {
        document.getElementById('result').value = '';
        variableDefault();
    }
}

function changeInput(number) {
    if (isOpen) {
        if (operator === '') {
            number1 += number;
            document.getElementById('result').value = number1;
        } else {
            number2 += number;
            document.getElementById('result').value = number1 + operator + number2;
        }
    }
}

function selectOperator(op) {
    operator = op;
    document.getElementById('result').value = number1 + operator;
}


function handleResult() {
    if(number1.length > 0 && number2.length > 0 && operator !== '') {
        if (operator === '+') {
            result = parseInt(number1) + parseInt(number2);
            document.getElementById('result').value = result;
        } else if (operator === '-') {
            result = parseInt(number1) - parseInt(number2);
            document.getElementById('result').value = result;
        } else if (operator === '*') {
            result = parseInt(number1) * parseInt(number2);
            document.getElementById('result').value = result;
        } else if (operator === '/') {
            if (parseInt(number2) !== 0) {
                result = parseInt(number1) / parseInt(number2);
                document.getElementById('result').value = result;
            }
        }
        number1 = String(result);
        number2 = '';
        operator = '';
        
    } else {
        document.getElementById('result').value = 'error';
    }
}


function deleteOperation(type) {
    if (type === 'DEL') {
        if (number2 !== '') {
            number2 = '';
            document.getElementById('result').value = number1 + operator;
        } else if (operator !== '') {
            operator = '';
            document.getElementById('result').value = number1;
        } else {
            number1 = '';
            document.getElementById('result').value = '';
            document.getElementById('result').value = 'Nhập phép tính bạn muốn';
        }
    } else {
        document.getElementById('result').value = 'Nhập phép tính bạn muốn';
        variableDefault();
    }
}