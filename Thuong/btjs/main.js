/*
var a =2;
var b =1;
var c =3;

console.log('hello vvorld')
 function check(a,b,c){
    if(a**2+b**2==c**2 || c**2+b**2==a**2||a**2+c**2==b**2) return true;
    else return false;
 }
if(a > 0 && b > 0 && c > 0){
    if(a+b>c || a+c>b || b+c >a){
        if(a == b || b == c || a ==c){
            if(a == b && b ==c) console.log('Day la tam giac dieu!');
            else {            
                if(check(a,b,c)){
                    console.log('Day la tam giac vuong can');
                }else console.log('Day la tam giac can');
            }
        }else {
            if(check(a,b,c)) console.log('Day la tam giac vuong');
            else console.log('Day la tam giac thuong')
        }
    }
}else console.log('Day khong phai 3 canh cua tam giac');*/


// for(let i = 1;i<=1000;i++){
//     console.log(i);
// }
// for(let i =1000;i>0;i--){
//     console.log(i);
// }
var a =parseInt(prompt("Nhap so a bat ky:"));
for(let i =1;i<=10;i++){
    console.log(a +'x' + i +'=' + a*i);
}
