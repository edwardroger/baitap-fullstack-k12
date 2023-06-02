let number1 = 1;
let number2 = 1;
let number3 = 1;
let value1 = 1625000;
let value2 = 1250000;
let value3 = 1250000;
let updateValue1 = value1;
let updateValue2 = value2;
let updateValue3 = value3;
let quantity1 = document.getElementsByClassName('quantity1')[0];
let quantity2 = document.getElementsByClassName('quantity2')[0];
let quantity3 = document.getElementsByClassName('quantity3')[0];
let product1 = document.getElementsByClassName('product1')[0];
let product2 = document.getElementsByClassName('product2')[0];
let product3 = document.getElementsByClassName('product3')[0];
let productValue1 = document.getElementsByClassName('price-end')[0];
let productValue2 = document.getElementsByClassName('price-end')[1];
let productValue3 = document.getElementsByClassName('price-end')[2];
let productValue4 = document.getElementsByClassName('price-end')[3];
let productValue5 = document.getElementsByClassName('price-end')[4];

quantity1.value = number1;
quantity2.value = number2;
quantity3.value = number3;
product1.innerHTML = value1.toLocaleString('en-US') + 'đ';
product2.innerHTML = value2.toLocaleString('en-US') + 'đ';
product3.innerHTML = value3.toLocaleString('en-US') + 'đ';
productValue1.innerHTML = value1.toLocaleString('en-US') + 'đ';
productValue2.innerHTML = value2.toLocaleString('en-US') + 'đ';
productValue3.innerHTML = value3.toLocaleString('en-US') + 'đ';
productValue4.innerHTML = (value1 + value2 + value3).toLocaleString('en-US') + 'đ';
productValue5.innerHTML = (value1 + value2 + value3).toLocaleString('en-US') + 'đ';

function handleQuantity1(op) {
    if (op === '+') {
        quantity1.value = ++number1;
        updateValue1 = value1 * number1;
        productValue1.innerHTML = updateValue1.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    } else if (op === '-' && number1 > 1) {
        quantity1.value = --number1;
        updateValue1 = value1 * number1;
        productValue1.innerHTML = updateValue1.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    }
}

function handleQuantity2(op) {
    if (op === '+') {
        quantity2.value = ++number2;
        updateValue2 = value2 * number2;
        productValue2.innerHTML = updateValue2.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    } else if (op === '-' && number2 > 1) {
        quantity2.value = --number2;
        updateValue2 = value2 * number2;
        productValue2.innerHTML = updateValue2.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    }
}

function handleQuantity3(op) {
    if (op === '+') {
        quantity3.value = ++number3;
        updateValue3 = value3 * number3;
        productValue3.innerHTML = updateValue3.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    } else if (op === '-' && number3 > 1) {
        quantity3.value = --number3;
        updateValue3 = value3 * number3;
        productValue3.innerHTML = updateValue3.toLocaleString('en-US') + 'đ';
        productValue4.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
        productValue5.innerHTML = (updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ';
    }
}


