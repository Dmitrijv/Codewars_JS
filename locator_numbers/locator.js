
/*
    Description of Locator Numbers

Locator numbers use the letters from the English alphabet (a-z, A-Z) to represent integers as sums of powers of 2,
much like binary numbers already do.

a = 2^0, b = 2^1, c = 2^2, and so forth. Capital letters are used to represent powers of two beyond 2^25; Thus,
A = 2^26, and so forth up to Z.

The string "linux", for example, represents the number 9,447,680;

Negative numbers are also represented by simply appending the - character to the beginning of the locator number string.
Zero is represented by the empty string.

    Specification

Your work will be to implement the two following functions:

toLocString(int) -> string: Should take any integer in the open interval (-2^52, 2^52) and produce the most simplified
locator number string which can represent that number. This means the output string should be sorted from least
significant digit to most significant digit, from left to right, with no repeating digits.
Thus, the value -4095 should produce the string "-abcdefghijkl".

toInt(string) -> int: Should take a locator number string, and return the matching integer value. The input may have
repeating digits and be in any order; It must still accept this string like normal and produce its value.

Both functions should be able to take eachother's output as input directly. String arguments to toInt() may have
whitespace (\t, \v, \r, \n, and space) anywhere in the string and must be ignored. Do not check for range or errors,
assume inputs will always be valid.

*/

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const alphabet = letters.slice(0);
for (let i = 0; i < letters.length; i++) {
    alphabet.push(letters[i].toUpperCase());
}
//console.log(alphabet);

const locatorValues = [];
for (let i = 0; i < alphabet.length; i++) {
    locatorValues.push(Math.pow(2, i));
}

let charToNum = {};
for (let i = 0; i < alphabet.length; i++) {
    charToNum[alphabet[i]] = locatorValues[i];
}



//closestNumberIndex(locators,51);
//closestNumberIndex([1,2,4,8,16,32,64,128,256,444],7);
//console.log(Math.floor((5 + 8) / 2));

console.log(toLocString(944768023232));
//console.log(toLocString(-4095)); // -abcdefghijkl
//console.log(toInt("linux")); // 9447680


function toLocString(num) {

    console.log(num);

    const prefix = (num < 0) ? "-" : "";
    num = norm(num);

    let string = "";
    let maxIndex = locatorValues.length;
    while (num !== 0){

        const index = closestNumberIndex(locatorValues, num, maxIndex);
        const char = alphabet[index];

        string = char + string;
        num -= locatorValues[index];
        maxIndex = index;

    }

    return prefix + string;

}

function toInt(str) {

    str = str.replace(/\t| |\v|\r|\n/gi, "");

    let number = str.split("").reduce(function (sum, character) {
        if (charToNum[character])
            return sum + charToNum[character];
        return 0;
    }, 0);

    if (str[0] === "-")
        return -number;

    return number;

}

function norm(number) {
    return Math.sqrt(number * number);
}

function closestNumberIndex(array, target, maxIndex){

    let startIndex = 0;
    let endIndex = (typeof maxIndex === 'undefined') ? array.length - 1 : maxIndex;

    while(startIndex < endIndex) {

        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        // exact match
        if (array[middleIndex] === target){
            return middleIndex;
        }

        // trim right side
        if(array[middleIndex] > target) {
            endIndex = middleIndex;
        }

        // trim left side
        if(array[middleIndex] < target) {
            startIndex = middleIndex;
        }

        // two values left to check
        if ((startIndex+1) === endIndex){
            return startIndex;
        }

        // one value left
        if (startIndex === endIndex) {
            return startIndex;
        }

    }

}
