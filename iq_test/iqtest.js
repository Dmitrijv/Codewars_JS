

console.log(iqTest("1 2 1 1"));
console.log(iqTest("2 4 7 8 10"));

function iqTest(numbers){

    let types = {
        "odd": 0,
        "even": 0
    };

    numbers = numbers.split(" ").map((val) => Number(val));

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0)
            types["even"]++;
        else
            types["odd"]++;
    }

    if (types["even"] > types["odd"])
        return numbers.findIndex((value) => (value%2!==0))+1;

    return numbers.findIndex((value) => (value%2===0))+1;
}