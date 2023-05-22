function calculate() {
    // Prompt for numbers
    const numberA = parseFloat(prompt('Enter number A:'));
    const numberB = parseFloat(prompt('Enter number B:'));
    const operator = prompt('Enter operator (+, -, *, /):');
    let result;

    switch (operator) {
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