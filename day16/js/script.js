// Vòng lặp
// Điều kiện lặp: Nếu sai điều kiện vòng lặp sẽ dừng, và bước nhảy k thực hiện nữa

// for (let a = 0; a < 10; a++){
//     console.log(a);
// }


// lần 1: a = 0; 0 < 10 => log(0); a++ => 0+1 
// lần 2: a = 1; 1 < 10 => log(1); a++ => 1+1 
// ...
// lần 10: a = 9; 9 < 10 => log(9); a++ => 9+1 
// lần 11: a = 10; 10 = 10 => false

// Ví dụ1: Nhập vào số a bất kỳ. In ra tất cả số bé hơn a

// var a = parseInt(prompt('Nhap vao so b'))
// for (let x = 0; x < a; x++) {
//     console.log(x);
// }

// Ví dụ: Nhập vào số a bất kỳ. In ra các số chẵn lớn hơn 0  và bé hơn a

// var a = parseInt(prompt('Nhap vao so a'));
// for (let i = 2; i < a ; i++) {
//     if (i % 2 === 0) {
//     console.log(i);;
//     }
// }

//BTVN:
//Câu 1: In ra các số từ 1-1000 theo thứ tự tăng dần
//Câu 2: In ra các số từ 1-1000 theo thứ tự giảm dần
//Câu 3: Nhập vào 1 số bất kỳ > 0. In ra bảng cửu chương của số đó

// Câu 1:

for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

// Câu 2:

for (let i = 1000; i >= 0; i--) {
    console.log(i);
}

// Câu 3: 

var a = parseInt(prompt('Nhap vao so a'))

for (let i = 1; i <= 10; i++) {
    var b = a*i
    console.log(`${a} x ${i} = ${b}`);
}
