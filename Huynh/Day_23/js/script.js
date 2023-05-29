var isOpen = false;
var numberOp = [];
var countNb = 0;
var countOp = 0;
var operator = [];
var result = '';
var ans;

function show(x) {
    let show = document.getElementById('result').value;
    if (operator[0] === undefined) {
        show = '';
        document.getElementById('result').value = show + x;
    } else document.getElementById('result').value = show + (x.slice(x.length - 1));
}

function variableDefault() {
    numberOp = [];
    countNb = 0;
    countOp = 0;
    operator = [];
    result = '';
}

function play() {
    isOpen = ! isOpen;
    if (isOpen) {
        document.getElementById('result').value = 'Đã bật máy tính';
        setTimeout(toggle, 200);
    } else {
        document.getElementById('result').value = 'Đã tắt';
        setTimeout(toggle, 500);
    }
}

function toggle() {
    if (isOpen) {
        document.getElementById('result').value = 'Nhập phép tính bạn muốn';
    } else {
        document.getElementById('result').value = '';
        variableDefault();
    }
}

function changeInput(number) {
    if (isOpen) {
        if (numberOp[countNb] === undefined) numberOp[countNb] = '';
        numberOp[countNb] += number;
        show(numberOp[countNb]);
    }
}

function selectOperator(op) {
    operator[countOp] = op;
    show(operator[countOp]);
    countOp++;
    countNb++;
}

function caculate(number1, number2, operator1) {
    if (operator1 === '+') {
        return parseInt(number1) + parseInt(number2);
    } else if (operator1 === '-') {
        return parseInt(number1) - parseInt(number2);
    } else if (operator1 === '*') {
        return parseInt(number1) * parseInt(number2);
    } else if (operator1 === '/') {
        if (parseInt(number2) !== 0) {
            return parseInt(number1) / parseInt(number2);
        }
    }
}

function handleResult() {
   if (operator[0] === undefined && numberOp[0] !== undefined) {
        result = numberOp[0];
   } else {
        for (let i = 0; i < operator.length; i++) {
            if(numberOp[i] !== undefined && numberOp[i + 1] !== undefined && operator[i] !== undefined) {
                if (operator[i + 1] === '*' || operator[i + 1] === '/') {
                    numberOp[i + 1] = caculate(numberOp[i + 1], numberOp[i + 2], operator[i + 1])
                    numberOp.splice((i + 2), 1);
                    operator.splice((i + 1), 1);
                    i--;
                } else {
                    (i === 0) ? 
                    result = caculate(numberOp[i], numberOp[i + 1], operator[i]) :
                    result = caculate(result, numberOp[i + 1], operator[i]);
                }
            } else {
                document.getElementById('result').value = 'error';
                break;
            }
        }
   }
   ans = result;
   document.getElementById('result').value = result;
   operator = [];
   numberOp = [];
   countNb = 0;
   countOp = 0;
   numberOp[0] = result;
}


function deleteOperation(type) {
    let show = document.getElementById('result').value;
    if (type === 'DEL') {
        if (numberOp[0] !== undefined) {
            if (numberOp[countOp] !== undefined && operator[countOp] === undefined) {
                numberOp[countOp] = numberOp[countOp].slice(0, (numberOp[countOp].length -1));
                if (numberOp[countOp] === '')  {
                    numberOp.pop();
                    if (countOp > 0) countOp--;
                }
                (numberOp[0] === undefined) ? document.getElementById('result').value = 'Nhập phép tính bạn muốn':
                document.getElementById('result').value = show.slice(0, (show.length - 1));
            }else {
                if (operator[countOp] !== undefined)  {
                    operator.pop();
                }
                document.getElementById('result').value = show.slice(0, (show.length - 1));
            }
        }
    } else {
        document.getElementById('result').value = 'Nhập phép tính bạn muốn';
        variableDefault();
    }
}