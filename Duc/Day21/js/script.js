var isOpen = false;
var number1 = '';
var number2 = '';
var operator = '';
var ketQua = '';

function toggle() {
    isOpen = ! isOpen;
    if (isOpen) {
        document.getElementById('result').value = ('The calculator is turned on...');
        number1 = '';
        number2 = '';
        operator = '';
        document.getElementById('btn-toggle').innerHTML = "Off";
    } else {
        document.getElementById('result').value = ('');
        document.getElementById('btn-toggle').innerHTML = "On";
    }
}

function changeInput(number) {
    if (isOpen) {
        if (operator === '') {
            if (ketQua === '') {
                number1 += number;
                document.getElementById('result').value = number1;
            } else {
                number1 = '';
                ketQua = '';
                number1 += number;
                document.getElementById('result').value = number1;
            }
        } else {
            number2 += number;
            document.getElementById('result').value = number1 + operator + number2;
        }
    }
}

function op(op) {
    if (isOpen) {
        if (number1 !== '') {
            operator = op;
            document.getElementById('result').value = number1 + operator; 
        }
        if (number2 !== '') {
            result();
            operator = op;
            document.getElementById('result').value = number1 + operator;
        }
    }
}
        

function result() {
    if (number2 !== '') {
        if (operator == '+') {
            ketQua = +number1 + +number2;
            document.getElementById('result').value = ketQua;
            number1 = ketQua;
            number2 = '';
            operator = '';
        }
        if (operator == '-') {
            ketQua = +number1 - +number2;
            document.getElementById('result').value = ketQua;
            number1 = ketQua;
            number2 = '';
            operator = '';
        }   
        if (operator == '*') {
            ketQua = +number1 * +number2;
            document.getElementById('result').value = ketQua;
            number1 = ketQua;
            number2 = '';
            operator = '';
        }   
        if (operator == '/') {
            if ( parseFloat(number2) !== 0) {
                ketQua = +number1 / +number2;
                document.getElementById('result').value = ketQua;
                number1 = ketQua;
                number2 = '';
                operator = '';
            }
            else {
                document.getElementById('result').value = 'Syntax Error';
                number1 = '';
                number2 = '';
                operator = '';
            }
        }   
    } else {

    }
}

function del() {
    if (operator === '') {
        document.getElementById('result').value = number1.substring(0, number1.length - 1);
        number1 = document.getElementById('result').value;  
    } else {
        if (number2 === '') {
            operator = '';
            document.getElementById('result').value = number1;
        }
        else {
            number1 = String(number1);
            document.getElementById('result').value = number1 + operator + number2.substring(0, number2.length - 1);
            console.log(document.getElementById('result').value);
            number2 = document.getElementById('result').value.slice(number1.length + 1);
        }
    }
}