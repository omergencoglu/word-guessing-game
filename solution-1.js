const wordList = ["car", "book", "class", "novel", "audi", "ferrari"];

//select a random word from wordList
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

let showUser = "";
let incorrectChecker = 0;
const foundLetters = [];

// replace all letters of randomWord with "*"
showUser = "*".repeat(randomWord.length);

console.log(`Can you find this word? >>> ${showUser}`);

//start a while loop which ends if user makes 7 incorrect guesses
while (incorrectChecker < 7) {
  const input = prompt("You can guess the letters. What is your guess?");

  // if user input is correct add it to the foundLetters array
  if (randomWord.includes(input)) {
    for (let i of randomWord) {
      if (i === input) {
        foundLetters.push(i);
      }
    }
  } else {
    console.log(`Sorry! There is no "${input}" in this word.`);
    incorrectChecker += 1;
  }

  //Show the word with guessed letters.
  //This will recreate showUser by adding "*" or letters according to the characters in foundLetters
  showUser = "";
  for (let i of randomWord) {
    if (foundLetters.includes(i)) {
      showUser += i;
    } else {
      showUser += "*";
    }
  }
  console.log(showUser);

  //Check if foundLetter includes all the letters in randomWord
  if (randomWord.split("").every((item) => foundLetters.includes(item))) {
    console.log(`Yayy! You win. The word is "${randomWord}".`);
    break;
  }
}
