

// Câu 1: In ra các số từ 1-1000 theo thứ tự tăng dần

function NAscending() {
    for (let i = 1; i <= 1000; i++) {
        console.log(i);
    }
}

// Câu 2: In ra các số từ 1-1000 theo thứ tự giảm dần

function NReduce() {
    for (let i = 1000; i > 0; i--) {
        console.log(i);
    }
}

// Câu 3: Nhập vào 1 số bất kỳ > 0. In ra bảng cửu chương của số đó

function Multiplication () {
    let x = parseInt(prompt("Nhập bảng cửu chương bạn muốn xem."));
    if (x > 0 && x < 10) {
        console.log("Bảng nhân " + x);
        for (let i = 1; i <= 10; i++) {
            console.log(x + ' x ' + i + ' = ' + (x * i));
        }
        console.log("Bảng chia " + x);
        for (let i = 1; i <= 10; i++) {
            console.log((x * i) + ' : ' + x + ' = ' + i);
        }
    }else console.log("không có bảng cửu chương cho số bạn vừa nhập!");
}

// NAscending();

// NReduce();

// Multiplication();