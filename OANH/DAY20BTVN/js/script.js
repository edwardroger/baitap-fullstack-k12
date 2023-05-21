function onChangeA() {
    let a = document.getElementById('a').value; //Lấy giá trị của ô input có id là a
    console.log(a);

    return a;
}

function onChangeB() {
    let b = document.getElementById('b').value;
    console.log(b);

    return b;
}   
       
function handleTong() {
    let a = onChangeA();
    let b = onChangeB();
    let Tong = a + b;
    document.getElementById('Tong-value').innerHTML = '<h1> Tổng của ' + a + ' + ' + b + ' là:'  + Tong + '</h1>';
}

function handleHieu() {
    let a = onChangeA();
    let b = onChangeB();
    let Hieu = a - b;
    document.getElementById('Hieu-value').innerHTML = '<h1> Hiệu của ' + a + ' - ' + b + ' là:'  + Hieu + '</h1>';
}


function handleTich() {
    let a = onChangeA();
    let b = onChangeB();
    let Tich = a * b;
    document.getElementById('Tich-value').innerHTML = '<h1> Tích của ' + a + ' * ' + b + ' là:'  + Tich + '</h1>';
}

function handleThuong() {
    let a = onChangeA();
    let b = onChangeB();
    let Thuong = a / b;
    document.getElementById('Thuong-value').innerHTML = '<h1> Thương của ' + a + ' / ' + b + ' là:'  + Thuong + '</h1>';
}
    