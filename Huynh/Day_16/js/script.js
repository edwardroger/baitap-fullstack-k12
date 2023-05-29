// VD 1

// var a = parseInt(prompt(a));


// for (let i = 0; i < a; i++) {
//     console.log(i);
// }

// VD 2

var a = parseInt(prompt(a));

for (let i = 0; i < a; i++) {
    if (i > 0 && i <= a) {
        if ((i % 2) === 0) {
            console.log(i);
        }
    }    
}