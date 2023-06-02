function submitForm() {
    let txtEmail = document.getElementById('text-email').value;
    let txtPass = document.getElementById('text-password').value;
    let txtEmailError = document.getElementsByClassName('text-email-error')[0];
    let txtPassError = document.getElementsByClassName('text-pass-error')[0];
    let error = false;

    if (txtEmail.length === 0) {
        txtEmailError.innerHTML = 'ko đc rỗng';
        error = true;
    }
    else if (txtPass.length === 0) {
        txtPassError.innerHTML = 'pass ko đc rỗng';
        error = true;
    }

    if (!txtEmail.includes('@') && txtEmail.length > 0) {
        txtEmailError.innerHTML = 'sai định dạng';
        error = true;
    }

    if (!txtPass.length > 0 && txtPass.length < 6) {
        txtPassError.innerHTML = 'pass phải lớn hơn hoặc = 6';
        error = true;
    }

    if (error === false) {
        txtEmailError.innerHTML = '';
        txtPassError.innerHTML = '';
        // setTimeout(alertSuccess, 2000);
        setTimeout(function () {
            alert('đăng nhập thành công')
            window.location.assign('index.html')
        }, 2000);
    }
}

function alertSuccess() {
    alert('Đăng nhập thành công')
}

function submitRegisterForm() {
    let txtName = document.getElementById('text-name').value;
    let txtEmail = document.getElementById('text-email').value;
    let txtPhone = document.getElementById('text-phone').value;
    let txtPass = document.getElementById('text-password').value;
    let txtRePass = document.getElementById('text-repassword').value;
    let txtNameError = document.getElementsByClassName('text-name-error')[0];
    let txtEmailError = document.getElementsByClassName('text-email-error')[0];
    let txtPassError = document.getElementsByClassName('text-pass-error')[0];
    let txtPhoneError = document.getElementsByClassName('text-phone-error')[0];
    let txtRePassError = document.getElementsByClassName('text-repass-error')[0];
    let error = false;


    let regex = /^(?:\+84|0)(?:\d){9,10}$/; // Biểu thức chính quy để kiểm tra số điện thoại
    if (txtName.length === 0) {
        txtNameError.innerHTML = 'ko đc rỗng';
        error = true;
    }

    if (txtEmail.length === 0) {
        txtEmailError.innerHTML = 'ko đc rỗng';
        error = true;
    }
    if (txtName.length === 0) {
        txtEmailError.innerHTML = 'ko đc rỗng';
        error = true;
    }
    if (txtPass.length === 0) {
        txtPassError.innerHTML = 'pass ko đc rỗng';
        error = true;
    }

    if (txtPhone.length === 0) {
        txtPhoneError.innerHTML = 'Số điện thoại không được rỗng';
        error = true;
    } else if (txtPhone.length < 10 && txtPhone > 11) {
        txtPhoneError.innerHTML = 'Số điện thoại phải 10 với 11 số';
        error = true;
    } else if (regex.test(txtPhone)) {
        txtPhoneError.innerHTML = '<span style="color: blue;">Số điện thoại hợp lệ</span>';
    }
    else {
        txtPhoneError.innerHTML = 'Số đt không hợp lệ';
        error = true;
    }
    if (txtPass.length > 0 && txtPass.length < 6) {
        txtPassError.innerHTML = 'pass phải lớn hơn hoặc = 6';
        error = true;
    }
    if (txtRePass !== txtPass) {
        txtRePassError.innerHTML = 'Mật khẩu không khớp';
        error = true;
    } else {
        txtRePassError.innerHTML = '';
    }
    //     if(


    //   if (regex.txtPhone(value)) {
    //     
    //   } else {
    //     alert("Số điện thoại không hợp lệ");
    //   }

    //   // Loại bỏ các ký tự không phải số


    if (!txtEmail.includes('@') && txtEmail.length > 0) {
        txtEmailError.innerHTML = 'sai định dạng';
        error = true;
    }



    if (error === false) {
        txtEmailError.innerHTML = '';
        txtNameError.innerHTML = '';
        txtPassError.innerHTML = '';
        // setTimeout(alertSuccess, 2000);
        setTimeout(function () {
            alert('đăng nhập thành công')
            window.location.assign('login.html')
        }, 2000);
    }
}