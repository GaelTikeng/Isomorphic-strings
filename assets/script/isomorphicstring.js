// Javascript function to check if two
// strings are isomorphic

// catching the DOM

const button = document.querySelector('.btn')
const displayResult = document.querySelector('.result')
let size = 256; // inintialize the maximum number of characters in a string

// EventListener
// button.addEventListener('click', isomorphicString)

// Event handeler
function isomorphicString() {
	let string1 = document.querySelector('.string1').value
	let string2 = document.querySelector('.string2').value
  let x = string1.length;
  let y = string2.length;
  if (x != y) {
		displayResult.innerHTML = 'The two words must be of same length'
		console.log("not the same")
	} else
	{
		// seen characters in str2
		let seen = new Array(size);

		for (let i = 0; i < size; i++) seen[i] = false;

		let map = new Array(size);
		map.fill(0); // fill the map with 0s

		for (let i = 0; i < size; i++) map[i] = -1;

		// go through all characters of the string one by one
		for (let i = 0; i < y; i++) {
			if (map[string1[i].charCodeAt()] == -1) {
				if (seen[string2[i].charCodeAt()] == true) {
					displayResult.innerHTML = 'False'
				}

				/* Mark current character of
					string2 as visited */
				seen[string2[i].charCodeAt()] = true;

				// Store mapping of current characters
				map[string1[i].charCodeAt()] = string2[i].charCodeAt();
			} else if (map[string1[i].charCodeAt()] != string2[i].charCodeAt())
				displayResult.innerHTML = 'false'
				return false;
		}
		displayResult.innerHTML = 'false'
		return true;
	}
}
