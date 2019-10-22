/*

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8.
It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle
when there are n + 1 squares disposed in the same manner as in the drawing

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5) // 80
perimeter(7) // 216

 */

//perimeter(5); // 80

console.log(perimeter(1)); // 80

function perimeter(n) {

    const memo = {"0":0, "1":1};
    fibonacci(n, memo);

    const arr = [];
    for (let i = 0; i <= n; i++)
        arr.push(Number(memo[i]));

    return 4*(arr.reduce((sum, val) => sum + val));

    function fibonacci(num, memo) {
        if (memo[num]) return memo[num];
        if (num <= 1) return memo[num] = 1;
        return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    }

}