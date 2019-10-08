
/*

console.log(array_diff([1,2],[1]) === [2]);
console.log(array_diff([1,2,2,2,3],[2]) === [1,3]);
function array_diff(a, b) {
    return a.filter(value => !b.includes(value));
}

*/

const a = [ 6, 2, 12, 5, 3, 5, 5, 12, 1, 6];
const b = [ 5, 6];
console.log(array_diff_very_fast(a, b) ); // [3,4]

//console.log(binaryIncludes(a, 12));
console.log(array_diff_very_fast(a, b));

//array_diff( [1,2,2,2,3], [2] ); // [1,3]

function array_diff_very_fast(a, b){

    b = b.sort(function(a, b){return a-b});
    //console.log(b.length)

    const blacklist = {};
    for (let i = 0; i <= 25; i++) {
        if (binaryIncludes(b, i))
            blacklist[i] = true;
    }

    const clean = {};
    const debugHash = {};
    let ret = a.filter(function(value) {
        if (clean[value] > 0)
            clean[value] = clean[value] + 1;
        else
            clean[value] = 1;
        if (!blacklist[value]){
            if (debugHash[value] > 0)
                debugHash[value] = debugHash[value] + 1;
            else
                debugHash[value] = 1;
            return true;
        }
        return false;
    });

    //console.log(clean);
    //console.log(blacklist);
    //console.log(debugHash);

    let bi = 0;
    for (let ai = 0; ai < a.length; ai++) {

        const bVal = ret[bi];
        if (blacklist[bVal]){
            bi++;
            continue;
        }

        const aVal = a[ai];
        if (aVal !== bVal){
            console.log(aVal, bVal);
            break;
        }

    }


    return ret;



    /*
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

    const ret = a.filter(function(value) {
        const blacklist = (blacklistHash[value]) ? true : !binaryIncludes(b, value);
        if (blacklist)
            blacklistHash[value] = true;
        return blacklist;
    });

    //console.log(Object.keys(blacklistHash).length);
    //console.log(ret.length);
    //return ret;

     */


}







function array_diff_very_fast2(a, b){

    b = b.sort(function(a, b){return a-b});
    //console.log(b.length)

    const blacklist = {};
    for (let i = 0; i <= 25; i++) {
        if (binaryIncludes(b, i))
            blacklist[i] = true;
    }

    /*
    const ret2 = [];
    for (let i = 0; i < a.length; i++) {
        const value = a[i];
        if (!blacklist[value])
          ret2.push(value);
    }
    //console.log(ret2.length)
    //console.log(blacklist)
    console.log(Object.keys(blacklist).length)

    return ret2;
    */

    const ret = a.filter(function(value) {
        return !blacklist[value];
    });

    /*
    let ai = 0;
    let reti = 0;
    while ( ai < a.length ) {

          const aVal = a[ai];
        if (blacklist[aVal]){
              ai++
            continue;
        } else {

        const retVal = ret[reti];
          if (aVal !== retVal){
              console.log("inconsistency")
              console.log(ai, aVal, reti, retVal);
              break;
          }
          reti++;
        }
      ai++
    }

    console.log(reti);
    console.log(ai);
    console.log("clean");
    */

    console.log(typeof ret)
    console.log(a.length)
    console.log(ret.length)
    return ret;

    /*
    */

}





function binaryIncludes(array, value) {

    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== value && start < end) {
        if (value < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }

    return (array[middle] === value);
}