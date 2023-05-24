function onchangeNumbera() {
    let a = document.getElementById('a').value;
    console.log(a);
    return a;
}

function onchangeNumberb() {
    let b = document.getElementById('b').value;
    console.log(b);
    return b;
}
function nhan() {
    let a = parseFloat(onchangeNumbera());
    let b = parseFloat(onchangeNumberb());
    let nhan = a * b;
    prompt(nhan);
    
}

function chia() {
    let a = parseFloat(onchangeNumbera());
    let b = parseFloat(onchangeNumberb());
    if (b === 0) {
        prompt ('khong the chia cho so = 0');
    } else {
        let chia = a / b;
        prompt(chia);
    }
    
}

function cong() {
    let a = parseFloat(onchangeNumbera());
    let b = parseFloat(onchangeNumberb());
    let cong = a + b;
    prompt(cong);
}

function tru() {
    let a = parseFloat(onchangeNumbera());
    let b = parseFloat(onchangeNumberb());
    let tru = a - b;
    prompt(tru);
}
