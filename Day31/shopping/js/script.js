

let number1 = 1;
let number2 = 1;
let number3 = 1;
let value1 = 1625000;
let value2 = 1250000;
let value3 = 1250000;
let updateValue1 = value1;
let updateValue2 = value2;
let updateValue3 = value3;
let quantity1 = $('.quantity1').eq(0);
let quantity2 = $('.quantity2').eq(0);
let quantity3 = $('.quantity3').eq(0);
let product1 = $('.product1').eq(0);
let product2 = $('.product2').eq(0);
let product3 = $('.product3').eq(0);
let productValue1 = $('.price-end').eq(0);
let productValue2 = $('.price-end').eq(1);
let productValue3 = $('.price-end').eq(2);
let productValue4 = $('.price-end').eq(3);
let productValue5 = $('.price-end').eq(4);




quantity1.val(number1);
quantity2.val(number2);
quantity3.val(number3);
product1.html(value1.toLocaleString('en-US') + 'đ');
product2.html(value2.toLocaleString('en-US') + 'đ');
product3.html(value3.toLocaleString('en-US') + 'đ');
productValue1.html(value1.toLocaleString('en-US') + 'đ');
productValue2.html(value2.toLocaleString('en-US') + 'đ');
productValue3.html(value3.toLocaleString('en-US') + 'đ');
productValue4.html((value1 + value2 + value3).toLocaleString('en-US') + 'đ');
productValue5.html((value1 + value2 + value3).toLocaleString('en-US') + 'đ');




function handleQuantity1(op) {
    if (op === '+') {
        quantity1.val(++number1);
        updateValue1 = value1 * number1;
        productValue1.html(updateValue1.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    // } else if (op === '-' && number3 > 1) {
    } else if (op === '-' && number1 > 1) {
        quantity1.val(--number1);
        updateValue1 = value1 * number1;
        productValue1.html(updateValue1.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    }
}


function handleQuantity2(op) {
    
    if (op === '+') {
        quantity2.val(++number2);
        updateValue2 = value2 * number2;
        productValue2.html(updateValue2.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    } else if (op === '-' && number2 > 1) {
        quantity2.val(--number2);
        updateValue2 = value2 * number2;
        productValue2.html(updateValue2.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    }
}



function handleQuantity3(op) {
    if (op === '+') {
        quantity3.val(++number3);
        updateValue3 = value3 * number3;
        productValue3.html(updateValue3.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    } else if (op === '-' && number3 > 1) {
        quantity3.val(--number3);
        updateValue3 = value3 * number3;
        productValue3.html(updateValue3.toLocaleString('en-US') + 'đ');
        productValue4.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
        productValue5.html((updateValue1 + updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    }
}

$("#delete1").on('click', function () {
    updateValue1 = updateValue1 - updateValue1;
    productValue4.html((updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    productValue5.html((updateValue2 + updateValue3).toLocaleString('en-US') + 'đ');
    $('#cart1').empty();
});


$("#delete2").on('click', function () {
    updateValue2 = updateValue2 - updateValue2;
    productValue4.html((updateValue3 + updateValue1).toLocaleString('en-US') + 'đ');
    productValue5.html((updateValue3 + updateValue1).toLocaleString('en-US') + 'đ');
    $('#cart2').empty();
});


$("#delete3").on('click', function () {
    updateValue3 = updateValue3 - updateValue3;
    productValue4.html((updateValue1 + updateValue2).toLocaleString('en-US') + 'đ');
    productValue5.html((updateValue1 + updateValue2).toLocaleString('en-US') + 'đ');
    $('#cart3').empty();
});