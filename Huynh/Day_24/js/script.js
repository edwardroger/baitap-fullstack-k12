var error = false;
var loginsuccess = false;

function submitForm(typeForm) {
    let textEmail = document.getElementById('text-email').value;
    let textPassword = document.getElementById('text-password').value;
    let txtEmailError = document.getElementsByClassName('text-email-error')[0];
    let txtPasswordError = document.getElementsByClassName('text-password-error')[0];
    if (typeForm === 'register') {
        let textName = document.getElementById('text-name').value;
        let textNumber = document.getElementById('text-number').value;
        let textConfirmPassword = document.getElementById('text-confirmPassword').value;
        let txtNameError = document.getElementsByClassName('text-name-error')[0];
        let txtNumberError = document.getElementsByClassName('text-number-error')[0];
        let txtConfirmPassword = document.getElementsByClassName('text-confirmPassword-error')[0];
        if (textName.length === 0) {
            txtNameError.innerHTML = '*Không được bỏ trống name';
            error = true;
        }
        if (textNumber === 0) {
            txtNumberError.innerHTML = '*Không được bỏ trống number';
            error = true;
        }
        if (textConfirmPassword.length === 0) {
            txtPasswordError.innerHTML = '*Không được bỏ trống confirm password';
            error = true;
        }
        if (textName.length <= 3 && textName.length >= 50) {
            txtNameError.innerHTML = '*Vượt quá số lượng ký tự cho phép';
            error = true;
        }
        if (textNumber.length > 15) {
            txtNumberError.innerHTML = '*Không phải số điện thoại';
            error = true;
        }
        if (textConfirmPassword !== textPassword) {
            txtConfirmPassword.innerHTML = '*Nhập sai password';
            error = true;
        }    
    }

    if (textEmail.length === 0) {
        txtEmailError.innerHTML = '*Không được bỏ trống email'
        error = true;
    }
    if (textPassword.length === 0) {
        txtPasswordError.innerHTML = '*Không được bỏ trống password'
        error = true;
    }
    if (! textEmail.includes('@') && textEmail.length > 0) {
        txtEmailError.innerHTML = '*Email sai định dạng';
        error = true;
    }
    if (textPassword.length > 0 && textPassword.length < 6) {
        txtPasswordError.innerHTML = '*Password phải lớn hơn 6 ký tự';
        error = true;
    }

    if (error === false) {
        txtEmailError.innerHTML = '';
        txtPasswordError.innerHTML = '';
        setTimeout(function() {
            if (typeForm === 'login') {
                alert('Đăng nhập thành công');
            } else {
                alert('Đăng ký thành công');
            }
            window.location.assign('index.html');
        }, 1000);
    }
}

function checkNumber() {
    let textNumber = document.getElementById('text-number').value;
    let txtNumberError = document.getElementsByClassName('text-number-error')[0];

    if (/\D/.test(textNumber)) {
        txtNumberError.innerHTML = '*Vui lòng nhập số';
        document.getElementById('text-number').value = '';
        error = true;
    }
}


function showLogin() {
    console.log(loginsuccess);
    let login = document.getElementById('login');
    let register = document.getElementById('register');

    if (loginsuccess === true) {
        login.hidden = true;
        register.hidden = true;
    }
}