
const objA = {
    a: {
        b: 'b',
        c: 'c',
        test: {
            a: 'a'
        }
    }
};

const objB = {
    a: {
        b: 'b',
        c: 'c',
        test: {
            a: 'a'
        }
    }
};

const objC = {
    a: {
        b: 'b',
        c: 'c',
        test: {
            a: 'c',
            //s: 's'
        }
    }
};


const cityA = {
    name: "Montpelier",
    population: 7484,
    citizens: {
        mayor: 'Bernie Sanders',
        sherrif: 'John Doe',
        test: {
            a: 'Linda Anderson',
            b: 'Mark Jakobs',
            d: {},
            c: 'Mark Twain',
        }
    },
};

const cityC = {
    name: "Montpelier",
    population: 7484,
    citizens: {
        mayor: 'Bernie Sanders',
        sherrif: 'John Doe',
        test: {
            a: 'Linda Anderson',
            b: 'Mark Jakobs',
            c: 'Mark Twain',
            d: {},
        }
    },
};

const cityE = {
    name: "Montpelier",
    population: 3,
    citizens: {
        person1: "Convert",
    },
};

const cityF = {
    name: "Montpelier",
    population: 3,
    area: 2353,
    citizens: {
        person1: "Convert",
    },
};

console.log('Standard tests: ');
console.log(deepCompare(objA, objB)); // true
console.log(deepCompare(objA, objC)); // false

console.log('Custom tests: ');
console.log(deepCompare(cityE, cityF)); // false
console.log(deepCompare(cityA, cityC)); // true


function deepCompare(o1, o2) {

    //console.log(o1)
    //console.log(o2)

    if ((o1 === null) && (o2 === null) || (typeof o1 === 'undefined') && (o2 === 'undefined') ){
        return true;
    }

    if ((typeof o1 === 'undefined') || (o2 === 'undefined')){
        return true;
    }

    if ((o1 === null) || (o2 === null)){
        return false;
    }

    const aLength = Object.keys(o1).length;
    const bLength = Object.keys(o2).length;

    // number of keys is not the same
    if (aLength !== bLength ){
        return false;
        // A and B are two empty objects
    } else if (aLength === 0 && bLength === 0){
        return true;
    }

    let valuesAreEqual;
    for (let key of Object.keys(o1)) {

        // check if this key is present in both objects
        if (Object.keys(o2).includes(key) !== true){
            return false;
        }

        // if both values are objects validate them recursively
        if ((typeof o1[key] === 'object') && (typeof o2[key] === 'object')) {
            valuesAreEqual = deepCompare(o1[key], o2[key]);
            // check if values stored at this key are the same
        } else {
            valuesAreEqual = Object.is(o1[key], o2[key]);
        }

        // if an incosistency is found return early
        if (valuesAreEqual === false){
            return false;
        }

    }

    return valuesAreEqual;

}
