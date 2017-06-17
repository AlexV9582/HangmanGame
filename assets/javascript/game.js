var userGuess = []
var guesses = 0
var livesRemaining = 10
var wins = 0
var losses = 0
var levelOneWordBank = ["eddie", "susannah", "jake", "oy", "roland"]
var letters = []

// Pick random word and remove from array
var wordRandom = Math.floor((Math.random() * levelOneWordBank.length - 1) + 1);
var word = levelOneWordBank[wordRandom]
displayWord()
function displayWord() {
	levelOneWordBank.splice(wordRandom, 1);	
	

}


// Log guess and determine if guess is present and add to array
var guess = document.onkeyup = function(event) {
	var keyed = event.key;
	if (userGuess.indexOf(keyed) === -1) {
		userGuess.push(keyed)
	}


// Break word in to letters
displayLetters()
function displayLetters(){
	var blanks = word.length
	for (var i = 0; i < word.length; i++) {
		letters[i] = " _ "
	}

}

// Verify guesses are present in word
findguessedletter()
function findguessedletter(){	
	for (var i = 0; i < word.length; i++) {
		if (word.indexOf(keyed) !== -1) {
			letters.splice(word.indexOf(keyed), 1, keyed)
		}
	}
}


document.getElementById("randomWord").innerHTML = letters.join("");
	
	
	console.log(keyed)
	console.log(word)
	console.log(letters)
}