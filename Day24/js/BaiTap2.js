
const products = document.querySelectorAll('.card');


products.forEach(product => {
    const plusBtn = product.querySelector('.buy');
    const minusBtn = product.querySelector('.tru');
    const price = parseInt(product.querySelector('.price').innerText.replace(',', '').replace(' đồng', ''));

    let quantity = 1;


    plusBtn.addEventListener('click', () => {
        quantity++;
        product.querySelector('.number').innerText = quantity;
        const sum = parseInt(document.querySelector('.sum').innerText.replace(',', '').replace(' đồng', ''));
        document.querySelector('.sum').innerText = (sum + price) + ' đồng';
        minusBtn.disabled = false; 
        if (quantity > 1) {
            minusBtn.disabled = false; 
        }
    });


    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            product.querySelector('.number').innerText = quantity;
            const sum = parseInt(document.querySelector('.sum').innerText.replace(',', '').replace(' đồng', ''));
            document.querySelector('.sum').innerText = (sum - price) + ' đồng';
            minusBtn.disabled = false
        }
    });
});


let total = 0;
products.forEach(product => {
    const price = parseInt(product.querySelector('.price').innerText.replace(',', '').replace(' đồng', ''));
    total += price;
});
document.querySelector('.sum').innerText = total + ' đồng';