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

 */


//nextSmaller(21); // 12
//nextSmaller(531); // 513
//nextSmaller(2071); // 2017

//console.log( nextSmaller(2071) ); // 2017

//console.log(nextSmaller(1234567908)); // 1234567890
//console.log(nextSmaller(907)); // 790
//console.log(nextSmaller(9999999999));

console.log(nextSmaller(59884848483559)); // 59884848459853
console.log(nextSmaller(51226262651257)); // 51226262627551
console.log(nextSmaller(959839604880318)); // 959839604880183

// console.log(Number([ '5', '3', '1' ].join("")));
// console.log(perm([1,2,3]).join("\n"));
// console.log(permutations([ '2', '0', '1', '7' ]));
// permutations([ '2', '0', '1', '7' ]);
// permutations([ '2', '1', '7' ]);

function nextSmaller(n){

    console.log(n);

    n = n.toString();
    if (n.length === 1) return -1;

    const chars = n.split("");

    if (chars.every(char => char === chars[0]) === true) return -1;

    const perms = permutations(chars, Number(n));

    let nums = perms.filter(charArr => { return (charArr[0] !== "0") && Number(charArr.join("")) < n });
    nums = nums.map(charArr => { return Number(charArr.join("")) }).sort();
    //console.log(nums);

    return (nums.length === 0) ? -1 : nums.pop();



}


function permutations(chars, n, memo) {

    memo = memo || {};

    //console.log(Object.keys(memo).length);
    //console.log(memo);

    let ret = [];
    let retStr = chars.join();
    if (memo[retStr]) { console.log("did smth"); return memo[retStr]; }

    for (let i = 0; i < chars.length; i++) {

        //console.log(chars);
        //if (i > chars[0]) continue;

        const currentChar = chars[i];
        //console.log(currentChar);

        const remainingChars = chars.slice(0, i).concat(chars.slice(i + 1));
        //console.log(remainingChars);


        const newNum = (remainingChars.length > 0) ? Number(currentChar) + Number(remainingChars.join("")) : Number(currentChar);
        if (newNum > n) { console.log(newNum, "break early"); continue; }

        //console.log({ currentChar, remainingChars, newNum});

        let rest = permutations(remainingChars, memo);

        if(!rest.length) {
            ret.push([currentChar]);
        } else {
            for(let j = 0; j < rest.length; j++) {
                ret.push([currentChar].concat(rest[j]));
            }
        }

    }

    //console.log("-----");
    memo[retStr] = ret;
    return ret;
}
