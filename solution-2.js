const wordList = ["car", "book", "class", "novel", "audi", "ferrari"];

//select a random word from wordList
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

const showUser = "*".repeat(randomWord.length).split("");
let incorrectChecker = 0;

console.log(`Can you find this word? >>> ${showUser.join("")}`);

while (incorrectChecker < 7) {
  const input = prompt("You can guess the letters. What is your guess?");

  if (randomWord.includes(input)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (input === randomWord[i]) {
        showUser[i] = input;
      }
    }
    console.log(showUser.join(""));
  } else {
    console.log(`Sorry! There is no "${input}" in this word.`);
    incorrectChecker += 1;
  }

  if (!showUser.includes("*")) {
    console.log(`Yayy! You win. The word is "${randomWord}".`);
    break;
  }

  if (incorrectChecker === 7) {
    console.log("Game over! You couldn't find the number.");
  }
}
