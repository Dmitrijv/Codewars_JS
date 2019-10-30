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

function nextSmaller(n){

    n = n.toString();
    const chars = n.split("");
    const perms = permutations(chars);

    let nums = perms.filter(charArr => { return (charArr[0] !== "0") && Number(charArr.join("")) < n });
    nums = nums.map(charArr => { return Number(charArr.join("")) }).sort();
    console.log(nums);

    return (nums.length === 0) ? -1 : nums.pop();



}

//nextSmaller(21); // 12
//nextSmaller(531); // 513
//nextSmaller(2071); // 2017


//console.log(Number([ '5', '3', '1' ].join("")));


//console.log(perm([1,2,3]).join("\n"));

//console.log(permutations([ '2', '0', '1', '7' ]));
permutations([ '2', '0', '1', '7' ]);


function permutations(chars, memo) {

    memo = memo || {};
    let ret = [];

    for (let i = 0; i < chars.length; i++) {

        const newChars = chars.slice(0, i).concat(chars.slice(i + 1));
        console.log(newChars);

        let rest = permutations(newChars, memo);

        if(!rest.length) {
            ret.push([chars[i]]);
        } else {
            for(let j = 0; j < rest.length; j++) {
                ret.push([chars[i]].concat(rest[j]));
            }
        }
    }

    //console.log("-----");

    return ret;
}