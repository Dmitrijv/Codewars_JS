/*

You need to write a method that counts the number of occurences of a word in a given text.

The word counter is created as follows:

var sample  = "Lorem ipsum";
var counter = wordCounter(text);

Then one can get the count for a given word like this:

console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0

The input texts are simple: they only contain ASCII characters, words are either separate by white spaces or punctuation (only , and .). If the input only contain punctuation or white spaces, it should return a count of 0 for all words.

For performance reasons, your implementations should count the words once and not parse the text each time the count method is called.


 */

const sample  = "Lorem ipsum";
const counter = wordCounter(sample);

console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0

const wordCounter = function(text) {
    const words = text.split(/[., ]/);
    let constr = 0;
    const stats = words.reduce((stats, word) => {
        if (word === "constructor") constr++;
        stats[word] = (stats[word] || 0) + 1;
        return stats;
    }, {});
    return {
        count(word) {
            if(word === "") return 0;
            if(word === "constructor") return constr;
            return stats[word] || 0;
        }
    };
};


