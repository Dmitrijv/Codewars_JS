/*

Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

1       *
2      ***
3     *****
4    *******
5   *********

stars = 1 + 2*(row-1)

Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.

 */

console.log(christmasTree(5));

function christmasTree(height) {

    let string = "";
    for (let level = 1; level <= height; level++) {
        let row = "*".repeat(starsAtLevel(level));
        while (row.length < starsAtLevel(height))
            row = " "+row+" ";
        if (level === 1)
            string = string + row;
        else
            string = string + "\n" + row;
    }

    return string;

    function starsAtLevel(level) {
        return 1 + (2*(level-1));
    }
}