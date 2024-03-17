function generateEquation(inputNumber) {
  if (inputNumber < 1 || inputNumber > 90) {
    return "Input number must be between 1 and 90.";
  }

  let equation;
  let result;

  do {
    // Generate two random numbers between 0 and 99
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    // Choose a random math symbol (+, -, *, /)
    const symbols = ["+", "-", "*", "/"];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    // Build the equation string
    equation = `${num1} ${symbol} ${num2}`;

    // Evaluate the equation to get the result
    result = eval(equation);
  } while (result !== inputNumber);

  return equation;
}

// Example usage:
const inputNumber = 42;
const equation = generateEquation(inputNumber);
console.log(`Equation for ${inputNumber}: ${equation}`);

//Generate Equations for 1 to 90 Numbers
function generateEquationsObject() {
  const result = {};
  Array.from({ length: 90 }).forEach((_, i) => {
    result[i+1] = generateEquation(i+1);
  });
  return result;
}

const dataResult = generateEquationsObject();
console.log("Data: ", dataResult, dataResult['22'], dataResult['67']);
