const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numArray) {
  let ans = 0;
  for (let i = 0; i < numArray.length; i++) {
    ans += numArray[i];
  }

  return ans;
};

const multiply = function(numArray) {
  let ans = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    ans *= numArray[i];
  }

  return ans;
};

const power = function(num, exp) {
	return Math.pow(num, exp);
};

const factorial = function(num) {
	if (num === 0) { return 1;}
  
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
