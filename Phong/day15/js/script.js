let a = parseInt(prompt('Nhap vao a'));
let b = parseInt(prompt('Nhap vao b'));
let c = parseInt(prompt('Nhap vao c'));

if (a > 0 && b > 0 && c > 0) {
    if ((a + b > c) && (b + c > a) && (a + c > b)) {
        if (a === b || b === c || c === a) {
            if (a === b && b === c) alert('Day la tam giac deu');
            else if ((a**2 + b**2 === c**2) || (b**2 + c**2 === a**2) || (a**2 + c**2 === b**2)) alert('Day la tam giac vuong can');
            else alert('Day la tam giac can');
        } else if ((a**2 + b**2 === c**2) || (b**2 + c**2 === a**2) || (a**2 + c**2 === b**2)) alert('Day la tam giac vuong');
        else alert('3 canh nhap vao la 3 canh tam giac');
    }
} else {
    alert('3 so nhap vao khong phai 3 canh tam giac');
}