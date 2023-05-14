
// Cau 1:
// var a = parseInt(prompt('Nhap vao so a'));
// let total = 0;
// for (let i = 1 ; i <= a ; i++) {
//     if (i % 2 !== 0) {
//         total += i;
//     }
// }
// console.log(`Tong cac so le tu 0 -> a la ${total}`);


// Cau 2: 
// var a = parseInt(prompt('Nhap vao so a'));
// let total1 = 0;
// let denominator = 0;
// for (let i = 1 ; i <= a ; i++) {
//     if (i % 5 == 0) {
//         total1 += i;
//         denominator++;
//     }
// }
// console.log(`Trung bình cộng các số chia hết cho 5 là ${total1/denominator}`);


// Cau 3: 
// var a = parseInt(prompt('Nhap vao so a'));
// let giaithua = a;
// for (let i = 1 ; i < a ; i++) {
//     giaithua = giaithua * i;
// }
// console.log(giaithua);

// Cau 4: 
// var a = parseInt(prompt('Nhap vao so a'));
// let value = 0;
// for (let i = 1 ; i <= a ; i++) {
//     value = value + (i**2);
// }
// console.log(value);


// Cau 5: 
// var a = parseInt(prompt('Nhap vao so a'));
// let number = 0;
// for (let i = 0 ; i <= a ; i++) {
//     if (i % 2 !== 0 ) {
//         number++
//     }
// }
// console.log(number);


// Cau 6 :
// var a = parseInt(prompt('Nhap vao so a'));
// var b = parseInt(prompt('Nhap vao so b'));
// if (a < b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);
// } else if (b < a) {
//     let sum = 0;
//     for (let i = b; i <= a; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);
// } else {
//     console.log('Khong in');
// }


// Cau 7 : 
// var a = parseInt(prompt('Nhap vao so a'));
// var b = parseInt(prompt('Nhap vao so b'));
// var c = parseInt(prompt('Nhap vao so c'));

// if (a !== 0) {
//     console.log('Phương trình có dạng: ax^2 + bx + c = 0');
//     var delta = b ** 2 - (4 * a * c);
//     console.log(delta);
//     if (delta > 0) {
//         console.log("Phương trình có 2 nghiệm lần lượt là:");
//         console.log(`x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}`);
//         console.log(`x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`);
//     } else if (delta == 0) {
//         console.log("Phương trình có nghiệm kép:");
//         console.log(`x1 = x2 = ${-b / (2 * a)}`);
//     } else {
//         console.log("Phương trình vô ngiệm ");
//     }
// } else {
//     console.log('Phương trình trở thành: bx + c = 0');
//     if (b !== 0) {
//         console.log(`Ngiệm của phương trình là x = ${(-c) / b}`);
//     } else {
//         console.log('Phương trình vô nghiệm ');
//     }
// }


// Cau 8 :
// var a = parseInt(prompt('Nhap vao so a'));
// var b = parseInt(prompt('Nhap vao so b'));
// var c = parseInt(prompt('Nhap vao so c'));

// if (a !== 0) {
//     console.log('Phương trình có dạng: ax^4 + bx^2 + c = 0');
//     console.log("Đặt t = x^2");
//     console.log("Phương trình trở thành: at^2 + bt + c = 0");
//     var delta = b ** 2 - (4 * a * c);
//     console.log(`delta = ${delta}`);
//     if (delta > 0) {
//         console.log("Giá trị của t là:");

//         var t1 = (-b + Math.sqrt(delta)) / (2 * a)
//         console.log(`t1 = ${t1}`);
//         if (t1 > 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x1 = ${Math.sqrt(t1)}`);
//             console.log(`x2 = -${Math.sqrt(t1)}`);
//         } else if (t1 == 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x = ${Math.sqrt(t1)}`);
//         } else {
//             console.log('Phương trình đã cho vô nghiệm');
//         }

//         var t2 = (-b - Math.sqrt(delta)) / (2 * a)
//         console.log(`t2 = ${t2}`);
//         if (t2 > 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x1 = ${Math.sqrt(t2)}`);
//             console.log(`x2 = -${Math.sqrt(t2)}`);
//         } else if (t2 == 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x = ${Math.sqrt(t2)}`);
//         } else {
//             console.log('Phương trình đã cho vô nghiệm');
//         }

//     } else if (delta == 0) {
//         console.log("Giá trị của t là:");
//         var t = -b / (2 * a);
//         console.log(`t = ${t}`);
//         if (t > 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x1 = ${Math.sqrt(t)}`);
//             console.log(`x2 = -${Math.sqrt(t)}`);
//         } else if (t == 0) {
//             console.log('Phương trình đã cho có nghiệm là:');
//             console.log(`x = ${Math.sqrt(t)}`);
//         } else {
//             console.log('Phương trình đã cho vô nghiệm');
//         }
//     } else {
//         console.log("Phương trình vô ngiệm");
//     }
// } else {
//     console.log("Phương trình trở thành: bx^2 + c = 0 ");
//     console.log("Đặt t = x^2");
//     var t = -c / b;  
//     if (t > 0) {
//         console.log('Phương trình đã cho có nghiệm là:');
//         console.log(`x1 = ${Math.sqrt(t)}`);
//         console.log(`x2 = -${Math.sqrt(t)}`);
//     } else if (t == 0) {
//         console.log('Phương trình đã cho có nghiệm là:');
//         console.log(`x = ${Math.sqrt(t)}`);
//     } else {
//         console.log('Phương trình đã cho vô nghiệm');
//     }
// }

// Cau 9
var arr = [];
var arr2 = [];
for (let i = 0; i < 5; i++) {
        arr.push(parseFloat(prompt('Nhap vao so a')));
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
    }
}
console.log(arr2);


// Cau 10
// var arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(parseFloat(prompt('Nhap vao so a')))
// }
// console.log(arr);
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// };
// console.log(`Trung bình cộng = ${total / arr.length}`);



 
