function calculate(ope) {
    // Prompt for numbers
    const numberA = parseFloat(prompt('Enter number A:'));
    const numberB = parseFloat(prompt('Enter number B:'));
    let result;

    switch (ope) {
      case '+':
        result = numberA + numberB;
        break;
      case '-':
        result = numberA - numberB;
        break;
      case '*':
        result = numberA * numberB;
        break;
      case '/':
        result = numberA / numberB;
        break;
      default:
        result = 'Invalid operator';
    }


    alert('Result: ' + result);
  }