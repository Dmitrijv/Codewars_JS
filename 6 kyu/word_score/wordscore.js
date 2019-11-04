/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

 */

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const string = 'what time are we climbing up the volcano';

console.log(high(string)); // 'volcano'

//console.log(alphabet.indexOf('a'));

function high(x){

    const arr = x.split(" ");
    let peakLength = 0;
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (getWordValue(arr[i]) > peakLength){
            peakLength = getWordValue(arr[i]);
            word = arr[i];
        }
    }

    return word;

    function getWordValue(word) {
        return word.split("").reduce(function(total, letter) {
            return total + alphabet.indexOf(letter) + 1;
        },0);
   }

}