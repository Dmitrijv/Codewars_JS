/*

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/

sortArray([5, 3, 2, 8, 1, 4]); // [1, 3, 2, 8, 5, 4]

function sortArray(array) {

    const odd = array.filter(value => value%2 !== 0);
    odd.sort(function(a, b){return a-b});

    return array.map(value => value%2 !== 0 ? odd.shift() : value);

    /*
    if (array.length === 0) return array;

    const odd = array.filter(value => value%2 !== 0);
    odd.sort(function(a, b){return a-b});

    return array.map(function(value) {
        if (value%2 !== 0)
            return odd.shift();
        return value;
    });
     */

}