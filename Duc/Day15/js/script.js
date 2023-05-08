// if (a==b) { //if (nếu): Khối điều kiện
//     a+=b;
// }

// if (a===b) {
//     a+=b;
// } else {    //else (khác): thực hiện khi khối điều kiện của if sai.
//     a-=b;
// }

//Khai báo 2 biến a & b. Nếu a>b thì sum=a+b. Không thì sum=b-a
var a=5;
var b=10;

if (a > b) {
    sum=a+b;
} else {
    sum=b-a;
}
console.log('Kết quả của sum là: ' + sum);

if (a===b) {
    sum=a*b;
} else {
    sum=a/b;
}
console.log('Kết quả của sum là: ' + sum);

//toán tử and: (&&) tất cả các biểu thức
//toán tử or: (||) 1 trong các biểu thức trả về
//toán tử khác: (!) check tồn tại của biến

//Câu 2: Nhập vào số điểm của sinh viên cho biết năng lực sinh viên loại gì
// 0-3: tạch
// 4-6: trung bình
// 7-8: khá
// 9-10: giỏi

var score = 12;

if (score > 0 && score <=3) {
    console.log('Chúc mừng bạn đã bị tạch');
}
if (score > 3 && score <=6) {
    console.log('Chúc mừng bạn rất tầm thường');
}
if (score > 6 && score <=8) {
    console.log('Bạn cũng khá đấy');
}
if (score > 8 && score <=10) {
    console.log('Thông minh đấy đồ ngu');
}
if (score < 0 || score > 10) {
    console.log('Tôi quan ngại về trí tuệ của bạn');
}

//Cách 2:

var score1 = -1;

if (score1 >= 0 && score1 <=3) {
    console.log('Chúc mừng bạn đã bị tạch');
} else if (score1 > 3 && score1 <= 6) {
    console.log('Chúc mừng bạn rất tầm thường');
} else if (score1 > 6 && score1 <= 8) {
    console.log('Bạn cũng khá đấy');
} else if (score1 > 8 && score1 <= 10) {
    console.log('Thông minh đấy đồ ngu');
} else if (score1 > 10 || score1 < 0) {
    console.log('Tôi quan ngại về trí tuệ của bạn');
}

//Cách 3:

var score2 = 20;

switch (score2) {
    case 0, 1, 2, 3:
        console.log('Chúc mừng bạn đã bị tạch');
        break;
    case 4, 5, 6:
        console.log('Chúc mừng bạn rất tầm thường');
        break;
    case 7, 8:
        console.log('Bạn cũng khá đấy');
        break;
    case 9, 10:  
        console.log('Thông minh đấy đồ ngu');
        break; 
}

//BTVN: 
//Cho 3 số a, b, c. Cho biết a, b, c có phải là chiều dài của một tam giác hay không? Nếu là tam giác thì đó là tam giác gì?
//Gợi ý: a + b > c và a + c > b và b + c > a
//Tam giác cân / Tam giác đều / Tam giác vuông (định lý Pytago)

var a = 3;
var b = 7;
var c = 5;

if (a+b>c && a+c>b && b+c>a && a>0 && b>0 && c>0) {
    console.log('Đó là số đo ba vòng của một TAM GIÁC (chứ không lẽ của một hình tròn :j)');
    if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==b*b+a*a) {
        console.log('Ồ! thế là có một góc 90 độ bên trong cái của nợ này đấy');
    }
    else if (a==b==c) {
        console.log('Mà khoan! Ủa sao nó đều vờ cờ vô lý');
    }
    else if (a==b || a==c || b==c) {
        console.log('Nhìn cũng cân đối phết chứ tưởng');
    }
    else {
        console.log('Đây là một tam giác hoàn toàn tầm thường (như bạn vậy)');
    }
}
else if (a<0 || b<0 || c<0) {
    console.log('Cạnh tam giác có kích thước âm à đồ ngu');
}
else {
    console.log('Đó tất nhiên méo phải ba cạnh của tam giác rồi :)) Tao cạn lời');
}
