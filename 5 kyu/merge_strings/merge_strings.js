/*

At a job interview, you are challenged to write an algorithm to check if a given string, s,
can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.
The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

 */

function isMerge(s, part1, part2) {

    if (s === "" && part1 === "" && part2 === "") return true;
    if (s.length !== (part1.length + part2.length)) return false;
    if (part1.length === 0) return s === part2;
    if (part2.length === 0) return s === part1;

    let p1Index = 0;
    let p2Index = 0;

    for (let sIndex = 0; sIndex < s.length; sIndex++) {

        let sChar = s[sIndex];

        if (part1[p1Index] === sChar && part2[p2Index] === sChar){

            s = s.slice(sIndex);
            part1 = part1.slice(p1Index);
            part2 = part2.slice(p2Index);
            return isMerge(s, part1, part2) || isMerge(s, part1, part2);

        } else if (part1[p1Index] !== sChar && part2[p2Index] !== sChar){
            return false;
        } else if (part1[p1Index] === sChar){
            p1Index++;
        } else if (part2[p2Index] === sChar){
            p2Index++;
        }
    }

    return true;

}


/*

function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

 */