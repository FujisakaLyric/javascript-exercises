const findTheOldest = function(array) {
    const sorted = array.sort((firstPerson, secondPerson) => {
        let firstPersonAge;
        let secondPersonAge;
        if (firstPerson.yearOfDeath === undefined) {
            firstPersonAge = (new Date()).getFullYear() - firstPerson.yearOfBirth;
        }
        else {
            firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        }

        if (secondPerson.yearOfDeath === undefined) {
            secondPersonAge = (new Date()).getFullYear() - secondPerson.yearOfBirth;
        }
        else {
            secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        }

        return (firstPersonAge > secondPersonAge ? -1 : 1);
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
