// str.length: độ dài chuỗi
// str.split(): phân tách chuỗi
// str.toUpperCase: Viết hoa tất cả
// str.toLowerCase: Viết thường tất cả
// str.trim: Bỏ khoảng trắng đầu và cuối
// str.includes: check ký tự có tồn tại trong chuỗi hay không

function onChangeA() {
    let a = document.getElementById("a").value;
    return a;
}

function onChangeB() {
    let b = document.getElementById("b").value;
    return b;
}

function handleSum() {
    let a = onChangeA();
    let b = onChangeB();
    a = parseFloat(a.trim());
    b = parseFloat(b.trim());
    sum = a + b;
    document.getElementById("a-value").innerHTML = `<h1>Tổng 2 số a và b là ${sum}</h1>`;
}

function handleSub() {
    let a = onChangeA();
    let b = onChangeB();
    a = parseFloat(a.trim());
    b = parseFloat(b.trim());
    subtract = a - b;
    document.getElementById("b-value").innerHTML = `<h1>Hiệu 2 số a và b là ${subtract}</h1>`;
}

function handleMult() {
    let a = onChangeA();
    let b = onChangeB();
    a = parseFloat(a.trim());
    b = parseFloat(b.trim());
    mult = a * b;
    document.getElementById("c-value").innerHTML = `<h1>Tích 2 số a và b là ${mult}</h1>`;
}

function handleDiv() {
    let a = onChangeA();
    let b = onChangeB();
    a = parseFloat(a.trim());
    b = parseFloat(b.trim());
    div = a / b;
    document.getElementById("d-value").innerHTML = `<h1>Thương 2 số a và b là ${div}</h1>`;
}

function handleExp() {
    let a = onChangeA();
    let b = onChangeB();
    a = parseFloat(a.trim());
    b = parseFloat(b.trim());
    exp = a ** b;
    document.getElementById("e-value").innerHTML = `<h1>Lũy thừa 2 số a và b là ${exp}</h1>`;
}

function handleDelete() {
    document.getElementById("a").value = '';
    document.getElementById("b").value = '';

    document.getElementById("a-value").innerHTML = ``;
    document.getElementById("b-value").innerHTML = ``;
    document.getElementById("c-value").innerHTML = ``;
    document.getElementById("d-value").innerHTML = ``;
    document.getElementById("e-value").innerHTML = ``;
}

