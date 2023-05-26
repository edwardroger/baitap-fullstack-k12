var isOpen = false; //Mặc định ban đầu
var number1 = '';
var number2 = '';
var operator = '';

function toggle() {
    isOpen = ! isOpen; //Cập nhật lại giá trị
    document.getElementById('result').value = isOpen ? 'Đã bật máy tính' : '';
    // if (isOpen) { //check isOpen === true
    //     document.getElementById('result').value = 'Đã bật máy tính';
    // } else {
    //     document.getElementById('result').value = '';
    // }
}

function changeInput(number) {
    if (isOpen) {
        if (operator === '') {
            number1 += number;
            document.getElementById('result').value = number1;
            console.log(number1);
        } else {
            number2 += number;
            console.log(number2);
            document.getElementById('result').value = number1 + operator + number2;
        }
    }
    //máy tắt
}

function selectOperator(op) {
    operator = op;
    console.log(op);
    document.getElementById('result').value = number1 + operator;
}

function handleResult() {
    if (number1 !== '' && number2 !== '' && operator !== '') {
        if (operator === '+') {
            document.getElementById('result').value = parseInt(number1) + parseInt(number2);
        } else if (operator === '-') {
            document.getElementById('result').value = parseInt(number1) - parseInt(number2);
        } else if (operator === '*') {
            document.getElementById('result').value = parseInt(number1) * parseInt(number2);
        } else if (operator === '/') {
            if (parseInt(number2) !== 0) {
                document.getElementById('result').value = parseInt(number1) / parseInt(number2);
            }
        }
    }
}

//day22

//1. Biểu thức điều kiện rút gọn (Toán tử ternary : Toán tử ba ngôi)
//let a = condition ? true : false 
let a = 10;
let b = 6;
//khi a > b => a - b; a < b => b - a
let result1 = a < b ? (a - b) : (b - a)

console.log(a > b ? 'lớn hơn' : 'bé hơn');

// 2. Phép gán
// let x = 20;
// let y = 20;
// ==> cách viết tắt
let x, y = 20;
let [d, e, f] = [1, 2, 3]

//3. Gán giá trị mặc định
function nameImg(name) {
    return name;
}
let image = nameImg() || 'default.jpg'; //Khi nameImg === null || undefined || false => image = 'default.jpg'

//4. Toán tử AND (&&)
// let isRunning = true;

// function run() {
//     console.log('abcxyz');
// }

// isRunning && run() // nếu isRunning === true => thực thi hàm run()

//5. Hoán vị 2 biến
// let m = 5;
// let n = 6;
// let tg;
// tg = m;
// m = n;
// n = tg;
// // ==> m = 6; n = 5
// [m, n] = [n, m]

//6. Template literals
// let m = 5;
// let n = 6;
// let result = 5 + 6;
// console.log('Tổng của' + m + ' + ' + n + ' là: ' + result);
// console.log(`Tổng của ${m} + ${n} là ${result}`); //ES6 trở lên mới được viết theo cú pháp này

//7. Chuyển đổi chuỗi thành số
// let number3 = '123456';
// let number4 = '45.5';
// //cách thông thường:
// // number3 = parseInt(number3);
// // number4 = parseFloat(number4);

// //cách viết tắt:
// // number3 = number3;
// // number4 = number4;
// let result = +number3 + +number4
// console.log(result);

//8. Lấy phần nguyên:
// let num = 6.9;
// console.log(Math.floor(num));
// console.log(~~num); //~~ tương đương với hàm floor

//9. Tìm min, max trong 1 mảng
// const arr = [2, 5, 7, 9, 4];

// let min = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]); //... === rest
// let max = Math.max(...arr); 
// console.log(min, max);

//10. Gộp mảng:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr2 = arr1.concat([3, 4]);
// console.log(arr2);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//11. Arrow Function
//Cách thông thường
// function funcName() {

// }
//Arrow function:
// const funcName = () => {

// }
// var h = 5;
// var k = 6;
// const sum = (h, k) => h + k;//return h + k
// console.log(sum());
// sum = ((h, k) => h + k)

//12. Vòng lặp for
let array = [5, 2, 5, 4, 5, 6]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

//ví dụ:
// - in ra các phần tử của mảng
// - cho biết vị trí của phần tử chia hết cho 5
for (const index of array) { //lặp ra các giá trị trong mảng
    console.log(index);
}

for (const index in array) { //lặp dựa trên index (chỉ mục) của các phần tử trong mảng
    console.log(index);
}