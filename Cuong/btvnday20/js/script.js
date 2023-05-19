function handleSubmit() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var kq = 0;
    if (c == '+') {
        kq = parseInt(a) + parseFloat(b);
    }else if (c == '-') {
        kq = parseInt(a) - parseInt(b);
    }else if (c == '*') {
        kq = parseFloat(a) * parseFloat(b);
    }else if (c == '/') {
        kq = parseInt(a) / parseInt(b);
    }else if (c == '^') {
        kq = parseInt(a) ** parseInt(b)
    }
    document.getElementById('kq').value = kq;
}
