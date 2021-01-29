/* 

The task is very simple: You are given a string s. It contains numbers from 1 to n(1<n<50), and the order is confusing.
You need to add a space between each of the two adjacent numbers to make them look clearer.

If there are multiple valid solutions, you only need to return one of them.
Example

For s="1234", the output should be "1 2 3 4".

For s="10987654321", the output should be "10 9 8 7 6 5 4 3 2 1".

For s="121110987654312",

or "1 2 11 10 9 8 7 6 5 4 3 12"
the output may be "12 11 10 9 8 7 6 5 4 3 1 2",


*/

// 121110987654312
// 1 2 1 1 10 9 8 7 6 5 4 3 1 2

//console.log(addSpaces("121110987654312").split(" "));
//console.log(addSpaces("121110987654312").split(" ").length);

const test = addSpaces("121110987654312").split(" ");
const testArr = test.sort((a, b) => a - b);

console.log(testArr);
console.log(testArr.join());

//"123456789101112"

function addSpaces(s) {
  //console.log(s);

  let output = [];

  for (let index = 0; index < s.length; index++) {
    const leftDigit = s[index];
    const rightDigit = s[index + 1];

    const twoDigitNumber = Number(leftDigit + rightDigit);
    const oneDigitNumber = Number(leftDigit);

    if (rightDigit === "0") {
      output.push(twoDigitNumber);
      index++;
    } else {
      if (isValidNumber(oneDigitNumber) === true) {
        output.push(oneDigitNumber);
      } else {
        output.push(twoDigitNumber);
        index++;
      }
    }
  }

  return output.join(" ");

  function isValidNumber(n) {
    return n >= 1 && n < 50;
  }
}
