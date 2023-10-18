// Difference

function subtraction(x, y) {
    return x - y;
}


// Product

function multiplication(x, y) {
    return x * y;
}


// printDay

function printDay(order) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (order >= 0 && order <= 7) {
        return weekDays[order - 1];
    }
    return undefined;
}

// function printDay(order) {
//     let days = {
//         1: "Sunday",
//         2: "Monday",
//         3: "Tuesday",
//         4: "Wednesday",
//         5: "Thursday",
//         6: "Friday",
//         7: "Saturday",
//     }
//     return days[order];
// }


// last Element

function lastElement(array) {
    return array[array.length - 1];
}


// numberCompare 

function numberCompare(a, b) {
    if (a > b) {
        return "First is greater"
    }
    if (a < b) {
        return "Second is greater"
    }
    return "Numbers are equal";
}


// singleLetterCount

function singleLetterCount(word, letter) {
    let count = 0;
    for (let index = 0; index < word.length; index++) {
        if (word[index].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}


// multipleLetterCount

function multipleLetterCount(string) {
    string = string.toUpperCase();
    let object = {};
    for (let index = 0; index < string.length; index++) {
        if (object[string[index]] === undefined) {
            object[string[index]] = 1;
        } else {
            object[string[index]]++;
        }
    }
    return object;
}


// arrayManipulation

// function arrayManipulation(array, command, location, value) {
//     if (command === 'remove' && location === 'end') {
//         return array.pop();
//     }
//     if (command === 'remove' && location === 'beginning') {
//         return array.shift();
//     }
//     if (command === 'add' && location === 'beginning') {
//         array.unshift(value)
//         return array;
//     }
//     if (command === 'add' && location === 'end') {
//         array.push(value)
//         return array;
//     }
// }

function arrayManipulation(array, command, location, value) {
    if (command === 'remove') {
        if (location === 'end') {
            return array.pop();
        }
        return array.shift();
    }
    else if (command === 'add') {
        if (location === 'beginning') {
            array.unshift(value)
            return array;
        }
        array.push(value);
        return array;
    }
}


// isPalindrome

function isPalindrome(input) {
    const cleanedInput = input.replace(/\s+/g, '').toUpperCase();
    let start = 0
    let end = cleanedInput.length - 1;
    while (start < end) {
        if (cleanedInput[start] !== cleanedInput[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}


