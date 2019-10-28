/*

For this exercise you will create a global flatten method.
The method takes in any number of arguments and flattens them into a single array.
If any of the arguments passed in are an array then the individual objects within the array will
be flattened so that they exist at the same level as the other arguments. Any nested arrays,
no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

 */

//flatten(1, [2, 3], 4, 5, [6, [7]]); // returns [1, 2, 3, 4, 5, 6, 7]
console.log(flatten(1, [2, 3], 4, 5, [6, [7]])); // returns [1, 2, 3, 4, 5, 6, 7]

//console.log([1].concat([2,3]));

//flatten(1, [2, 3]);

//flatten([2,3]);
//console.log(flatten([2,3, [1]]));

function flatten() {

    //console.log(args);
    const args = Array.prototype.slice.call(arguments);

    return args.reduce((items, argument) => {

        if (Array.isArray(argument) === true){
            return items.concat(flattenArray(argument))
        } else {
            items.push(argument);
            return items;
        }

        function flattenArray(array) {
            return array.reduce((items, argument) => {
                if (Array.isArray(argument) === true){
                    return items.concat(flattenArray(argument))
                } else {
                    items.push(argument);
                    return items;
                }
            }, []);

        }

    }, []);

}