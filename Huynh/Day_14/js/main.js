// *Lưu ý: nêu code ở file js mà lỗi => toàn bộ 
// Khai báo biến
// Có 3 kiểu khai báo biến chín ở trong js (var,)

var number1 = 2; // là kiểu khai báo thông dụng nhất. Phạm vi: Golbal (biến toàn cục)
let number2 = 4; // Cũng là kiểu khai báo biến. Phạm  vi: in scope (biến cục bộ chỉ trong 1 vùng code vd: 1 hàm)
const number3 = 3; // khai báo kiểu hằng số
// let a = 1;

//Các kiểu dữ liệu: string, number, bool, array, object, null, undefined, NaN
var string = "Hello world"; //Khai báo chuỗi
var number = 1000;
var bool = true; // hoặc false
var array = [1, 2, 3, 4, 5, 6]; // ma trận 1 chiều gồm nhiều phần tử
var array = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ] //1 mảng lớn gồm 3 phần tử con, mỗi phần tử con gồm 4 phần tử cháu
    //array = [index: 0, 1, 2, 3, 4,...]

var arrayString = ['red', 'green', 'blue'];
var greenColor = arrayString[1]; //undefined index
console.log(greenColor);

var string = '10000.5';
var number5 = parseInt(string); //parseInt: ép kiểu số nguyên, parseFloat: kiểu số thực
console.log(number5);
console.log(parseFloat(string));

//Cách khai báo biến: cú pháp (var/let/const + Tên biến + dấu bằng + giát trị)
var number = 1;

//Cách đặt tên biến
//Quy tắc 1: camelCase (viếtThườngChữĐầu, viết hoa chữ cái ở cụm sau) Thường dùng đặt tên biến và các funtion
//Quy tắc 2: snake_case (các cụm từ được cách nhau bởi dấu _) Thường dùng đặt tên biến
//Quy tắc 3: UPPERCASE (viếu hoa tất) thường dùng định nghĩa các const
//Quy tắc 4: lowercase (viết thường tất) hầu như không dùng
//Quy tắc 5: CapitalCase (viết hoa các chữ cái đầu từ) thường dùng đặt tên các file hoặc class

//Toán tử: + -  * / ++ -- ** = %
var a = 2;
var b = 3;
var sum = a + b;
var multiple = a * b;
var  subtract = a - b;
var divide = a / b;
console.log('Tổng của a + b là: ' + sum);
console.log('Hiệu của a - b là: ' + subtract);
console.log('Tích của a * b là: ' + multiple);
console.log('thương của a / b là: ' + divide);
console.log(string + a); // nối chuỗi 

a = 10; 
sum = a + b;
console.log('Tổng của a + b là: ' + sum); // Kết quả là 13

sum = sum + a;
sum = sum + sum;
console.log(sum);
sum += sum;
sum += a;
sum++; // Sẽ được cộng sau
++sum; // sẽ được cộng trước
console.log(sum);
var c=5;
console.log(c++);
console.log(++c);
console.log(c ** b); // lũy thừa

console.log(a % b); //chia lấy dư

//Các toán từ so sánh: <, >, <=, >=, ==, ===
console.log(a === b);
var c = 1;
var d = '1';
console.log(c === d); // so sánh kiểu dữ liệu

var a = 5;
var b = 6;
var sum = 0;

function a() {
    sum = a + b;
}
 
function b() {
    .console.log(sum);
}

//promise ... then
//async a await b