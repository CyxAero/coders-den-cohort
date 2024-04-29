/**
 * Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.
 */

function isItLetter(input) {
  // If the input is a letter, return true, otherwise return false
  return RegExp('[a-zA-Z]', 'g').test(input);
}

console.log(isItLetter("a"));