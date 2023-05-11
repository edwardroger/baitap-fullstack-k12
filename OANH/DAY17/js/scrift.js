
//câu 1. Tính tổng các số lẻ từ 0 đến a
/*let a = parseInt(prompt('nhập vào số a'));
let sum = 0;
if( a > 0 ){
    for (let i=0; i <= a; i++) {
        if (i % 2 ==! 0) {
            console.log(i);
            sum += i; //i lẻ : sum = sum + i;
        }
}
  console.log ( 'Tổng các số lẻ bé hơn hoặc =' + a + 'là ' + sum)
} else {
    console.log('số' + a + 'không hợp lệ')
}*/

// Câu 2 Tính trung bình cộng các số chia hết cho 5 từ 0 -> a
/*let a = parseInt(prompt('nhập vào số a'));
let sum = 0;
let count = 0;
if( a > 0 ) {
    for (let i = 0; i <= a; i++) {
        if (i % 5 === 0) {
            console.log(i);
            sum += i; 
            count++;
    }
}
  console.log ( 'Trung bình cộng các số chia hết cho 5 từ 0 đến ' +  a  + 'là ' + (sum/count++))
} else {
    console.log('số' + a + 'không hợp lệ')
}*/

//Câu 3. Tính giai thừa của số a
/*let a = parseInt(prompt('nhập vào số a'));
let giai_thua = 1;
if ( a > 0 ) {
    for (let i = 1; i <= a; i++) {
        giai_thua *=i ;
    }
} else {
    console.log('số' + a + 'không hợp lệ');
}*/

//  4. Tính giá trị biểu thức 1^2 + 2^2 + 3^2 + .... + a^2
/*let a = parseInt(prompt('nhập vào số a'));
sum = 0;
if ( a > 0 ) {
    for (let i = 1; i <= a; i++) {
        sum += i**2;
    }
    console.log ( 'Tổng giá trị biểu thức 1^2+...+' + a +'^2' + ' là ' + sum)
} else {
    console.log('số' + a + 'không hợp lệ');
}*/

//  5. Đếm số các số lẻ từ 0 -> a
let a = parseInt(prompt('nhập vào số a'));
sum = 0;
if ( a > 0 ) {
    for (let i = 0; i <= a; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }   
    }
} else {
    console.log('số' + a + 'không hợp lệ');
}
// 6. Tính tổng các số từ a -> b
//  7. Viết chương trình nhập vào 3 số a, b, c. Giải phương trình ax^2 + bx + c = 0
// 8. Viết chương trình nhập vào 3 số a, b, c. Giải phương trình ax^4 + bx^2 + c = 0
//  9. Nhập vào 1 mảng gôm 5 phần tử. In ra các số chẵn
//  10. Nhập vào 1 mảng gồm 5 phần tử. Tính trung bình cộng các số trong mảng.