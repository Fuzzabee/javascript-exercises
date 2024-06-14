const palindromes = function (string) {
    let alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let original = string
                    .toLowerCase()
                    .split("")
                    .filter((char) => alphaNumeric.includes(char))
                    .join("");

    let reversed = original
                    .split("")
                    .reverse()
                    .join("");

    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
