
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
