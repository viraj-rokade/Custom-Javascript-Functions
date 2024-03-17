# Equation Generator

This JavaScript program generates random mathematical equations and evaluates them until the result matches a specified input number within the range of 1 to 90. It utilizes basic arithmetic operations such as addition, subtraction, multiplication, and division to create the equations.

## Usage

To use the `generateEquation` function, follow these steps:

1. **Input Number**: Provide a number between 1 and 90 as an argument to the `generateEquation` function.
2. **Output**: The function will return a string representing a randomly generated equation that evaluates to the input number.

### Example

```javascript
const inputNumber = 42;
const equation = generateEquation(inputNumber);
console.log(`Equation for ${inputNumber}: ${equation}`);
```
This will output the equation that evaluates to the specified input number:
```javascript
Equation for 42: 60 - 18
```

To generate equations for numbers 1 to 90 in bulk, you can use the generateEquationsObject function. It returns an object where each key represents a number from 1 to 90, and the corresponding value is the equation that evaluates to that number.

### Example

```javascript
const dataResult = generateEquationsObject();
console.log("Data: ", dataResult);
console.log("Equation for 22: ", dataResult['22']);
console.log("Equation for 67: ", dataResult['67']);
```

This will output an object containing equations for numbers 1 to 90, and specific equations for numbers 22 and 67:

```javascript
Data:  { '1': '38 + 64', '2': '72 - 70', ... }
Equation for 22:  22 + 0
Equation for 67:  34 * 2
```

### Note
Ensure that the input number provided to the generateEquation function is within the range of 1 to 90. If the input number is outside this range, the function will return an error message.
