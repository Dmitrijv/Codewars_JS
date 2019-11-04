

const goodUnitValues = [1, 2, 3, 3, 4, 10];
const evilUnitValues = [1, 2, 2, 2, 3, 5, 10];

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));

function goodVsEvil(good, evil){

    const goodForces = getFactionForce(good, goodUnitValues);
    const evilForces = getFactionForce(evil, evilUnitValues);

    if (goodForces > evilForces)
        return 'Battle Result: Good triumphs over Evil';
    else if (evilForces > goodForces)
        return 'Battle Result: Evil eradicates all trace of Good';
    else
        return 'Battle Result: No victor on this battle field';

    function getFactionForce(units, unitValues) {

        units = units.split(" ").map(x => Number(x));
        return units.reduce(function(accumulator, value, index) {
            return accumulator + (unitValues[index] * value);
        });

    }

}
