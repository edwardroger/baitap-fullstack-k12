//BTVN:
//Cho 3 số a, b, c. 
//Cho biết a, b, c có phải là chiều dài của 1 tam giác hay không?
// Nếu là tam giác thì nó là tam giác gì?

//Gợi ý: a + b > c và a + c > b và b + c > a
//Tam giác cân / Tam giác đều / Tam giác vuông (Áp dụng định lý Pytago)

var a = 5
var b = 3
var c = 4

if((a+b)>c && (b+c)>a && (c+a)>b) {
    document.write("a,b,c là 3 cạnh của 1 tam giác")
} else if((a+b)<c||(a+c)<b||(b+c)<a){
    document.write("a,b,c không phải là ba cạnh của 1 tam giác")
} 

//if((a+b)>c && (b+c)>a && (c+a)>b) {console.log('a,b,c là 3 cạnh của 1 tam giác');}
//else if((a+b)<c){console.log('a,b,c không phải là ba cạnh của 1 tam giác');} 


if(a===b&&b===c && (a+b)>c && (b+c)>a && (c+a)>b){
    document.write("tam giác đều")
} else if (a===b||a===c||b===c && (a+b)>c && (b+c)>a && (c+a)>b){
    document.write("tam giác cân")
} else if((a**2 + b**2)===c**2||(a**2+c**2)===b**2||(b**2+c**2) === a**2 ){document.write("tam giác vuông")}


