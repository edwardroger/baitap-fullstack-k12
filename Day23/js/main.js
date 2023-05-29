//1. String length: Đếm số ký tự
function countLength (string) {
    console.log(string.length);
}

//2. String slice: cắt chuỗi
function sliceString(string) {
    console.log(string.slice(3, 5)); //param1: index; param2: index
}

//3. Sub string: cắt chuỗi
function subString(string) {
    console.log(string.substring(3, 5)); //param1: index; param2: index
}

//4. Sub str: cắt chuỗi
function subStr(string) {
    console.log(string.substr(6, 5)); //param1: index của ký tự; param2: số ký tự cần lấy
}

//5. String replace: Thay thế string đầu tiên tìm được bằng 1 string khác
function replaceString(string) {
    console.log(string.replace('world', 'Duck')); //param1: chuỗi string cần thay thế; param2: chuỗi thay thế
}

//6. String replace all: Thay thế toàn bộ các string tìm được
function replaceAllString(string) {
    console.log(string.replaceAll('world', 'Duck'));
}

//7. To upper case: Biến đổi string từ viết thường thành in hoa
function stringToUpperCase(string) {
    console.log(string.toUpperCase());
}

//8. To lower case: Ngược lại của upper case
function stringToLowerCase(string) {
    console.log(string.toLowerCase());
}

//9. Concat string: cộng string
function stringConcat(string) {
    let string2 = 'Javascript';
    console.log(string.concat(' test ', string2));
}

//10. trim: loại bỏ khoảng trống ở đầu và cuối string
function trimString(str) {
    console.log(str.trim());
}

//11. trimStart: tương tự trim nhưng chỉ bỏ khoảng trống ở đầu string
//12. trimEnd: tương tự trim nhưng chỉ bỏ khoảng trống ở cuối string
//13. charAt: trả về ký tự ở 1 vị trí nhất định
function stringCharAt(str) {
    console.log(str.charAt(0));  //param: index
}

//14. split string: chia tách chuỗi thành 1 mảng các phần tử
function splitString(str) {
    console.log(str.split(','));
}

var str = 'Hello, world, javascript, php, python, java!';
countLength(str);
sliceString(str);
subString(str);
subStr(str);
replaceString(str);
replaceAllString(str);
stringToUpperCase(str);
stringToLowerCase(str);
stringConcat(str);
trimString(str);
stringCharAt(str);
splitString(str);




//ARRAY
//1. Length: độ dài của mảng
function arrLength(arr) {
    console.log(arr.length);
}

//2. toString: chuyển đổi về dạng string
function arrToString(arr) {
    console.log(arr.toString());
}

//3. Popping & pushing: lấy phần tử ra khỏi mảng và đẩy phần tử vào mảng (stack and queue)
function popAndPushArr(arr) {
    let arr1 = 10;
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr.push(arr1));
    console.log(arr);
}

//4. Shift array: loại bỏ phần tử đầu tiên của mảng (ngược lại của pop)
function shiftArr(arr) {
    console.log(arr.shift());
    console.log(arr);
}

//5. Unshift array: đẩy 1 phần tử vào đầu mảng (ngược lại của push)
function unshiftArr(arr) {
    console.log(arr.unshift(11));
    console.log(arr);
}

//6. Array length append: phép gán
function arrLengthAppend(arr) { 
    console.log(arr.length);
    arr[arr.length] = 12;
    console.log(arr);
    console.log(arr.length);
}

//7. Array delete
function arrDelete(arr) {
    console.log(arr);
    delete arr[0];
    console.log(arr);
    console.log(arr[0]);
}

//8. Merging array (concat): gộp mảng
function arrayConCat(arr) {
    //arr = [empty, 1, 3, 5, 7, 9];
    //arr2 = [2, 3, 4];
    //concat = arr + arr2 => [empty, 1, 3, 5, 7, 9] + [2, 3, 4]
    //rest => clone lại mảng => arr_clone = [undefined, 1, 3, 5, 7, 9]; arr2_clone = [2, 3, 4]
    let arr2 = [2, 3, 4];
    // console.log(arr.concat(arr2));
    console.log([...arr, ...arr2]); //rest
}

//9. Splice Array: thêm phần tử vào mảng
function arrSplice(arr) {
    arr.splice(0, 1); //param1: index; param2: số phần tử bị lược bỏ
    // console.log(arr);
}

//10. Slice Array
function arrSlice(arr) {
    // console.log(arr);
    
    console.log(arr.slice(2));
}

//11. Array sort: sắp xếp các phần tử trong mảng
function arrSort(arr) {
    console.log(arr.sort());
}

//12. Reverse Array: Sắp xếp ngược lại so với mảng ban đầu
function arrReverse(arr) {
    console.log(arr.reverse());
}

//13. Sort numeric: sắp xếp mảng số
function sortNumeric(arr) {
    // console.log(arr.sort(function (a, b) { return b - a }));
    console.log(arr.sort((a, b) => b - a)); //Arrow Function
    console.log(Math.max(...arr));
}

//array[key(index): value]
var arr = [1, 5, 7, 9, 6, 2, 8, 4]; //stack
var arr1 = [[1, 2], [2, 3], [3, 4]];
var arr3 = ['Duc', 'Phung', 'Hoang', 'Cuong', 'Khang', 'Tuan', 'Ngoc', 'Oanh'];
var arr4 = [1, 5, 7, 9, 6, 2, 8, 4]; //stack

arrLength(arr);
arrToString(arr);
popAndPushArr(arr);
shiftArr(arr);
unshiftArr(arr);
arrLengthAppend(arr);
arrDelete(arr);
arrayConCat(arr);
arrSplice(arr3);
arrSlice(arr3);
arrSort(arr3);
arrReverse(arr3);
sortNumeric(arr4);
// var arr2 = {
//     'animal': 'dog',
//     'fruit': 'dragon fruit',
//     'human': null
// };
// console.log(arr2.animal);
// console.log(arr2.human);
// console.log(arr1.length);

var array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < array.length; i++) {
// }

const arrayMap = array.map((v, i) => {
    return v * 2
})

console.log('for' + array);
console.log(arrayMap);

//BTVN: áp dụng các function || các cú pháp viết gọn vào bài calculator









var isOpen = false;
var number1 = '';
var number2 = '';
var operator = '';
var ketQua = '';

function toggle() {
    // isOpen = ! isOpen;
    // if (isOpen) {
    //     document.getElementById('result').value = ('The calculator is turned on...');
    //     number1 = '';
    //     number2 = '';
    //     operator = '';
    //     document.getElementById('btn-toggle').innerHTML = "Off";
    // } else {
    //     document.getElementById('result').value = ('');
    //     document.getElementById('btn-toggle').innerHTML = "On";
    // }

    isOpen = !isOpen;
    const [result, btnToggle] = [document.getElementById('result'), document.getElementById('btn-toggle')];
    isOpen ? ([result.value, number1, number2, operator, btnToggle.innerHTML] =
    ['The calculator is turned on...', '', '', '', 'Off']) : 
    ([result.value, btnToggle.innerHTML] = ['', 'On']);
}

function changeInput(number) {
    // if (isOpen) {
    //     if (operator === '') {
    //         if (ketQua === '') {
    //             number1 += number;
    //             document.getElementById('result').value = number1;
    //         } else {
    //             number1 = '';
    //             ketQua = '';
    //             number1 += number;
    //             document.getElementById('result').value = number1;
    //         }
    //     } else {
    //         number2 += number;
    //         document.getElementById('result').value = number1 + operator + number2;
    //     }
    // }
    if (isOpen) {
        if (!operator) {
          number1 = ketQua ? '' : number1;
          [number1, document.getElementById('result').value] = [number1 + number, number1 + number];
        } else {
          [number2, document.getElementById('result').value] = [number2 + number, `${number1}${operator}${number2 + number}`];
        }
      }
}

function op(op) {
    if (isOpen && number1 !== '') {
        operator = op;
        document.getElementById('result').value = number1 + operator; 
    }
    if (isOpen && number2 !== '') {
        document.getElementById('result').value = 'Overload';
        number1 = '';
        number2 = '';
        operator = '';
    }
}

function result() {
    // if (operator == '+' && number2 !== '') {
    //     ketQua = parseFloat(number1) + parseFloat(number2);
    //     document.getElementById('result').value = ketQua;
    //     number1 = ketQua;
    //     number2 = '';
    //     operator = '';
    // }
    if (operator == '+' && number2) {
        ketQua = parseFloat(number1) + parseFloat(number2);
        document.getElementById('result').value = number1 = ketQua;
        [number2, operator] = ['', ''];
    }
    if (operator == '-' && number2) {
        ketQua = parseFloat(number1) - parseFloat(number2);
        document.getElementById('result').value = number1 = ketQua;
        [number2, operator] = ['', ''];
    }
    if (operator == '*' && number2) {
        ketQua = parseFloat(number1) * parseFloat(number2);
        document.getElementById('result').value = number1 = ketQua;
        [number2, operator] = ['', ''];
    }
    if (operator == '/' && number2) {
        ketQua = parseFloat(number1) / parseFloat(number2);
        if (parseFloat(number2) === 0) {
          [document.getElementById('result').value, number1, number2, operator] = ['Syntax Error', '', '', ''];
        } else {
          [document.getElementById('result').value, number1, number2, operator] = [ketQua, ketQua, '', ''];
        }
    }
    // if (operator == '-' && number2 !== '') {
    //     ketQua = parseFloat(number1) - parseFloat(number2);
    //     document.getElementById('result').value = ketQua;
    //     number1 = ketQua;
    //     number2 = '';
    //     operator = '';
    // }   
    // if (operator == '*' && number2 !== '') {
    //     ketQua = parseFloat(number1) * parseFloat(number2);
    //     document.getElementById('result').value = ketQua;
    //     number1 = ketQua;
    //     number2 = '';
    //     operator = '';
    // }   
    // if (operator == '/' && number2 !== '') {
    //     if ( parseFloat(number2) !== 0) {
    //         ketQua = parseFloat(number1) / parseFloat(number2);
    //         document.getElementById('result').value = ketQua;
    //         number1 = ketQua;
    //         number2 = '';
    //         operator = '';
    //     }
    //     else {
    //         document.getElementById('result').value = 'Syntax Error';
    //         number1 = '';
    //         number2 = '';
    //         operator = '';
    //     }
    // }   
    
}

function del() {
    // if (operator === '') {
    //     document.getElementById('result').value = number1.substring(0, number1.length - 1);
    //     number1 = document.getElementById('result').value;  
    // } else {
    //     if (number2 === '') {
    //         operator = '';
    //         document.getElementById('result').value = number1;
    //     }
    //     else {
    //         document.getElementById('result').value = number1 + operator + number2.substring(0, number2.length - 1);
    //         number2 = document.getElementById('result').value.slice(number1.length + 1);
    //     }
    // }
    if (operator === '') {
        // Xóa số cuối của number1 và cập nhật giá trị mới vào result và number1
        document.getElementById('result').value = number1 = number1.slice(0, -1);
      } else if (number2 === '') {
        // Nếu chưa nhập number2 thì reset operator và hiển thị number1 trên result
        operator = '';
        document.getElementById('result').value = number1;
      } else {
        // Xóa số cuối của number2 và hiển thị biểu thức trên result
        document.getElementById('result').value = number1 + operator + (number2 = number2.slice(0, -1));
      }
}