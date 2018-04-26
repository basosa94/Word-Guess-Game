// Define variables
var list=["bulbasaur", "pikachu", "jigglypuff", "mew", "snorlax", "magikarp", "squirtle", "charmander"];

var hangmanWord = "";
var lettersInHangmanWord = [];
var blank = 0;
var rightGuesses = [];
var wrongGuesses = [];

var wins = 0;
var losses = 1;
var lives = 10;

function startGame(){
	
	// 1. Computer chooses word randomly from the list
	// 2. computer breaks down that random word as letters and replace them with
	// underscores 
	// 3. add those underscores to the HTML to display to the player
	// 4. lives is always equals 10, and rightGuesses is an empty array, 
	// and wronggueses is empty as well.
	
	wrongGuesses = [];
	lives = 10;
	rightGuesses = [];
	
	
	hangmanWord = list[Math.floor(Math.random() * list.length)];
	lettersInHangmanWord = hangmanWord.split("");
	blank = lettersInHangmanWord.length;
	// console.log(hangmanWord);
	// console.log(blank)
	
	for(var i = 0; i < blank; i++){
			rightGuesses.push("_");
	}
	// console.log(rightGuesses);
	document.getElementById('word-blank').innerHTML = rightGuesses.join(" ");
	document.getElementById('guesses-left').innerHTML = lives;	
}
	
	function checkLetters(letter){
			
			// 1. Compare the letter the user picks matches any of the letters in the word
			// 2. I want a conditional statement to determine if the letter the user picked
			// is in the word. If so, do something, if not, do something else
			// 3. If the user is wrong we want to decrease the lives variables by one
			
	
			var letterInWord = false;
	
			for(var i = 0; i < blank; i++){
					if(hangmanWord[i] === letter){
						letterInWord = true;
	
					}
			}
	
			if(letterInWord){
					for(i = 0; i < blank; i++){
						if(hangmanWord[i] === letter){
							rightGuesses[i] = letter;
						}
	
					}
			}else {
				lives --;
				wrongGuesses.push(letter)
			}
	
			// to check if a letter is already in the wrong guesses array. What we want to do
			// is set up an if/else conditional that will run a for loop that will iterate over
			// all the letters and then use the if/else to check if it it already exists.
	
	}
	
	
	function roundComplete(){
			
			// 1. Its going to update the HTML with letters that are in the word
			// 2. Its going to update the HTML with guesses we have left
			// 3. Its going to update the HTML to show the wrong guesses
			// 4. Its going to determine whether the use won the game or not
	
			document.getElementById('word-blank').innerHTML = rightGuesses.join(" ");
			document.getElementById('guesses-left').innerHTML = lives;
			document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
	
	
			// console.log(lettersInHangmanWord);
			// console.log(rightGuesses);
			if(lettersInHangmanWord.join(" ") === rightGuesses.join(" ")){
					wins++;
					alert("You win!!");
					document.getElementById('win-counter').innerHTML = wins;
					startGame();
			} else if(lives === 0){
					document.getElementById('loss-counter').innerHTML  = losses ++;
					document.getElementById('wrong-guesses').innerHTML = "";
					alert("you don't have any more guesses");        
					startGame();
			}
	
	}
	startGame();
	document.onkeyup = function(event){
			
			// 1. its going to take in the letter that we type in
			// 2. its going to pass it through the CheckLetter function 
			
			var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			// console.log("this is the letter we typed", letterGuessed)
			checkLetters(letterGuessed)
			roundComplete();
	
	
	}