//c1 
function nhapMang() 
{
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(parseInt(prompt('Nhap vao phan tu thứ ' + i)));    
    }
    console.log(array)
    
}
let array = nhapMang();
//gt lon nhat
function maxiumValue () {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] > max){
            max = array[i]
        }
    }
    console.log(max);
    return max; 
}
//gt nho nhat 
function miniumValue () {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] < min ) {
            min = array[i]
        }
    }
    console.log(min);
    return min;
}
//c5 tinh trung binh cong 
function averageMinMax() {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] < min ) {
            min = array[i]
        }
    }
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if ( array[i] > max){
            max = array[i]
        }
    }
    console.log('trrung binh cong cua gia trị lon nhat va nho nhat la: ${(maxxiumValue() + miniumValue()) /2}' );
}
