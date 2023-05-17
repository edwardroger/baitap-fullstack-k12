
function showHTML(id, text, x) {
    document.getElementById(id).style.width = `50%`;
    document.getElementById(id).style.height = `100px`;
    document.getElementById(id).style.padding = `10px`
    document.getElementById(id).innerHTML = text + x;
}

// Nhập vào 1 mảng gồm 5 phần tử.

function addValueArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(parseInt(prompt(`Nhập giá trị thứ ${(i + 1)}: `)))
    }
    return array;
}

// 1. Tìm ra giá trị lớn nhất

function findMaximum(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log(`Giá trị lớn nhất của mảng là: ${max}`);
    showHTML("bai1" , "Giá trị lớn nhất của mảng là: ", max)
}

// 2. Tìm ra giá trị nhở nhất

function findMinimum(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log(`Giá trị nhỏ nhất của mảng là: ${min}`);
    showHTML("bai2" , "Giá trị nhỏ nhất của mảng là: ", min)
}
// 3. Sắp xếp các giá trị theo thứ tự tăng dần

// cách 1
function valueIncreased(array) {
    let x;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            x = array[i];
            array[i] = array[i + 1];
            array[i + 1] = x;
            valueIncreased(array);
        }
        if (i === (array.length - 1)) {
            showHTML("bai3" , "Mảng có các giá trị theo thứ tự tăng dần: ", array)
            return array;
        }
    }
}

// cách 2
function valueIncreased2(array) {
    let x;
    while (true) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                x = array[i];
                array[i] = array[i + 1];
                array[i + 1] = x;
                break;
            }
            if (i === (array.length - 1)) {
                return array;
            }
        }
    }
}

// cách 3
function valueIncreased3(array) {
    let array2 = [];
    array2[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j] > array[i]) {
                for (let k = array2.length; k > j; k--) {
                    array2[k] = array2[k - 1];
                }
                array2[j] = array[i];
                break;
            }
            if (j = array2.length) {
                array2.push(array[i])
                break;
            }
        }
    }
    return array2;
}

// 4. sắp xếp các giá trị theo thứ tự giảm dần

function valueDecrease(array) {
    let x;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            x = array[i];
            array[i] = array[i + 1];
            array[i + 1] = x;
            valueDecrease(array);
        }
        if (i === (array.length - 1)) {
            showHTML("bai4" , "Mảng có các giá trị theo thứ tự giảm dần: ", array)
            return array;
        }
    }
}

// 5. Tính trung bình cộng của giá trị min và giá trị max

function averageMinMax() {
    //tìm min
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    //Tìm max
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    showHTML("bai5" , "Trung bình cộng của min và max trong mảng là: ", ((min + max) / 2))
    return ((min + max) / 2);
}

//-------------------------------
var array = [];

array = addValueArray();

console.log(array);

// findMaximum(array);

// findMinimum(array);

// console.log("Mảng có các giá trị theo thứ tự tăng dần: " + valueIncreased3(array));

// console.log("Mảng có các giá trị theo thứ tự giảm dần: " + valueDecrease(array));

// console.log("Trung bình cộng của min và max trong mảng là: " + averageMinMax(array));

