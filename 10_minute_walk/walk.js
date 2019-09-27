
/*

You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones --
every time you press the button it sends you an array of one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one
minute to traverse one city block, so create a function that will return true if the walk the app gives you will
take you exactly ten minutes (you don't want to be early or late!) and will, of course,
return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


*/

const inputArray = ['n','s','n','s','n','s','n','s','n','s'];

console.log(isValidWalk(inputArray));


function isValidWalk(path) {

    // path must always take 10 minutes to traverse
    if( !(path.length === 10) ){
        return false;
    }

    // if given path takes us back to original position
    // then the number of opposing directions must cancel each other out
    return (count("n", path) === count("s", path)) && (count("w", path) === count("e", path));

    function count(element, array) {
        return array.reduce(function (sum, value) {
            if (value === element)
                return sum + 1;
            return sum;
        }, 0);
    }

}