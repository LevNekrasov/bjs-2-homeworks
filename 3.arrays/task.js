function compareArrays(arr1, arr2) {
    return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.
    filter(user => user.gender === gender).
    map(user => user.age).
    reduce((average, userAge, index, array) => average + userAge / array.length, 0);
}