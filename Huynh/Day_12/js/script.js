
// giỏ hàng
function changeNumber(type, product, sumPriceProduct, priceProduct) {
    let inputProduct = document.getElementsByClassName(product)[0];
    let showPrice = document.getElementById(sumPriceProduct);
    console.log(priceProduct);
    if (type === '+') {
        inputProduct.value = +inputProduct.value + 1;
        showPrice.innerHTML = +priceProduct * +inputProduct.value;
        sumPrice();
    } else {
        if (+inputProduct.value > 1) {
            inputProduct.value = +inputProduct.value - 1;
            showPrice.innerHTML = +priceProduct * +inputProduct.value;
            sumPrice();
        }
    }
}

function sumPrice() {
    let sum = 0;
    for (let i = 1; i <= 2; i++) {
        if (document.getElementById(`check-product-${i}`).checked) sum += +document.getElementById(`sum-price-${i}`).innerHTML;
    }
    document.getElementById('sumPay').innerHTML = sum;
}