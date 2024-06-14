const getTheTitles = function(array) {
    let books = array.map((item) => {
        return item.title;
    });

    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
