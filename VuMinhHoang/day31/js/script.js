$(document).ready(function() {
    var cartItems = [];

    // Function to add an item to the cart
    function addToCart(item, price, quantity) {
      var cartItem = {
        item: item,
        price: price,
        quantity: quantity
      };
      cartItems.push(cartItem);
      updateCart();
    }

    // Function to update the cart
    function updateCart() {
      var cartList = $("#cart-list");
      var totalPrice = 0;
      cartList.empty();

      if (cartItems.length === 0) {
        cartList.append("<li>Cart is empty</li>");
      } else {
        $.each(cartItems, function(index, item) {
          var itemTotal = parseFloat(item.price) * parseInt(item.quantity);
          cartList.append(
            "<li>" +
              item.item +
              " - $" +
              item.price +
              " x " +
              item.quantity +
              " = $" +
              itemTotal.toFixed(2) +
              ' <button class="remove-item" data-index="' +
              index +
              '">Remove</button></li>'
          );
          totalPrice += itemTotal;
        });
      }

      $("#total-price").text("$" + totalPrice.toFixed(2));
    }

    // Event handler for add-to-cart buttons
    $(".add-to-cart").click(function() {
      var item = $(this).siblings("span").first().text();
      var price = $(this).siblings("span").last().text().replace("Price: $", "");
      var quantity = parseInt($(this).siblings(".quantity").val());
      addToCart(item, price, quantity);
    });

    // Event handler for remove-item buttons
    $(document).on("click", ".remove-item", function() {
      var index = $(this).data("index");
      cartItems.splice(index, 1);
      updateCart();
    });
  });