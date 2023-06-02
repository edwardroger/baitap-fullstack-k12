const cartItemsElement = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        let cartItems = [];
        let cartTotal = 0;

        function addToCart(productName, price, quantityInputId) {
            const quantityInput = document.getElementById(quantityInputId);
            const quantity = parseInt(quantityInput.value);

            const item = {
                name: productName,
                price: price,
                quantity: quantity
            };

            cartItems.push(item);
            cartTotal += price * quantity;

            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - $${price} x ${quantity}`;
            cartItemsElement.appendChild(listItem);

            cartTotalElement.textContent = cartTotal;
        }

        function clearCart() {
            cartItems = [];
            cartTotal = 0;

            cartItemsElement.innerHTML = '';
            cartTotalElement.textContent = cartTotal;
        }
        