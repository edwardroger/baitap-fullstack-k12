function onChangeA() {
    let a = document.getElementById('numberA').value;

    console.log(`So a la: ${a}`);

    return a;
}

function onChangeB() {
    let b = document.getElementById('numberB').value;

    console.log(`So b la: ${b}`);

    return b;
}

function calculator(calculation) {
    let a = parseInt(onChangeA());
    let b = parseInt(onChangeB());
    let result;

    if (calculation === 'sum') {
        result = a + b;
        document.getElementById('sum').innerHTML = result;
    } else if (calculation === 'subtraction') {
        result = a - b;
        document.getElementById('subtraction').innerHTML = result;
    } else if (calculation === 'multiplication' ) {
        result = a * b;
        document.getElementById('multiplication').innerHTML = result;
    } else if (calculation === 'division') {
        result = a / b;
        document.getElementById('division').innerHTML = result;
    } else if (calculation === 'exponent') {
        result = a ** b;
        document.getElementById('exponent').innerHTML = result;
    }

    return result;
}
