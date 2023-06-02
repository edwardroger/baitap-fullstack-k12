function onClickRegister () {
    let error = 5;
    let errorEmty = '<span> *Không được để trống </span>';
    let errorFill = '<span> *Tên không vượt quá 50 ký tự </span>';
    let errorMin = '<span> *Mật khẩu tối thiểu 6 ký tự </span>';
    let errorComfi = '<span>*Mật khẩu không trùng khớp </span>';
    let errorEmail = '<span>*Sai định dạng email</span>';
    let errorPhone = '<span>*Sai định dạng số điện thoại</span>';
    let textName = document.getElementById('text-name').value;
    let textEmail = document.getElementById('text-email').value;
    let textPhone = document.getElementById('number-phone').value;
    let textPass = document.getElementById('text-password').value;
    let textPasscomfi = document.getElementById('repeat-password').value;
    if (textName.length === 0) document.getElementsByClassName('error-empty')[0].innerHTML = errorEmty;
    else if(textName.length > 50)  document.getElementsByClassName('error-empty')[0].innerHTML = errorFill;
    else {
        document.getElementsByClassName('error-empty')[0].innerHTML = '';
        error --;
    }
    if ( textEmail.length === 0)  document.getElementsByClassName("error-empty")[1].innerHTML = errorEmty;
    else if (!ValidateEmail(textEmail)) document.getElementsByClassName("error-empty")[1].innerHTML = errorEmail;
    else {
        document.getElementsByClassName("error-empty")[1].innerHTML = "";
        error --;
    }
    if (textPhone.length === 0)  document.getElementsByClassName("error-empty")[2].innerHTML = errorEmty;
    else if (!phonenumber(textPhone))  document.getElementsByClassName("error-empty")[2].innerHTML = errorPhone;
    else {
        document.getElementsByClassName("error-empty")[2].innerHTML = "";
        error --;
    }
    if (textPass.length === 0)  document.getElementsByClassName("error-empty")[3].innerHTML = errorEmty;
    else if (textPass.length < 6) document.getElementsByClassName("error-empty")[3].innerHTML = errorMin;
    else {
        document.getElementsByClassName("error-empty")[3].innerHTML = "";
        error --;
    }
    if (textPasscomfi.length === 0)  document.getElementsByClassName("error-empty")[4].innerHTML = errorEmty;
    else if (textPasscomfi !== textPass) document.getElementsByClassName('error-empty')[4].innerHTML = errorComfi;
    else {
        document.getElementsByClassName("error-empty")[4].innerHTML = "";
        error --;
    }
    const ss = setTimeout (
        function () {
            if (error === 0) {
                alert('Đăng nhập thành công!');
                window.location.assign('index.html');
            }
        }
        , 2000);
}
function ValidateEmail  (mail) 
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat))
    {
        return (true)
    }
    return (false)
}
function phonenumber (phone)
{
    var phoneno = /^\d{10}$/;
    if((phone.match(phoneno)))
        {
            return true;
        }
        else
        {
            return false;
        }
}

function formatCash (str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}
function formatCashs(str){
    for(let i =  str.length;i>=0 ;i = i -3){
        str = str.replace('.','');
    }
    return str;
}
function Sum () {
    let sum = 0;
    for(let i = 0;i<=2;i++){
        let b = document.getElementsByClassName('price-prs')[i].textContent;
        let a =parseInt(formatCashs(b));
        sum  = sum + a;
    }
    return sum;
}
function enChange (index) {
    let total = document.getElementsByClassName('total')[index].value;
    let pri = document.getElementsByClassName('price')[index].textContent;
    let a = formatCashs(pri);
    let result = document.getElementsByClassName('price-prs')[index].value = total * a;
    document.getElementsByClassName('price-prs')[index].value = result;
    document.getElementsByClassName('price-prs')[index].innerHTML = formatCash(result.toString()) ;
    let sum = formatCash(Sum().toString());
    document.getElementById('tien').innerHTML = sum;
}