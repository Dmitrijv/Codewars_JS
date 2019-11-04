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
console.log(countSixes(10));    // 3
//console.log(countSixes(583));    // 175
console.log(countSixes(583));    // 175

console.log(countSixes(100000));    // 3

function countSixes(n) {

    //console.log(Math.log2(n));


    /*
    const n0 = Math.log10(2) * (n-1);
    const n1 = Math.log10(2) * n;
    const n2 = Math.log10(2) * (n+1);

    if (n1 === n2 && n1 === (n0 + 1) && (n % 2 !== 0))
        return n0;

    return n1;
    */

    //+2/3/(2^n)  and  1/3/(10^t)  - when odd(n)
    if (n % 2 !== 0){

        let t = (Math.log(3)+(n - 2) * Math.log(2)) / Math.log(10);

        let v1 = (2/3) / Math.pow(2, n);
        let v2 = (1/3) / Math.pow(10, t);

        console.log(t);
        console.log(v1);
        console.log(v2);

    } else {

        console.log(t);

    }

    // x[n] = J[n]/2^(n-1), J[n] - Jacobsthal number and J[n] = (2^n - (-1)^n)/3.

    //let jn = ( Math.log2(n) - (Math.pow(-1,n)) ) / 3;
    //console.log( jn / Math.log2(n-1) );

    /*
    //console.log(2/3);
    console.log("----");
    console.log( (1/3) / Math.log10(n) );
    console.log( (2/3) / Math.log10(n) );

    console.log("----");
    console.log( (1/3) / Math.log10(n-1) );
    console.log( (2/3) / Math.log10(n-1) );

    console.log("----");
    console.log( (1/3) / Math.log10(n-2) );
    console.log( (2/3) / Math.log10(n-2) );
    */
    //console.log((2/3) - ( Math.log10(n) * (2/3)) );

}
