function checkTriangle(a, b, c) {
    if ((a + b > c) && (b + c > a) && (c + a > b)) {
      if (a === b && b === c) {
        return "Tam giác đều";
      } else if ((a === b) || (b === c) || (c === a)) {
        return "Tam giác cân";
      } else if ((a*a === b*b + c*c) || (b*b === a*a + c*c) || (c*c === a*a + b*b)) {
        return "Tam giác vuông";
      } else {
        return "Tam giác thường";
      }
    } else {
      return "Không phải là tam giác";
    }
  }
  
  console.log(checkTriangle(3, 4, 5)); // vuông
  console.log(checkTriangle(7, 7, 7)); // đều
  console.log(checkTriangle(7, 7, 8)); // cân
  console.log(checkTriangle(2, 3, 6)); // Không phải tam giác
  
  