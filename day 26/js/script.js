var hourse = '';
var repeat = '';
var display = document.querySelector('.display');
function handleChooseNumber(op) {
    hourse += op;
    repeat = hourse;
    display.innerHTML = hourse;
}

function handleOnclick(value) {
    value = hourse;
    var interval = setInterval(() => {
        if (value > 0) {
            value = value - 1;
        }
        display.innerHTML = value;
    }, 1000);
    
    setTimeout(() => {
        alert('dậy thôi');
        clearInterval(interval);
        hourse = '';
    }, parseInt(value) * 1000)
    
}

function handleAgain(value) {
    value = repeat;
    display.innerHTML = repeat;
    var interval = setInterval(() => {
        if (value > 0) {
            value = value - 1;
        }
        display.innerHTML = value;
    }, 1000);
    
    setTimeout(() => {
        alert('dậy thôi');
        clearInterval(interval);
        hourse = '';
    }, parseInt(value) * 1000)
}