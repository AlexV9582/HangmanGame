var userGuess = []
var guesses = 0
var livesRemaining = 10
var wins = 0
var losses = 0
var levelOneWordBank = ["Eddie", "Susannah", "Jake", "Oy", "Roland"]

// Pick random word and remove from array
var wordRandom = Math.floor((Math.random() * levelOneWordBank.length - 1) + 1);
var word = levelOneWordBank[wordRandom]
displayWord()
function displayWord() {
	levelOneWordBank.splice(wordRandom, 1);	
	

}


// Log guess and determine if guess is present and add to array
document.onkeyup = function(event) {
	var guess = event.key;
	if (userGuess.indexOf(guess) === -1) {
		userGuess.push(guess)
	}


// Break word in to letters and display on screen
displayLetters()
function displayLetters(){
	var letters = []
	var blanks = word.length
	for (var i = 0; i < word.length; i++) {
		letters[i] = "_ "
	}
document.getElementById("randomWord").innerHTML = letters.join("");
	
}






	console.log(userGuess)
	console.log(guess)
	console.log(wordRandom)
	console.log(word)
	console.log(levelOneWordBank)
}