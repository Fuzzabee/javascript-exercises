const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
	return arguments[0].reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function() {
  return arguments[0].reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function() {
  return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
	if (arguments[0] === 0) {
    return 1;
  }
  let result = 1;
  for (let i = arguments[0]; i > 1; i--) {
    result *= i;
  }
  return result;
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
