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
console.log(countSixes(66));    // 3
//console.log(countSixes(100000));    // 3

function countSixes(n) {

    return getNumberOfSixes( getXofN(n) );

    function getXofN(n) {

        let nvals = [0,1];
        console.log(0, getNumberOfSixes(0));
        console.log(1, getNumberOfSixes(1));
        for (let i = 2; i < n; i++){
            const newval = (nvals[i-1] + nvals[i-2]) / 2;
            console.log(i, getNumberOfSixes(newval), newval);
            nvals[i] = newval;
        }

        //console.log(nvals);
        //console.log(n);
        return (nvals[n-1] + nvals[n-2]) / 2;
    }

    function getNumberOfSixes(number) {

        let decimals = getDecimals(number).toString().split("").slice(2);
        //console.log(decimals);
        let count = 0;
        for (let i = 0; i < decimals.length; i++) {
            if (decimals[i] === '6')
                count++;
            else
                break;
        }
        return count;
    }

    function getDecimals(number) {
        return number - Math.floor(number)
    }


}
