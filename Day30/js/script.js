// 1. Khai báo biến: có 3 kiểu khai báo biến trong js
//var, let, const
// 1.1. var (Phạm vi khai báo toàn cục: Khai báo ở mọi nơi, không bị giới hạn)
var a = 10;
// 1.2 let (Phạm vi khai báo cục bộ: Phạm vi chỉ nằm trong vùng được khai báo)
let b = 5;
// 1.3 const (Viết tắt của từ constant(hằng số): Dùng để khai báo các biến không thay đổi)
const GLOBALVARIABLE = 100;

// 2. Biểu thức khối điều kiện:
// 2.1. If (nếu)
// cú pháp :
// if (condition) {     //condition: điều kiện
//    statement         //statement: đoạn code được thực thi
// }


//Phát biểu: Nếu trời nắng thì đi học
// if (trời nắng) {
//     đi học
// }

var phatBieu = "Nếu trời nắng thì đi học";
if (phatBieu.includes("trời nắng")) {
    console.log("Đi học");
}

// => code: Nếu c lớn hơn 0 thì in ra giá trị của c
var c = 10;
if (c > 0) {
    console.log('Giá trị của c là: ' + c);
}

//2.2. If-else (Nếu-không)
//cú pháp:
// if (condition) {
//     statement
// } else {
//     statement
// }

// Phát biểu: Nếu trời nắng thì đi học. Còn không thì thôi không đi nữa
// if (trời nắng) {
//     đi học
// } else {
//     không đi nữa
// }

var phatBieu = "Nếu trời nắng thì đi học";
if (phatBieu.includes("trời nắng")) {
    console.log("Đi học");
}else {
    console.log("không đi nữa")
}

// => code: Nếu d lớn hơn 0 thì in ra giá trị của d. Còn không thì in ra 'Vui lòng nhập lại giá trị của d'
var d = 5;
if (d > 0) {
    console.log('Giá trị của d là: ' + d);
} else {
    console.log('Vui lòng nhập lại giá trị của d');
}

//2.3. If-else if - else: 
// Cú pháp:
// if (condition) {
//     statement
// } else if (condition) {
//     statement
// } else {
//     statement
// }

//Phát biểu: Nếu trời nắng thì đi học. Trời mưa bay bay thì mặc áo mưa đi học. Còn không thì thôi, nghỉ
// if (trời nắng) {
//     đi học
// } else if (trời mưa bay bay) {
//     mặc áo mưa đi học
// } else {
//     nghỉ
// }



// => code: Nếu e > 0 thì in ra e. Nếu e = 0 thì in ra e + 1. Còn không thì in ra 'Vui lòng nhập lại giá trị của e'
var e = 9;
if (e > 0) {
    console.log('Giá trị của e là: ' + e);
} else if (e === 0) {
    e = e + 1; //e += 1
    console.log('Giá trị của e là: ' + e);
} else {
    console.log('Vui lòng nhập lại giá trị của e');
}

// 3. Vòng lặp for

// cú pháp
var array = [1, 4, 6, 8, 2]; //array.length = 5; array[0] = 1
for (let i = 0; i < array.length; i++) {  //param (khai báo biến lặp i, điều kiện lặp, bước lặp)
    console.log(array[i]);       //đoạn lệnh được thực thi ở mỗi lần lặp
    //lần lặp đầu tiên: i = 0; i < 5 => true; thực hiện statement vd: array[i] = 1; i++: tăng i lên 1.
    //lần lặp thứ 2: i = 1; i < 5 => true; thực hiện statement vd: array[i] = 4; i++: 1 + 1
    //lần lặp thứ 3: i = 2: i < 5 => true; thực hiện statement; i++
    //...
    //lần lặp thứ 5: i = 4: i < 5 => true; thực hiện statement; i++
    //lần lặp thứ 6: i = 5; i = 5 => false; ngưng vòng lặp
}

// cú pháp nhập vào màn hình
var diem = parseFloat(prompt('Nhập vào điểm: '));

//Bài tập: 

// 1. Nhập vào điểm của sinh viên (1->10). Nếu điểm
// - 0 -> 3: In ra màn hình: tạch môn
// - 4 -> 5: In ra màn hình: điểm D 
// - 6 -> 7: In ra màn hình: điểm C 
// - 7 -> 8: In ra màn hình: điểm B 
// - 9 -> 10: In ra màn hình: điểm A

if (diem >= 0 && diem <= 3) {
    console.log("Tạch môn");
} else if (diem >= 4 && diem <= 5) {
    console.log("Điểm D");
} else if (diem >= 6 && diem <= 7) {
    console.log("Điểm C");
} else if (diem >= 8 && diem <= 9) {
    console.log("Điểm B");
} else if (diem === 10) {
    console.log("Điểm A");
} else {
    console.log("Điểm không hợp lệ");
}

// 2. Nhập vào số n. In ra tất cả các số chẵn từ 0 -> n (Dùng vòng lặp. Điều kiện chia chẵn là: a % 2 === 0)

var n = parseInt(prompt('Nhập vào n: '));
for(var i = 0; i <= n ; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}
