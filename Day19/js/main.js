// var: khai báo variable (biến) toàn cục
// let: khai báo variavle (biến) cục bộ
// const: khai báo hằng (những thành phần không thay đổi || ko bị ghi đè)


var a = 5; // ko cần khai báo kiểu dữ liệu (integer, float , double, array,..)
var b = 6; // các ngôn ngữ khác cần khai báo kiểu dữ liệu
var sum = 0;

if (a <= b){ // condition === true => statement đc thực thi
    //statement
    sum = a + b;
} 

if ( a >= b) { //condition == false => statementElse đc thực thi, statementIf bị bỏ qua (ignore)
    // statementIf
    sum = a - b; 
} else {
    //statementElse
    sum = b - a;
}

if ( a > b) { // false
    //statementIf
    sum = a + b;
} else if ( a === b) { //false
    sum = a * b;
} else { // true
    //statementElse
    sum = a / b;
}

for (let i = 0; i < 10; i++ ) {
    //statement 
    sum += i;
}

// Lần lặp 1: i = 0; 0 <= 10 (true); statement thực hiện: sum = sum + i ( sum = 0 + 0); i++ => 0 + 1
// Lần lặp 2: i = 1; 1 <= 10 (true); statement thực hiện: sum = sum + i ( sum = 0 + 0); i++ => 1 + 1
//....

//function
// function tinhTong(a, b) { //parameters: các biến đầu vào || các biến tham chiếu'
//     let sum = a + b;
//     console.log('Tổng của 2 số ' + a + ' và ' + b + 'là ' + sum);
// }

// tinhTong(1, 2);


//function trả về kết quả 
function tinhTich(a, b) {
    let sum = a * b;

    return sum; 
}

console.log('Tich so nhan la: ' + tinhTich(2, 3));

