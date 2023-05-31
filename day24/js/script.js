function submitForm() {
    let textEmail = document.getElementById('text-email').value;
    let textPassword = document.getElementById('text-password').value;
    let textValueEmail = document.getElementsByClassName('text-email-error')[0];
    let textValuePassword = document.getElementsByClassName('text-password-error')[0];
    let error = false;
    let successEmail = false;
    let successPassword = false;

    
    if (textEmail.length === 0) {
        textValueEmail.innerHTML = '*Không được bỏ trống email!';
        error = true;
    };

    if (textPassword.length === 0) {
        textValuePassword.innerHTML = '*Không được bỏ trống mật khẩu!';
        error = true;
    };

    if (!textEmail.includes('@') && textEmail.length > 0) {
        textValueEmail.innerHTML = '*Email sai định dạng!';
        error = true;
    };

    if (textPassword.length < 6 && textPassword.length > 0) {
        textValuePassword.innerHTML = '*Mật khẩu phải lớn hơn 6 ký tự!';
        error = true;
    };

    if (textEmail.includes('@') && textEmail.length > 0) {
        textValueEmail.innerHTML = '';
        successEmail = true;
    };

    if ( textPassword.length > 6) {
        textValuePassword.innerHTML = '';
        successPassword = true;
    };

    if (successEmail && successPassword) {
        textValueEmail.innerHTML = '';
        textValuePassword.innerHTML = '';
        setTimeout(() => {
            alert('Đăng nhập thành công');
            window.location.assign('./index.html')
        }, 1000);
    };
}

function registerAccount() {
    // DOM
    let textName = document.getElementById('text-name').value;
    let textPhone = document.getElementById('text-phone').value;
    let textEmail = document.getElementById('text-email-regis').value;
    let textPassword = document.getElementById('text-password-regis').value;
    let textConfPassword = document.getElementById('text-conf-password').value;
    let textValueName = document.getElementsByClassName('text-name-error')[0];
    let textValueEmail = document.getElementsByClassName('text-email-error-regis')[0];
    let textValuePhone = document.getElementsByClassName('text-phone-error')[0];
    let textValuePassword = document.getElementsByClassName('text-password-error-regis')[0];
    let textValueConfPassword = document.getElementsByClassName('text-conf-password-error')[0];
    
    // Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    // result
    let successName = false;
    let successEmail = false;
    let successPhone = false;
    let successPass = false;
    let successCofPass = false;

    
    if (textName.length === 0) {
        textValueName.innerHTML = ' *Mục này bắt buộc!';
    };

    if (textName.length > 50) {
        textValueName.innerHTML = ' *Họ tên phải nhỏ hơn 50 ký tự ';
    };

    if (textName.length > 0 && textName.length < 50) {
        textValueName.innerHTML = '';
        successName = true;
    };

    if (textEmail.length === 0) {
        textValueEmail.innerHTML = ' *Không được bỏ trống email!';
    };
    
    if (!emailRegex.test(textEmail) && textEmail.length > 0) {
        textValueEmail.innerHTML = ' *Email không đúng định dạng';
    };

    if (emailRegex.test(textEmail)) {
        textValueEmail.innerHTML = '';
        successEmail = true;
    };

    if (textPhone.length === 0) {
        textValuePhone.innerHTML = ' *Mục này bắt buộc';
    };

    if (textPhone.length > 0 && !phoneRegex.test(textPhone)) {
        textValuePhone.innerHTML = ' *Số điện thoại không đúng';
    };

    if (phoneRegex.test(textPhone)) {
        textValuePhone.innerHTML = '';
        successPhone = true;
    };

    if (textPassword.length === 0) {
        textValuePassword.innerHTML = ' *Hãy nhập mật khẩu';
    };

    if (textPassword.length > 0 && textPassword.length < 6 || textPassword.length > 12 ) {
        textValuePassword.innerHTML = ' *Mật khẩu phải lớn hơn 6 và nhỏ hơn 12 ký tự';
    };

    if (textPassword.length >= 6 && textPassword.length <= 12) {
        textValuePassword.innerHTML = '';
        successPass = true;
    };

    if (textConfPassword !== textPassword) {
        textValueConfPassword.innerHTML = ' *Mật khẩu chưa chính xác';
    };

    if (textConfPassword === textPassword) {
        textValueConfPassword.innerHTML = '';
        successCofPass = true;
    };

    if (successName && successEmail && successPhone && successPass && successCofPass) {
        setTimeout(() => {
            alert('Đăng nhập ngay!');
            window.location.assign('./login.html');
        }, 1000);
    };
}