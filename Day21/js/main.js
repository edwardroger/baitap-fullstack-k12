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

// function changeInput(number) {
//     // if (isOpen) {

//     if (operator === '') {
//         number1 = number1 * 10 + number;
//         result.value = number1;
//       } 
//        else {
//         number2 = number2 === null ? clickedNumber : number2 * 10 + clickedNumber;
//         result.value = number2;
//       }
//         // if( result){
//         //     result += number;
//         //     result.value = result;
//         //     console.log(result);
//         // }

//     //máy tắt
// }


// function selectOperator(op) {
//     operator = op;
//     console.log(op);
//     result.value = number1 + operator;
// }

// function handleResult() {
//     if (number1 !== '' && number2 !== '' && operator !== '') {
//         if (operator === '+') {
//             tong.value = parseInt(number1) + parseInt(number2);
//         } else if (operator === '-') {
//             tong.value = parseInt(number1) - parseInt(number2);
//         } else if (operator === '*') {
//             tong.value = parseInt(number1) * parseInt(number2);
//         } else if (operator === '/') {
//             if (parseInt(number2) !== 0) {
//                 tong.value = parseInt(number1) / parseInt(number2);
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
    operator = event.target.innerText;
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