// function giaiPhuongTrinhBac2 () {
    //Câu 7
//     let a = parseFloat(prompt('Nhap vao a'));
//     let b = parseFloat(prompt('Nhap vao b'));
//     let c = parseFloat(prompt('Nhap vao c'));

//     if (a === 0) {
//         if (b === 0) {
//             if (c === 0) { // a === b === c === 0
//                 console.log('Phương trình vô số nghiệm!');
//             } else { // a === b === 0 !== c 
//                 console.log('Phuơng trình vô nghiệm');
//             }
//         } else { // a === 0; b !== 0
//             console.log('Phương trình có nghiệm duy nhất là: ' + (-c / b));
//         }
//     } else {
//         let delta = (b ** 2) - (4 * a * c);
//         if (delta < 0) {
//             console.log('Phương trình có nghiệm ảo.');
//         } else if (delta === 0) {
//             let x = (-b) / (2 * a);
//             console.log('Phương trình có nghiệm kép: ' + x);
//         } else {
//             let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//             let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//             console.log('Phương trình có nghiệm x1: ' + x1 + ' và x2: ' + x2);
//         }
//     }
// }

// let a = parseInt(prompt('Nhap a'));
// let b = parseInt(prompt('Nhap a'));
// let c = parseInt(prompt('Nhap a'));

// function testFunction (a, b, c) { //tham chiếu
//     console.log(a); //5
//     console.log(b); //6
//     console.log(c); //6
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// function consoleLog(string) {
//     console.log(string)
// }

// consoleLog(['1', '2', '3']);

// // // sum(a, b);
// var array = [1];
// function nhapMang()
// {
//     let array = [];
//     for (let i = 0; i < 5; i++) { //Float: 1.5, 2.3 || Integer: 1, 2, 3, 4, -1, 0, -2
//         array.push(parseFloat(prompt('nhap vao phan tu thu' + i)));
//     }
//     return array;  //dừng chương trình
// }
// nhapMang();


// BTVN:
    var arr = [];
    for (let i = 0 ; i < 5 ; i++) {
        arr.push(parseFloat(prompt("Nhap vao gia tri cua mang")))
    }
    console.log(arr);


// Câu 1:
function maximumValue() {
    let maxValue = arr[0];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        } 
    }
    console.log(maxValue);
    return maxValue;
}

// Câu 2:
function minimumValue () {
    let minValue = arr[0];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    console.log(minValue);
    return minValue;
}    

// Câu 3:
function increaseValue() {
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = i + 1 ; j < arr.length ; j++) {
            if (arr[i] > arr[j]) {
                let increase = arr[i];
                arr[i] = arr[j];
                arr[j] = increase;
            }
        }
    }
    console.log(`Giá trị tăng dần của mảng là: ${arr}`);
}

// Câu 4: 
function reduceValue() {
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let reduce = arr[i];
                arr[i] = arr[j];
                arr[j] = reduce;
            }
        }
    }
    console.log(`Giá trị giảm dần của mảng: ${arr}`);
}

// Câu 5:
function average() {
    console.log(`Trung bình cộng của giá trị lớn nhất và giá trị nhỏ nhất là: ${(maximumValue() + minimumValue()) / 2}`);
}



maximumValue();
minimumValue();
increaseValue();
reduceValue();
average();
