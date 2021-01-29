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
function addSpaces(s) {
  let output = [];
  let blacklist = {};

  for (let index = 0; index < s.length; index++) {
    const leftDigit = s[index];
    const rightDigit = s[index + 1];

    //console.log(leftDigit)
    //console.log(rightDigit)

    const oneDigitNumber = Number(leftDigit);
    const twoDigitNumber = Number(leftDigit + rightDigit);

    //console.log(oneDigitNumber)
    //console.log(twoDigitNumber)

    if (rightDigit === "0") {
      output.push(twoDigitNumber);
      blacklist[twoDigitNumber] = true;
      index++;
    } else {
      if (isValidNumber(oneDigitNumber) === true) {
        output.push(oneDigitNumber);
        blacklist[oneDigitNumber] = true;
      } else if (isValidNumber(twoDigitNumber) === true) {
        output.push(twoDigitNumber);
        blacklist[twoDigitNumber] = true;
        index++;
      } else {
        console.log("wtf moment");
      }
    }
  }

  //console.log(blacklist)
  return output.join(" ");

  function isValidNumber(n) {
    const isInRange = n >= 1 && n < 50;
    const isBlacklisted = blacklist[n] || false;
    return isInRange && !isBlacklisted;
  }
}
