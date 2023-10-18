/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string.
The function should return the first object with the key of username that matches the string passed to the function.
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];

function findUserByUsername(usersArray, username) {
    // Use 'find' method to search for a user in usersArray that matches the provided username parameter
    const foundUser = users.find(function (user) {
        //use the callback fx to iterate through usersArray & check if 'username' property of each user object matches given 'username' parameter
        return user.username === username;
    });
    return foundUser;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string.
The function should remove the object from the array. If the object is not found, return undefined. 
 
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
 
removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    // Use 'find' method to search for a user in usersArray that matches the provided username parameter
    const foundIdx = users.findIndex(function (user) {
        //use the callback fx to iterate through usersArray & check if 'username' property of each user object matches given 'username' parameter
        return user.username === username;
    });
    if (foundIdx === -1) return;
    return usersArray.splice(foundIdx, 1)[0];
}