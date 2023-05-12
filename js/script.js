
// let n = parseInt(prompt("nhap vao"));
// for ( let a=0; a < n; a++ ) { 
//     console.log( a );
// }

// for ( let i=0; i<n; i++ ) {
//     if ( i %2 == 0 ) {
//         {
//             console.log( i);
//         }
//     }
// }


// for ( let i=1000; i>=0; i-- ) {
//     console.log( i );
// }


// for ( let i=0; i<11; i++ ) {
//     console.log(i+" x "+n+" = "+i*n);
// }


let a = parseInt(prompt("nhap vao a"));
let b = parseInt(prompt("nhap vao b"));
let c = parseInt(prompt("nhap vao c"));
let s1 = 0;

for ( let i = 0; i<=a; i++ ) {
    if ( i %2 !== 0 ) {
        s1 += i;
    }
}
console.log( 'tong cac so le tu o den ' + a + ' la ' + s1)

let s2 = 0;
for ( let i = 0; i<=a; i++ ) {
    if ( i %5 === 0 ) {
        s2 += i;
    }
}
console.log('trung binh cong cac so chia het ho 5 tu 0 den ' + a + ' la ' + s2)

let s3 = 1;
for ( let i = 1; i<=a; i++ ) {
    s3 = s3*i;
}
console.log('giai thua cua ' + a + ' la ' + s3)

let s4 = 0;
for ( let i = 0; i<=a; i++ ) {
    s4 += (i+1)**2;
}
console.log('tong binh phuong cua ' + a + ' la ' + s4)

let s5 = 0;
for ( let i = 1; i<=a; i++ ) {
    if (i % 2 !== 0) {
        s5 = s5 + i;
    }
}
 console.log('so cac so le tu 0 den ' + a + ' la ' + s5)

let s6 = a;
if ( a - b >= 0 ) {
    for ( let i = b; i <= a; i++ ) {
        s6 = s6 + i;
    }
    console.log('tong tu ' + b + ' toi ' + a + ' la ' + s6)}
    else {
        for ( let i = a; i <= b; i++ ) {
            s6 = s6 + i;
        }
    console.log('tong tu ' + a + ' toi ' + b + ' la ' + s6)
    }


let s9 = []
let s10 = 0
for ( let i = 0; i<5; i++) {
    s9[i] = parseInt(prompt('nhap vao phan tu thu ' + i ))
}
console.log(' cac so chan trong mang la ');
for ( let i = 0; i<5; i++) {
    if ( s9[i] % 2 === 0) {
        console.log(s9[i]);
    }
}
console.log('trung binh cong cua mang la ')
for ( let i = 0; i<5; i++){
    s10 += s9[i];
}
console.log(s10/5)


console.log('phuong trinh ' + a + 'x^2 + ' + b + 'x + ' + c )
let delta = b*b - 4*a*c;
let x1 = 0;
let x2 = 0;
if ( a != 0) {
    if ( delta < 0 ) {
        console.log(' la mot phuong trinh vo nghiem')
    }else
    if ( delta = 0) {
        console.log('la mot phuong trinh co 1 nghiem duy nhat ' + (-b)/(2*a))
    }else
    if ( delta > 0) {
        console.log('la mot phuong trinh co 2 nghiem phan biet ' + (-b+sqrt(delta))/(2*a) + ' va ' + (-b-sqrt(delta))/(2*a))
    }
}
else (console.log('phuong trinh vo nghiem'));