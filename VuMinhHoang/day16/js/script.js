//Bai 1
// for(let i=1;i<1001;i++){
//     console.log(i)
// }

//Bai 2
// for (let i=1000;i>0;i--){
//     console.log(i)
// }

//Bai 3
let a = parseInt(prompt("Nhập a bất kỳ"))
document.write("Bảng cửu chương của " + a + ":<br>");
for (let i = 0; i < 11; i++) {
    document.write(a + " x " + i + " = " + (a * i))
    document.write("<br>")
}