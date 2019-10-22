
/* Below is a regular expression that finds alphanumeric characters
   Next is a string that could easily be replaced with a reference to a form control
   Lastly, we have an array that will hold any words matching our pattern */
let pattern = /\w+/g,
    string = "I I am am am yes yes.",
    matchedWords = string.match( pattern );

/* The Array.prototype.reduce method assists us in producing a single value from an
   array. In this case, we're going to use it to output an object with results. */
let counts = matchedWords.reduce(function ( stats, word ) {
    stats[word] = (stats[word]) ? stats[word]++ : 1;
    return stats;
}, {} );

let counts2 = matchedWords.reduce((stats, word) => { stats[word] = (stats[word] || 0) + 1; return stats; }, {});

console.log( counts );
console.log(counts2);

