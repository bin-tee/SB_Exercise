/* gameContainer is assigned the reference to an HTML element with the id "game"
This element serves as the container for the memory card game */
const gameContainer = document.querySelector("#game");

// Initialize variables to keep track of game state
// card1, card2 used to keep track of 1st and 2nd cards the player clicks on in each turn
let card1 = null;
let card2 = null;
// flippedCards used to keep track of the number of pairs successfully matched
let flippedCards = 0;
// noClick used to control whether the player can click on cards or not
let noClick = false;

// Define an array of colors, containing color values, representing card pairs
const colors = [
    "lightblue", "beige", "grey", "black", "pink", "lightblue", "beige", "grey", "black", "pink"
];

/* Define a function to shuffle an array
It accepts an array as an argument & returns the shuffled array */
function shuffle(array) {
    let count = array.length;
    while (count > 0) {
        let random = Math.floor(Math.random() * count);
        count--;
        // The values at count & random indices are swapped to shuffle the elements
        let tempColor = array[count];
        array[count] = array[random];
        array[random] = tempColor;
    }
    return array;
}
// Shuffle the colors array and store the result in shuffledColors
let shuffledColors = shuffle(colors);

// Define a function to create new card divs
function createNewDivs(colorArray) {
    // for...of loop used to iterate through the array of color values
    for (let color of colorArray) {
        // For each color in the array, a new HTML div element is created, representing a card
        const newDiv = document.createElement("div");
        // Add a class corresponding to the current color value to the card div
        newDiv.classList.add(color);
        // Add an event listener to the card div to handle the event when a card clicked
        newDiv.addEventListener("click", cardClick);
        // Append the card div to the game container to add  the card to the game board within specified container
        gameContainer.append(newDiv);
    }
}

function cardClick(e) {
    // Check if clicking is currently disabled
    if (noClick) return;
    // Check if the clicked card is already flipped
    if (e.target.classList.contains("flipped")) return;

    // Set a reference to the clicked card
    let currentCard = e.target;
    // Change the background color to reveal the card's color
    currentCard.style.backgroundColor = currentCard.classList[0];

    // if (!card1) {
    //     currentCard.classList.add("flipped");
    //     card1 = currentCard;
    // } else {
    //     currentCard.classList.add("flipped");
    //     card2 = currentCard;
    // }

    // Check if there is one or zero card flipped
    if (!card1 || !card2) {
        // Add the "flipped" class to the clicked card
        currentCard.classList.add("flipped");
        // If card1 is not chosen, assign current card/clicked card to card1
        // otherwise, assign current card/clicked card to card2
        card1 = card1 || currentCard;
        // If clicked card is the same as card1 
        card2 = currentCard === card1 ? null : currentCard;
    }

    // Check if two cards are currently flipped
    if (card1 && card2) {
        // Disable clicking while checking for a match
        noClick = true;
        // Set the class names (representing card colors) for the two flipped cards
        let color1 = card1.className;
        let color2 = card2.className;

        // Check if the two flipped cards have the same color (class name)
        if (color1 === color2) {
            // If the color matched, increment the count of flipped cards
            flippedCards += 2;
            // Remove click event listeners from the matched cards
            card1.removeEventListener("click", cardClick);
            card2.removeEventListener("click", cardClick);
            // Reset card1 and card2 to null
            card1 = null;
            card2 = null;
            // Re-enable clicking for the next turn
            noClick = false;
            // If they don't match, set a delay, reset their appearance and state
        } else {
            setTimeout(function () {
                card1.style.backgroundColor = "";
                card2.style.backgroundColor = "";
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                // Reset card1 and card2 to null, re-enable clicking for the next turn
                card1 = null;
                card2 = null;
                noClick = false;
                // Delay of 1000 milliseconds (1 second)    
            }, 1000);
        }
    }

    if (flippedCards === colors.length) alert("You Won!");
}

createNewDivs(shuffledColors);
