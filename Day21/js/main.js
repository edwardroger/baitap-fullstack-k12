const button = document.querySelector('button');
// let count = 1;

// button.addEventListener('click', () => {
//   if (count % 2 === 0) {
//     console.log('Đã mở');
//   } else {
//     console.log('Đóng');
//   }
//   count++;
// });

// var isOpen = false; //Mặc định ban đầu
// var number1 = '';
// var number2 = '';
// var operator = '';

// function toggle() {
//     isOpen = ! isOpen; //Cập nhật lại giá trị
//     if (isOpen) { //check isOpen === true
//         document.getElementById('result').value = 'Đã bật máy tính';
//     } else {
//         document.getElementById('result').value = '';
//     }
// }

// function changeInput(number) {
//     if (isOpen) {
//         if (operator === '') {
//             number1 += number;
//             document.getElementById('result').value = number1;
//             console.log(number1);
//         } else {
//             number2 += number;
//             console.log(number2);
//             document.getElementById('result').value = number1 + operator + number2;
//         }
//     }
//     //máy tắt
// }

// function selectOperator(op) {
//     operator = op;
//     console.log(op);
//     document.getElementById('result').value = number1 + operator;
// }

// function handleResult() {
//     if (number1 !== '' && number2 !== '' && operator !== '') {
//         if (operator === '+') {
//             document.getElementById('result').value = parseInt(number1) + parseInt(number2);
//         } else if (operator === '-') {
//             document.getElementById('result').value = parseInt(number1) - parseInt(number2);
//         } else if (operator === '*') {
//             document.getElementById('result').value = parseInt(number1) * parseInt(number2);
//         } else if (operator === '/') {
//             if (parseInt(number2) !== 0) {
//                 document.getElementById('result').value = parseInt(number1) / parseInt(number2);
//             }
//         }
//     }
// }






// let calculation = '';

// function addToCalculation(value) {
//     calculation += value;
//     document.getElementById("calculation").value = calculation;
// }

// function clearCalculation() {
//     calculation = '';
//     document.getElementById("calculation").value = '';
//     document.getElementById("result").innerHTML = '';
// }

// function calculate() {
//     let result = eval(calculation);
//     document.getElementById("result").innerHTML = "Result: " + result;
// }


// let calculation = '';
// let result = '';

// function addToCalculation(value) {
//     if (result) {
//         calculation = result + value;
//         result = '';
//     } else {
//         calculation += value;
//     }
//     document.getElementById("calculation").value = calculation;
// }

// function clearCalculation() {
//     calculation = '';
//     result = '';
//     document.getElementById("calculation").value = '';
//     document.getElementById("result").innerHTML = '';
// }

// function calculate() {
//     result = eval(calculation);
//     document.getElementById("result").innerHTML = "Result: " + result;
// }










const result = document.getElementById('result');
let number1 = 0;
let number2 = null;
let operator = '';

function clear() {
    number1 = 0;
    number2 = null;
    operator = '';
    result.value = '0';
}

function calculate() {
    if (operator === '+') {
        result.value = number1 + number2;
    } else if (operator === '-') {
        result.value = number1 - number2;
    } else if (operator === '*') {
        result.value = number1 * number2;
    } else if (operator === '/') {
        result.value = number1 / number2;
    }
}
let isPrinterOn = false;
let number2Selected = false;
function handleNumberClick(event) {

    const clickedNumber = parseInt(event.target.innerText);
    if (isPrinterOn) {
        if (operator === '') {
            number1 = number1 * 10 + clickedNumber;
            result.value = number1;
        }
        else {
            number2 = number2 === null ? clickedNumber : number2 * 10 + clickedNumber;
            result.value = number1 + operator + number2;
            number2Selected = true;
        }
        
    } else {
        number1 = 0;
        number2 = null;
        operator = '';
        result.value = '0';
    }

}
function handlePrintButtonClick() {
    isPrinterOn = !isPrinterOn;
    result.value = 'đã bật máy';
    console.log('Trạng thái máy in:', isPrinterOn ? 'ON' : location.replace(location.href));
}
function handleOperatorClick(event) {
    
    if (number2Selected) {       
        return;
    }
    operator = event.target.innerText;
    operatorSelected = true;     
    result.value = operator;
    
}

function handleEqualClick() {
    calculate();
    number1 = parseInt(result.value);
    number2 = null;
    operator = '';
}

document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', handleNumberClick);
});

document.querySelectorAll('.operator-button').forEach(button => {
    button.addEventListener('click', handleOperatorClick);
});

document.querySelector('.clear-button').addEventListener('click', clear);
document.querySelector('.equal-button').addEventListener('click', handleEqualClick);

button.addEventListener('click', handlePrintButtonClick);