const reverseString = function(stringToReverse) {
    stringToReturn = "";

    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        stringToReturn += stringToReverse.charAt(i);
    }

    return stringToReturn;
};

// Do not edit below this line
module.exports = reverseString;
