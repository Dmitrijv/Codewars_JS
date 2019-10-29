/*

Write a function that takes a hierarchical map of properties and converts it to a single, flattened map,
with the different levels separated by a forward slash ('/').

For example, given an input such as this:

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}

return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}

The passed in argument will always be an object, but it may be empty.
Make sure to correctly test for Arrays and nulls — they should be left as is in the result.
The only property types will be:

    true
    false
    Numbers
    Strings
    null
    Arrays
    Functions
    Nested Maps

Keys can be any string of characters, excluding the '/' character.

*/

const testObj = { 'a': { 'b': { 'c': 12, 'd': 'Hello World' }, 'e': [1,2,3] } };
const testObj2 = { a: { b: true, c: 14.356, d: null, e: { f: flattenMap }, g: [ 1, 2, 3 ] } };

console.log(flattenMap(testObj));
console.log(flattenMap(testObj2));

function flattenMap(map) {

    const flatMap = {};

    while (Object.keys(map).length > 0){
        const validItem = popFirstValidItem(map);
        flatMap[validItem['path']] = validItem['value'];
    }

    for (let key of Object.keys(flatMap)){
        if (flatMap[key] && typeof flatMap[key] === 'object' && Object.keys(flatMap[key]).length === 0) {
            delete flatMap[key];
        }
    }

    return flatMap;

    function popFirstValidItem(map, keyChain) {
        keyChain = keyChain || [];
        for (let key of Object.keys(map)){
            const value = map[key];
            keyChain.push(key);
            if (value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length > 0) {
                return popFirstValidItem(value, keyChain);
            } else {
                delete map[key];
                return {'path':keyChain.join('/'), 'value': value};
            }
        }
    }

}








