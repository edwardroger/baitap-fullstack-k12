//khai báo biến lặp + điều kiện lặp + bước lặp => khối lặp dựa theo điểu kiện trên
//for (let a=0;a<array.length; a++){
//    const element = array[a];
//}

//for (let a=0;a<10; a++){
 // console.log(a)  //thành phần lặp
//}

//lần 1: a=0;0<10; => log(0); a++=>0+1
//lần 2: a=1;1<10; => log(1); a++=>1+1
//lần 3: a=2;2<10; => log(2); a++=>2+1
//..
//lần 9: a=8;8<10; => log(8); a++=>8+1
//lần 10: a=9;9<10; => log(9); a++=>9+1
//lần 11: a=10;10=10; => false


//Ví dụ 1: nhập vào số a  bất kỳ. In ra tất cả các số từ 0=>a
/*var a = parseInt(prompt('nhập vào số a'));
    for (let i=0; i < a; i++){
        console.log(i) 
        }*/
//Ví dụ 2: Nhập vào số a bất kỳ. In ra các số chẵn lớn hơn 0 và bé hơn a (điều kiện i%2 === 0)
/*var a = parseInt(prompt('nhập vào số a'));
for (let i=0; i < a; i++) {
    if (i%2===0) {
    console.log(i) 
    }
}*/

//BTVN 
//Câu 1. In ra các số từ 1 -1000 theo thứ tự tăng dần
//Câu 2. In ra các số từ 1-1000 theo thứ tự giảm dần
//Câu 3. Nhập vào các số bất kỳ > 0. In ra bảng cửu chương của số đó

//BÀI LÀM

//CÂU 1
/*for (let a=0; a<1000; a++) {
        console.log(a) 
    }*/

//CÂU 2.
/*for (let a = 1000; a > 0; a--) {
    console.log(a) 
}*/
 
//CÂU 3.
for (let a=0; a < 11; a++) { 
    for (let b=1; b < 11; b++)
    console.log( a + "X" + b + "=" + a*b )}
