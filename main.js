let Phrase = require("andrew-matthews-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
alert(string);
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}
