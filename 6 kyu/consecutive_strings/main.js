/*

You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note

consecutive strings : follow one after another without an interruption

*/

function longestConsec(strarr, k) {
  if (k <= 0) return "";

  let longestString = "";

  const stringsToJoin = k - 1;
  for (let i = 0; i < strarr.length - stringsToJoin; i++) {
    const joinedString = joinArrayStrings(i, stringsToJoin, strarr);
    if (joinedString) {
      longestString = joinedString.length > longestString.length ? joinedString : longestString;
    }
  }

  return longestString;

  function joinArrayStrings(startIndex, elementCount, array) {
    let returnString = array[startIndex];
    let pointer = startIndex;
    while (elementCount > 0) {
      pointer++;
      returnString = returnString + array[pointer];
      elementCount--;
    }
    return returnString;
  }
}
