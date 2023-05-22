function soA() {
    let soA = document.getElementById('soA').value;

    return soA;
}

function soB() {
    let soB = document.getElementById('soB').value;

    return soB;
}

function cong() {
    let soC = parseFloat(soA());
    let soD = parseFloat(soB());
    let cong = (soC + soD);

    document.getElementById('ketQua').innerHTML = ('The result of addition is: ' + cong);
}

function tru() {
    let soC = parseFloat(soA());
    let soD = parseFloat(soB());
    let tru = (soC - soD);

    document.getElementById('ketQua').innerHTML = ('The result of subtraction is: ' + tru);
}

function nhan() {
    let soC = parseFloat(soA());
    let soD = parseFloat(soB());
    let nhan = (soC * soD);

    document.getElementById('ketQua').innerHTML = ('The result of multiplizaion is: ' + nhan);
}

function chia() {
    let soC = parseFloat(soA());
    let soD = parseFloat(soB());
    let chia = (soC / soD);

    document.getElementById('ketQua').innerHTML = ('The result of division is: ' + chia);   
}