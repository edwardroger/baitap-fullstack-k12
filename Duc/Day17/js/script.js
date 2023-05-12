let a = parseInt(prompt('Nhập vào số a'));
let sum = 0;
let avg = 0;
let giaithua = 1;
let i = 0;

//1. Tính tổng các số lẻ tử 0 -> a

// if (a > 0) {
//     for (x = 0; x <= a; x ++) {
//         if (x % 2 != 0) {
//             sum += x; //sum = sum + x;
//         } 
//     }
//     console.log('Tổng các số lẻ từ 0 đến ' + a + ' là: ' + sum);
// }
// else {
//     console.log('Sai đề');
// }

//2. Tính trung bình cộng các số chia hết cho 5 từ 0 -> a

// if (a < 0) {
//     console.log('Sai điều kiện');
// }

// else {
//     for (x = 0; x <= a; x++) {
//     if (x % 5 == 0) {
//         i++
//         avg += x;
//     }
// }
// console.log('Trung bình cộng các số chia hết cho 5 từ 0 ->' + a + 'là: ' + avg/i);
// }


//3. Tính giai thừa của số a

// for (x = 1; x <= a; x ++) {
//     giaithua *= x;
// }
// console.log('Giai thừa của ' + a + ' là: ' + giaithua);

//6. Tính tổng các số từ a -> b 

// let b = parseInt(prompt('Nhập vào b'));
// if (a >= b) {
//     console.log('a phải nhỏ hơn b');
// } else {
//     let i = a;
//     for (a; a <= b; a++) {
//         sum = sum + a;
//     }
//     console.log('Tổng các số từ ' + i + ' đến ' + b + ' là ' + sum);
// } Làm lại

//7. Giải phương trình bậc 2

// let b = parseInt(prompt('Nhập vào số b'));
// let c = parseInt(prompt('Nhập vào số c'));
// let x, x1, x2, delta;

// if (a == 0) {
//     x = -c / a;
//     console.log ('Phương trình có nghiệm duy nhất là x =' + x);
// } else {
//     delta = b * b - 4 * (a * c)
//     if (delta < 0) {
//         console.log ('Phương trình vô nghiệm');
//     } else if (delta == 0) {
//         x = -b / (2 * a);
//         console.log ('Phương trình có nghiệm duy nhất là x =' + x);
//     } else {
//         x1 = (-b - Math.sqrt(delta)) / (2 * a);
//         x2 = (-b + Math.sqrt(delta)) / (2 * a);
//         console.log ('Phương trình có nghiệm là x1 = ' + x1);
//         console.log ('Phương trình có nghiệm là x2 = ' + x2);
//     }
// }

//8. Giải phương trình bậc a^4 + b^2 + c = 0

// let b = parseInt(prompt('Nhập vào số b'));
// let c = parseInt(prompt('Nhập vào số c'));
// let t, t1, t2, x, x1, x2, delta;

// console.log('Phương trình ' + a + 'x^4 + ' + b + 'x^2 + ' + c + ' = 0 cho ra kết quả:');

// delta = b * b - 4 * a * c;

// if (a == 0) {
//     x = -c / a;
//     if (x >= 0) {
//         t = Math.sqrt(x);
//         console.log('Phương trình có hai nghiệm t = +-' + t);
//     } else console.log('Phương trình vô nghiệm');
// } else {
//     if (delta < 0) {
//         console.log ('Phương trình vô nghiệm');
//     } else if (delta == 0) {
//         x = -b / (2 * a);
//         if (x >= 0) {
//             t = Math.sqrt(x);
//             console.log('Phương trình có nghiệm t = ' + t);
//         } else console.log('Phương trình vô nghiệm');
//     } else {
//         x1 = (-b - Math.sqrt(delta)) / 2 * a;
//         x2 = (-b + Math.sqrt(delta)) / 2 * a;
//         if (x1 > 0 && x2 > 0) {
//             t1 = Math.sqrt(x1);
//             t2 = Math.sqrt(x2);
//             console.log ('Phương trình có bốn nghiệm là t1, t2 = +-' + t1 + ' và t3, t4 = +-' + t2);
//         } else if (x1 > 0 && x2 < 0) {
//             t1 = Math.sqrt(x1);
//             console.log ('Phương trình có hai nghiệm là t1, t2 = +-' + t1);
//         } else if (x1 < 0 && x2 > 0) {
//             t1 = Math.sqrt(x2);
//             console.log ('Phương trình có hai nghiệm là t1, t2 = +-' + t1);
//         } else {
//             console.log('Phương trình vô nghiệm');
//         }
//     }
// }

// 