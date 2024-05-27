const removeFromArray = function(originalArray, toRemove) {
    toRemove = Array.from(arguments).slice(1);

    newArray = [];
    for (const item of originalArray) {
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
