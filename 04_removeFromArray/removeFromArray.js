const removeFromArray = function(array, ...valuesToRemove) {
    let newArray = array;

    for (let i = 0; i < valuesToRemove.length; i ++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] === valuesToRemove[i]) {
                newArray.splice(j, 1);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
