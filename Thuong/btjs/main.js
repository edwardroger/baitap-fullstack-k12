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
// var a =parseInt(prompt("Nhap so a bat ky:"));
// for(let i =1;i<=10;i++){
//     console.log(a +'x' + i +'=' + a*i);
// }


var sum =0,dem=0;

//bai 1
// var a = parseInt(prompt("Nhap so a:"));
// for(let i=0;i<=a;i++){
//     if(i % 2 !== 0){
//         sum += i;
//     }
// }
// console.log(sum);

//bai 2
// var a = parseInt(prompt("Nhap so a:"));
// for(let i=0;i<=a;i++){
//         if(i % 5 == 0){
//             sum += i;
//             dem++;
//         }
//     }
//var b = float(sum /dem);
//console.log(b);
//bai 3
// var a = parseInt(prompt("Nhap so a:"));
// if(a === 0) sum =1;
// else{
//     for(let i=1;i<=a;i++){
//         sum = sum *i;
//     }
// }
// console.log(sum);
//bai 4
// var a = parseInt(prompt("Nhap so a:"));
// for(let i=1;i<=a;i++){
//     sum += i**2;
// }
// console.log(sum);

//bai 5
// var a = parseInt(prompt("Nhap so a:"));
// for(let i=0;i<=a;i++){
//     if(i % 2 !== 0) dem++;
// }
// console.log(dem);

// bai 6
// var a = parseInt(prompt("Nhap so a:"));
// var b = parseInt(prompt("Nhap so b:"));
// if(a > b) console.log("Rong");
// else{
//     for(let i = a;i<=b;i++){
//         sum+=i;
//     }
//     console.log(sum);
// }

//bai 7 
// var a = parseFloat(prompt("Nhap so a:"));
// var b = parseFloat(prompt("Nhap so b:"));
// var c = parseFloat(prompt("Nhap so c:"));

// if(a === 0){
//     var x = (float) -c/b;
//     console.log("x =" + x);
// }
// else{
//     var denta =-(b**2) - 4*a*c;
//     if(denta < 0) console.log("vo nghiem");
//     else if( denta ===0){
//         var x = float(-b/(2*a));
//         console.log("x =" + x);
//     }else{
//         var x1 = (-b- Math.sqrt(denta)) / (2*a);
//         var x2 = (-b+ Math.sqrt(denta)) / (2*a);
//         console.log("x1 =" + x1);
//         console.log("x2 =" + x2);
//     }
// } 

//bai 8

// var a = parseFloat(prompt("Nhap so a:"));

// var b = parseFloat(prompt("Nhap so b:"));

// var c = parseFloat(prompt("Nhap so c:"));
// if(a === 0){
//     if(-c*b > 0) console.log("vo nghiem");
//     else {
//         var x1 = - Math.sqrt(-c/b);
//         var x2 =  Math.sqrt(-c/b);
//     }
// }else{
//     var denta =-(b**2) - 4*a*c;
//     if(denta < 0) console.log("vo nghiem");
//     else if( denta ===0){
//         var x = float(-b/(2*a));
//         if(x <0) console.log("vo nghiem");
//         else{
//             var x1 = Math.sqrt(x);
//             var x2 = -Math.sqrt(x);
//             console.log("x1 =" + x1);
//             console.log("x2 =" + x2);
//         }
        
//     }else{
//         var x_1 = (-b- Math.sqrt(denta)) / (2*a);
//         var x_2 = (-b+ Math.sqrt(denta)) / (2*a);
//         if(x_1 >0 ){
//             var x1 = Math.sqrt(x_1);
//             var x2 = -Math.sqrt(x_1);
//             console.log("x1 =" + x1);
//             console.log("x2 =" + x2);
//             dem++;
//         }
//         if(x_2 >0 ){
//             var x3 = Math.sqrt(x_2);
//             var x4 = -Math.sqrt(x_2);
//             if(dem !==0){
//                 console.log("x3 =" + x3);
//                 console.log("x4 =" + x4);
//             }else{
//                 console.log("x1 =" + x3);
//                 console.log("x2 =" + x4);
//             }
            
//         }
//     }
// }

//bai 9

// let arry =[];

// for(let i =0;i<5;i++){
//     arry[i] = parseInt(prompt("Nhap phan tu thu "));
// }
// for(let i =0;i<5;i++){
    
//     if(arry[i] % 2 ===0) console.log(arry[i]);
    
// }

//bai 10

let arry =[];
var cout =0;
for(let i =0;i<5;i++){
    cout ++;
    arry[i] = parseInt(prompt("Nhap phan tu thu " + cout + ":"));
}
for(let i =0;i<5;i++){   
   sum+=arry[i];
   dem++;
}
var avg = sum/dem;
console.log("Trung binh cong :" + avg );
