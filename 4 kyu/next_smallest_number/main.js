/*

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) // 12
nextSmaller(531) // 513
nextSmaller(2071) // 2017

Return -1 when there is no smaller number that contains the same digits.
Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

Some tests will include very large numbers.
Test data only employs positive integers.

https://codereview.stackexchange.com/questions/200617/python-function-to-find-the-next-smaller-number-with-same-set-of-digits

 */


//nextSmaller(21); // 12
//nextSmaller(531); // 513
//nextSmaller(2071); // 2017

//console.log( nextSmaller(2071) ); // 2017

//console.log(nextSmaller(1234567908)); // 1234567890
//console.log(nextSmaller(907)); // 790

//console.log(nextSmaller(9999999999));
console.log(nextSmaller(59884848483559)); // 59884848459853

console.log(nextSmaller(1253479)); // 1249753

//console.log(nextSmaller(51226262651257)); // 51226262627551
//console.log(nextSmaller(959839604880318)); // 959839604880183


function nextSmaller(n){

    n = n.toString();
    if (n.length === 1) return -1;

    const chars = n.split("");

    // all characters are the same
    if (chars.every(char => char === chars[0]) === true) return -1;

    // start from the last digit and find a digit that is not decreasing or equal
    let tailStart;
    for (let i = chars.length-1; i > 0; i--) {
        const digit = Number(chars[i]);
        if (chars[i-1]){
            const nextDigit = Number(chars[i-1]);
            if (nextDigit > digit) {
                chars[i-1] = digit;
                chars[i] = nextDigit;
                tailStart = i;
                //console.log({ digit, nextDigit, point, i });
                break;
            }
        }
    }

    const prefix = chars.slice(0, tailStart).join("");
    const tail = reverseString(chars.slice(tailStart, chars.length).join(""));

    return prefix + tail;

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

}
