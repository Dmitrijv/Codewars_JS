

console.log(findUniq(([ 1, 1, 1, 2, 1, 1 ])));

function findUniq(arr) {

    const blacklist = {};
    let duplicate = null;

    for (let i = 0; i < arr.length; i++) {

        const value = arr[i];

        if (!blacklist[value])
            blacklist[value] = 1;
        else
            blacklist[value]++;

        if (blacklist[value] > 1)
            duplicate = value;

        if ((duplicate !== null) && (Object.keys(blacklist).length > 1))
            return Number(Object.keys(blacklist).find(key => blacklist[key] === 1));

    }

}
