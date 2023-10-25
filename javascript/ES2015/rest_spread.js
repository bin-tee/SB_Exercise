// ES5
function filterOutOdds() {
    // convert arguments into regular array using Array.prototype.slice.call(arguments) 
    var nums = Array.prototype.slice.call(arguments);
    // using filter method on 'nums' array to select only even numbers   
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

// ES2015
const filterOutOdds = (...args) => args.filter(val => val % 2 === 0)

/* findMin - accepts variable number of arguments and returns smallest argument */
const findMin = (...args) => Math.min(...args)

/* mergeObjects - accepts two objects and returns a new object
which contains all keys and values of first object and second object */
const mergeObjects = (object1, object2) => ({ ...object1, ...object2 })

/* doubleAndReturnArgs - accepts an array and a variable number of arguments
return a new array with original array values and all of additional arguments doubled */
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]


// Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.lenght);
    const newArray = [...items.slice(0, index), ...items.slice(index + 1)];
    return newArray;
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })

/* const addKeyVal = (obj, key, val) => {
let newObj = { ...obj };
newObj[key] = val;
return newObj;
} */


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val })

/*const update = (obj, key, val) => {
let newObj = {...obj}
newObj[key] = val;
return newObj;
} */