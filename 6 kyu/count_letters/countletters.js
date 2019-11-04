/*

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash
with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char'
instead of string in Crystal.

Example:

letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

 */


console.log(letter_count('arithmetics'));

//accum[value] = accum[value] ? accum[value] + 1 : 1

function letter_count(string) {
    const letters = {};
    for (let i = 0; i < string.length; i++) {
        const letter =  string[i];
        letters[letter] = ~~letters[letter] + 1;
    }
    return letters;
}