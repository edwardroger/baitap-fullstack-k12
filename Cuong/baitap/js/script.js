//C1
//let a = parseInt(prompt("Nhập vào đây"));
//    for (let i = 1; i <= a; i++) {
//       console.log(i);
//    }
//C2
//let a = parseInt(prompt("Nhập vào đây"));
//let sum = 0;
//    if (a > 0) {
//    for (let i = 0; i <= a; i++) {
//        if (i % 2 === 0) {
//        sum += i; 
  //      }
//    }
//    console.log("Tổng các số chẵn  :" +a+ 'là' + sum );
//    } else {
//    console.log('số ' + a + 'ko hop le');
//}
//C3. nhập vào 1 mảng gồm n số. Tìm giá trị lớn nhất và nhỏ nhất.
//function khaibaomang() {
//    let array = [];
//    let a = parseInt(prompt('nhap vao so phan tu '));
//    for (let i = 0; i < a; i++){
//        array[i] = parseInt(prompt('nhap vao phan tu thu:' +i));
//    }
//   return array;
//}/
//let a = parseInt(prompt('nhap vao a'));
//for (let index = 0; index < a; index++) {
//    console.log(index);
    
//}
//function timMax() {
//    let array = [];
//    for (let i = 0; i < array.length; i++) {
//        array[i] = parseInt(prompt('Nhap vao phan tu thứ ' + i));    

//    }  
//    let max = array[0];
 //   for (let i = 0; i < array.length; i++) {
 //       if ( max < array[i]){
   //         max = array[i]
    //    }
    //}
  //  console.log(max);    
//}
//function timMin() {
//    let array = [];
//    for (let i = 0; i < array.length; i++) {
 //       array[i] = parseInt(prompt('Nhap vao phan tu thứ ' + i));    
  //  }  
  //  let min = array[0];
    //for (let i = 0; i < array.length; i++) {
      //  if ( min < array[i]){
        //    min = array[i]
        //}
    //}
 //   console.log(min);  
//}
//C4
/*let a = parseInt(prompt("Nhập vào đây"));
    for (let i = 0; i < a; i++) {
        
    }
    function nhapMang (){
        let array = [];
        for (let i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
            array[i] = parseInt(prompt('Nhap vao phan tu thứ ' + i));    
        }  
        return array;
    }*/
    
//C4
//var arr = [1,3,2,7,8,];
//for (let i = 0; i < arr.length;i++){
//  if (arr[i] % 2 == 0 ) {
//    console.log('cac so chan la :' +arr[i]);
//  }
//}
//C5
var arr = [1,3,2,7,8];
var sum = 0;
var count = 0;
//for (let i = 0; i <= array.length ; i++) {
  count +=i;
  sum += arr[i];

//}
console.log('trung binh cong la :' +sum/count);