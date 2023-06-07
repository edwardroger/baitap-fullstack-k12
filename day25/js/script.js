// function handleOnclick(params) {
//     var element = document.getElementsByClassName('js-style')[0];
//     element.style.color = "red";
//     element.style.width = "300px";
//     element.style.height = "300px";
//     element.style.backgroundColor = "green";
// }

// Các kiểu querry tới phần tử trong js
//  - getElementById: gọi tới ID
//  - get



function handleLogin() {
    let elementLogin = document.querySelector('.login');
    let elementRegister = document.querySelector('.register');
    elementLogin.style.display = "none";
    elementRegister.style.display = "block";
}

function handleRegis() {
    let elementLogin = document.querySelector('.login');
    let elementRegister = document.querySelector('.register');
    elementLogin.style.display = "block";
    elementRegister.style.display = "none";
}
