// Access the input and suggestions list elements from the HTML
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Add event listener to input field to call 'searchHandler' when user typing
input.addEventListener('keyup', searchHandler);

// Handling when user typing input
function searchHandler(e) {
	// Get the value entered in input field
	const inputVal = e.target.value;
	// Call 'search' fx with input value to get matching results
	const results = search(inputVal).slice(0, 10); // limit to 10 suggestions
	// Call showSuggestions fx to display result(s)
	showSuggestions(results, inputVal);
}

// Searching based on user input
function search(str) {
	let results = [];
	// Loop through fruit array to find matching suggestions
	for (let i = 0; i < fruit.length; i++) {
		// Check if fruit name contains input string 
		if (fruit[i].toLowerCase().includes(str.toLowerCase())) {
			results.push(fruit[i]); // add to results array if matched
		}
	}
	return results;
}

// Displaying searching results as suggestions
function showSuggestions(results, inputVal) {
	// Access suggestions list from HTML
	const suggestionsList = document.querySelector('.suggestions ul')
	// Clear existing suggestions
	suggestionsList.innerHTML = '';
	// When user typing in (input not empty)
	if (inputVal.length > 0) {
		// Loop through results to check if matching(s) found
		for (let i = 0; i < results.length; i++) {
			// Create list of matched elements
			const suggestion = document.createElement('li');
			// Set text content of listed elements to result
			const suggestionText = results[i];

			const matchingIndex = suggestionText.toLowerCase().indexOf(inputVal.toLowerCase());

			if (matchingIndex !== -1) {
				suggestion.innerHTML = suggestionText.substring(0, matchingIndex) +
					'<strong>' + suggestionText.substring(matchingIndex, matchingIndex + inputVal.length) + '</strong>' +
					suggestionText.substring(matchingIndex + inputVal.length);
			} else {
				suggestion.textContent = suggestionText;
			}

			// Append listed elements to suggestion list 
			suggestionsList.appendChild(suggestion);
		}
	}
}

// Add event listener to suggestion list to call 'useSuggestion' when a suggestion clicked
suggestions.addEventListener('click', useSuggestion);

// Handling when user selecting suggestion
function useSuggestion(e) {
	// Get the text content of the selected suggestion
	const selectedSuggestion = e.target.textContent;
	// Set the input field value to the selected suggestion
	document.querySelector('#fruit').value = selectedSuggestion;
	// Clear the suggestions list
	document.querySelector('.suggestions ul').innerHTML = '';
}

