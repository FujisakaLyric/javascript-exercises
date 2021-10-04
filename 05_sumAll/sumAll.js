const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0 || typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
        return "ERROR";
    }
    
    let finalSum = 0;
    for (let i = Math.min(firstNumber, secondNumber); i <= Math.max(firstNumber, secondNumber); i++) {
        finalSum += i;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
