// if (a == b) { // if (nếu): khối điều kiện
//     a += b;
// }

// if (a === b) {
//     a += b;
// }else {     // else (khác): khi mà khối điều kiện if sai. else sẽ được thực hiện
//     a -= b;
// }

// var a = 5;
// var b = 10;
// console.log(a);
// var sum = 0;
// if (a < b) {
//     sum = a + b;
// } else {
//     sum = b - a;
// }

// console.log('Kết quả của sum là: ' + sum);

// if (a != b) {
//     sum = a * b;
// } else {
//     sum = a / b;
// }


//Câu 2: nhập vào số điểm của sinh viên. cho biết

// var score = 10;

// if (score > 0 && score <= 3) {
//     console.log('Bé đi xa quá');
// } 

// if (score > 3 && score <= 6) {
//     console.log('Bạn gà quá');
// }

// if (score > 6 && score < 7) {
//     console.log('Khá quá');
// }

// if (score >= 7 && score <= 8) {
//     console.log('Giỏi');
// }

// if (score < 0 || score > 10) {
//     console.log('Điểm sai định dạng');
// }

//Cách 2:

// if (score > 0 && score <= 3) {
//     console.log('Bé đi xa quá');
// } else if(score > 3 && score <= 6){
//     console.log('Bạn gà quá');
// } else if (score > 6 && score <= 8) {
//     console.log('Khá quá');
// } else if (score > 8 && score <= 10) {
//     console.log('Giỏi');
// } else if (score < 0 || score > 10) {
//     console.log('Nhập cũng sai');   
// }

//Cách 3:

// switch (score) {
//     case 0, 1, 2, 3:
//         console.log('Bé đi xa quá'); 
//         break;
//     case 4, 5, 6:
//         console.log('Bạn gà quá');
//         break;
//     case 7, 8:
//         console.log('Khá quá');
//         break;
//     case 9, 10:
//         console.log('giỏi');
//         break;
//     default:
//         console.log('Nhập cũng sai');
//         break;
// }

//BTVN:
//Cho 3 số a, b, c. 
//Cho biết a, b, c có phải là chiều dài của 1 tam giác hay không?
// Nếu là tam giác thì nó là tam giác gì?

var a = 3,
    b = 4,
    c = 5;

if (a == 0 || b == 0 || c == 0 || a + b < c || a + c < b || b + c < a) {
    console.log('3 cạnh bạn nhập không thể tạo thành 1 tam giác');
} else if (a == b || b == c || c == a) {
    console.log('3 cạnh bạn nhập tạo thành 1 tam giác cân');
} else if (a == b && b == c) {
    console.log('3 cạnh bạn nhập tạo thành 1 tam giác đều');
} else if (a**2 + b**2 == c**2 || a**2 + c**2 == b**2 || b**2 + c**2 == a**2) {
    console.log('Tam giác vuông');
}
