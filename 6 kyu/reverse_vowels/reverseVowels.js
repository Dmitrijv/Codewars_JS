/*

In this kata, your goal is to write a function which will reverse the vowels in a string.
 Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

// console.log(reverseVowels("Hello!")); // "Holle!"
// console.log(reverseVowels("Tomatoes")); // "Temotaos"0
console.log(reverseVowels("Reverse Vowels In A String")); // "RivArsI Vewols en e Streng"

console.log("RivArsI Vewols en e Streng");

function reverseVowels(str) {
  const vowels = { a: true, e: true, i: true, o: true, u: true, y: true };
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  let fullReverse = str
    .split("")
    .reverse()
    .join("");

  let vowelStack = [];
  for (let index = 0; index < fullReverse.length; index++) {
    const character = fullReverse[index];
    if (vowels[character.toLowerCase()]) vowelStack.push(character);
  }

  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (vowels[char.toLowerCase()]) {
      const newChar = vowelStack.shift();
      str = str.replaceAt(index, newChar);
    }
  }

  return str;
}
