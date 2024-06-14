const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let sortedOldestFirst = people.sort((first, second) => {
        let firstBirth = first.yearOfBirth;
        let firstDeath = !first.yearOfDeath ? currentYear : first.yearOfDeath;
        let firstAge = firstDeath - firstBirth;

        let secondBirth = second.yearOfBirth;
        let secondDeath = !second.yearOfDeath ? currentYear : second.yearOfDeath;
        let secondAge = secondDeath - secondBirth;

        return secondAge - firstAge;
    });

    return sortedOldestFirst[0];
};

// Do not edit below this line
module.exports = findTheOldest;
