/*

Problem
Robodevil likes to do some mathematics between rehearsals of his orchestra. Today he invented devilish sequence No. 1729:

    x0 = 0,
    x1 = 1,
    xn = (xn - 1 + xn - 2) / 2.

For example, x10 = 0.666015625. Robodevil became interested at once how many `sixes` there were at the beginning of an arbitrary xn.
 In 6 nanoseconds, he had a formula. Can you do the same?

Input
You are given an integer n; `2 ≤ n ≤ 100000`.

Output
Output the number of sixes at the beginning of xn in decimal notation.

Example
Input   10
Output  3

 */

//console.log(countSixes(10));    // 3
console.log(countSixes(583));    // 175 (1)
console.log(countSixes(1276));    // 384 (1)
console.log(countSixes(2386));    // 718 (3)

console.log(countSixes(25737));    // 7747 (27)
console.log(countSixes(52991));    // 15951 (54)

console.log(countSixes(72161));    // 21722 (71)
console.log(countSixes(99811));    // 30045 (102)

console.log(countSixes(100000));    // 30102 (102)

function countSixes(n) {

    const lastDigit = Number(n.toString().split('').pop());

    return (3 * Math.floor(n/10)) + Math.floor(lastDigit/4);

}
