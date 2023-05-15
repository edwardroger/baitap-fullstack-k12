var a = [5, 6 ,7 ,4 ,5]

let max = Math.max(...a);
console.log(max);

let min = Math.min(...a);
console.log(min);

let BeDenLon = a.sort(function(a, b) {
    return a - b;
});
  
console.log(BeDenLon);

let LonDenBe = a.sort(function(a, b) {
    return b - a;
});
  
console.log(LonDenBe);

let trungbinhcong = (max + min) / 2;

console.log(trungbinhcong)


