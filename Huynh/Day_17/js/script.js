var a, b, c;


// 1. Tính tổng các số lẻ từ 0 -> a

function SumOfNa() {
    let sum = 0;
    a = parseInt(prompt("Nhập vào số a: "))
    if (a != 0) {
        for (let i = 0; i <= a; i++) {
            if ((i % 2) === 1) {
                sum += i;
            }
        }
        console.log("Tổng các số lẻ từ 0 đến " + a + " là: " + sum);
    } else {
        console.log("Số a bạn nhập không hợp lệ!");
    }
}

// 2. Tính trung bình cộng các số chia hết cho 5 từ 0 -> a

function AverageOfNa() {
    let sum = 0, count = 0;
    a = parseInt(prompt("Nhập vào số a: "))
    if (a != 0) {
        if (a >= 5 || a <= -5) {
            for (let i = 0; i <= a; i++) {
                if ((i % 5) === 0) {
                    sum += i;
                    count++;
                }
            }
            console.log(`Trung bình cộng các số chia hết cho 5 từ 0 đến ${a} là: ${(sum / count)}`);
        } else {
            console.log("Không có số nào chia hết cho 5 từ 0 đến " + a);
        }
    } else {
        console.log("Số a bạn nhập vào không hợp lệ!");
    }
}

// 3. Tính giai thừa của số a

function FactorialOfNa() {
    let factoria = 1;
    a = parseInt(prompt("Nhập vào số a: "))
    if (a != 0) {
        for (let i = 1; i <= a; i++) {
            factoria *= i;
        }
        console.log("Giai thừa của " + a + " là: " + factoria);
    } else {
        console.log(`Số ${a} bạn nhập không hợp lệ`);
    }
}

// 4. Tính giá trị biểu thức 1^2 + 2^2 + ... + a^2

function SumOfSquare() {
    let square = 1;
    a = parseInt(prompt("Nhập vào số a: "))
    if (a != 0) {
        for (let i = 1; i <= a; i++) {
            square += i ** 2;        
        }
        console.log("Tổng từ 1 đến " + a + " bình phương là: " + square);
    } else {
        console.log(`Số ${a} bạn nhập không hợp lệ!`);
    }
}

// 5. Đếm số các số lẻ từ 0 -> a

function CountOfna() {
    let count = 0;
    a = parseInt(prompt("Nhập vào số a: "))
    if (a != 0) {
        for (let i = 0; i <= a; i++) {
            if ((i % 2) === 1) {
                count ++;
            }
        }
        console.log("Số các số lẻ từ 0 đến " + a + " là: " + count);
    } else {
        console.log(`Số ${a} bạn nhập vào không hợp lệ!`);
    }
}

// 6. Tính tổng các số từ a -> b

function SumOfaTob() {
    let sum = 0;
    a = parseInt(prompt("Nhập vào số a: "))
    b = parseInt(prompt("Nhập vào số b: "))
    if (a != 0 && b != 0) {
        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
            console.log(`Tổng các số từ ${a} đến ${b} là: ${sum}`);
        } else if (a > b) {
            for (let i = a; i >= b; i--) { 
                sum += i;
            }
            console.log(`Tổng các số từ ${a} đến ${b} là: ${sum}`);
        }
    } else {
        console.log(`Số ${a} bạn nhập vào không hợp lệ!`);
    }
}

// 7. Viết chương trình nhập vào 3 số a, b, c. Giải phương trình ax^2 + bx + c = 0

function Findx2() {
    let delta;
    a = parseInt(prompt("Nhập vào số a: "))
    b = parseInt(prompt("Nhập vào số b: "))
    c = parseInt(prompt("Nhập vào số c: "))
    if (a != 0 && b != 0) {
        delta = (b ** 2) - 4 * a * c;
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta === 0) {
            console.log("Phương trình có nghiệm kép là: " + (- b / (2 * a)));
        } else if (delta > 0) {
            console.log("Phương trình có 2 nghiệm phân biệt là:");
            console.log("x1 = " + ((- b + math.sqrt(delta)) / (2 * a)));
            console.log("x2 = " + ((- b - math.sqrt(delta)) / (2 * a)));
        }
    }else if (a === 0 && b != 0) {
        console.log("Nghiệm của phương trình là: " + (-c / b));
        
    } else {
        console.log("Phương trình vô nghiệm!");
    }
}

// 8. Viết chương trình nhập vào 3 số a, b, c. Giải phương trình ax^4 + bx^2 + c = 0
function Findx4() {
    let delta;
    a = parseInt(prompt("Nhập vào số a: "))
    b = parseInt(prompt("Nhập vào số b: "))
    c = parseInt(prompt("Nhập vào số c: "))
    if (a != 0 && b != 0) {
        delta = (b ** 2) - 4 * a * c;
        if (delta < 0) {
            console.log("Phương trình vô nghiệm!");
        } else if (delta === 0) {
            if ((- b / (2 * a)) > 0) {
                console.log("Phương trình có các nghiệm là: ");
                console.log(`x1 = ${math.sqrt(-b / (2 * a))}`);
                console.log(`x2 = ${- (math.sqrt(-b / (2 * a)))}`);
            } else {
                console.log("Phương trình vô nghiệm!");
            }
        } else if (delta > 0) {
            //Nghiệm x1^2 và x2^2
            let x12 = ((- b + math.sqrt(delta)) / (2 * a));
            let x22 = ((- b - math.sqrt(delta)) / (2 * a));

            if (x12 > 0 && x22 > 0) {
                console.log("Phương trình có các nghiệm là: ");
                console.log(`x1 = ${(math.sqrt(x12))}`);
                console.log(`x2 = ${- (math.sqrt(x12))}`);
                console.log(`x3 = ${(math.sqrt(x22))}`);
                console.log(`x4 = ${- (math.sqrt(x22))}`);
            } else if (x12 > 0 && x22 < 0) {
                console.log("Phương trình có các nghiệm là: ");
                console.log(`x1 = ${(math.sqrt(x12))}`);
                console.log(`x2 = ${- (math.sqrt(x12))}`);
            } else if (x12 < 0 && x22 > 0) {
                console.log("Phương trình có các nghiệm là: ");
                console.log(`x1 = ${(math.sqrt(x22))}`);
                console.log(`x2 = ${- (math.sqrt(x22))}`);
            } else {
                console.log("Phương trình vô nghiệm!");
            }
            
        }
    } else if (a = 0 && b != 0) {
        if (c === 0) {
            console.log(`Phương trình có nghiệm là: x = ${0}`);
        } else if ((-c / b) > 0) {
            console.log("Phương trình có nghiệm là: ");
            console.log(`x1 = ${math.sqrt(-c / b)}`);
            console.log(`x2 = ${- math.sqrt(-c / b)}`);
        } else {
            console.log("Phương trình vô nghiệm!");
        }
    } else {
        console.log("Phương trình vô nghiệm!");
    }
}

// 9. Nhập vào 1 mảng gôm 5 phần tử. In ra các số chẵn

function FindEvenNumber() {
    let array = [],array2 = [], count = 0;
    // Nhập mảng
    for (let i = 0; i < 5; i++) {
        array.push(parseInt(prompt("Nhập vào phần tử thứ " + (i + 1))))
    }
    //In mảng
    console.log(array);

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 === 0) {
            array2[count] = array[j];
            count++;
        }
    }
    if (count === 0) {
        console.log("Không có số chẵn nào trong mảng đã nhập.");
    } else {
        console.log("Các số chẵn trong mảng là: " + array2); 
    }
}

// 10. Nhập vào 1 mảng gồm 5 phần tử. Tính trung bình cộng các số trong mảng.

function FindAverageOfArray() {
    let array = [], sum = 0;
    // Nhập mảng
    for (let i = 0; i < 5; i++) {
        array.push(parseInt(prompt("Nhập vào phần tử thứ " + (i + 1))))
    }
    //In mảng
    console.log(array);

    for (let j = 0; j < array.length; j++) {
        sum += array[j];
    }
    console.log(`Trung bình cộng của các số trong mảng là: ${(sum / array.length)}`);
}

// SumOfNa();

// AverageOfNa();

// FactorialOfNa();

// SumOfSquare();

// CountOfna();

// SumOfaTob();

// Findx2();

// Findx4();

// FindEvenNumber();

// FindAverageOfArray();