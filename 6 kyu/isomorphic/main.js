/*

    https://www.codewars.com/kata/59dbab4d7997cb350000007f/train/javascript

    Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a
    to every character of b. And all occurrences of every character in a map to same character in b.

    Task

    In this kata you will create a function that return True if two given strings are isomorphic to each other,
     and False otherwise. Remember that order is important.

    Your solution must be able to handle words with more than 10 characters.
    Example

    True:

    CBAABC DEFFED
    XXX YYY
    RAMBUNCTIOUSLY THERMODYNAMICS

    False:

    AB CC
    XXY XYY
    ABAB CD

*/

//isomorph("pffffm", "lkkkjd")

console.log(isomorph("mclowh", "hmmcip"));
 

function isomorph(a, b) {

    //console.log(b);
    //console.log(a);

    const charsA = a.split("");
    const charsB = b.split("");
    
    if (charsA.length !== charsB.length) return false;

    console.log(charsA);
    console.log(charsB);

    const memo = {};

    for (let i = 0; i < charsA.length; i++) {
        const letterA = charsA[i];
        const letterB = charsB[i];
        if (!memo[letterA]) {
            console.log(i + " ", letterA, "is mapped to: ", letterB);
            memo[letterA] = letterB;
        } else {
            console.log(i + " " + "known key: ", letterA, letterB);
            console.log(memo);
            if (memo[letterA] !== letterB) {
                console.log("returning false");
                return false;
            }
        }
        //console.log(memo);
    }

    console.log(Object.values(memo));
    console.log("returning true");
    return true;

}

