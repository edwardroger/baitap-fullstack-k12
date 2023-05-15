let arry =[];
for(let i=0;i<5;i++){
    let j = i+1;
    arry[i] = parseInt(prompt("Nhap phan tu " + j +":"));
}

let max =arry[0];
let min =arry[0];

for(let i=0;i<5;i++){
    if(max < arry[i]) max = arry[i];
    if(min > arry[i]) min =arry[i];   
}
console.log("max =" + max);
console.log("min =" + min);
console.log("AVG(max,min) =" + (max + min)/2);
//tang
// for(let i=0;i<5;i++){
//     for(let j =0;j<5;j++){
//         if(arry[i] > arry[i+1]){
//             var tmp = arry[i];
//             arry[i] = arry[i+1];
//             arry[i+1] = tmp;
//         }
//     }
// }
arry.sort();//tang
//giam
// for(let i=0;i<5;i++){
//     for(let j =0;j<5;j++){
//         if(arry[i] < arry[i+1]){
//             var tmp = arry[i];
//             arry[i] = arry[i+1];
//             arry[i+1] = tmp;
//         }
//     }
// }
// for(let i=0;i<5;i++){
//     console.log( arry[i]);  
// }

console.log(arry);