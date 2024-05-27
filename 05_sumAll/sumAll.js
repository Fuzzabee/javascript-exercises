const sumAll = function(firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" ||
        typeof secondNumber !== "number" ||
        firstNumber < 0 ||
        secondNumber < 0) {
            return "ERROR";
        }

    let sum = 0;
    let min = Math.min(firstNumber, secondNumber);
    let max = Math.max(firstNumber, secondNumber);
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
