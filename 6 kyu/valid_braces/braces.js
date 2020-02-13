/*

Write a function that takes a string of braces, and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

*/

console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")); // false

console.log(validBraces("(({{[[]]}}))")); // true
console.log(validBraces("({})[({})]")); // true

function validBraces(str) {
  let matchingBracket = {};
  matchingBracket["["] = "]";
  matchingBracket["{"] = "}";
  matchingBracket["("] = ")";

  //   console.log(str);
  let characters = str.split("");

  // a valid string will always have even number of symbols
  if (characters.length % 2 !== 0) return false;

  // a valid string will always start with an opening bracket
  if (!matchingBracket[characters[0]]) return false;

  if (characters.length === 2) {
    const openingBracket = characters.shift();
    const closingBracket = characters.pop();
    return matchingBracket[openingBracket] && closingBracket === matchingBracket[openingBracket];
  }

  const openingBracket = characters[0];
  let closingBracketIndex = characters.lastIndexOf(matchingBracket[openingBracket]);

  // there is a matching closing symbol at the end of the string
  if (closingBracketIndex === str.length - 1) {
    characters.shift();
    characters.pop();
    return validBraces(characters.join(""));
    // otherwise find the first matching closing symbol we can possibly find,
    // split the string in two and validate each section recursively
  } else {
    closingBracketIndex = characters.indexOf(matchingBracket[openingBracket]);
    if (!closingBracketIndex) return false; // no closing symbol exists for this opener
    const left = str.substring(0, closingBracketIndex + 1);
    const right = str.substring(closingBracketIndex + 1, characters.length);
    return validBraces(left) && validBraces(right);
  }
}
