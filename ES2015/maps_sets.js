// Quick Question #1
new Set([1, 1, 2, 2, 3, 4])
// [1, 2, 3, 4] 

// Quick Question #2
[...new Set("referee")].join("")
'ref'

// Quick Question #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// { Array(3) => true, Array(3) => false }

// hasDuplicate
const hasDuplicated = arr => new Set(arr).size !== arr.length

// vowelCount

function vowelCount(str) {
    str = str.toLowerCase();
    const vowelMap = new Map();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}