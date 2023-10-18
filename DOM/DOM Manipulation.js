// Select the section with an id of container without using querySelector.
document.getElementById('container')

// Select the section with an id of container using querySelector.
document.querySelector('#container')

// Select all of the list items with a class of “second”.
document.getElementsByClassName('second')
// OR
document.querySelectorAll('.second')

// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol.third')

// Give the section with an id of container the text “Hello!”.
const iD = document.getElementById('container')
iD.innerText = ('Hello!')
// OR
const iD = document.querySelector('#container')
iD.innerText = ('Hello!')

// Add the class main to the div with a class of footer.
const div = document.querySelector('.footer')
// OR
// const div = document.getElementsByClassName('footer')
div.classList.add('main')
// OR
div.className += 'main'


// Remove the class main on the div with a class of footer.
const diV = document.getElementsByClassName('footer')
// OR
// const footer = document.querySelector('.footer')
div.classList.remove('main')

// Create a new li element.
const newE = document.createElement('li')
// Give the li the text “four”.
newE.innerText = ('four')

// Append the li to the ul element.
const uL = document.querySelector('ul')
uL.append(newE)

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLi = document.querySelectorAll('ol li')

for (let li of olLi) {
    olLi[li].style.backgroundColor = 'green'
}
// OR
for (let i = 0; i < olLi.length; i++) {
    olLi[li].style.backgroundColor = 'green'
}

// Remove the div with a class of footer.
const footer = document.getElementsByClassName('footer')
// OR 
// const footer = document.querySelector('.footer')
footer.remove()