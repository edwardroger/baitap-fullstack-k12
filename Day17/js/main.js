let a = parseInt(prompt("Nhập a:"));
let b = parseInt(prompt("Nhập b:"));
let sum = 0;
let count = 0;

//b1
if ( a > 0) {
    for (let i = 0; i <= a; i++) {
        if ( i % 2 != 0) {
            console.log(i);
            sum += i; // i lẻ: sum = sum +  i
        }
    }
    console.log('Tổng các số lẻ bé hơn hoặc =' + a +' là:' +sum);
}else {
    console.log('Số ' + a + ' không hợp lệ.')
}

//b1
// for (let i = 1; i <= a; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }

// console.log("Tổng các số lẻ từ 0 đến " + a + " là: " + sum);

//b2

for (let i = 0; i <= a; i++) {
  if (i % 5 === 0) {
    sum += i;
    count++;
  }
}

let avg = sum / count;
console.log("Trung bình cộng các số chia hết cho 5 từ 0 đến " + a + " là: " + avg);





//b3
let fact = 1;
for (let i = 1; i <= a; i++) {
  fact *= i;
}

console.log("Giai thừa của " + a + " là: " + fact);

//b4

for (let i = 1; i <= a; i++) {
  sum += i * i;
}
console.log("Giá trị của biểu thức là: " + sum);

//b5
for (let i = 0; i <= a; i++) {
  if (i % 2 !== 0) {
    count++;
  }
}

console.log("Số lượng các số lẻ từ 0 đến " + a + " là: " + count);


//b6

    var tong = 0;
    for (var i = a; i <= b; i++) {
      tong += i;
    }

  console.log("Tong cac so tu " + a + " den " + b + " la: " + tong);