


var p1 = 0;
var p2 = 0;
var p3 = 0;
var total = '';

$('.quantityOfProduct-1').on('change', function() {
    if ($('.quantityOfProduct-1').val() > 0) {
        p1 = $('.quantityOfProduct-1').val();
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p1').html('Product 1: $1000 x '+ p1 + ' = ' + '$' + (p1 * 1000));
        $('.total').html('Total: $ '+ total);
    } else {
        p1 = 0;
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p1').html('');
        $('.total').html('Total: $ '+ total);
    }
});

$('.quantityOfProduct-2').on('change', function() {
    if ($('.quantityOfProduct-2').val() > 0) {
        p2 = $('.quantityOfProduct-2').val();
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p2').html('Product 2: $2000 x ' + p2 + ' = ' + '$' + (p2 * 2000));
        $('.total').html('Total: $ '+ total);
    } else {
        p2 = 0;
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p2').html('');
        $('.total').html('Total: $ '+ total);
    }
});

$('.quantityOfProduct-3').on('change', function() {
    if ($('.quantityOfProduct-3').val() > 0) {
        p3 = $('.quantityOfProduct-3').val();
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p3').html('Product 3: $1500 x ' + p3 + ' = ' + '$' + (p3 * 1500));
        $('.total').html('Total: $ '+ total);
    } else {
        p3 = 0;
        total = p1 * 1000 + p2 * 2000 + p3 * 1500;
        $('.p3').html('');
        $('.total').html('Total: $ '+ total);
    }
});

$('.product-1++').on('click', function () {
    console.log($('.quantityOfProduct-1').val());
})

