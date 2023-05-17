function nhap(aa) {
    for (let i = 0; i < 5; i++) {
        aa.push(parseFloat(prompt('nhap vao phan tu thu ' + i)));
    }
}
function nhap2(aa) {
    for (let i = 0; i < 5; i++) {
        aa[i] = parseFloat(prompt('nhap vao phan tu thu ' + i));
    }
}
function sort(aa) {
    let b;
    for (let i = 0; i < 5; i++) {
        if ( aa[i] > aa[i+1])
        {
            b = aa[i];
            aa[i] = aa[i+1];
            aa[i+1] = b;
        }
    }
}
let a = [];
nhap2(a);
sort(a);
for (let i = 0; i < 5; i++) {
    console.log (a[i]);
}


