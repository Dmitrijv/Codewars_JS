
/*

    Specification

Your work will be to implement the two following functions:

toLocString(int) -> string: Should take any integer in the open interval (-2^52, 2^52) and produce the most simplified locator number string which can represent that number. This means the output string should be sorted from least significant digit to most significant digit, from left to right, with no repeating digits.
Thus, the value -4095 should produce the string "-abcdefghijkl".

toInt(string) -> int: Should take a locator number string, and return the matching integer value. The input may have repeating digits and be in any order; It must still accept this string like normal and produce its value.

Both functions should be able to take eachother's output as input directly. String arguments to toInt() may have whitespace (\t, \v, \r, \n, and space) anywhere in the string and must be ignored. Do not check for range or errors, assume inputs will always be valid.

*/

console.log(toLocString(-4095)); // -abcdefghijkl
console.log(toInt("linux")); // 9447680

const letterToNumber = ["a","b","c","d","e","f","g","h","i","j","k","","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const letterToNumber = {};
const numberToLetter = {};

function toLocString(int) {

    let string = "";

    if (int < 0){
        string = "-"+string;
        int = norm(int);
    }



    return string;

}

function toInt(string) {

    string = "facts";

    return string;
}

function norm(number) {
    return Math.sqrt(number*number);
}