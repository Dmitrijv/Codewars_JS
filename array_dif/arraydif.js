
/*
console.log(array_diff([1,2],[1]) === [2]);
console.log(array_diff([1,2,2,2,3],[2]) === [1,3]);
function array_diff(a, b) {
    return a.filter(value => !b.includes(value));
}
*/

const a = [ 1, 2, 2, 2, 3, 5, 5, 12, 1, 2, 4, 5, 1 ];
const b = [ 2, 12, 1, 5 , 3];
//console.log(array_diff_very_fast(a, b) ); // [3,4]

//console.log(binaryIncludes(a, 12));
console.log(array_diff_very_fast(a, b));

//array_diff( [1,2,2,2,3], [2] ); // [1,3]

function array_diff_very_fast(a, b){

    b = b.sort(function(a, b){return a-b});
    const blacklistHash = {};


    const ret2 = [];
    for (let i = 0; i < a.length; i++) {
        const value = a[i];
        const blacklist = (blacklistHash[value]) ? true : !binaryIncludes(b, value);
        if (blacklist)
            blacklistHash[value] = true;
        else
            ret2.push(value);
    }

    return ret2;

    /*
    const ret = a.filter(function(value) {
        const blacklist = (blacklistHash[value]) ? true : !binaryIncludes(b, value);
        if (blacklist)
            blacklistHash[value] = true;
        return blacklist;
    });
     */

    console.log(Object.keys(blacklistHash).length);

    console.log(ret.length);
    return ret;

}


function binaryIncludes(array, target){

    let startIndex = 0;
    let endIndex = array.length - 1;

    while(startIndex <= endIndex) {

        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if(array[middleIndex] === target)
            return true;
        if(target > array[middleIndex])
            startIndex = middleIndex + 1;
        else if (target < array[middleIndex])
            endIndex = middleIndex - 1;

    }
    return false;
}