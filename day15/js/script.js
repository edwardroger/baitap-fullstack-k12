// if (a==b) {   //if (nếu): Khối điều kiện
//     a += b;
// }

// if (a===b) {
//     a += b;
// } else {    //else (khác): Khi mà khối điều kiện của if sai. Else sẽ được thực thi
//     a -= b;
// }

//Khai báo 2 biến a & b. Nếu a lớn hơn b thì sum = a + b. Hoặc không thì sum = b - a
// var a = 5;
// var b = 10;
// var sum = 0;

// if (a < b) {  //trả về true
//     sum = a + b;
// } else {
//     sum = b - a;
// }


// if (a !== b) {
//     sum = a * b;
// } else {
//     sum = a / b;
// }

// console.log('Kết quả của sum là: ' + sum);

//toán tử and: (&&) tất cả các biểu thức phải trả về true
//toán tử or: (||) 1 trong các biểu thức trả về true
// toán tử khác: (!) check tồn tại của biến


//Câu 2: Nhập vào số điểm của sinh viên. Cho biết năng lực sinh viên thuộc loại gì
// 0-3: là tạch
// 4-6: trung bình
// 7-8: khá
// 9-10: giỏi
//Cách 1:
// var score = 11;

// if (score > 0 && score <= 3) {
//     console.log('Học sinh tạch rồi');
// }

// if (score > 3 && score <= 6) {
//     console.log('Học sinh trung bình');
// }

// if (score > 6 && score <= 8) {
//     console.log('Học sinh khá');
// }

// if (abc > 8  && abc <= 10) {
//     console.log('Học sinh giỏi');
// }

// if (score < 0 || score > 10) {
//     console.log('Điểm sai định dạng');
// }


//Cách 2:

// var score = 10;

// if (score > 0 && score <= 3) {
//     console.log('Học sinh tạch rồi');
// } else if (score > 3 && score <= 6) {
//     console.log('Học sinh trung bình');
// } else if (score > 6 && score <= 8) {
//     console.log('Học sinh khá');
// } else if (score > 8 && score <= 10) {
//     console.log('Học sinh giỏi');
// } else {
//     console.log('Sai định dạng');
// }

//Cách 3:

// var score = 6;

// switch (score) {
//     case 0, 1, 2, 3:
//         console.log('Học sinh tạch');
//         break;
//     case 4, 5, 6:
//         console.log('Học sinh trung bình');
//         break;
//     case 7, 8:
//         console.log('Học sinh khá');
//         break;
//     case 9, 10:
//         console.log('Học sinh giỏi');
//         break;
// }

//BTVN:
//Cho 3 số a, b, c. 
//Cho biết a, b, c có phải là chiều dài của 1 tam giác hay không?
// Nếu là tam giác thì nó là tam giác gì?

//Gợi ý: a + b > c và a + c > b và b + c > a
//Tam giác cân / Tam giác đều / Tam giác vuông (Áp dụng định lý Pytago)