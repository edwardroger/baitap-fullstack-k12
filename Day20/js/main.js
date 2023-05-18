function onChangeEmail() {
    let email = document.getElementById('email').value; //lấy giá trị của ô input có id là email
    console.log(email);

    return email;
}

// function onChangeUserName() {
//     let username = document.getElementById('username').value; //lấy giá trị của ô input có id là email
//     console.log(username);

//     return username;
// }

// function handleSubmit() {
//     let email = onChangeEmail();
//     let userName = onChangeUserName();
//      //email = parseInt();
//     let sum = parseFloat(email) ** parseFloat(userName)  ;
//     document.write('<h1>Email vừa nhập là: ' + email + ' </h1>');
//     document.write('<h1>UserName vừa nhập là: ' + userName + ' </h1>');
//     document.write(sum);
// }

//====================================================================



// function onChangeEmail() {
//     let email = document.getElementById('email').value; //Lấy giá trị của ô input có id là email
//     console.log(email);

//     return email;
// }

// function onChangeUserName() {
//     let userName = document.getElementById('username').value;
//     console.log(userName);

//     return userName;
// }



// function handleSubmit() {
//     let email = onChangeEmail();
//     let userName = onChangeUserName();
//     //str.length: đếm số ký tự của chuỗi
//     //str.split: phân tách chuỗi
//     //str.toUpperCase: viết hoa tất cả các ký tự
//     //str.toLowerCase: viết thường tất cả các ký tự
//     //str.trim: bỏ khoảng trắng ở đầu và cuối
//     //str.includes: check ký tự có tồn tại trong chuỗi hay không

//     if (email.length > 0) {
//         document.getElementById('email-value').innerHTML = '<h1>Email vừa nhập là: ' + email.trim() + '</h1>';
//     }
//     if (userName.length > 0) {
//         document.getElementById('username-value').innerHTML = '<h1>Tên vừa nhập là: ' + userName.trim() + '</h1>';
//     }
// }

// function handleRemove() {
//     document.getElementById('email-value').innerHTML = '';
//     document.getElementById('username-value').innerHTML = '';
//     document.getElementById('email').value = '';
// }


//=============================================================================

function onChangeA() {
    let a = document.getElementById('a').value; 
    console.log(a);

    return a;
}

function onChangeB() {
    let b = document.getElementById('b').value;
    console.log(b);

    return b;
}

function Cong() {
    let a = onChangeA();
    let b = onChangeB();

    let sum = parseInt(a) + parseInt(b);
    document.getElementById('subtraction-value').innerHTML = '';
    document.getElementById('multiplication-value').innerHTML = '';
    document.getElementById('division-value').innerHTML = '';
    document.getElementById('sum-value').innerHTML = '<h1>Tổng là: ' + sum + '</h1>';
}

function Tru() {
    let a = onChangeA();
    let b = onChangeB();

    let subtraction = parseInt(a) - parseInt(b);
    document.getElementById('sum-value').innerHTML = '';
    document.getElementById('subtraction-value').innerHTML = '<h1>Hiệu là: ' + subtraction + '</h1>';

}


function Nhan() {
    let a = onChangeA();
    let b = onChangeB();

    let multiplication = parseInt(a) * parseInt(b);
    document.getElementById('sum-value').innerHTML = '';
    document.getElementById('subtraction-value').innerHTML = '';
    document.getElementById('division-value').innerHTML = '';
    document.getElementById('multiplication-value').innerHTML = '<h1>Tích là: ' + multiplication + '</h1>';

}

function Chia() {
    let a = onChangeA();
    let b = onChangeB();

    let division = parseInt(a) / parseInt(b);
    document.getElementById('sum-value').innerHTML = '';
    document.getElementById('subtraction-value').innerHTML = '';
    document.getElementById('multiplication-value').innerHTML = '';
    document.getElementById('division-value').innerHTML = '<h1>Kết quả sau chia là: ' + division + '</h1>';

}

function binhPhuong() {
    let a = onChangeA();
    let b = onChangeB();

    let square = parseInt(a) ** parseInt(b);
    document.getElementById('sum-value').innerHTML = '';
    document.getElementById('subtraction-value').innerHTML = '';
    document.getElementById('multiplication-value').innerHTML = '';
    document.getElementById('division-value').innerHTML = '';
    document.getElementById('square-value').innerHTML = '<h1>Kết quả sau chia là: ' + square + '</h1>';

}
