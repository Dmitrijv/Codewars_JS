/*

Write a function that, given a string of text (possibly with punctuation and line-breaks),
returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
    (No need to handle fancy punctuation.)
    Matches should be case-insensitive, and the words in the result should be lowercased.
    Ties may be broken arbitrarily.
    If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
    or an empty array if a text contains no words.


Bonus points (not really, but just for fun):

    Avoid creating an array whose memory footprint is roughly as big as the input text.
    Avoid sorting the entire array of unique words.

 */

//console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ['e','ddd','aa']

//topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e");
topThreeWords("Dolls saw at the CD to a CD");


function topThreeWords(text) {

    const wordCounts = {};
    const topWords = [];

    let wordBuffer = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (char.match(/[a-zA-Z']/)) {
            wordBuffer = wordBuffer + char;
            // if we are at the end of the string assume current word buffer as a word
            if (i === text.length-1) wordCounts[wordBuffer] = ~~wordCounts[wordBuffer] + 1;
        } else {
            wordCounts[wordBuffer] = ~~wordCounts[wordBuffer] + 1;
            wordBuffer = "";
        }
    }

    delete wordCounts[""];
    delete wordCounts["'"];

    if (Object.keys(wordCounts).length === 0) return [];

    while ((topWords.length < 3)) {
        let topWord;
        let topWordCount = 0;
        for (let key of Object.keys(wordCounts)){
            if (wordCounts[key] > topWordCount){
                topWord = key;
                topWordCount = wordCounts[key];
            }
        }
        if (topWord) topWords.push(topWord); delete wordCounts[topWord]; topWordCount = 0;
        if (Object.keys(wordCounts).length === 0) break;
    }

    return topWords;
}