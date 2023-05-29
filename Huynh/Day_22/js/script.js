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
    ans = undefined;
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


// 1.Biểu thức điều kiện rút gọn (toán tử ternary: 3 ngôi)
//let a = condition ? true: false

// let a = 10;
// let b = 5;
// let result1 = (a > b) ? a-b : b-a;

// console.log(a > b ? 'lớn hơn' : 'nhỏ hơn');

// 2. Phép gán
// let x = 20;
// let y = 20;
// ==> cách viết tắt
// let x, y = 20;
// let [d, e, f] = [1, 2, 3];

// 3. Gán giá trị mặc định
// function nameImg(name) {
//     return name;
// }

// let image = nameImg() || 'default.jpg'; // Khi nameImg=== null ==> undefide

// 4. Toán tử AND (&&)
// let isRunning = true;

// function run() {
//     console.log('...');
// }

// isRunning && run();     //nếu isRunning === true => thực thi hàm run()

// 5. Hoán vị 2 biến
// let m = 5;
// let n = 6;
// let tg;
// tg = m;
// m = n;
// n = tg;
// // ---
// [m, n] = [n, m];

// 6. Template literals
// let m = 5;
// let n = 6;
// let result2 = 5 + 6;
// console.log('Tổng của ' + m + ' + ' + n + ' là: ' + result2);
// console.log(`Tổng của ${m} + ${n} là: ${result2}`);

// 7. Chuyển đổi chuỗi thành số
// let number3 = '123456';
// let number4 = '45.5';
// //cách thường
// number3 = parseInt(number3);
// number4 = parseFloat(number4);
// //cách viết tắt
// number3 = +number3;
// number4 = +number4;

// 8. Làm tròn số
// lấy phần nguyên
// let num = 6.9;
// console.log(Math.floor(num));
// console.log(~~num); //~~ tương đương hàm floor

// 9. Tìm min, max trong 1 mảng
// const arr = [2, 5, 5, 4, 4];

// let min = Math.min(...arr); //... === rest ---> tạo một mảng để tìm min max không thay đổi mảng ban đầu
// let max = Math.max(...arr);

// 10. Gộp mảng
// let arr1 = [1, 2, 3];
// let arr2 = [3, 4];
// // let arr2 = arr1.concat([3, 4]);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//11. Arrow Function
// Cách thông thường
// function funcName() {

// }
// // Arrow function:
// let h = 5;
// let k = 6;
// const funcName = () => {

// }

// const sum = (h, k) => h + k
// console.log(sum());
// sum = ((h, k) => h + k)

// 12. Vòng lặp for
// let array = [1, 2, 4, 5]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// for (const value of array) {
//     console.log(value);
// }

// for (const i in array) {
//     console.log(array[i]);
// }