function performArithmeticOperation(operation, num1, num2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result;
  
        switch (operation) {
          case 'add':
            result = num1 + num2;
            break;
          case 'subtract':
            result = num1 - num2;
            break;
          case 'multiply':
            result = num1 * num2;
            break;
          case 'divide':
            result = num1 / num2;
            break;
          default:
            reject('Invalid operation');
        }
  
        resolve(result);
      }, 1000);
    });
  }
  
  async function performOperations() {
    const additionResult = await performArithmeticOperation('add', 5, 3);
    document.write('Addition Result:', additionResult);
  
    const subtractionResult = await performArithmeticOperation('subtract', 10, 4);
    document.write('Subtraction Result:', subtractionResult);
  
    const multiplicationResult = await performArithmeticOperation('multiply', 6, 2);
    document.write('Multiplication Result:', multiplicationResult);
  
    const divisionResult = await performArithmeticOperation('divide', 20, 5);
    document.write('Division Result:', divisionResult);
  }
  
  performOperations();