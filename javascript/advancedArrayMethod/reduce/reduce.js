/*
Write a function called extractValue which accepts an array of objects and a key
and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    const extractedValues = arr.reduce(function (acc, next) {
        // In each iteration, push the value of the current object's property specified by the 'key' into the 'acc' array
        acc.push(next[key]);
        // Return the updated 'acc' array for the next iteration
        return acc;
    }, []);
    return extractedValues;
}

/*
Write a function called vowelCount which accepts a string
and returns an object with the keys as the vowel
and the values as the number of times the vowel appears in the string
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const vowels = 'aeiou';
    // Convert str to lower case
    const lowerCaseStr = str.toLowerCase();
    // Create an object to store the frequency of each vowel
    // Convert lowerCaseStr to array of characters
    // Loop through array of characters
    // Apply callback function to each character
    const vowelFreq = lowerCaseStr.split('').reduce(function (arr, char) {
        // Check if the current character 'char' is a vowel.
        if (vowels.includes(char)) {
            // If it's a vowel, increment its count in the 'charFreq' object.
            // If the character is not in 'charFreq', initialize it with 0.
            arr[char] = (arr[char] || 0) + 1;
        };
        // Return the updated 'arr' for the next iteration.
        // console.log(arr);
        return arr;
    }, {});
    // Return the 'vowelFreq' object containing vowel frequencies.
    return vowelFreq;
}

/*
Write a function called addKeyAndValue which accepts an array of objects
and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];

function addKeyAndValue(arr, key, value) {
    // Use the 'reduce' method to iterate over the array.
    const newObjs = arr.reduce(function (acc, obj) {
        // Create a new object that copies the properties of the original object.
        const updatedObj = { ...obj };
        // Add the new key-value pair to the updated object.
        updatedObj[key] = value;
        // Push the updated object into the 'acc' array.
        acc.push(updatedObj);
        // console.log(acc);
        return acc;
    }, []);
    return newObjs;
}

/*
Write a function called partition which accepts an array and a callback
and returns an array with two arrays inside of it.
The partition function should run the callback function on each value in the array
and if the result of the callback function at that specific value is true
the value should be placed in the first subarray. If the result of the callback function at that specific value is false
the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    // Use the reduce method to iterate through the array and partition values.
    const result = arr.reduce(function (acc, value) {
        // Determine which subarray to push the value based on the callback result.
        const subarrayIndex = callback(value) ? 0 : 1;
        acc[subarrayIndex].push(value);
        return acc;
    }, [[], []]); // Initialize with two empty subarrays.

    return result;
}