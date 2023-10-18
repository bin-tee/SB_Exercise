/*
Write a function called doubleValues which accepts an array
and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (num) {
        newArr.push(num * 2);
    });
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array
and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            newArr.push(num)
        }
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings
and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (str) {
        newArr.push(str[0] + str[str.length - 1])
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value
and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    // loop through each obj in arr
    arr.forEach(function (obj) {
        /*add new key-value pair to each object
        based on key & value parameter */
        obj[key] = value;
    })
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object
with the keys as the vowel and the values as the number of times the vowel appears in the string.
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    // convert str to arr
    let splitArr = str.split('');
    // create new obj to store count of each vowel
    let obj = {};
    // define str of vowels
    const vowels = 'AaEeIiOoUu';
    // loop through each char in splitArr
    splitArr.forEach(function (char) {
        // check if character is already a property in obj
        if (vowels.indexOf(char) !== -1) {
            // if it already exists
            if (obj[char]) {
                // increment the count by 1
                obj[char]++;
                // if not
            } else {
                // initialize the count to 1
                obj[char] = 1;
            }
        }
    });
    return obj;
}


/*
Write a function called doubleValuesWithMap which accepts an array
and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let newArr = arr.map(function (num) {
        return num * 2;
    });
    return newArr;
}
/*
Write a function called valTimesIndex which accepts an array
and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    let newArr = arr.map(function (val, idx) {
        return val * idx;
    });
    return newArr;
}

/*
Write a function called extractKey which accepts an array of objects and some key
and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
    // ['Elie', 'Tim', 'Matt', 'Colt'] */

function extractKey(arr, key) {
    let newArr = arr.map(function (obj) {
        return obj[key];
    });
    return newArr;
}

/*
Write a function called extractFullName which accepts an array of objects
and returns a new array with the value of the key with a name of "first"
and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])
    // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    let newArr = arr.map(function (obj) {
        return obj.first + ' ' + obj.last;
    });
    return newArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key
and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    /* create newArr to contain objects that met filtering condition
    loop through each obj in arr */
    let newArr = arr.filter(function (obj) {
        /* check if each obj in arr has a property w a name matches key parameter 
        and if its value not undefined*/
        return obj[key] !== undefined;
    });
    return newArr;
}

/*
Write a function called find which accepts an array and a value
and returns the first element in the array that has the same value as the second parameter
or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    // create matchedValue array to store value(s) that met filtering condition
    let matchedValue = arr.filter(function (val) {
        // check if each val in arr matched the searchValue parameter
        return val === searchValue;
        // only the first found value is included in result
    })[0];
    return matchedValue;
}

/*
Write a function called findInObj which accepts an array of objects, a key,
and some valueto search for and returns the first found value in the array.
 
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let matchedObj = arr.filter(function (obj) {
        return obj[key] === searchValue;
        // only the first found value is included in result
    })[0];
    return matchedObj;
}

/*
Write a function called removeVowels which accepts a string
and returns a new string with all of the vowels (both uppercased and lowercased) removed.
Every character in the new string should be lowercased.
 
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = 'AaEeIiOoUu'
    const arr = str.split('');
    const newStr = arr.filter(function (char) {
        return vowels.indexOf(char) === -1;
    });
    return newStr.join('').toLowerCase();
}

/*
Write a function called doubleOddNumbers which accepts an array
and returns a new array with all of the odd numbers doubled
(HINT - you can use map and filter to double and then filter the odd numbers).
 
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let oddNums = arr.filter(function (num) {
        return num % 2 !== 0;
    });
    let doubleOddNums = oddNums.map(function (newNum) {
        return newNum * 2;
    });
    return doubleOddNums;
}
