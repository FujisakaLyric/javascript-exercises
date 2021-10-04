const palindromes = function (string) {
    let newString = "";
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).match(/[a-z]/i)) {
            newString += string.charAt(i);
        }
    }

    let lowerBound = 0, upperBound = newString.length - 1;
    while (lowerBound < upperBound) {
        if (newString.charAt(lowerBound) !== newString.charAt(upperBound)) { return false; }
        lowerBound++;
        upperBound--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
