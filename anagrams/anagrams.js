
/*

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.

 */

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']

function anagrams(word, words) {

    const ALLOWED_LETTERS = getLetterCount(word);

    return words.filter(word => isAnagram(ALLOWED_LETTERS, getLetterCount(word)));

    function getLetterCount(word){
        word = word.split("");
        const letters = {};
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            letters[letter] = ~~letters[letter] + 1;
        }
        return letters;
    }

    function isAnagram(a, b) {
        for (let key of Object.keys(a)) {
            if ((Object.keys(b).includes(key) !== true) || !Object.is(a[key], b[key]) )
                return false;

        }
        return true;
    }

}