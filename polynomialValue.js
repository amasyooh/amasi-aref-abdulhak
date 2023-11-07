// Function to calculate the value of a polynomial
function polynomialValue(coefficients, x) {
  var value = 0;
  var n = coefficients.length;
  
  for (var i = 0; i < n; i++) {
    value += coefficients[i] * Math.pow(x, i);
  }
  
  return value;
}

// Function to calculate the derivative of a polynomial
function polynomialDerivative(coefficients, x) {
  var derivative = 0;
  var n = coefficients.length;
  
  for (var i = 1; i < n; i++) {
    derivative += i * coefficients[i] * Math.pow(x, i - 1);
  }
  
  return derivative;
}

// Function to approximate the root of a polynomial using the Newton-Raphson method
function polynomialApproximation(coefficients, initialGuess, tolerance) {
  var x = initialGuess;
  var maxIterations = 100;
  var iteration = 0;
  
  while (Math.abs(polynomialValue(coefficients, x)) > tolerance && iteration < maxIterations) {
    var fx = polynomialValue(coefficients, x);
    var dfx = polynomialDerivative(coefficients, x);
    
    x = x - fx / dfx;
    iteration++;
  }
  
  if (iteration === maxIterations) {
    console.log("Maximum number of iterations reached. No root found.");
  } else {
    console.log("Approximated root:", x);
  }
}

// Example usage
var coefficients = [1, -3, 2]; // Represents the polynomial x^2 - 3x + 2
var initialGuess = 1.5;
var tolerance = 0.0001;

polynomialApproximation(coefficients, initialGuess, tolerance);
